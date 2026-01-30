import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { products, getProductById, getPrimaryImage, type Product } from "@/data/products";

export interface CartItem {
  productId: number;
  quantity: number;
  name: string;
  price: number;
  image: string;
  /** Selected size when product has size options (e.g. Shower Curb). */
  size?: string;
}

const CART_STORAGE_KEY = "streamline-cart";

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item) =>
        typeof item.productId === "number" &&
        typeof item.quantity === "number" &&
        item.quantity > 0
    );
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

function snapshot(product: Product): Pick<CartItem, "name" | "price" | "image"> {
  return { name: product.name, price: product.price, image: getPrimaryImage(product) };
}

interface CartContextValue {
  items: CartItem[];
  totalCount: number;
  addItem: (productId: number, quantity?: number, options?: { size?: string }) => void;
  removeItem: (productId: number, size?: string) => void;
  updateQuantity: (productId: number, quantity: number, size?: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(loadCart);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const addItem = useCallback((productId: number, quantity = 1, options?: { size?: string }) => {
    const product = getProductById(String(productId));
    if (!product) return;
    const snap = snapshot(product);
    const size = options?.size;
    setItems((prev) => {
      const existing = prev.find(
        (i) => i.productId === productId && (i.size ?? "") === (size ?? "")
      );
      if (existing) {
        return prev.map((i) =>
          i.productId === productId && (i.size ?? "") === (size ?? "")
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      }
      return [...prev, { productId, quantity, ...snap, ...(size != null ? { size } : {}) }];
    });
  }, []);

  const removeItem = useCallback((productId: number, size?: string) => {
    setItems((prev) =>
      prev.filter(
        (i) =>
          i.productId !== productId ||
          (size != null ? i.size !== size : i.size != null)
      )
    );
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number, size?: string) => {
    if (quantity < 1) {
      setItems((prev) =>
        prev.filter(
          (i) =>
            i.productId !== productId ||
            (size != null ? i.size !== size : i.size != null)
        )
      );
      return;
    }
    setItems((prev) =>
      prev.map((i) =>
        i.productId === productId && (size == null ? i.size == null : i.size === size)
          ? { ...i, quantity }
          : i
      )
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalCount = useMemo(
    () => items.reduce((sum, i) => sum + i.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      totalCount,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
    }),
    [items, totalCount, addItem, removeItem, updateQuantity, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Minus, Plus, Trash2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_PUBLIC_KEY,
} from "@/lib/config";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CartDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

type Fulfillment = "pickup" | "delivery";

export function CartDrawer({ open, onOpenChange }: CartDrawerProps) {
  const { items, updateQuantity, removeItem, clearCart } = useCart();
  const [showForm, setShowForm] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [fulfillment, setFulfillment] = useState<Fulfillment>("pickup");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const subtotal = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  const deliveryMethod = fulfillment === "delivery" ? "Delivery" : "Pick up";

  const handleOpenChange = (next: boolean) => {
    if (!next) setShowForm(false);
    onOpenChange(next);
  };

  const handleSendOrder = async () => {
    if (!name?.trim() || !phone?.trim()) {
      alert("Please enter your name and phone number.");
      return;
    }

    setIsSending(true);

    const orderSummary = items
      .map(
        (item) =>
          `- ${item.name} x${item.quantity} (Est. $${(item.price * item.quantity).toFixed(2)})`
      )
      .join("\n");

    const templateParams = {
      customer_name: name.trim(),
      phone_number: phone.trim(),
      order_type: deliveryMethod,
      address: deliveryMethod === "Delivery" ? address.trim() || "N/A" : "N/A",
      order_summary: orderSummary,
      total_price: `Est. $${subtotal.toFixed(2)}`,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      alert("Order sent successfully! We will call you shortly.");
      clearCart();
      handleOpenChange(false);
    } catch (error) {
      console.error("Failed to send order:", error);
      alert(
        "There was an error sending your order. Please try again or call us directly."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Sheet open={open} onOpenChange={handleOpenChange}>
      <SheetContent side="right" className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>
            {showForm ? "Request a call" : "Your cart"}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 && !showForm ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-8">
            <p className="text-slate-600 mb-4">Your cart is empty.</p>
            <p className="text-sm text-slate-500">
              Add products from the shop, then come back here to request a call. We’ll confirm your order and arrange pickup or delivery.
            </p>
          </div>
        ) : showForm ? (
          <div className="flex-1 flex flex-col min-h-0">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-6 py-4">
                <div>
                  <Label className="text-base font-medium">Delivery or pick up?</Label>
                  <RadioGroup
                    value={fulfillment}
                    onValueChange={(v) => setFulfillment(v as Fulfillment)}
                    className="mt-2 flex gap-4"
                  >
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="pickup" id="pickup" />
                      <Label htmlFor="pickup" className="font-normal cursor-pointer">
                        Pick up
                      </Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <RadioGroupItem value="delivery" id="delivery" />
                      <Label htmlFor="delivery" className="font-normal cursor-pointer">
                        Delivery
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <Label htmlFor="order-name">Name *</Label>
                  <Input
                    id="order-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="order-phone">Phone *</Label>
                  <Input
                    id="order-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(503) 555-0123"
                    className="mt-1"
                  />
                </div>
                {fulfillment === "delivery" && (
                  <div>
                    <Label htmlFor="order-address">Delivery address</Label>
                    <Input
                      id="order-address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Street, city, ZIP"
                      className="mt-1"
                    />
                  </div>
                )}

                <div className="border-t pt-4">
                  <p className="text-sm font-medium text-slate-700 mb-2">Order summary</p>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {items.map((i) => (
                      <li key={`${i.productId}-${i.size ?? ""}`}>
                        {i.name}
                        {i.size ? ` (${i.size})` : ""} × {i.quantity} — Est. ${(i.price * i.quantity).toFixed(2)}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-2 font-semibold text-slate-800">
                    Total (est.): ${subtotal.toFixed(2)}
                  </p>
                </div>
              </div>
            </ScrollArea>
            <div className="pt-4 border-t space-y-2">
              <p className="text-xs text-slate-500">
                Submit your order and we’ll receive it by email and call you to confirm and arrange pickup or delivery.
              </p>
              <Button
                variant="default"
                className="w-full gap-2"
                onClick={handleSendOrder}
                disabled={!name.trim() || !phone.trim() || isSending}
              >
                <MessageCircle className="h-4 w-4" />
                {isSending ? "Sending..." : "Send order"}
              </Button>
              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setShowForm(false)}
              >
                Back to cart
              </Button>
            </div>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6">
              <ul className="space-y-4 py-4">
                {items.map((item) => (
                  <li
                    key={`${item.productId}-${item.size ?? ""}`}
                    className="flex gap-4 border-b border-slate-100 pb-4 last:border-0"
                  >
                    <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-slate-100">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-800 truncate">{item.name}</p>
                      {item.size && (
                        <p className="text-sm text-slate-500">Size: {item.size}</p>
                      )}
                      <p className="text-slate-600 font-semibold">
                        Est. ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <div className="flex items-center border border-slate-200 rounded-md overflow-hidden">
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() =>
                              updateQuantity(
                                item.productId,
                                Math.max(1, item.quantity - 1),
                                item.size
                              )
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 rounded-none"
                            onClick={() =>
                              updateQuantity(item.productId, item.quantity + 1, item.size)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 text-slate-500 hover:text-destructive"
                          onClick={() => removeItem(item.productId, item.size)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollArea>
            <div className="border-t pt-4 mt-4 space-y-3">
              <p className="flex justify-between text-lg font-semibold text-slate-800">
                <span>Subtotal (est.)</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="text-sm text-slate-500">
                All prices are estimates. No payment online. We’ll call you to confirm your order and arrange pickup or delivery.
              </p>
              <Button
                variant="default"
                className="w-full gap-2"
                onClick={() => setShowForm(true)}
              >
                <MessageCircle className="h-4 w-4" />
                Request a call
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

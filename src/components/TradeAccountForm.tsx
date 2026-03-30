import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_TRADE_TEMPLATE_ID,
} from "@/lib/config";
import { toast } from "@/hooks/use-toast";

const tradeFormSchema = z.object({
  businessName: z.string().min(1, "Business name is required"),
  contactName: z.string().min(1, "Contact name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().min(7, "Phone is required"),
  ccbNumber: z.string().min(1, "CCB / contractor license number is required"),
  monthlyVolume: z.string().min(1, "Estimated monthly volume is required"),
  productInterest: z.string().optional(),
});

export type TradeAccountFormValues = z.infer<typeof tradeFormSchema>;

interface TradeAccountFormProps {
  /** Prefilled product line (e.g. from ?product= query) */
  defaultProductInterest?: string;
  idPrefix?: string;
}

function buildMailtoBody(values: TradeAccountFormValues): string {
  const lines = [
    `Business: ${values.businessName}`,
    `Contact: ${values.contactName}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone}`,
    `CCB: ${values.ccbNumber}`,
    `Est. monthly volume: ${values.monthlyVolume}`,
  ];
  if (values.productInterest?.trim()) {
    lines.push(`Product interest: ${values.productInterest.trim()}`);
  }
  return encodeURIComponent(lines.join("\n"));
}

export function TradeAccountForm({
  defaultProductInterest = "",
  idPrefix = "trade",
}: TradeAccountFormProps) {
  const [isSending, setIsSending] = useState(false);
  const templateId = EMAILJS_TRADE_TEMPLATE_ID || EMAILJS_TEMPLATE_ID;

  const form = useForm<TradeAccountFormValues>({
    resolver: zodResolver(tradeFormSchema),
    defaultValues: {
      businessName: "",
      contactName: "",
      email: "",
      phone: "",
      ccbNumber: "",
      monthlyVolume: "",
      productInterest: defaultProductInterest,
    },
  });

  const onSubmit = async (values: TradeAccountFormValues) => {
    setIsSending(true);
    const templateParams: Record<string, string> = {
      business_name: values.businessName.trim(),
      contact_name: values.contactName.trim(),
      email: values.email.trim(),
      phone: values.phone.trim(),
      ccb_number: values.ccbNumber.trim(),
      monthly_volume: values.monthlyVolume.trim(),
      product_interest: values.productInterest?.trim() ?? "",
      message: [
        `Business: ${values.businessName}`,
        `Contact: ${values.contactName}`,
        `Email: ${values.email}`,
        `Phone: ${values.phone}`,
        `CCB: ${values.ccbNumber}`,
        `Est. monthly volume: ${values.monthlyVolume}`,
        values.productInterest?.trim()
          ? `Product interest: ${values.productInterest.trim()}`
          : "",
      ]
        .filter(Boolean)
        .join("\n"),
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, templateId, templateParams, EMAILJS_PUBLIC_KEY);
      toast({
        title: "Application sent",
        description: "We’ll follow up shortly with trade pricing and next steps.",
      });
      form.reset({
        businessName: "",
        contactName: "",
        email: "",
        phone: "",
        ccbNumber: "",
        monthlyVolume: "",
        productInterest: defaultProductInterest,
      });
    } catch {
      toast({
        title: "Could not send online",
        description: "Opening your email client with the details prefilled.",
        variant: "destructive",
      });
      const subject = encodeURIComponent("Trade account application — Streamline Essentials");
      const body = buildMailtoBody(values);
      window.location.href = `mailto:sales@streamlineessentials.net?subject=${subject}&body=${body}`;
    } finally {
      setIsSending(false);
    }
  };

  const pid = (name: string) => `${idPrefix}-${name}`;

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 max-w-xl">
      {defaultProductInterest ? <input type="hidden" {...form.register("productInterest")} /> : null}
      <div className="space-y-2">
        <Label htmlFor={pid("business")}>Business name *</Label>
        <Input id={pid("business")} {...form.register("businessName")} autoComplete="organization" />
        {form.formState.errors.businessName && (
          <p className="text-sm text-destructive">{form.formState.errors.businessName.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor={pid("contact")}>Contact name *</Label>
        <Input id={pid("contact")} {...form.register("contactName")} autoComplete="name" />
        {form.formState.errors.contactName && (
          <p className="text-sm text-destructive">{form.formState.errors.contactName.message}</p>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor={pid("email")}>Email *</Label>
          <Input id={pid("email")} type="email" {...form.register("email")} autoComplete="email" />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor={pid("phone")}>Phone *</Label>
          <Input id={pid("phone")} type="tel" {...form.register("phone")} autoComplete="tel" />
          {form.formState.errors.phone && (
            <p className="text-sm text-destructive">{form.formState.errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor={pid("ccb")}>Contractor license (CCB) number *</Label>
        <Input id={pid("ccb")} {...form.register("ccbNumber")} />
        {form.formState.errors.ccbNumber && (
          <p className="text-sm text-destructive">{form.formState.errors.ccbNumber.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor={pid("volume")}>Estimated monthly volume *</Label>
        <Textarea
          id={pid("volume")}
          {...form.register("monthlyVolume")}
          placeholder="e.g. 40 sheets Essenti Board, 2–3 shower systems / month"
          rows={3}
        />
        {form.formState.errors.monthlyVolume && (
          <p className="text-sm text-destructive">{form.formState.errors.monthlyVolume.message}</p>
        )}
      </div>

      {defaultProductInterest ? (
        <p className="text-sm text-slate-600">
          <span className="font-medium text-slate-800">Product interest:</span> {defaultProductInterest}
        </p>
      ) : (
        <div className="space-y-2">
          <Label htmlFor={pid("product")}>Product interest (optional)</Label>
          <Input id={pid("product")} {...form.register("productInterest")} placeholder="SKU or product name" />
        </div>
      )}

      <Button type="submit" variant="hero" size="lg" className="w-full sm:w-auto" disabled={isSending}>
        {isSending ? "Sending…" : "Submit application"}
      </Button>
    </form>
  );
}

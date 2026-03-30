/** Business phone for order requests (SMS). No spaces or dashes for sms: link. */
export const BUSINESS_PHONE_SMS = "15037668120";

export const EMAILJS_SERVICE_ID = "service_48mniyf";
/** Legacy cart template; trade applications use EMAILJS_TRADE_TEMPLATE_ID when set. */
export const EMAILJS_TEMPLATE_ID = "template_z3cygi1";
export const EMAILJS_PUBLIC_KEY = "15wQ7vQbIJHRc9qgT";

/** Optional: EmailJS template ID for trade account applications. Falls back to EMAILJS_TEMPLATE_ID if unset. */
export const EMAILJS_TRADE_TEMPLATE_ID =
  import.meta.env.VITE_EMAILJS_TRADE_TEMPLATE_ID ?? "";

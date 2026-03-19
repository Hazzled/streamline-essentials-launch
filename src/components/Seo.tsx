import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description: string;
  /**
   * Canonical path (HashRouter safe). Example: "/shop" or `/shop/${id}`
   * We will build a canonical URL using the configured homepage when possible.
   */
  canonicalPath?: string;
  imagePath?: string;
  noIndex?: boolean;
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
};

export function getSiteBaseUrl(): string | null {
  // Use an explicit env var if provided (best for custom domains).
  const envUrl = import.meta.env.VITE_SITE_URL as string | undefined;
  if (envUrl) return envUrl.replace(/\/+$/, "");

  // Fallback: include Vite BASE_URL (GitHub Pages friendly).
  if (typeof window !== "undefined") {
    const base = import.meta.env.BASE_URL?.replace(/\/+$/, "") ?? "";
    return `${window.location.origin}${base}`;
  }
  return null;
}

export function toAbsoluteUrl(pathOrUrl: string, siteBaseUrl: string | null): string | undefined {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  if (!siteBaseUrl) return undefined;
  return `${siteBaseUrl}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}

export function Seo({
  title,
  description,
  canonicalPath,
  imagePath = "/streamline-essentials-logo.png",
  noIndex,
  jsonLd,
}: SeoProps) {
  const siteBaseUrl = getSiteBaseUrl();
  const canonicalUrl =
    canonicalPath && siteBaseUrl
      ? `${siteBaseUrl}${canonicalPath.startsWith("/") ? "" : "/"}${canonicalPath}`
      : undefined;
  const imageUrl = toAbsoluteUrl(imagePath, siteBaseUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {canonicalUrl ? <link rel="canonical" href={canonicalUrl} /> : null}
      {noIndex ? <meta name="robots" content="noindex,nofollow" /> : null}

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {canonicalUrl ? <meta property="og:url" content={canonicalUrl} /> : null}
      {imageUrl ? <meta property="og:image" content={imageUrl} /> : null}

      <meta name="twitter:card" content="summary_large_image" />
      {imageUrl ? <meta name="twitter:image" content={imageUrl} /> : null}

      {jsonLd ? (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      ) : null}
    </Helmet>
  );
}


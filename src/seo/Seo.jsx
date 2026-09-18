import React from "react";
import { Helmet } from "react-helmet-async";
import { SITE_URL, ROUTES, DEFAULT_OG_IMAGE } from "./siteConfig";

/**
 * Per-route <head> tags.
 *
 * Usage: <Seo route="project" /> at the top of a page component.
 *
 * The same values are baked into the static HTML at build time by
 * scripts/prerender.js, so crawlers that don't run JavaScript still see them.
 * This component keeps the tags correct during client-side navigation.
 */
const Seo = ({ route }) => {
  const meta = ROUTES[route];
  if (!meta) return null;

  const url = SITE_URL + meta.path;
  const image = SITE_URL + DEFAULT_OG_IMAGE;

  return (
    <Helmet prioritizeSeoTags>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <meta name="keywords" content={meta.keywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Lao Thomorn | Portfolio" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;

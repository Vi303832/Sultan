import React from 'react';
import { Helmet } from 'react-helmet-async';

function SEOHelmet({ title, description, keywords, ogImage, ogUrl, canonical }) {
    // Default values
    const siteTitle = "Sultan Düğün Salonu Bursa | Sultan Düğün Salonu";
    const siteDescription = "Sultan Düğün Salonu Bursa'da, düğün, nişan, kına ve sünnet organizasyonları için en iyi fiyatlarla, şık ve modern salonlar, profesyonel hizmet ve unutulmaz anlar sunar. Bursa'nın en çok tercih edilen düğün salonu!";
    const siteKeywords = "sultan düğün salonu, sultan düğün salonu bursa, düğün salonu bursa, bursa düğün salonu, sultan düğün salonları, düğün organizasyonu, bursa düğün, bursa düğün salonları, en iyi düğün salonu, uygun fiyat düğün salonu, lüks düğün salonu, bursa sultan düğün salonu";

    // Convert image path to absolute URL if needed
    let ogImageUrl = ogImage;
    if (ogImage && typeof ogImage === 'string' && !ogImage.startsWith('http')) {
        // This is a workaround since we don't know the actual domain yet
        // In a production environment, you'd use your actual domains
        ogImageUrl = `https://sultandüğünsalonu.com${ogImage.startsWith('/') ? '' : '/'}${ogImage}`;
    }

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
            <meta name="title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta name="description" content={description || siteDescription} />
            <meta name="keywords" content={keywords ? `${keywords}, ${siteKeywords}` : siteKeywords} />

            {/* Canonical Link */}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content={ogUrl || window.location.href} />
            <meta property="og:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="og:description" content={description || siteDescription} />
            {ogImageUrl && <meta property="og:image" content={ogImageUrl} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={ogUrl || window.location.href} />
            <meta property="twitter:title" content={title ? `${title} | ${siteTitle}` : siteTitle} />
            <meta property="twitter:description" content={description || siteDescription} />
            {ogImageUrl && <meta property="twitter:image" content={ogImageUrl} />}
        </Helmet>
    );
}

export default SEOHelmet; 
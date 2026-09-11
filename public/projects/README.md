# Add real project evidence

Only publish original, shareable project assets. Do not place internal Bosch documents, confidential dimensions, customer information, proprietary procedures, or test data here.

1. Place each project's images in a folder matching its existing slug, such as `public/projects/smart-delivery-box/`.
2. Export readable WebP or AVIF images. Keep units, scales, and axis labels legible; include load/restraint annotations on FEA plots.
3. Add a `media` array to that project in `content/site.ts`:

```ts
media: [{
  src: "/projects/smart-delivery-box/enclosure.webp",
  alt: "Describe the actual enclosure, visible parts, and relevant engineering detail",
  label: "Replace with the actual figure title and my contribution"
}],
```

Use a root-relative source without the GitHub repository prefix; the components apply the base path. The first supplied image is used in the project feature. The gallery renders real images only and supports buttons, image selection, and touch swipes without autoplay.

No images: the feature uses a compact engineering sheet. The detailed case study uses requirements/test-scope information and an evidence checklist instead of a large empty carousel.

For each asset add meaningful context in the case study: purpose, relevant requirement, what Quan owned, method, units, result, and implication for the next revision. Replace evidence-needed notes only when the missing information is supplied.

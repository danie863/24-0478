# RoboMart (HTML + CSS)

A clean, responsive starter e‑commerce site for selling robots using only HTML and CSS (no frameworks required).

## Structure

- `index.html` — Landing page with hero and best sellers
- `products.html` — Product listing grid
- `product.html` — Product detail template
- `contact.html` — Contact form (demo)
- `css/styles.css` — Shared styles
- `assets/placeholder.svg` — Local placeholder image

## How to use

1. Open `index.html` directly in your browser. No build step needed.
2. Replace `assets/placeholder.svg` with real product images (or add new images and update `src`).
3. Update product names, descriptions, and prices in `products.html` and `product.html`.
4. Update brand name in the header (look for the `brand` link).
5. Colors and spacing are defined in `css/styles.css` under `:root` variables.

## Notes

- This is a static starter. Cart/checkout requires JavaScript or a service (e.g., Netlify Forms, Stripe Checkout, Snipcart). I can add one if you want.
- The contact form is a demo only and prevents submission by default.

## Next steps (optional)

- Add a real cart and checkout
- Add categories and search
- Add multiple product detail pages
- Connect to a CMS or JSON data source

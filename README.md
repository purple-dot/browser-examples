# Browser examples

This repository shows how to use [@purple-dot/browser](https://github.com/purple-dot/browser) to build a headless pre-order integration with [Purple Dot](https://purpledotprice.com).

## Points of interest

- `main.tsx`: entrypoint where Purple Dot is configured.

- `AddToCardButton.tsx`: uses the availability API to determine if an item is on pre-order or out of stock.

- `PreOrderButton.tsx`: adds a pre-order item to the cart and then shows the checkout modal.

- `PreOrderExpressButton.tsx`: simultaneously adds an item to the cart and shows the checkout modal.

## Running the demo

```
pnpm install
pnpm dev
```

Navigate to http://localhost:5173 to view the demo.

## Further reading

Please see the [@purple-dot/browser package](https://github.com/purple-dot/browser) and [related documentation](https://docs.getpurpledot.com/docs/platform-integration-with-shopify/integrate-purple-dot-with-your-storefront) to learn more.

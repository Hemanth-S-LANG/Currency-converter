# Currency Converter

> A lightweight, responsive currency conversion tool built with vanilla web technologies.

Currency Converter lets users enter an amount, choose from a broad list of currencies, and retrieve a live exchange-rate calculation from ExchangeRate-API. Country flags update alongside the selected currency to make the interface quick to scan and easy to use.

## Features

- Convert an entered amount using current exchange-rate data.
- Select from a large collection of currency codes.
- Start with USD as the source currency and INR as the target currency.
- Update country flags automatically when a currency changes.
- Validate empty or values below `1` by falling back to an amount of `1`.
- Present the calculated result in a simple, readable message.
- Use a responsive layout with a themed background and compact converter panel.
- Run directly in a browser without a build step or package installation.

## Tech Stack

- **HTML5** - semantic page structure and form controls
- **CSS3** - layout, responsive styling, background imagery, and component styling
- **JavaScript (ES6+)** - DOM updates, event handling, validation, and asynchronous API requests
- **ExchangeRate-API** - live currency conversion rates
- **FlagsAPI** - country flag images for selected currencies
- **Font Awesome 6.5.1** - swap-direction icon

## Getting Started

### Prerequisites

You only need a modern web browser and an active internet connection. The internet connection is required for exchange-rate and flag requests.

### Run locally

1. Clone or download this repository.
2. Open `index6.html` in a modern browser.
3. Enter an amount, select the source and target currencies, and click **Get Exchange Rate**.

For a smoother local-development experience, serve the folder with any static web server and open the provided local URL.

## How It Works

1. The currency selectors are populated from the currency-to-country mapping in `codes.js`.
2. When a selection changes, `script5.js` requests the matching flag from FlagsAPI.
3. Clicking **Get Exchange Rate** requests the latest USD-based rates from ExchangeRate-API.
4. The selected target currency's rate is applied to the entered amount and displayed in the result area.

## Project Structure

```text
.
├── index6.html   # Application markup and external resource links
├── index5.css    # Layout and visual styles
├── script5.js   # Currency selection, API calls, and UI behavior
├── codes.js     # Currency code to country code mapping
└── image copy.png # Background image used by the interface
```

## API Configuration

The exchange-rate endpoint is defined near the top of `script5.js`:

```js
const BASE_URL = "https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD";
```

Replace `YOUR_API_KEY` with a valid ExchangeRate-API key before deploying. API keys embedded in client-side JavaScript are visible to users, so production applications should place authenticated API requests behind a server-side proxy.

## Current Limitations

- Rates are requested from a USD base, while the selected source currency is currently displayed but is not used to change the API base URL.
- Exchange-rate and flag requests require network access.
- The current interface does not show a dedicated loading or API-error state.

## License

No license has been specified for this project yet.
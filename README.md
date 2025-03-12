# Brotea QR Code Generator

This project generates a QR code for Brotea's Linktree URL: https://linktr.ee/brotea

Two QR code versions are available with custom brand colors:

1. Original:
   - Dark green (#022922) for the QR code dots
   - Light green/yellow (#E6FFA9) for the background

2. Inverted:
   - Light green/yellow (#E6FFA9) for the QR code dots
   - Dark green (#022922) for the background

## Files

- `generate-qr.js`: Node.js script that generates the original QR code
- `generate-inverted-qr.js`: Node.js script that generates the inverted QR code
- `brotea-qr.png`: The original QR code image
- `brotea-qr-inverted.png`: The inverted QR code image
- `index.html`: A simple webpage to display the original QR code
- `compare.html`: A webpage to compare both QR code versions side by side

## How to Use

1. View both QR code versions side by side by opening `compare.html` in a web browser
2. View only the original QR code by opening `index.html` in a web browser
3. Scan either QR code with a smartphone camera to visit Brotea's Linktree
4. Download either QR code image for printing or sharing

## Modifying the QR Code

If you need to change the URL or QR code settings:

1. Edit the `url` variable in `generate-qr.js`
2. Modify the QR code options in the `QRCode.toFile()` function if needed
3. Run the script again with `node generate-qr.js`

## Requirements

- Node.js
- qrcode npm package

## Installation

```bash
npm install
```

## Regenerating the QR Codes

```bash
# Generate the original QR code
node generate-qr.js

# Generate the inverted QR code
node generate-inverted-qr.js

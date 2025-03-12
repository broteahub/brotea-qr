# Brotea QR Code Generator

This project generates a QR code for Brotea's Linktree URL: https://linktr.ee/brotea

Four QR code versions are available:

1. Original (Brand Colors):
   - Dark green (#022922) for the QR code dots
   - Light green/yellow (#E6FFA9) for the background

2. Inverted (Brand Colors):
   - Light green/yellow (#E6FFA9) for the QR code dots
   - Dark green (#022922) for the background

3. Standard (Black & White):
   - Black (#000000) for the QR code dots
   - White (#FFFFFF) for the background

4. Inverted Black & White:
   - White (#FFFFFF) for the QR code dots
   - Black (#000000) for the background

## Files

- `generate-qr.js`: Node.js script that generates the original QR code
- `generate-inverted-qr.js`: Node.js script that generates the inverted QR code
- `generate-bw-qr.js`: Node.js script that generates the black and white QR code
- `generate-bw-inverted-qr.js`: Node.js script that generates the inverted black and white QR code
- `brotea-qr.png`: The original QR code image (brand colors)
- `brotea-qr-inverted.png`: The inverted QR code image (inverted brand colors)
- `brotea-qr-bw.png`: The black and white QR code image
- `brotea-qr-bw-inverted.png`: The inverted black and white QR code image
- `index.html`: A simple webpage to display the original QR code
- `compare.html`: A webpage to compare all QR code versions side by side

## How to Use

1. View all four QR code versions side by side by opening `compare.html` in a web browser
2. View only the original QR code by opening `index.html` in a web browser
3. Scan any QR code with a smartphone camera to visit Brotea's Linktree
4. Download any QR code image for printing or sharing

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
# Generate the original QR code (brand colors)
node generate-qr.js

# Generate the inverted QR code (inverted brand colors)
node generate-inverted-qr.js

# Generate the black and white QR code
node generate-bw-qr.js

# Generate the inverted black and white QR code
node generate-bw-inverted-qr.js

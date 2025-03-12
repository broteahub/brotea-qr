const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// URL to encode in the QR code
const url = 'https://linktr.ee/brotea';

// Output file path
const outputFile = path.join(__dirname, 'brotea-qr-bw-inverted.png');

// Generate QR code with inverted black and white colors
QRCode.toFile(outputFile, url, {
  color: {
    dark: '#FFFFFF',  // White dots
    light: '#000000'  // Black background
  },
  width: 500,  // Size of QR code
  margin: 1    // Margin
}, (err) => {
  if (err) {
    console.error('Error generating inverted black and white QR code:', err);
    return;
  }
  console.log(`Inverted black and white QR code generated successfully at: ${outputFile}`);
  console.log(`QR code contains URL: ${url}`);
});

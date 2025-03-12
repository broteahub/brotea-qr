const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// URL to encode in the QR code
const url = 'https://linktr.ee/brotea';

// Output file path
const outputFile = path.join(__dirname, 'brotea-qr-bw.png');

// Generate QR code with standard black and white colors
QRCode.toFile(outputFile, url, {
  color: {
    dark: '#000000',  // Black dots
    light: '#FFFFFF'  // White background
  },
  width: 500,  // Size of QR code
  margin: 1    // Margin
}, (err) => {
  if (err) {
    console.error('Error generating black and white QR code:', err);
    return;
  }
  console.log(`Black and white QR code generated successfully at: ${outputFile}`);
  console.log(`QR code contains URL: ${url}`);
});

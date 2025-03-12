const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// URL to encode in the QR code
const url = 'https://linktr.ee/brotea';

// Output file path
const outputFile = path.join(__dirname, 'brotea-qr-inverted.png');

// Generate QR code with inverted colors
QRCode.toFile(outputFile, url, {
  color: {
    dark: '#E6FFA9',  // Light green/yellow dots (inverted)
    light: '#022922'  // Dark green background (inverted)
  },
  width: 500,  // Size of QR code
  margin: 1    // Margin
}, (err) => {
  if (err) {
    console.error('Error generating inverted QR code:', err);
    return;
  }
  console.log(`Inverted QR code generated successfully at: ${outputFile}`);
  console.log(`QR code contains URL: ${url}`);
});

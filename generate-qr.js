const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// URL to encode in the QR code
const url = 'https://linktr.ee/brotea';

// Output file path
const outputFile = path.join(__dirname, 'brotea-qr.png');

// Generate QR code
QRCode.toFile(outputFile, url, {
  color: {
    dark: '#022922',  // Dark green dots
    light: '#E6FFA9'  // Light green/yellow background
  },
  width: 500,  // Size of QR code
  margin: 1    // Margin
}, (err) => {
  if (err) {
    console.error('Error generating QR code:', err);
    return;
  }
  console.log(`QR code generated successfully at: ${outputFile}`);
  console.log(`QR code contains URL: ${url}`);
});

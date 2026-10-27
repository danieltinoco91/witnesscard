const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for security & clean headers
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

// Serve static assets from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Explicit route for Privacy Policy (accessible in Spanish and English paths for Google Play Console compatibility)
app.get(['/politica-de-privacidad', '/politica-privacidad', '/privacy', '/privacy-policy'], (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'privacy.html'));
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    app: 'WitnessCard',
    version: '1.0.0',
    developer: 'Beltsasar',
    timestamp: new Date().toISOString()
  });
});

// Fallback to home page
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`WitnessCard landing server running at http://localhost:${PORT}`);
  console.log(`Privacy Policy available at http://localhost:${PORT}/politica-de-privacidad`);
});

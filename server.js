const express = require('express');
const { parse } = require('url');
const next = require('next');
const https = require('https');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

    // Middleware to force HTTPS
    server.use((req, res, next) => {
        if (req.protocol === 'http' && !req.secure) {
            // If the request is using HTTP, redirect to HTTPS.
            console.log(`Redirecting to https://${req.headers.host}${req.url}`);
            return res.redirect(`https://${req.headers.host}${req.url}`);
        }
        // If the request is already using HTTPS or in a non-production environment, continue to the next middleware.
        next();
    });

    // Serve Next.js pages
    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true);
        const { pathname, query } = parsedUrl;
        return handle(req, res, parsedUrl);
    });

    // Load SSL certificate files
    const privateKey = fs.readFileSync('private.key', 'utf8');
    const certificate = fs.readFileSync('certificate.crt', 'utf8');
    const caBundle = fs.readFileSync('ca_bundle.crt', 'utf8');

    const credentials = {
        key: privateKey,
        cert: certificate,
        ca: caBundle
    };

    // Create an HTTPS server with your SSL certificates
    const httpsServer = https.createServer(credentials, server);

    const httpsPort = process.env.HTTPS_PORT || 3000; // Default HTTPS port

    httpsServer.listen(httpsPort, (err) => {
        if (err) throw err;
        console.log(`Server is running on port ${httpsPort}`);
    });
});

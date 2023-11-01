const express = require('express');
const { parse } = require('url');
const next = require('next');
const https = require('https');
const http = require('http');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
    const server = express();

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

    // Create an HTTP server to handle both HTTP and HTTPS requests
    const httpServer = http.createServer(server);
    const httpsServer = https.createServer(credentials, server);

    const httpPort = process.env.PORT || 4000; // Use the same port for both HTTP and HTTPS

    httpServer.listen(httpPort, (err) => {
        if (err) throw err;
        console.log(`Server is running on port ${httpPort}`);
    });

    httpsServer.listen(httpPort, (err) => {
        if (err) throw err;
        console.log(`Server is running on HTTPS port ${httpPort}`);
    });
});

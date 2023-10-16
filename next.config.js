/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PORT: 3001,
        REACT_APP_BASE_BACKEND: "http://localhost:3000/"
    }
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        PORT: process.env.PORT || 3001,
        REACT_APP_BASE_BACKEND: process.env.REACT_APP_BASE_BACKEND || "https://goost.io:3000/",
    }
}

module.exports = nextConfig

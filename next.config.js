/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: [
        'github.com',
        'uploadthing.com',
        'utfs.io',
        'img.clerk.com',
        'subdomain',
        'images.unsplash.com',
        'files.stripe.com',
      ], 
    },
  }
  
  module.exports = nextConfig
  
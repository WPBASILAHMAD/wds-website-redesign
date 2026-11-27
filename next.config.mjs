/** @type {import('next').NextConfig} */
const config = {
  poweredByHeader: false,
  async rewrites() { return [{source:"/index.html",destination:"/"},{source:"/about-us.html",destination:"/about"},{source:"/about-us",destination:"/about"}]; },
  async headers() { return [{source:"/:path*",headers:[
    {key:"X-Content-Type-Options",value:"nosniff"},
    {key:"Referrer-Policy",value:"strict-origin-when-cross-origin"},
    {key:"Content-Security-Policy",value:"script-src 'self' 'unsafe-inline'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'; form-action 'self'"}
  ]}]; }
};
export default config;

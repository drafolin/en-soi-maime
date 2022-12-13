/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'api.qrserver.com',
			},
		],
	},

};

export default nextConfig;

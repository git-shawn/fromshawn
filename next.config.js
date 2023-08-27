/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/support/qrpop-privacy',
                destination: '/qrpop/privacy-policy',
                permanent: true,
            },
            {
                source: '/support/rerouter-privacy',
                destination: '/rerouter/privacy-policy',
                permanent: true,
            },
        ]
    }
}

module.exports = nextConfig

module.exports = nextConfig

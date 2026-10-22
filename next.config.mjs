/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    const characters = [
      'Arkha', 'rayas', 'faedil', 'xio', 'nay', 'nana', 'niff', 'zuya',
      'mita', 'ken', 'aqyl', 'rerin', 'des', 'mauro', 'caesar', 'kila',
      'fazz', 'zuma', 'maran', 'yume', 'pucie',
    ]

    return characters.map((slug) => ({
      source: `/${slug}.html`,
      destination: `/character/${slug.toLowerCase()}`,
      permanent: false,
    }))
  },
}

export default nextConfig

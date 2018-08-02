module.exports = {
  siteMetadata: {
    title: "Your New Gatsby + Tailwind Blog",
    author: "Your Name",
    description: "Your Blog Description",
    siteUrl: "https://blog.kylegalbraith.com"
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "<your-google-analytics-tracking-id>",
        head: true,
        anonymize: true,
        respectDNT: false,
        exclude: []
      },
    },
    {
      // RSS feed for your gatsby blog
      resolve: 'gatsby-plugin-feed'
    },
    {
      // location of your blog posts
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1140,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-plugin-react-helmet'
  ],
};

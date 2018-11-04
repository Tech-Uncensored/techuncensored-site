module.exports = {
  siteMetadata: {
    title: 'Tech_Uncensored : Modern Software Development'
  },
  plugins: [
      `gatsby-plugin-netlify-cms`, 
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/blog/`,
                name: "markdown-pages",
            }
        },
        `gatsby-transformer-remark`,
        {
          resolve: `gatsby-plugin-sass`,
          options: {
            includePaths: [`${__dirname}/src/scss`],
          },
        },
        `gatsby-plugin-react-helmet`
    ],
}
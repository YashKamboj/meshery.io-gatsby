module.exports = {
  siteMetadata: {
    title: "meshery.io-gatsby",
    siteUrl: `https://www.yourdomain.tld`,
    image: "/assets/images/meshery-logo.svg",
  },
  plugins: ["gatsby-plugin-styled-components",
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `data`,
      path: `${__dirname}/src/Data/`
    }
  }
],
};

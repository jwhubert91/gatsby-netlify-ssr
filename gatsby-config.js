/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-netlify-ssr`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "m8z36hin",
        dataset:
          process.env.NODE_ENV === "development"
            ? process.env.STAGING_SANITY_STUDIO_API_DATASET
            : process.env.SANITY_STUDIO_API_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: process.env.NODE_ENV === "development" ? true : false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `json`,
        path: `./src/assets/json`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/assets/images`,
      },
    },
    {
      resolve: "gatsby-plugin-svgr",
      options: {
        prettier: true,
        replaceAttrValues: {
          "#000000": "currentColor",
          "#000": "currentColor",
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-156078314-1",
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        projectId: "m8z36hin",
        dataset:
          process.env.NODE_ENV === "development"
            ? process.env.STAGING_SANITY_STUDIO_API_DATASET
            : process.env.SANITY_STUDIO_API_DATASET,
        token: process.env.SANITY_TOKEN,
      },
      customImageTypes: ["SanityPersonImage"],
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `mainspringenergy.com`,
        short_name: `mainspring`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/assets/images/favicon.png",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    `gatsby-plugin-netlify`,
  ],
}

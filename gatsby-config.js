const path = require("path");
const config = require("./data/siteConfig");

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.authorName,
    ...config,
  },
  pathPrefix: config.pathPrefix,
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "static", "images"),
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitle,
        start_url: "/",
        background_color: config.background_color,
        theme_color: config.theme_color,
        display: config.display,
        icon: config.icon,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        sourceMap: true,
        autoLabel: "dev-only",
        labelFormat: `[local]`,
        cssPropOptimization: true,
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-webpack-bundle-analyser-v2",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "", //todo add my id like UA-148833799-1
    //     head: true,
    //     // Setting this parameter is optional
    //     anonymize: true,
    //     // Setting this parameter is also optional
    //     respectDNT: true,
    //   },
    // },
    "gatsby-plugin-offline",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://eugene-belkovich.surge.sh/", //todo added my surge url
        sitemap: "https://eugene-belkovich.surge.sh//sitemap.xml", //todo added my surge url
        env: {
          development: {
            policy: [
              {
                userAgent: "*",
                disallow: ["/"],
              },
            ],
          },
          production: {
            policy: [
              {
                userAgent: "*",
                allow: "/",
              },
            ],
          },
        },
      },
    },
    "gatsby-plugin-layout",
  ],
};

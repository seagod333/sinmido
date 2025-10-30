import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Sinmido`,
    siteUrl: `http://localhost:3003`, // your Gatsby dev URL
  },
  graphqlTypegen: true,
  pathPrefix: `/`,
  // pathPrefix: `wordpress/wp-content/themes/sinmido/public`,
  flags: {},
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-output",
    },
    // {
    //   resolve: "gatsby-source-wordpress",
    //   options: {
    //     // 🔥 REQUIRED: Your WordPress GraphQL URL
    //     url: "http://localhost/wordpress/graphql",

    //     // Optional but recommended:
    //     schema: {
    //       timeout: 60000,
    //     },
    //     develop: {
    //       hardCacheMediaFiles: true,
    //     },
    //     type: {
    //       MediaItem: {
    //         createFileNodes: true,
    //       },
    //     },
    //   },
    // },
    // "gatsby-plugin-image",
    // "gatsby-plugin-sharp",
    // "gatsby-transformer-sharp",
  ],
};

export default config;

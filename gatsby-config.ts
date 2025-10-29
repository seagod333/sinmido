import type { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `http://localhost:3003`,
  },
  graphqlTypegen: true,
  pathPrefix: "/",
  flags: {},
  plugins: [
    ...[],
    "gatsby-plugin-postcss",
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-output",
      options: {
        outputDir: "dist"
      }
    }
  ]
}

export default config

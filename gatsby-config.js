module.exports = {
  siteMetadata: {
    title: "Maadcode",
    description: "Este es mi website personal donde muestro mis proyectos personales y artículos sobre desarrollo web.",
    author: "Manuel Dávila",
    twitterUsername: "maadcode",
    image: "/twitter-img.png",
    siteUrl: "https://maadcode.dev",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://strapi-maadcode.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        contentTypes: [`projects`, `blogs`, `skills`],
        singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Poppins",
              variants: ["400", "700"],
            },
            { family: "Open Sans" },
          ],
        },
      },
    },
  ],
}

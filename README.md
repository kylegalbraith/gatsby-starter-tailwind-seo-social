## Getting started
1. Install the `gatsby-cli` package globally.
```bash
npm install --global gatsby-cli
```
2. Create a new gatsby project using this starter project.
```bash
gatsby new new-blog https://github.com/kylegalbraith/gatsby-starter-tailwind-seo-social
```
3. Open `src/config/config.js` and fill in your information
```json
module.exports = {
    siteTitle: "Your Blog Title",
    shortSiteTitle: "Your Short Blog Title",
    siteDescription: "Your nice blog description",
    siteUrl: "https://blog.kylegalbraith.com",
    pathPrefix: "",
    siteImage: "images/facebook-cover.jpg",
    siteLanguage: "en",
    authorName: "Your Name",
    authorTwitterAccount: "kylegalbraith",
    authorSocialLinks: [
      { name: "github", url: "https://github.com/kylegalbraith" },
      { name: "twitter", url: "https://twitter.com/kylegalbraith" },
      { name: "facebook", url: "http://facebook.com/kyle.galbraith459" }
    ]
  };
```
4. Build Tailwind stylesheet and start local Gatsby development server.
```bash
cd new-blog
npm run build:css & gatsby develop
```
5. Open local development server at `localhost:8000` and you should see the following sample.

![gatsby-starter-tailwind-seo-social](https://github.com/kylegalbraith/gatsby-starter-tailwind-seo-social/gatsby-starter-running.PNG)


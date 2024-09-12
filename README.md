# Contentful and Next App Prototype

In order to be able to run this project make sure to create a .env.local file using the .env example.

Then, you only need to run `pnpm run dev` and everything should work. To access the CMS, use your browser to login into your Contentful space. To access the frontend use port 3000.

## To create a content model, content type ...
1. In Contentful create the content type, then go to the Page content type and modify the options to permit select that content type. Finally, add the content using the content type.

2. In Next, first add the if statement to display the content type in the [slug].jsx page. Then create the component and styling. Make sure that the component has content as prop, has a const exporting content.fields, and uses ContentfulImage component to render media assets. Finally, in case given select options make sure that the value matches with the specified validation.

## PoC Current Functionality:
- 6 Content Blocks
- /index and /about-us

## Missing Functionality
- / render index page
- Locales
- Preview

Created by: Ana Rivera Faraco
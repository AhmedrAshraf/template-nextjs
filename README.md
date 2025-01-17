# Next.js Template

## Why?

Getting a Next.js application up and running is not a trivial exercise. This
template solves a lot of initial problems and gets you to a well-scaffolded,
responsive web application with some built-in navigation and support for all the
goodies.

## What's Included

In order to work effectively with this template, you need to be familiar with
the following technologies (click the links to do a deep dive):

| Topic                                                                                                                             | Category                      | Resource                                                                                 | Length |
| --------------------------------------------------------------------------------------------------------------------------------- | ----------------------------- | ---------------------------------------------------------------------------------------- | -----: |
| [Mocha](https://mochajs.org/) & [Chai](https://www.chaijs.com/) with [Should](https://www.chaijs.com/guide/styles/#should) syntax | tests & assertions            |
| [Lodash](https://lodash.com/docs)                                                                                                 | Javascript utility library    |                                                                                          |
| [React](https://reactjs.org/) & [Redux](https://react-redux.js.org/)                                                              | application framework & state | [Udemy course](https://www.udemy.com/course/react-redux/)                                | 52 hrs |
| [Serify / Deserify](https://www.npmjs.com/package/@karmaniverous/serify-deserify)                                                 | Redux middleware              |                                                                                          |        |
| [Semantic UI React](https://react.semantic-ui.com/)                                                                               | front end components          |                                                                                          |        |
| [Redux Toolkit](https://redux-toolkit.js.org/)                                                                                    | more application state        | [YouTube playlist](https://youtube.com/playlist?list=PLM0LBHjz37LXSASzEv81f3tGptAsEGQUM) |  3 hrs |
| [Next.js](https://nextjs.org/) & [Vercel](https://vercel.com/)                                                                    | production framework & host   |                                                                                          |        |

## Setting Up Your Dev Environment

**Use [VS Code](https://code.visualstudio.com/) as your code editor!** This is
non-negotiable, for reasons that will become obvious in step 2 below.

1. Clone this repository to your local machine.
1. VS Code will ask to install a bunch of recommended extensions. Accept all of
   them.
1. Install dependencies by running `npm install`.
1. Add the following to your WORKSPACE settings, which will not go back to
   GitHub (not your FOLDER settings, which will). Edit as indicated:

```json
{
  "prettier.prettierPath": "C:\\absolute_path_to_\\node_modules\\prettier"
}
```

5. Remove the `.template` extension from `.env.local.template` and
   `.env.development.local.template`. These files are blocked by `.gitignore`,
   so they are safe for environmental secrets!
6. Start the development server by running `npm run dev`.
7. Visit the web application at http://localhost:3000.

## Deploying to Vercel?

Connect your preview environment to the `preview` branch.

See the `NEXT_PUBLIC_COMING_SOON` environment variable in
[`.env.production`](https://github.com/karmaniverous/template-nextjs/blob/30f0214cd493c10c66ec3e3440db0e66d7148302/.env.production).
When this value is `1`, your production environment (`main` branch) will display
your
[`coming-soon`](https://github.com/karmaniverous/template-nextjs/blob/30f0214cd493c10c66ec3e3440db0e66d7148302/pages/coming-soon.jsx)
page and your preview environment (preview branch) will always display your
site.

Set `NEXT_PUBLIC_COMING_SOON` to `1` in
[`.env.development`](https://github.com/karmaniverous/template-nextjs/blob/30f0214cd493c10c66ec3e3440db0e66d7148302/.env.development)
to view your
[`coming-soon`](https://github.com/karmaniverous/template-nextjs/blob/30f0214cd493c10c66ec3e3440db0e66d7148302/pages/coming-soon.jsx)
page on `localhost`.

Set `NEXT_PUBLIC_COMING_SOON` to `0` in
[`.env.production`](https://github.com/karmaniverous/template-nextjs/blob/30f0214cd493c10c66ec3e3440db0e66d7148302/.env.production)
to view your full site in production.

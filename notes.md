# Notes

## stepts

- create a folder
- cd into folder
- git init and created `.gitignore` file with node_modules and .DS_Store inside
- npm init -y or yarn init -y (using yarn: add the "scripts" manually to package.json)
- update package.json with the script to use nodemon to run index.js
- install nodemon as a dev dependency
  - npm i -D nodemon
  - yarn add nodemon --dev
- created `index.js` and `./api/server.js`
- `npm run server` or `yarn server` to execute script

Connect repository to github

- create repository on github, no readme, no .gitginore, no license.
- commit local code
- add the GH repository as my remote origin

```bash
git remote add origin https://github.com/yourrepourl
```

- push changes to origin master `git push -u origin master`
- refresh on GH and code should be there. Profit!

Roommies: The motive of this app is to replicate splitwise.

The UI should be comfortable to users who share room and spaces with friends.

The inital idea is to implement the following features: A webpage to track the expenses, a webpage to track the room chores divided by the room mates

deploy to github :
install ghpages in local: npm install gh-pages --save-dev

link the repository to your local repo: git remote add origin https://.............git

modify package.json: add homepage before dependencies ("homepage": "http://username.github.io/repositoryName")
                     update scripts: add predeploy ("predeploy": "npm run build"
                                                    "deploy": "gh-pages -d build")

deploy: npm run deploy
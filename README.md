# CARCAS

THIS REPOSITORY IS NO LONGER BEING MAINTAINED
The project has moved to github.com/DigitalCarleton/carcas 
where we are using Datalad in combination with git 
for better management of large files.

Maintained by:

- Erin Watson (watsona@carleton.edu)
- Henry Burkhardt(burkhardth@carleton.edu)
- Noah Zameer Lee (leen2@carleton.ed)

## Overview

Add more here.

## Workflow

Developers working on this project should ensure that they have Git and and the [GitHub CLI](https://cli.github.com/) installed on their computers. Then they should clone this git repository to their computer, and make changes/develop new features.

As individuals make changes to their local copy of the CARCAS repo, they should push changes and features to the "main" branch of the repository. More advanced users can use branches for their individual changes and merge them in, but this is not required at all. The advantage of storing the project as a Git repo is that developers will be able to see changes they make locally and ensure they are functional before pushing them to Github. Once changes are pushed to GitHub all developers on the project can update their repositories to see changes other developers have made.

It's important to note that the Github repo "main" branch is _not_ what is reflected on 3dviewer.sites.carleton.edu, and the models on the CARCAS site. Instead, there is a second branch called "server" that this website pulls from. A Git branch is like a separate workspace for making changes to your project without disrupting the main project. In practice, this means when developers push changes to the main branch, the server branch (and thus the content seen by going to 3dviewer.sites.carleton.edu) is not effected until we decide it should be. When we decide it should be updated the "server" branch is updated to match the "main" branch (in a process called merging). Then the changes made by developers, can be seen on the live website.

Having the ability to arbitrarily update the site at anytime is great, because it means we can chose when to push a new "release" of the CARCAS models and code to the live website, instead of having to update the live site whenever new changes are pushed the repository, or we want to share our changes with another developer.

This workflow may sound complicated, but I (burkhardth@carleton.edu) have created a GitHub action workflow that takes care of everything. So there are really only a handful of git commands a developer working on this project will need to know:

- Whenever you want to **push the changes you have made locally to the GitHub repository (on the main branch)**, you use the following sequence of commands:

  `git pull` - update your local repository to ensure it is up to date with GitHub

  `git add *`- tell Git that you want to upload ALL the changes you made

  `git commit -m "your message here"` - create a commit to send to GitHub

  `git push` - send your changes to the GitHub "main" branch!

  NOTE: developers can also absolutely use the GitHub desktop tool, which requires no command line knowledge. This is a preferable option for people less familiar with Git.

- When you want to update the live website to reflect the current GitHub repo: ensure that you have pushed all the changes you want to see to the GitHub repo on "main" (see the previous step) and then run this command:

  `git deploy` - this runs a custom workflow that tags the current state of the repository (i.e. adds a name to it, this isn't important, just a bonus feature), updates the server branch to reflect the main branch, and then automatically runs an SSH command to tells 3dveiwer.sites.carleton.edu to update it's source code (in the "www" folder) from the server branch.

  NOTE: Developers who don't want to use the command line can manually run this process on GitHub.com with a button.

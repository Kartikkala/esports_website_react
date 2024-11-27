#!/bin/bash



GIT_URL="https://Kartikkala:$GIT_PASS@github.com/Kartikkala/esports_website.git"
#git pull $GIT_URL main --rebase
git push $GIT_URL main --force

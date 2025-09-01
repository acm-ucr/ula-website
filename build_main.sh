#!/bin/sh

#SPECIFY PATH OF FOLDER HERE
#cd /home/projects/..........

# Builds the `main` branch 
res=$(git pull origin main | grep Already)

if [[ ${res} =~ 'Already' ]]
then
  echo 'Site already up to date'
else
  npm ci
  npm run build
fi
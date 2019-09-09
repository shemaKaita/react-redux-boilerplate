rm newBuild.zip
zip -r newBuild.zip ./app ./config ./server ./package.json
scp -r newBuild.zip root@shema.io:/var/www/shema.io

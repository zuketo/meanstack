========================================
MEAN Stack Sample Application: MongoMart
========================================

MongoMart is a sample application for learning the MEAN stack: MongoDB, Express, Angular, and NodeJS.

The sample application display items from a database, and animates transition between viewing all items and details for an individual item.

Installation Instructions
-------------------------

- Run MongoDB and load the sample dataset (details below)
- Install NodeJS: https://nodejs.org/en/download/
- Run "npm install" (from the root directory of this application)
- Run "npm start" (from the root directory of this application)
- Visit "localhost:3000" to view the application

Run MongoDB and load the sample dataset
---------------------------------------

- Download MongoDB: https://www.mongodb.org/downloads
- Make a directory for your database files, e.g. mkdir ~/mongomart
- Start MongoDB, specifying the path for database files (to run MongoDB as a background process use the --fork option and --logpath)

```javascript
./bin/mongod --dbpath ~/mongomart
```

- Open a new terminal window and load the MongoMart dataset

```javascript
./bin/mongoimport -d test -c items items.json
```

- Ensure the items were correctly loaded into MongoDB

```javascript
mongo
> db.items.find()
```

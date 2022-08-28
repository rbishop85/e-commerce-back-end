# E-Commerce Back End

Using Sequelize and MySQL to build the back-end for a e-commerce site.  Connections and databases are to be tested via Insomnia.

---

Created by: Robert Bishop

This project is intended as a homework assignment for class.  Questions, comments, suggestions and constructive criticism are always welcome.

<a href="mailto: rbishop85@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white"></a>
<a href="https://github.com/rbishop85" target="_blank"><img src="	https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"></a>
<a href="https://www.linkedin.com/in/robert-m-bishop/" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"></a>

---

## Contents:
* [Demo](#demo)
* [Install](#install)
* [Usage](#usage)
* [Skills/Concepts Used](#skillsconcepts-used)
* [Steps Taken](#steps-taken)
* [Thoughts/Future Ideas](#thoughtsfuture-ideas)
* [Links](#links)
* [License](#license)

---

## Demo:

> Video demoing team profile generator in action.

https://user-images.githubusercontent.com/103389448/187056983-43172eb4-3c80-4235-ab08-66c79e5897b1.mp4

---

## Install:

To ensure that the necessary dependencies are pulled down, in this case "express" for running the server, "mysql2" for dealing with the database, dotenv for allowing dynamic environment variables and sequelize to make things easier by allowing us to map databases to classes.  Make sure to key in:
```
npm i
```

Before running the app you'll also want to run the schema to ensure that you have a starting database to work with.  Make sure to log into mysql and then key:
```
source db/schema.sql
```

Then from the command line key the following to seed that database with starting info:
```
node seeds
```

---

## Usage:

After everything have been loaded, simly key the following into your command prompt to start the app.
```
node server.js
```
Once up and running utilize Insomnia to utilize routes to interface with the database.

---

## Skills/Concepts Used:

* Javascript
  - Node.js
  - Express npm
  - dotenv npm
  - mysql2 npm
  - sequelize npm
  - C.R.U.D. (Create, Read, Update, Delete)

---

## Steps Taken:

- [x] Created repo and copied in starter files.
- [x] Worked on setting up columns for models.
- [x] Setup associations between models also utilizing the models index.
- [x] Setup Category routes.
- [x] Setup Tag routes.
- [x] Setup the Product routes that weren't pre-generated.
- [x] Set 'as' descriptions for relationships between tables.
- [x] Setup routes in Insomnia for testing.
- [x] Final format and cleanup, along with adding notes and creating README.

---

## Thoughts/Future Ideas:

This project offered a great basis for learning how to setup connections between a front-end and back-end server without worrying about the specifics of the front-end website.  It also introduced us to how much of the code is simple boiler plate code that can be re-used with only having to change a few details for each application.

---

## Links:

<a href="https://nodejs.org/en/" target="_blank">Node.js</a>

<a href="https://www.npmjs.com/package/mysql2" target="_blank">MySQL 2</a>

<a href="https://www.npmjs.com/package/sequelize" target="_blank">Sequelize</a>

<a href="https://www.npmjs.com/package/express" target="_blank">Express</a>

<a href="https://www.npmjs.com/package/dotenv" target="_blank">Dotenv</a>

---

## License:


[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

[Top of Page](#e-commerce-back-end)

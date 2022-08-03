# E-commerce back-end
![Eclipse Marketplace](https://img.shields.io/eclipse-marketplace/l/notepad4e?color=red)
## Description 
This program sets up a back-end for an e-commerce site, including a database and RESTful API routes

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
## Demo Video Link
[Screencastify Video on Google Drive]https://drive.google.com/file/d/1Y0LtKj-FnYbHdwX_Qkn7ITwBXgcd-HG3/view)

## Acceptnce Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```
## Table of Contents
* [Installation](#installation)
* [Usage Information](#usage-information)
* [License](#license)
* [Contribution Information](#contribution-information)
* [Tests](#tests)
* [Questions](#questions)
## Installation 
To install, follow these instrucitons:
1. Edit the ```.env``` file to include the following and save:
```bash
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PASSWORD='password'
```
2. Right-click on ```server.js```, and open a terminal window. In the terminal, run the following commands. This will install all required dependencies, seed the DB, and start the connection:
```bash
npm i
npm run seed
npm run start
```
## Usage Information
Using Insomnia, Postman, or your favorite API request applicaiton, make requests to the appropriate endpoints with the correct JSON bodies (if needed).
## License
This app is licensed under the Eclipse Marketplace (EPL 2.0) license.
## Contribution Information
If you wish to contribute, please contact the developer.
## Tests
Coming soon in V1.1
## Questions 
For more information, please [email me](mailto:kit@gmail.com) or see [kitanablade's Github page](https://github.com/kitanablade).
#### [⬆️ Back to Top](#description)
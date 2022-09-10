# Unhackable Finance Application
<div id="top"></div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>

  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a intentionally vulnerable web application to demonstrate security issues. 


<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

* [Node.js](https://nodejs.dev/)
* [Express](https://expressjs.com/)
* [Mysql](https://www.mysql.com/)
* [Sequelize ORM](https://sequelize.org/)
* [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

Royalty free stock images from [Pixabay](https://pixabay.com/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```
* mysql -- see [downloads](https://www.mysql.com/downloads/)


### Installation

1. Clone this repo: 
```sh 
git clone https://github.com/malaphar/unhackable-bd.git && cd unhackable-bd
```
2. Setup MySQL database: 
```sh
mysql.server start # If mysql isn't running. Note instructions done on MacOS
mysql -u {Your Username} -p
CREATE DATABASE unhack_db;
```
Alternatively SOURCE the ./db/schema.sql

3. Install Node packages *Ensure you're in the project folder ``unhackable-bd/``*:
```sh
npm install
```
4. Setup a ```.env``` file. See the ```.env.EXAMPLE``` copy this and remove .EXAMPLE add your mysql credentials
5. Seed the database:
```sh
npm run seed
```  
6. Start the server:
```sh
npm run start
```
If developing to use nodemon run:
```sh
npm run dev
```
The server should be running at [localhost:3000](http://localhost:3000)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

For "Employee" login ```http://localhost:3000/user/login``` or for the mock general unauthenticated user ```http://localhost:3000/```



<p align="right">(<a href="#top">back to top</a>)</p>


# EAPI
EAPI is built using Nodejs and Express framework. It is an API for an e-commerce store and follows a RESTFul design architecture. 

## Goal
The goal of EAPI is to provide a client user with e-commerce JSON data meaning it can be used with any shopping project needing JSON products. This project incorporates filtering capabilities that enhance user experience by enabling seamless data retrieval and manipulation with query string encoding.

## Usage

## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone repository

  `git clone git@github.com:backendkolawole/EAPI.git`

- Change the current directory

  `cd EAPI`
  
- Install packages

  `npm install`

- Create a .env file in the root directory

  - Set up the `MONGO_URI` variable equal to the DB connection string
  - Set up the `PORT` variable

- Populate the DB with JSON products

  `node populate.js`

- Run the server

  `npm start`

## Endpoints

**GET [project_url]/api/v1/products**

Call this endpoint to get all products

- Possible responses

```
200 (OK)

{
    "products": [
        {
            "_id": "65cc64074a63b9968ab73daa",
            "name": "modern bookshelf",
            "price": 31,
            "company": "caressa",
            "rating": 4.5,
            "featured": true,
            "createdAt": "2024-02-14T06:56:00.132Z",
            "__v": 0
        },
        {
            "_id": "65cc64074a63b9968ab73dab",
            "name": "modern poster",
            "price": 30,
            "company": "liddy",
            "rating": 4.5,
            "featured": false,
            "createdAt": "2024-02-14T06:56:00.132Z",
            "__v": 0
        }
        ........
    "nbHits": 10
}

```
You can add featured, company, name, fields and numericFilters to a GET `[project_url]/api/v1/products` request to retrieve filtered results from the DB.

<h3 align="center">Product API</h3>
<p align="center">
<a href="https://pypi.org/"><img alt="body-parser" src="https://img.shields.io/badge/body--parser-1.20.2-green"/></a>
<a href="https://pypi.org/"><img alt="express" src="https://img.shields.io/badge/express-4.18.2-red"/></a>
<a href="https://pypi.org/"><img alt="nodemon" src="https://img.shields.io/badge/nodemon-3.0.1-9cf"/></a>
<a href="https://pypi.org/"><img alt="pg-promise" src="https://img.shields.io/badge/pg--promise-11.5.4-yellow"/></a>

<p align="center">
<img alt="logo" src="https://raw.githubusercontent.com/anacarolinadev/nodejs_api/main/img/express.png"/>
</p>


# About The Project

This project was created to solve <a href="https://honeysuckle-belly-aa2.notion.site/2-Backend-Challenge-Products-Api-2db797f303dd46db882d5967d5605cac" target="_blank">Challenge Backend Products Api</a>, a project that allows a user to manipulate and relate products and categories.

* Mandatory requirements
    
    1.A user should be able to create, read, update and delete products.
    
    2.A user should be able to create, read, update and delete categories.

    3.A product must be related to a category.

    4.A category must be related to one or more products.

    5.Queries must return at least 10 items by request.

    6.The product query should be able to return an specific product or all the products.

    7.The category query must be able to return an specific category or all categories.


Product output:
```
[
    {
        "id": 1,
        "name": "Nike Shoes for Man",
        "description": "Nike Shoes",
        "price": 199.99,
        "category": {
            "id": 1,
            "name": "Shoes"
        }
    },
    {
        "id": 2,
        "name": "Amanda Waller Shirt Men",
        "description": "New awesome shirt",
        "price": 32.49,
        "category": {
            "id": 2,
            "name": "Shirts"
        }
    }
]
```


Category output:
```    
[
    {
        "id": 1,
        "name": "Shoes"
    },
    {
        "id": 2,
        "name": "Shirts"
    }
]
```



# Build With

Frameworks and libs to build the application:

*   Body-parser
*   Express
*   Pg-promise

# Getting Started

To build and run the application, you need to follow the steps below:

* Configuration steps

1. Clone application
    
    ```
    git clone https://github.com/anacarolinadev/nodejs_api.git
    ```
    
2. Creating Node Modules

    ```
    npm install
    ```

3. Before starting the API, create .env file just like .env-sample file and configure it with the data you need.
    
4. Initializing API

    ```
    npm run start 
    ```
    
Ps.: You must have PostgreSQL installed, if not you can use Docker as below.

* Docker - Optional

1. Run the command below if you want to run the application in Docker 
```
 npm run docker
```

2.Configure the environment variables of containers in `docker-compose.yml` file:

#### docker-compose.yml
```
version: "3.8"
services:
  postgresql:
    image: postgres
    container_name: postgres_db
    restart: always
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
      POSTGRES_ROOT_PASSWORD: ${POSTGRES_ROOT_PASSWORD}
    ports:
      - ${POSTGRES_PORT}:5432
    volumes:
      - ./database/init.sql:/docker-entrypoint-initdb.d/init.sql

```

# Development

API developed with Express, and Pg-promise to connect PostgreSQL database.
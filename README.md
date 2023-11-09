<h3 align="center">Product API</h3>
<p align="center">
<a href="https://github.com/thatavieira/backend_challenge_products_api"><img alt="products_api" src="https://img.shields.io/badge/products__api-1.2.1-orange" /></a>
<a href="https://pypi.org/"><img alt="fastApi" src="https://img.shields.io/badge/fastApi-0.75.1-green"/></a>
<a href="https://pypi.org/"><img alt="uvicorn" src="https://img.shields.io/badge/uvicorn-0.17.6-red"/></a>
<a href="https://pypi.org/"><img alt="SQLAchemy" src="https://img.shields.io/badge/SQLAchemy-1.4.36-9cf"/></a>
<a href="https://pypi.org/"><img alt="psycopg2-binary" src="https://img.shields.io/badge/psycopg2--binary-2.9.3-yellow"/></a>
<a href="https://pypi.org/"><img alt="fastApi-pagination" src="https://img.shields.io/badge/fastApi--pagination-0.9.3-blue"/></a>
<a href="https://pypi.org/"><img alt="pydantic" src="https://img.shields.io/badge/pydantic-1.9.1-inactive"/></a></p>

<p align="center">
<img alt="logo" src="https://raw.githubusercontent.com/thatavieira/backend_challenge_products_api/developer/img/fast_api.png"/>
</p>


# About The Project

Project created for realize Challenge Backend Products Api, project which allows manipulate and relate products and categories.

* Mandatory requirements
    
    1.User should be able of create, read, update and delete products.
    
    2.User should be able of create, read, update and delete categories.

    3.A product must be related to a category.

    4.A category must be related to one or more products.

    5.Queries must return a maximum of 10 items by request.

    6.The product query should be able to return a specific product or all of them.

    7.The category query must be able to return a specific category or all.


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

Follow list with any frameworks and libs used in building of the application.

*   Body-parser
*   Express
*   Pg-promise

# Getting Started

To build and run the application, you need to install the dependencies below:

* Steps for configuration

1. Clone application
    
    ```
    git clone https://github.com/anacarolinadev/nodejs_api.git
    ```
    
2. Creating Node Modules

    ```
    npm init
    ```
3. Initializing Docker and installing PostgreSQL

    ```
    npm run docker
    ```

4. Initializing API

    ```
    npm run start 
    ```
    
Ps.: You must have PostgreSQL installed, if not you can use Docker as below.

* Docker - Optional

1. If you want to run the application in docker, configure the file docker-compose and after the command 
```
 npm run docker
```

2.Configure the environment variables for containers in `docker-compose.yml` file:

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

API developed with Express, framework focused on API development.
Pg-promise used to connect to PostgreSQL database.
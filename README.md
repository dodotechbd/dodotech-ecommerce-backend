# Dodohub E-commerce Server

Welcome to Dodohub, your go-to platform for all things tech! This server powers Dodohub's tech e-commerce site, providing a set of APIs for seamless integration into your applications. This README will guide you through setting up the server and utilizing its APIs effectively.
## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Authentication](#authentication)
  - [API Documentation](#api-documentation)
    - [Get User Data](#get-user-data)
    - [Create a Post](#create-a-post)
    - [Get All Posts](#get-all-posts)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js installed (version 18 or higher)
- Yarn (Package Manager) installed
- MongoDB

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/dodotech-ecommerce-backend.git
```

2. Navigate to the project directory:

```bash
cd dodotech-ecommerce-backend
```

3. Install dependencies:

```bash
yarn install
```

4. Configure the server by creating the `.env` file with your database connection details and other settings.

5. Start the server:

```bash
yarn dev
```

Now, your Server is up and running!

## Usage

### API Documentation

#### Get Product Data

- **Endpoint:** `/api/v1/products/:productId`
- **Method:** `GET`
- **Description:** Retrieve product data based on the user ID.

**Example:**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" http://localhost:3000/api/v1/products/123
```

#### Create a Product

- **Endpoint:** `/api/v1/products`
- **Method:** `POST`
- **Description:** Create a new product.

**Example:**

```bash
curl -X POST -H "Authorization: Bearer YOUR_API_KEY" -H "Content-Type: application/json" -d '{...product_data}' http://localhost:3000/api/v1/products
```

#### Get All Products

- **Endpoint:** `/api/v1/products`
- **Method:** `GET`
- **Description:** Retrieve all products.

**Example:**

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" http://localhost:3000/api/v1/procucts
```

More APIs are coming soon...

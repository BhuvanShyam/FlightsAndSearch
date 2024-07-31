# Node.js Project Template

This is a base Node.js project template, designed with essential code principles and project management best practices. Feel free to modify it according to your needs.

## Project Structure

The main source code is located in the `src` folder. This does not include tests; you may want to create a separate `tests` folder for them.

### Inside the `src` Folder

- **config**: Contains configurations and setups for libraries or modules. For example, the `server-config.js` file sets up `dotenv` for using environment variables in a clean manner. Configurations for logging libraries and other setup tasks should also be done here.

- **routes**: This folder is for registering routes along with the corresponding middleware and controllers.

- **middlewares**: Middlewares intercept incoming requests. Here, you can write validators, authenticators, etc.

- **controllers**: These are essentially the last middlewares, as they call the business layer to execute business logic. In controllers, we receive incoming requests and data, pass them to the business layer, and structure the API response once the business layer returns an output.

- **repositories**: Contains all the logic for interacting with the database through raw queries or ORM queries.

- **services**: Houses the business logic and interacts with repositories for data from the database.

- **utils**: Contains helper methods, error classes, etc.

## Setup Instructions

1. **Clone the Repository**  
   Download this template from GitHub and open it in your favorite text editor.

2. **Install Dependencies**  
   Navigate to the project directory and run the following command:

```bash
   npm install
```

Environment Variables
In the root directory, create a .env file and add the following environment variables:

```bash
PORT=<port number of your choice>
```

```bash
Example:
PORT=3000
```

Database Configuration

Navigate to the src folder and execute:

```bash
npx sequelize init
```

## Tables

### City -> id,name,created_at,updated_at

### Airport -> id,name,addres,city_id,created_at,updated_at

    Realationship -> City has many airports and airport belongs to a city(1 to many relationship)
    npx sequelize seed:generate --name add-airports


    Data Flow Example:

```bash
Client Request: A client sends a request to the /users endpoint.
Route Handling: The route /users maps the request to the getAllUsers controller action.
Controller Processing: The getAllUsers controller action calls the getAllUsers service method.
Service Logic: The getAllUsers service method calls the findAll repository method.
Repository Interaction: The findAll repository method fetches data from the database.
Response: The data is passed back through the service and controller layers, and finally sent as a response to the client.
```

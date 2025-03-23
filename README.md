# Todo Application

This is a simple Todo application built with Node.js, Express, and EJS. The application allows users to create, view, and delete todo items.

## Project Structure

```
todo-app
├── src
│   ├── app.ts                # Entry point of the application
│   ├── controllers           # Contains the logic for handling requests
│   │   └── todoController.ts
│   ├── models                # Defines the structure of todo items
│   │   └── todo.ts
│   ├── routes                # Sets up the application routes
│   │   └── todoRoutes.ts
│   ├── views                 # Contains EJS templates for rendering views
│   │   ├── index.ejs
│   │   ├── layout.ejs
│   │   └── todo.ejs
│   └── types                 # Defines TypeScript interfaces
│       └── index.ts
├── public                    # Static files served by the application
│   ├── css
│   │   └── styles.css
│   └── js
│       └── scripts.js
├── package.json              # NPM configuration file
├── tsconfig.json             # TypeScript configuration file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd todo-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run the following command:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Features

- Add new todo items
- View existing todo items
- Delete todo items

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.
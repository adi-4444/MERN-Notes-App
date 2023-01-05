# MERN Notes App

This project was created with Mongo DB, Express JS, React JS and Node JS

## To run this app locally clone this repo

In the project directory, you can run:

### `npm install`

will install all the required dependencies for this project. Goto /frontend run `npm install` to install react dependencies.

### `npm dev start` to start both frontend and backend simultaneously .

but before staring got /backend and server.js change the `process.env.NODE_ENV === "production"` to `process.env.NODE_ENV === "development"` to run locally.

Now the development mode.\
Open [http://localhost:5050](http://localhost:5050) to view backend in your browser.

Open [http://localhost:3000](http://localhost:3000) to view frontend in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build` in / frontend

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

To deploy make changes to `process.env.NODE_ENV === "development"` to `process.env.NODE_ENV === "production"`

now the app will work directy on [http://localhost:5050](http://localhost:5050)

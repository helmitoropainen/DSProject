# Distributed Systems Project Work Spring 2023

## D2: Implementation

This is a project work made by Helmi Toropainen for the course Distributed Systems. As a project I have created a web application that serves as a discussion forum that requires user authentication.

This application is built with Node.js and Express (back-end), MongoDB (database) and React (front-end).

I have used Express-Generator (https://expressjs.com/en/starter/generator.html) and Create React App (https://create-react-app.dev/).

The most important code for evaluation, so code written by me, is as follows:

*server = {post_server, user_server, vote_server}

*server/auth (Authentication validation)

*server/bin (Contains distribution between ports)

*sever/models (Database models)

*server/routes (API-call definitons)

*sever/app.js (Server setup)

client/src/App.js (User Interface)

client/src/components (User Interface)

client/src/setupProxy.js (Client-Server communicatoin distibution)

## D2: Video

A video demonstration can be found here: XXXXX

In the demo, the code is run in development mode, this code is not for production.

## Installation Guideline and User Manual

Using this application requires Node version 14.
The application can be installed and run with the following commands:

npm install

NODE_ENV=development npm run dev:server-user

NODE_ENV=development npm run dev:server-post

NODE_ENV=development npm run dev:server-vote

npm run dev:client

Additionally, MongoDB needs to be run at mongodb://localhost:27017/codedb

Now home page is usable at http://localhost:3000/home

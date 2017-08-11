[![Build Status](https://travis-ci.org/duwonyi/eng-box-rest-server.svg?branch=master)](https://travis-ci.org/duwonyi/eng-box-rest-server)

# Eng-Box rest api server using Node/Express

Eng-Box is a web application to help me study English.

This server provides a client for Eng-Box with Restful API and is built on Node/Express and powered by AWS Elastic Beanstalk and with Travis CI for CI/CD.

## Features

- [x] It stores sentences, words, and sources.
- [ ] It provide reviewing sentences.

## Setup/Run

- Install Node packages. -  `yarn install`
- Start a server in production. - `yarn start`
- Start a server in development with Nodemon. - `yarn start:dev`
- Make a archive file for CD. - `yarn build`
- Run unit tests for CI. - `yarn test`
- Run unit tests in watch mode. - `yarn test:dev`

## APIs

| **URL** | **Param** | **Return** | **Method** | **Description** |
| ------- | --------- | ---------- | ---------- | --------------- |
| /api | none | Object | GET | Hello World |
| /api/sentences | none | Array | GET | Read sentences |
| /api/sentences | sentence | Object | POST | Create a sentence |
| /api/sentences/:id | id | Object | GET | Read a sentence with the id |
| /api/sentences/:id | id | Object | PATCH | Update a sentence with the id |
| /api/sentences/:id | id | Object | DELETE | Delete a sentence with the id |
| /api/sources | none | Array | GET | Read sentences |
| /api/sources | source | Object | POST | Create a source |
| /api/sources/:id | id | Object | GET | Read a source with the id |
| /api/sources/:id | id | Object | PATCH | Update a source with the id |
| /api/sources/:id | id | Object | DELETE | Delete a source with the id |

## Technologies and tools

The technologies and tools used in this project are as follows.

| **Name** | **Description** |
| -------- | --------------- |
| Node | JavaScript runtime. |
| Express | The fast, unopinionated, minimalist web framework for Node. |
| Mongoose | Elegant mongodb object modeling for Node. |
| MongoDB | Document-oriented database for JSON. |
| Jest | Delightful JavaScript Testing |
| Supertest | Super-agent driven library for testing Node HTTP servers using a fluent API. |
| Nodemon | Monitor for any changes in your Node application. |
| AWS Elastic Beanstalk | Easy-to-use service for deploying and scaling web applications and services |
| Travis CI | Service for CI and CD |
| JWT | JSON Web Token for auth |

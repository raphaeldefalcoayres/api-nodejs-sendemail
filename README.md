# api-nodejs-sendemail
Node js API using express js to send e-mails

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/raphaeldefalcoayres/lectures-backend/blob/master/LICENSE)

## Introduction

This is a simple API make to send emails on nodejs backend using express + nodemailer to service a react frontend

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See below for instructions on how to operate in your local environment.

### Prerequisites

What things you need to install the software

```
stable current version of node, npm and yarn
```

### Installing

A step by step that tell you how to get a development env running

First

```
Clone the project
```

Second

```
Execute `yarn` or `npm install` for installing dependences
```

Third

```
Duplicate `.env.example` to create `.env` with your basic configs
```

Finishing

```
Execute `yarn dev` or `npm run dev` for executing api
```

## Test Example

Input:

```js

{
	"name":"Jack Johnson",
	"email":"jackjohnson@mail.com",
	"message":"Test of send e-mail"
}

```

Output:

```js

{
  "status": "success"
}

```

## Built With

* [Expressjs](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [Eslint](https://eslint.org/) - Find and fix problems in your JavaScript code.
* [Prettier](https://prettier.io/) - Prettier is an opinionated code formatter.
* [Nodemon](https://nodemon.io/) -  Nodemon for reload automatically.
* [EditorConfig](https://editorconfig.org/) - EditorConfig helps maintain consistent coding styles for multiple developers and editors.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

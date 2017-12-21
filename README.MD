# ToDo API

## Getting Started

A simple ToDo list example API using Node, Express, and MongoDB. See [Usage](#usage) for sample cURL commands below.

### Prerequisites

Install node via Homebrew:

```
brew install node
```

Install MongoDB via Homebrew:

```
brew install mongodb
```

Then, install Node modules:

```
npm install
```

### Installing

Give it a go!

```
npm start
```

If all goes well you will see the output below in your console log:

> Listening on port: 3000


## Usage

### Create a task

```
curl -i -X POST \
  http://localhost:3000/tasks \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -d name=Take%20Bart%20for%20a%20walk
```

### Get a list of tasks

```
curl -i -X GET http://localhost:3000/tasks
```

## Built With

* [Node.js](https://nodejs.org/) - Javascript runtime
* [Express.js](https://expressjs.com/) - Web framework
* [MongoDB](https://www.mongodb.com/) - To store data documents
* [Mongoose](https://www.npmjs.com/package/mongoose) - MongoDB ORM
* [Body-parser](https://www.npmjs.com/package/body-parser) - To parse incoming requests

# Voting App

User Stories

1. As an authenticated user, I can keep my polls and come back later to access them.
2. As an authenticated user, I can share my polls with my friends.
3. As an authenticated user, I can see the aggregate results of my polls.
4. As an authenticated user, I can delete polls that I decide I don't want anymore.
5. As an authenticated user, I can create a poll with any number of possible items.
6. As an unauthenticated or authenticated user, I can see and vote on everyone's polls.
7. As an unauthenticated or authenticated user, I can see the results of polls in chart form.
8. As an authenticated user, if I don't like the options on a poll, I can create a new option.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to have installed

```
Node.js v6.11.2 or greater
MongoDB v2.6.12 or greater
npm v3.10.10 or greater
```

### Installing

1. Click the fork button on the upper right hand corner of this repository.
2. Open the command line, navigate to the directory of your choice and type:

```
git clone https://github.com/yourUsername/voting-app.git
```

where 'yourUsername' is your github username.
Afterwards, install the dependencies by entering the following in the project directory:

```
npm install
```

Create a new .env file in the local repository directory with the following contents:

```
GITHUB_KEY=(your github key goes here)
GITHUB_SECRET=(your github secret goes here)
MONGO_URI=mongodb://localhost:27017/votingapp
PORT=8080
APP_URL=http://localhost:8080/
```

Run MongoDB in a separate command line window by navigating to where MongoDB
is installed and enter the following:

```
mongod.exe
```

Start the server by navigating to the project directory and enter the following:

```
node server.js
```

You can then open the project in a browser by navigating to http://localhost:8080/
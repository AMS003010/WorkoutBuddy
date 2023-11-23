# WorkoutBuddy
WorkOut-buddy is a dynamic website developed on the MERN (MongoDB, Express.js, React, Node.js) stack, designed to empower fitness enthusiasts on their wellness journey. This platform offers a comprehensive solution for individuals to easily log and manage their workouts.

## Features
* Users can create personilized workout forms to enhance their workout regime.
* An Elegant interface presenting an elegant interface designed to provide users with a seamless experience.



### Prerequisites

1. **Node.js** for running server-side JavaScript. 

2. **MongoDB Atlas** to store data about user and workouts


### To run this project locally
1. Install [nodejs](https://nodejs.org/en)
2. Create a [mongodb atlas](https://www.mongodb.com/atlas/database) account and get your MONGODB URI
3. Clone this repository and install the required packages using npm.

```
git clone https://github.com/AMS003010/WorkoutBuddy.git
cd WorkoutBuddy
npm install
```

5. Create a .env file in the backend directory and add your MONGODB_URI and also a SECRET to hash your passwords.

```
PORT='<port>'
MONGO_URI='<mongobd uri>'
SECRET='<key>'
```

6. Remaining in the WorkoutBuddy repository, run ```cd backend```  and ```npm start``` in the terminal with the project.  

7. Run ```cd frontend``` in another terminal and ```npm start``` in the terminal with the project.

8. Then go to [localhost:3000](http://localhost:3000/).


## Built With

- [Node.js](https://nodejs.org) - Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.
- [express](https://expressjs.com//) - Fast, unopinionated, minimalist web framework for Node.js
- [MongoDB Atlas](https://www.mongodb.com/atlas/database) - The cloud database for modern applications
- [Mongoose](https://mongoosejs.com/) - Elegant MongoDB object modeling for Node.js
- [React](https://react.dev/) - The library for web and native user interfaces

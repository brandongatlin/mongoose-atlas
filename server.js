require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// });


let uri = "mongodb://localhost/budget_db";
if (process.env.NODE_ENV === 'production') {
    uri = process.env.MONGODB_URI;
}
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});

// install dotenv package and create .env file
// create .gitignore with node_modules & .env
// create cluster in atlas
// whitelist IP address
// get connection string
// add to .env file
// add logic for dev/prod environments
// create heroku app
// add env var to config vars in the heroku app
// deploy to heroku
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () => {
    mongoose.connect(process.env.DB_URL)
    .then(() => console.log("DB connected successfully"))
    .catch((error) => {

        console.log("Issue in db connection");
        console.error(error.message);

//         process.exit(1) is a Node.js method that terminates the process immediately with an exit code of 1. The number you pass to process.exit() indicates the exit status:

//         > process.exit(0): Indicates a successful exit (no errors).
//         > process.exit(1): Indicates that the process exits due to an error or failure.

        process.exit(1);

    })
}

module.exports = dbConnect ;
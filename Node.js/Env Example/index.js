console.log(process.env.myVariable)
console.log(process.env.second)

//npm i dotenv

const dotEnv = require("dotenv");
dotEnv.config();
console.log(process.env.myEnvVariable);
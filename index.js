const express = require("express");
const { connection } = require("./config/db");
const UserRouter = require("./router/User.Router");
const ResturantRouter = require("./router/Resturant.Router");
const OrderRouter = require("./router/Order.Router");
const auth = require("./middleware/auth");


const app = express();

// home router
app.get("/", async (req, res) => {
  try {
    res.send(`<h1> Food Booking App </h1>`);

  } catch (error) {
    console.log(error.message);

  }

})


app.use('/', UserRouter)

app.use('/', auth)

app.use('/rest', ResturantRouter)
app.use('/order', OrderRouter)


app.use(express.json());




// connection to server

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`app listening on port ${process.env.port}`);
  } catch (error) {
    console.log({ error: `error in connections with the  port: ${error.message}` });
  }
});

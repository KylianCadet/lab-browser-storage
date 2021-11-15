const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();
app.use(cookieParser());
app.use(cors({
  origin: '*'
}));

const port = process.env.PORT ? process.env.PORT : 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cookie", (req, res) => {
  const cookieVal = req.params["cookie"] ? req.params["cookie"] : "foo";
  res.cookie("ThisIsMyCookie", cookieVal, {
    maxAge: 900000,
    httpOnly: true,
  });
  res.status(200).send("OK");
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

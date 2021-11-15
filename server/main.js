const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const port = process.env.PORT ? process.env.PORT : 3000;
const allowedOrigins = [
  "http://localhost:8000",
  "https://kyliancadet.github.io/",
];
const corsOptions = {
  // origin: function (origin, callback) {
  //   if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true);
  //   callback(new Error("Not allowed by CORS"));
  // },
  origin: true,
  credentials: true,
};

const app = express();
app.use(cookieParser());
app.use(cors(corsOptions));

app.get("/cookie/get", (req, res) => {
  console.log(req.cookies);
  res.send("test");
});

app.get("/cookie", (req, res) => {
  console.log(req.cookies)
  const cookieVal = req.query["cookie"] ? req.query["cookie"] : "foo";
  res.cookie("ThisIsMyCookie", cookieVal, {
    expires: req.query["exprires"] ? req.query["exprires"] : null,
    secure: req.query["secure"] === "true" ? true: false,
    httpOnly: false,
    domain: req.query["domain"] ? req.query["domain"] : null,
    path: req.query["path"] ? req.query["path"] : null,
    sameSite: req.query["sameSite"] ? req.query["sameSite"] : null,
  });
  res.status(200).send(req.cookies);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

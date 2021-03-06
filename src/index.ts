import * as dotenv from "dotenv";

dotenv.config();

import express from "express";
import routes from "@routes/index";

const app = express();

app.use(express.json());
app.use(routes);

app.get("/", (_, res) => {
  return res.send("Hello World");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started!!");
});

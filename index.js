const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");
app.use(express.json());
app.use(express.urlencoded());
app.use("/", require("./routes"));
app.listen(port, (err) => {
  if (err) {
    console.log("Failed to create Port at :>> ", port);
  }
  console.log("Server is running successfully at Port:>>", port);
});

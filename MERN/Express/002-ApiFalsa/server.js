const express = require("express");
const port = 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/usuario", require("./routes/usuarioRoutes")); //1
app.use("/api/compania", require("./routes/companiaRoutes")); //2
app.use("/api/usercomp", require("./routes/usercompRoutes")); //3

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

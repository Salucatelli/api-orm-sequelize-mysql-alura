const express = require("express");
const routes = require("./routes");
const port = 3000;

//App
const app = express();


//Middlers
routes(app);


//Server
app.listen(port || 3000, () => console.log(`Server running on port ${port}`));


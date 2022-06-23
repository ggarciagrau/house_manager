const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { apiPrefix } = require("./env");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const dayConceptsRoutes = require("./bundles/day_concepts/day_concepts.routes");
const platesRoutes = require("./bundles/plates/plates.routes");

app.use(apiPrefix + "/day-concepts", dayConceptsRoutes);
app.use(apiPrefix + "/plates", platesRoutes);

module.exports = app;
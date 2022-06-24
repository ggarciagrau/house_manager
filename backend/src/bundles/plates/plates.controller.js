const { HttpResponse } = require("../../lib/http_responses");
const genericResponses = require("../../lib/responses/generics.responses");
const dao = require("./plates.dao");
const controller = {};

controller.create = async (req, res) => {
    try {
        res.send(await dao.create(req.body))
    } catch (ex) {
        HttpResponse.respond(res, genericResponses.CREATED_FAILED);
    }
}

controller.readAll = async (req, res) => {
    try {
        res.send(await dao.readAll());
    } catch (ex) {
        HttpResponse.respond(res, genericResponses.READ_FAILED);
    }
}

module.exports = controller;
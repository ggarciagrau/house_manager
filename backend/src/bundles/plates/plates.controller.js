const { HttpResponse } = require("../../classes/http_responses");
const responses = require("../../classes/responses/plates.responses");
const dao = require("./plates.dao");
const controller = {};

controller.create = async (req, res) => {
    try {
        throw new Error()
        res.send(await dao.create(req.body))
    } catch (ex) {
        HttpResponse.respond(res, responses.CREATED_FAILED);
    }
}

module.exports = controller;
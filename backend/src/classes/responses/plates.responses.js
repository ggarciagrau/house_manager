const { HttpResponseInfo } = require("../http_responses");
const GenericMessages = require("./generic_messages");
const { PLATES } = require("./scopes.enum");
const Status = require("./status.enum")

module.exports = {
    CREATED_FAILED: new HttpResponseInfo(500, 1, Status.ERROR, PLATES, GenericMessages.CREATED.FALSE),
    UPDATED_FAILED: new HttpResponseInfo(500, 3, Status.ERROR, PLATES, GenericMessages.UPDATED.FALSE),
    DEELETE_FAILED: new HttpResponseInfo(500, 4, Status.ERROR, PLATES, GenericMessages.DELETED.FALSE)
}
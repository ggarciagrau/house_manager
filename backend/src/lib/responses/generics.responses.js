const { HttpResponseInfo } = require("../http_responses");
const GenericMessages = require("./generic_messages");
const { GENERICS } = require("./scopes.enum");
const Status = require("./status.enum")

module.exports = {
    READ_FAILED: new HttpResponseInfo(500, 1, Status.ERROR, GENERICS, GenericMessages.READED.FALSE),
    CREATED_FAILED: new HttpResponseInfo(500, 2, Status.ERROR, GENERICS, GenericMessages.CREATED.FALSE),
    UPDATED_FAILED: new HttpResponseInfo(500, 3, Status.ERROR, GENERICS, GenericMessages.UPDATED.FALSE),
    DEELETE_FAILED: new HttpResponseInfo(500, 4, Status.ERROR, GENERICS, GenericMessages.DELETED.FALSE)
}
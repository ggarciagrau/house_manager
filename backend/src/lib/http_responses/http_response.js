module.exports = class HttpResponse {

    static respond(responseObject, httpResponseInfo) {
        responseObject.status(httpResponseInfo.httpCode);
        responseObject.send(httpResponseInfo.getBody());
    }

}
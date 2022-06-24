module.exports = class HttpResponseInfo {
    #httpCode
    #internalCode;
    #scope;
    #status;
    #message;

    constructor(httpCode, internalCode, status, scope, message) {
        this.#httpCode  = httpCode;
        this.#internalCode = internalCode;
        this.#message = message;
        this.#scope = scope;
        this.#status = status;
    }

    getBody = () => ({
        code: this.#internalCode,
        status: this.#status,
        scope: this.#scope,
        message: this.#message
    });

    get httpCode() {
        return this.#httpCode;
    }

    get internalCode() {
        return this.#internalCode;
    }

    get message() {
        return this.#message;
    }

    get scope() {
        return this.#scope;
    }

    get status() {
        return this.#status;
    }
}
var url = require("url");
var ApiController = (function () {
    function ApiController(_request, _response) {
        this._request = _request;
        this._response = _response;
        this._response.setHeader("content-Type", "application/json");
        this._url = url.parse(this._request.url, true, true);
        this.Resolve();
    }
    ApiController.prototype.Resolve = function () {
        var _this = this;
        if (this.ReadBody) {
            var body = new Array();
            this._request.on("data", function (tmpData) { return body.push(tmpData); }).on("end", function () {
                _this._bodyRequest = Buffer.concat(body).toString();
                _this.CallMethod();
            });
        }
        else {
            this.CallMethod();
        }
    };
    Object.defineProperty(ApiController.prototype, "ReadBody", {
        get: function () {
            return this._request.method.search(/(PUT|POST)/i) > 0;
        },
        enumerable: true,
        configurable: true
    });
    ApiController.prototype.CallMethod = function (pName) {
        if (pName === void 0) { pName = this._request.method; }
        pName = this.FindMethod(pName);
        if (pName) {
            this[pName]();
        }
        else {
            this.NotImplemented("Funkce " + pName + " neexistuje v kontrolleru " + this.constructor.name);
        }
    };
    ApiController.prototype.FindMethod = function (pName) {
        for (var method in this) {
            if (typeof this[method] === "function" && method.toUpperCase() == pName.toUpperCase()) {
                return method;
            }
        }
        return null;
    };
    Object.defineProperty(ApiController.prototype, "Response", {
        get: function () {
            return this._response;
        },
        enumerable: true,
        configurable: true
    });
    ApiController.prototype.NotImplemented = function (pInfo) {
        if (pInfo === void 0) { pInfo = ""; }
        this.Response.writeHead(404);
        this.Response.end("Not implemented : " + pInfo);
    };
    return ApiController;
})();
exports.ApiController = ApiController;
//# sourceMappingURL=controller.js.map
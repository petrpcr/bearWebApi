var url = require("url");
var ApiController = (function () {
    function ApiController(_request, _response) {
        this._request = _request;
        this._response = _response;
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
    Object.defineProperty(ApiController.prototype, "BodyRequest", {
        get: function () {
            return this._bodyRequest;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApiController.prototype, "ReadBody", {
        get: function () {
            return /PUT|POST/i.test(this._request.method);
        },
        enumerable: true,
        configurable: true
    });
    ApiController.prototype.CallMethod = function (pName) {
        if (pName === void 0) { pName = this._request.method; }
        var pNamef = this.FindMethod(pName);
        if (pNamef) {
            this[pNamef]();
        }
        else {
            this.NotImplemented("Funkce " + pName + " neexistuje v kontrolleru " + this.constructor.name);
        }
    };
    ApiController.prototype.FindMethod = function (pName) {
        var RegName = new RegExp(pName, "i");
        for (var method in this) {
            if (typeof this[method] === "function" && RegName.test(method)) {
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
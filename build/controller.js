/// <reference path='../../declarations/node.d.ts' />
/// <reference path='../../declarations/ws.d.ts' />
//'use strict';
var ApiController = (function () {
    function ApiController(_request, _response) {
        this._request = _request;
        this._response = _response;
    }
    ApiController.prototype.Post = function () {
    };
    ApiController.prototype.Get = function (id) {
    };
    ApiController.prototype.GetALL = function () {
    };
    ApiController.prototype.Put = function () {
    };
    ApiController.prototype.Delete = function (id) {
    };
    return ApiController;
})();
exports.ApiController = ApiController;

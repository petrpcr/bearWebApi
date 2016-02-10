/*
 Library bearWebApi - ApiController
 Petr Pokorny
*/
var bear;
(function (bear) {
    var Http;
    (function (Http) {
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
        Http.ApiController = ApiController;
    })(Http = bear.Http || (bear.Http = {}));
})(bear || (bear = {}));

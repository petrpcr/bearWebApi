var url = require("url");
var Route = (function () {
    function Route(_Path, _GetController) {
        this._Path = _Path;
        this._GetController = _GetController;
        this._url = url.parse(this._Path[0] != "/" ? "/" + this._Path : this._Path, true, true);
    }
    Object.defineProperty(Route.prototype, "URL", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "Controller", {
        get: function () {
            return this._GetController;
        },
        enumerable: true,
        configurable: true
    });
    return Route;
})();
exports.Route = Route;
var Routing = (function () {
    function Routing() {
        this._Items = new Array();
    }
    Routing.prototype.Add = function (pRoute) {
        this._Items.push(pRoute);
    };
    Routing.prototype.Resolve = function (Request, Response) {
        var Controllers = this._Items.filter(function (itemRoute) {
            var _url = url.parse(Request.url);
            return _url.pathname.toUpperCase() == itemRoute.URL.pathname.toUpperCase();
        });
        if (Controllers.length >= 1) {
            var Controller = new Controllers[0].Controller(Request, Response);
            return true;
        }
        else {
            return false;
        }
    };
    return Routing;
})();
exports.Routing = Routing;
//# sourceMappingURL=router.js.map
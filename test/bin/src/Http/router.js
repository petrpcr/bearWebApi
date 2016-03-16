var url = require("url");
var Route = (function () {
    function Route(_Path, _GetController) {
        this._Path = _Path;
        this._GetController = _GetController;
        this._url = url.parse(_Path, true, true);
    }
    Object.defineProperty(Route.prototype, "URL", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Route.prototype, "GetController", {
        get: function () {
            return this._GetController;
        },
        enumerable: true,
        configurable: true
    });
    return Route;
})();
exports.Route = Route;
var Routes = (function () {
    function Routes() {
        this._Items = new Array();
    }
    Routes.prototype.Add = function (pRoute) {
        this._Items.push(pRoute);
    };
    Routes.prototype.Resolve = function (Request, Response) {
        var Controllers = this._Items.filter(function (itemRoute) {
            var _url = url.parse(Request.url);
            return _url.pathname == itemRoute.URL.pathname;
        });
        if (Controllers.length >= 1) {
            var Controller = new Controllers[0].GetController(Request, Response);
            return true;
        }
        else {
            return false;
        }
    };
    return Routes;
})();
exports.Routes = Routes;
//# sourceMappingURL=router.js.map
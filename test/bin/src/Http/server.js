var http = require("http");
var Server = (function () {
    function Server(_router, _port) {
        var _this = this;
        if (_port === void 0) { _port = 80; }
        this._router = _router;
        this._port = _port;
        this._httpServer = http.createServer(function (reg, res) { return _this._router.Resolve(reg, res); }).listen(this._port);
    }
    return Server;
})();
exports.Server = Server;
//# sourceMappingURL=server.js.map
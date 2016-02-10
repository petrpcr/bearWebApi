/*
 Library bear
 Petr Pokorny
*/
/// <reference path="../../typings/node/node.d.ts" />
var bear;
(function (bear) {
    var Http;
    (function (Http) {
        var Server = (function () {
            function Server(_port) {
                if (_port === void 0) { _port = 80; }
                this._port = _port;
            }
            return Server;
        })();
        Http.Server = Server;
    })(Http = bear.Http || (bear.Http = {}));
})(bear || (bear = {}));

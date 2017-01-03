var ctrl = require("./controller");
var route = require("../../src/Http/router");
var server = require("../../src/Http/server");
var Router = new route.Routing();
var Ctrl = new route.Route("api/Osoba", ctrl.TestCtrl);
Router.Add(Ctrl);
var srv = new server.Server(Router);
//# sourceMappingURL=server.js.map
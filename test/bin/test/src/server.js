var ctrl = require("./controller");
var route = require("../../src/Http/router");
var server = require("../../src/Http/server");
var Router = new route.Routes();
Router.Add(new route.Route("api/Osoba", ctrl.TestCtrl));
var srv = new server.Server(Router);
//# sourceMappingURL=server.js.map
/// <reference path='../../typings/main.d.ts' />
 import * as ctrl from "./controller";
 import * as route from "../../src/Http/router";
 import * as server from "../../src/Http/server";

import * as http from "http";

 var Router = new route.Routing();
 var Ctrl = new route.Route("api/Osoba",ctrl.TestCtrl)
 Router.Add(Ctrl)

var srv = new server.Server(Router);



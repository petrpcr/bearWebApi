/// <reference path='../../typings/main.d.ts' />
import * as ctrl from "./controller";
import * as route from "../../src/Http/router";
import * as server from "../../src/Http/server";

var Router = new route.Routes();

Router.Add(new route.Route("api/Osoba",ctrl.TestCtrl))

var srv = new server.Server(Router);


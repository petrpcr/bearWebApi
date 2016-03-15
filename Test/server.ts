/// <reference path='../typings/main.d.ts' />
import * as ctrl from "./controller";
import * as route from "../src/Http/router";
import * as server from "../src/Http/server";

var Router = route.Routes;

Router.Add(new route.Route("api/Osoba",(req,res)=> new ctrl.TestCtrl(req,res)))

var srv = new server.Server(Router);


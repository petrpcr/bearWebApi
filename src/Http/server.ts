/*
 Library bear
 Petr Pokorny
*/
/// <reference path="router.ts" />

// Třída server
import * as ctrl from "./controller";
import * as route from "./router";
import * as http from "http";


export class Server {
    private _httpServer:http.Server;
    constructor(
        private _router:route.Routes,
        private _port: number = 80
        ) {
            
      this._httpServer = http.createServer((reg,res)=> this._router.Resolve(reg,res))      
    }
}

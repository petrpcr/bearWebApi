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
    private _httpServer: http.Server;
    constructor(
        private _router: route.Routing,
        private _port: number = 8080
    ) {

        this._httpServer = http.createServer(
            (reg, res) => {
                this._router.Resolve(reg, res)
            }
            )
        this._httpServer.listen(this._port)
    }
}

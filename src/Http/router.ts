/*
 Library bear
 Petr Pokorny
*/

/// <reference path="controller.ts" />
/// <reference path="../../typings/main.d.ts" />

import * as url from "url";
import * as http from "http";
import * as ctrl from "./controller";

// Třída Route
export class Route {
    private _url: url.Url;

    constructor(private _Path: string, private _GetController:(Request: http.IncomingMessage, Response: http.ServerResponse)=> ctrl.ApiController<any, any>) {
        this._url = url.parse(_Path, true, true);
    }

    get URL(): url.Url {
        return this._url;
    }

    get GetController(): (Request: http.IncomingMessage, Response: http.ServerResponse) => ctrl.ApiController<any, any> {
        return this._GetController;
    }

}

export class Routes {
    private _Items: Array<Route>;

    constructor() {
        this._Items = new Array<Route>();
    }
    
    Add(pRoute:Route){
      this._Items.push(pRoute);    
    }
    
    Resolve(Request: http.IncomingMessage, Response: http.ServerResponse): boolean {
        
            var Controllers = this._Items.filter((itemRoute: Route) => {
                    var _url: url.Url = url.parse(Request.url);
                    return _url.pathname == itemRoute.URL.pathname
            })
            if (Controllers.length >= 1){
                var Controller = Controllers[0].GetController(Request,Response);
                return true;
            }
            else
            return false;
             
}


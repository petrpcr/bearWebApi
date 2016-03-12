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

    constructor(private _Path: string, private _Controller: ctrl.ApiController<any, any> = null) {
        this._url = url.parse(_Path, true, true);
    }

    get URL(): url.Url {
        return this._url;
    }

    get Controller(): ctrl.ApiController<any, any> {
        return this._Controller;
    }

}

export class Routes {
    private _Items: Array<Route>;

    constructor() {
        this._Items = new Array<Route>();
    }

    Resolve(Request: http.IncomingMessage, Response: http.ServerResponse): boolean {
        this._Items.forEach((itemRoute: Route) => {
            var _url: url.Url = url.parse(Request.url, true, true);
            if (_url.pathname == itemRoute.URL.pathname) {

                if (Request.method == "PUT" || Request.method == "POST") {
                    // čtení body
                    var body = "";
                    Request.on("data", (tmpData) => body += tmpData).on("end", () => {
                        itemRoute.Controller.InitRequest(Request, Response)
                        if (Request.method == "PUT")
                            itemRoute.Controller.Put();
                        else
                            itemRoute.Controller.Post();
                    }
                    )

                }
                else {
                    itemRoute.Controller.InitRequest(Request, Response);
                    if (Request.method == "GET")
                        itemRoute.Controller.Get();
                    else
                        itemRoute.Controller.Delete(_url.query.id)
                }


            }

        })
        return null;
    }
}


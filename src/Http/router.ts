/*
 Library bear
 Petr Pokorny
*/

/// <reference path="controller.ts" />

import * as ctrl from "./controller";
    
    // Třída Route
    export class Route {
        constructor(private _Path:string,private _Optional:string,private _Controller:ctrl.ApiController<any,any> = null) {

        }
    }
    
    export class Routs {
        private _Items:Array<Route>;
        
        constructor(){
            this._Items = new Array<Route>();
        }
    }


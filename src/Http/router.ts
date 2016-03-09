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
        
        constructor(private _Path:string,private _Controller:ctrl.ApiController<any,any> = null) {
                this._url = url.parse(_Path,true,true);
        }
        
        get URL():url.Url{
            return this._url;
        }
        
        get Controller():ctrl.ApiController<any,any>{
            return this._Controller;
        }
        
    }
    
    export class Routes {
        private _Items:Array<Route>;
        
        constructor(){
            this._Items = new Array<Route>();
        }
     
     Resolve(Request:http.IncomingMessage,Response:http.ServerResponse):boolean{
         this._Items.forEach((itemRoute:Route)=>
         {
             var _url:url.Url = url.parse(Request.url,true,true);
             if(_url.pathname == itemRoute.URL.pathname)
             {
                 itemRoute.Controller.InitRequest(Request,Response);
                 switch (Request.method){
                 case "GET":
                        itemRoute.Controller.GetALL();
                        break;
                 case "POST": 
                        itemRoute.Controller.Post(); 
                        break;
                 case "DELETE":
                        itemRoute.Controller.Delete(_url.query.id);
                        break;
                  case "PUT":
                        itemRoute.Controller.Put();
                        break;   
                 }
                 
                 
                 itemRoute.
             }
             
         })
         return null;
     }   
    }


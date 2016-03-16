/// <reference path='../../typings/main.d.ts' />

import * as http from "http";
import * as url from "url";

// Třída ApiController
export class ApiController<T, TID> {
    private _bodyRequest: string;
    private _bodyResponse: T;
    private _url: url.Url;


    constructor(private _request: http.IncomingMessage, private _response: http.ServerResponse) {
        this._response.setHeader("content-Type", "application/json");
        this._url = url.parse(this._request.url, true, true);
        this.Resolve()
    }

    public Resolve(): void {
        if (this._request.method == "PUT" || this._request.method == "POST") {
            // čtení body
            var body = new Array<any>();
            this._request.on("data", (tmpData:any) => body.push(tmpData)).on("end", () => {
                this._bodyRequest = Buffer.concat(body).toString();

                this.CallMethod();
            }
            )

        }
        else {
            this.CallMethod()

        }
    }
    
    public CallMethod(pName:string = this._request.method){
       // pName = pName.replace(/^a-z/,(str:string)=> str.toLowerCase())
       pName = this.FindMethod(pName);
       if (pName)
        this[pName]();
        else
        {
           this.Response.writeHead(404); 
        }
    }
    
    public FindMethod(pName:string):string{
      for (var method in this){
          if (typeof this[method] === "function" && method.toUpperCase() == pName.toUpperCase()){
              return method;
          }
      }  
      return null;
    }
    
    public get Response(): http.ServerResponse {
        return this._response;
    }

    public NotImplemented(pInfo: string = "") {
        this.Response.writeHead(404);
        this.Response.end("Not implemented : " + pInfo);
    }
    // // Create
    // public Post() {
    //     this.NotImplemented("Post");
    // }

    // // Read
    // public Get(id: TID = null) {
    //     this.NotImplemented("Get");
    // }

    // // Update
    // public Put() {
    //     this.NotImplemented("Put");
    // }

    // // Delete
    // public Delete(id: TID) {
    //     this.NotImplemented("Delete");
    // }
}


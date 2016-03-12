/// <reference path='../../typings/main.d.ts' />

import * as http from "http";
import * as url from "url";  
  
  // Třída ApiController
  export class ApiController<T,TID> {
      private _request: http.IncomingMessage;
      private _response:http.ServerResponse;
      private _bodyRequest:string;
      private _url:url.Url;
      
      constructor(){
      }
      
     InitRequest(pReq:http.IncomingMessage,pRes:http.ServerResponse,pBody:string=""){
         this._request = pReq;
         this._response = pRes;
         this._bodyRequest = pBody; 
         this._response.setHeader("content-Type","text/json");
         this._url = url.parse(this._request.url,true,true);
     }
     
     
     public  get Response():http.ServerResponse{
         return this._response;
     }
     
     public NotImplemented(pInfo:string = ""){
         this.Response.writeHead(404);
         this.Response.end("Not implemented : " + pInfo);
     }   
     // Create
     public Post(){
         this.NotImplemented("Post");
     }
     
     // Read
     public Get(id:TID = null){
         this.NotImplemented("Get");
     } 
     
     // Update
     public Put(){
         this.NotImplemented("Put");
     }
     
     // Delete
     public Delete(id:TID){
         this.NotImplemented("Delete");
     }
  }  
  
 
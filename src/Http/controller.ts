/// <reference path='../../typings/main.d.ts' />

import * as http from "http";
   
  
  // Třída ApiController
  export class ApiController<T,TID> {
      private _request: http.IncomingMessage;
      private _response:http.ServerResponse;
      
      constructor(){
      }
      
     InitRequest(pReq:http.IncomingMessage,pRes:http.ServerResponse){
         this._request = pReq;
         this._response = pRes;
         this._response.setHeader("Content-Type","text/json");
     }
     // Create
     public Post(){
         
     }
     
     // Read
     public Get(id:TID){
         
     }
     
     // Read ALL
     public GetALL(){
         
     } 
     
     // Update
     public Put(){
         
     }
     
     // Delete
     public Delete(id:TID){
         
     }
  }  
  
 
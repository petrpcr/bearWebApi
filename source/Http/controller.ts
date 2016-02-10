/*
 Library bearWebApi - ApiController
 Petr Pokorny
*/


/// <reference path="./typings/node/node.d.ts" />

import * as http from "http";


namespace bear.Http{
    
  // Třída ApiController
  export class ApiController<T,TID> {
      constructor(private _request: http.IncomingMessage, private _response:http.ServerResponse){
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
}
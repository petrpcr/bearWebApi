/// <reference path='../../typings/main.d.ts' />

import * as http from "http";
   
  export class Controllers{
      static items:Array<ApiController<any,any>>
  } 
  
  // Třída ApiController
  export class ApiController<T,TID> {
      private _request: http.ServerRequest;
      private _response:http.ServerResponse;
      
      constructor(){
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
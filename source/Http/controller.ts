/// <reference path="../../typings/node/node.d.ts" />
/*
 Library bear
 Petr Pokorny
 
 
 http://www.restapittuorial.com/lessons/httpmethods.html
*/

namespace bear.Http{
  // Třída ApiController
  class ApiController<T,ID> {
      constructor(private _request:IncomingMessage, private _response:any){
      
      }
     // Create
     public Post(){
         
     }
     
     // Read
     public Get(id:ID){
         
     }
     
     // Read ALL
     public GetALL(){
         
     } 
     
     // Update
     public Put(){
         
     }
     
     // Delete
     public Delete(id:ID){
         
     }
  }  
}
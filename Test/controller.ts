/// <reference path='../typings/main.d.ts' />

import * as ctrl from "../src/Http/controller";
import * as obj from "../src/Tools/activator";
import * as model from "./model";
import * as http from "http";
 
export class TestCtrl extends ctrl.ApiController<model.Osoba,string>{
 constructor(req:http.IncomingMessage,res:http.ServerResponse){
     super(req,res);
 }
 public Get(){
     this.Response.statusCode = 200;
     var instance:model.Osoba = obj.activator(model.Osoba);
     instance.Jmeno = "Petr"
     instance.Prijmeni = "Pokorný"
     
     this.Response.end(JSON.stringify(instance));
 }
    
}


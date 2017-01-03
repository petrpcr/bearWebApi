export class Osoba{
    Jmeno:string;
    Prijmeni:string;
    Evidovano:Date;
    
    CeleJmeno():string{
     return this.Jmeno + " " + this.Prijmeni    
    }
}
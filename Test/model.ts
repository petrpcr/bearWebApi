export class Osoba{
    Jmeno:string;
    Prijmeni:string;
    
    CeleJmeno():string{
     return this.Jmeno + " " + this.Prijmeni    
    }
}
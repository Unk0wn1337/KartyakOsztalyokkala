import Kartya from "./Kartya.js";
import { kartyaLista } from "./kepek.js";
class JatekTer{
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(){
        const szuloELEM = $("#jatekTerem");
        this.#kartyaLista = kartyaLista;
        for (let index = 0; index < kartyaLista.length; index++) {
            const kartya = new Kartya(szuloELEM,kartyaLista[index]);
        }
            

    }
    #init(){
        
    }
    #kever(){

    }
    #ellenorzes(){

    }
    #TriggerBlocked(){

    }
    
    #TriggerUnBlocked(){

    }

}
export default JatekTer;

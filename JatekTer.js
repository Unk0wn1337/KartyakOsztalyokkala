
import { kartyaLista } from "./kepek.js";
class JatekTer{
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista){
        const szuloELEM = $("article");
        this.#kartyaLista = kartyaLista;
        for (let index = 0; index < kartyaLista.length; index++) {
            const Lapok = new JatekTer(szuloELEM,kartyaLista[index]);
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

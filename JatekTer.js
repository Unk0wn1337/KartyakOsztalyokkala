import Kartya from "./Kartya.js";

class JatekTer{
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];
    
    constructor(kartyaLista){
        console.log(kartyaLista);
        const szuloELEM = $("#jatekTerem");
        this.#kartyaLista = kartyaLista;
        this.#kever();
        for (let index = 0; index < this.#kartyaLista.length; index++) {
            const kartya = new Kartya(szuloELEM,this.#kartyaLista[index]);
            
        }
            

    }
    #init(){
        
    }
    #kever(){
        for (let i = this.#kartyaLista.length-1; i >= 0; i--) {
            let index = parseInt(Math.random()*(i+1));
            let tempt = this.#kartyaLista[index];
            this.#kartyaLista[index] = this.#kartyaLista[i];
            this.#kartyaLista[i] = tempt;
        }

    }
    #ellenorzes(){
        

    }
    #TriggerBlocked(){
        
    }
    
    #TriggerUnBlocked(){

    }

}
export default JatekTer;

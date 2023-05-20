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
            const kartya = new Kartya(index, this.#kartyaLista[index], szuloELEM);
        }
        $(window).on("fordit", (event) => {
            let akt = event.detail;
            akt.setAllapot();

            this.#kivalasztottKartyaLista.push(akt);
            if(this.#kivalasztottKartyaLista.length == 2){
                this.#visszaFordit(this.#kivalasztottKartyaLista[0]);
                this.#visszaFordit(this.#kivalasztottKartyaLista[1]);
                this.#kivalasztottKartyaLista.pop();
                this.#kivalasztottKartyaLista.pop();
            }
        });
        
            

    }
    #visszaFordit(kephely){
        setTimeout(function () {
            kephely.setAllapot();
        }, 1000);
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
        const aktKep = !event.detail.aktKep;   
        console.log("TriggerBlocked")
    }
    
    #TriggerUnBlocked(){
        const aktKep = event.detail.aktKep;
        this.#kivalasztottKartyaLista.push(aktKep);
    }

}
export default JatekTer;

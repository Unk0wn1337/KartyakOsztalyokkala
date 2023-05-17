class Kartya{
 #fajlnev;
 #allapot;
 #blokkolt;
 #divElem;
 #imgElem;

    constructor(szuloELEM,fajlnev){
        this.#fajlnev = fajlnev;
        this.#allapot = false;
        this.#szuloELEM = szuloELEM;
        szuloELEM.append(
            `<div class "kartyak">
                <img src="${this.#fajlnev}" alt="fajl">
            </div>`
            
            );

    }
    setAllapot(){

    }
    getFajlnev(){
        
    }
    #setLap(){

    }
    #kattintasTrigger(){

    }

}

export default Kartya;
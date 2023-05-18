class Kartya{
    #fajlnev;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;
   
       constructor(szuloELEM,fajlnev){
           this.szuloELEM = szuloELEM;
           this.#fajlnev = fajlnev;
           this.#allapot = false;
           szuloELEM.append(
               `<div class "kartyak">
                   <img src="./kepek/hatter.jpg" alt="fajl">
               </div>`
               
               );
            this.#divElem = szuloELEM.children("div:last-child");
            this.#imgElem = this.#divElem.children("img");
            this.#divElem.on("click", () => {
                this.#kattintasTrigger();
                this.#setLap();
                console.log(); 
            })

   
       }
       setAllapot(){
        this.#allapot = !this.#allapot;
        this.#setLap();
   
       }
       getFajlnev(){
        return this.#fajlnev;
           
       }
       #setLap(){
        if (this.#allapot){
            this.#imgElem.attr("src",this.#fajlnev);
        } else {
            this.#imgElem.attr("src", "kepek/hatter.jpg");
        }

        }
        

    #kattintasTrigger(){
           const fordit = new CustomEvent("kepreKattintas", {detail: this});
           window.dispatchEvent(fordit);
            
   
       }
   
   }
   
   export default Kartya;
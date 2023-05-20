
import { kartyaLista } from "./kepek.js";

class Kartya{
    #fajlnev;
    #id;
    #allapot;
    #blokkolt;
    #divElem;
    #imgElem;
   
       constructor(id, fajlnev, szuloELEM){
           this.#allapot = false;
           this.#id = id;
           this.#fajlnev = fajlnev;
           szuloELEM.append(
               `<div class "kartyak">
               <img src="kepek/hatter.jpg" alt="fajl">
               </div>`
               
               );
            this.#divElem = szuloELEM.children("div:last-child");
            this.#imgElem = this.#divElem.children("img");
            this.#imgElem.on("click",() => {
                this.#kattintasTrigger();
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
        getId(){
            return this.#id;
        }
        

    #kattintasTrigger(){
        const fordit = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(fordit);
      }
   
   }
   
   export default Kartya;
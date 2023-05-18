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
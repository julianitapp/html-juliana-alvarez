document.addEventListener("DOMContentLoaded", () => {
  const cardsAdj = [
    {
     name:'catnoair' ,
     img:'imagenes/catnoair.jpg'
      }
      {
      name:'catnoair1' ,
       img:'imagenes/catnoair1.jpg'
      }    
      {
        name:'ladybug' ,
        img:'imagenes/ladybug.jpg'
            } 
            {
       name:'ladybug1' ,
       img:'imagenes/ladybug1.jpg'
                  } 
                  {
       name:'ladybugycatnoair' ,
       img:'imagenes/ladybugycatnoair.jpg'
                        } 
                        {
       name:'miraculous' ,
      img:'imagenes/miraculous.jpg'
                              }   

           {
       name:'catnoair' ,
       img:'imagenes/catnoair.jpg'
          }
         {
      name:'catnoair1' ,
     img:'imagenes/catnoair1.jpg'
         }    
          {
     name:'ladybug' ,
    img:'imagenes/ladybug.jpg'
          } 
           {
     name:'ladybug1' ,
    img:'imagenes/ladybug1.jpg'
      } 
      {
      name:'ladybugycatnoair' ,
      img:'imagenes/ladybugycatnoair.jpg'
       } 
     {
     name:'miraculous' ,
    img:'imagenes/miraculous.jpg'
      }  
         });
         const cuadricula = document.querySelector(".cuadricula");
         const resultado = document.querySelector("#resultado");
         var cartasEscogidas = [];
         var cartasEscogidasId = [];
         var cartasGanadas = [];
       
       //----------------- lecture_03 ----------------------------------//  
         function crearTablero (){
           for (let i = 0; i < cardAdj.length; i++) { // Loop que inicia en i=0, se incrementa de 1 en 1 (i++) y finaliza
                                                      // cuando i=cardAdj.length, es decir, 12.
             var carta = document.createElement('img'); // Crea elemento img cada vez que se ejecuta la función.
             carta.setAttribute('src', 'images/reverso.png'); //Asignar nuevo atributo a cada carta
                                                              //igual a la imagen 'reverso'.
             carta.setAttribute('data-id', i); //Asignar como atributo a cada carta creada, el id=i.
             carta.addEventListener('click', voltearCarta); //Detectar si la carta asignada recibe un click y ejecuta 
                                                            //la función voltearCarta.
             cuadricula.appendChild(carta); // Relaciona la carta creada con la variable cuadricula enlazada con la clase
                                            // cuadricula de html para que se imprima la carta creada en el div de html.
           }
         }
       });

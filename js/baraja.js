/*La baraja española, que está compuesta por 48 cartas divididas en
cuatro palos: oros, copas, espadas y bastos. Cada palo tiene 
12 cartas, que van desde el as hasta el 10, y luego tres cartas 
de figura: la sota, el caballo y el rey. Algunas variantes de 
esta baraja incluyen dos comodines o cuatro cartas adicionales 
llamadas 8 y 91*/

function naipes(cuarentaCartas) {
  const cartas = [];
  const figuras = ["sota", "caballo", "rey"];
  const palo = ["oro", "copa", "espada", "basto"];
  const cartasPorPalo = cuarentaCartas? 10 : 12 ; 
  
    for (let paloIndex = 0; paloIndex < palo.length; paloIndex++) {
        let i = 0;
      for (let index = 0; index < cartasPorPalo; index++) {
        
        if (index < cartasPorPalo-3) {
          cartas.push(index + 1 + " " + palo[paloIndex]);
        } else {
          cartas.push(palo[paloIndex] + " " + figuras[i]);
          i++;
        }
        
      }
    }
  
  return cartas;
}


alert("Vamos a ver las cartas...")
document.write(naipes(false));
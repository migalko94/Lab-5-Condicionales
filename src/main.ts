let puntuacion: number = 0;

const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10 + 1);
};

const transformaNumeroAleatorio = (cartaGenerada: number): number => {
  return cartaGenerada > 7 ? cartaGenerada + 2 : cartaGenerada;
};

const generarPuntuacion = (cartaGenerada: number): number => {
  return cartaGenerada < 10
    ? (puntuacion = puntuacion + cartaGenerada)
    : (puntuacion = puntuacion + 0.5);
};

const mostrarMensaje = (mensaje: string): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  elementoPuntuacion
    ? (elementoPuntuacion.innerHTML = mensaje)
    : console.error(
        "muestraMensajeComprobacion: No se ha encontrado el elemento con id puntuación"
      );
};

const mostrarPuntuacion = (): void => {
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  mostrarMensaje(mensaje);
};

const resultadoPartida = () => {
  if (puntuacion > 7.5) {
    gameOver();
  }
  if (puntuacion === 7.5) {
    partidaGanada();
  }
};

const partidaGanada = () => {
  mostrarPuntuacion();
  let mensaje: string = `${puntuacion} ¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉`;
  mostrarMensaje(mensaje);

  gestionarResultado();
};

const gameOver = () => {
  mostrarPuntuacion();
  let mensaje: string = `${puntuacion} Te has pasado 🪦 GAME OVER`;
  mostrarMensaje(mensaje);

  gestionarResultado();
};

const cambiarDisplay = (idMiniatura: string): void => {
  let cartaMostrada = document.getElementById("carta-mostrada");
  const miniatura = document.getElementById(idMiniatura);
  if (
    cartaMostrada &&
    miniatura &&
    cartaMostrada instanceof HTMLImageElement &&
    miniatura instanceof HTMLImageElement
  ) {
    cartaMostrada.src = miniatura.src;
  }
};

const mostrarCarta = (cartaGenerada: number): void => {
  switch (cartaGenerada) {
    case 1:
      cambiarDisplay("miniatura1");

      break;
    case 2:
      cambiarDisplay("miniatura2");

      break;
    case 3:
      cambiarDisplay("miniatura3");

      break;

    case 4:
      cambiarDisplay("miniatura4");

      break;
    case 5:
      cambiarDisplay("miniatura5");

      break;
    case 6:
      cambiarDisplay("miniatura6");

      break;

    case 7:
      cambiarDisplay("miniatura7");

      break;
    case 10:
      cambiarDisplay("miniatura10");

      break;
    case 11:
      cambiarDisplay("miniatura11");

      break;
    case 12:
      cambiarDisplay("miniatura12");

      break;

    default:
      console.log(cartaGenerada);
      console.log("No deberías estar aquí");

      break;
  }
};

const dameCarta = (): void => {
  let cartaGenerada = generarNumeroAleatorio();
  cartaGenerada = transformaNumeroAleatorio(cartaGenerada);
  mostrarCarta(cartaGenerada);
  generarPuntuacion(cartaGenerada);
  mostrarPuntuacion();
  resultadoPartida();
};

const gestionarResultado = () => {
  deshabilitaBotonComprobarCarta();
  deshabilitaBotonMePlanto();
  nuevaPartida();
};

const mensajeSegunPuntuacion = (mensaje: string): void => {
  if (puntuacion < 4) {
    mensaje = `${puntuacion} Has sido muy conservador 😐`;
    mostrarMensaje(mensaje);
  }
  if (puntuacion >= 4 && puntuacion < 6) {
    mensaje = `${puntuacion} Te ha entrado el canguelo eh? 😉`;
    mostrarMensaje(mensaje);
  }
  if (puntuacion >= 6 && puntuacion <= 7) {
    mensaje = `${puntuacion} Casi casi...🫣🫣`;
    mostrarMensaje(mensaje);
  }
};

const mePlanto = () => {
  mostrarPuntuacion();
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  mensajeSegunPuntuacion(mensaje);

  resultadoPartida();

  deshabilitaBotonComprobarCarta();
  deshabilitaBotonMePlanto();
};

const habilitaBotonComprobarCarta = () => {
  if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
    botonComprobarCarta.disabled = false;
  }
};
const habilitaBotonMePlanto = () => {
  if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  }
};

const deshabilitaBotonComprobarCarta = () => {
  if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
    botonComprobarCarta.disabled = true;
  }
};

const deshabilitaBotonMePlanto = () => {
  if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = true;
  }
};

const puntuacionACero = () => {
  puntuacion = 0;
};

const reinicioImagen = () => {
  const cartaBocaAbajo = "contenido/back.jpg";
  let cartaMostrada = document.getElementById("carta-mostrada");
  if (cartaMostrada && cartaMostrada instanceof HTMLImageElement) {
    cartaMostrada.src = cartaBocaAbajo;
  }
};

const ocultaBotonNuevaPartida = () => {
  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida) {
    botonNuevaPartida.hidden = true;
  }
};

const handlerNuevaPartida = () => {
  reinicioImagen();
  puntuacionACero();
  habilitaBotonComprobarCarta();
  habilitaBotonMePlanto();
  mostrarPuntuacion();
  ocultaBotonNuevaPartida();
  ocultaBotonQueHabriaPasado();
};

const nuevaPartida = () => {
  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.hidden = false;
  }
};

const ocultaBotonQueHabriaPasado = () => {
  const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.hidden = true;
  }
};

const handlerQueHabriaPasado = () => {
  mostrarQueHabriaPasado();

  ocultaBotonQueHabriaPasado();
};

const queHabriaPasado = () => {
  const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.hidden = false;
  }
};

const mostrarMensajeResultadoPosible = () => {
  let mensaje: string = `Tu puntuación habría sido ${puntuacion}`;

  if (puntuacion < 7.5) {
    mostrarMensaje(mensaje);
  }

  if (puntuacion > 7.5) {
    mensaje = `${puntuacion} Te habrías pasado 🪦 GAME OVER`;
    mostrarMensaje(mensaje);
  }
  if (puntuacion === 7.5) {
    mensaje = `${puntuacion} Habrías ganado! 🫠`;
    mostrarMensaje(mensaje);
  }
};

const mostrarQueHabriaPasado = () => {
  dameCarta();
  mostrarMensajeResultadoPosible();
};

document.addEventListener("DOMContentLoaded", mostrarPuntuacion);
const botonComprobarCarta = document.getElementById("dame-carta");
if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
  botonComprobarCarta.addEventListener("click", dameCarta);
}

const botonMePlanto = document.getElementById("me-planto");
if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
  botonMePlanto.addEventListener("click", nuevaPartida);
  botonMePlanto.addEventListener("click", queHabriaPasado);
  botonMePlanto.addEventListener("click", () => {
    {
      botonMePlanto.disabled = true;
    }
  });
}
const botonNuevaPartida = document.getElementById("nueva-partida");
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handlerNuevaPartida);
}
const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
  botonQueHabriaPasado.addEventListener("click", handlerQueHabriaPasado);
}

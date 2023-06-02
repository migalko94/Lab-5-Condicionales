let puntuacion: number = 0;

type EstadoPartida = "POR_DEBAJO_MAXIMO" | "JUSTO_MAXIMA" | "TE_HAS_PASADO";

const comprobarEstadoPartida = (puntuacion: number): EstadoPartida => {
  if (puntuacion > 7.5) {
    return "TE_HAS_PASADO";
  }
  if (puntuacion === 7.5) {
    return "JUSTO_MAXIMA";
  }

  return "POR_DEBAJO_MAXIMO";
};

const generarNumeroAleatorio = (): number => {
  return Math.floor(Math.random() * 10 + 1);
};

const transformaNumeroAleatorio = (cartaGenerada: number): number => {
  return cartaGenerada > 7 ? cartaGenerada + 2 : cartaGenerada;
};

const generarPuntuacion = (cartaGenerada: number) => {
  const puntosSumados = cartaGenerada < 10 ? cartaGenerada : 0.5;
  const puntuacionTrasSuma = puntuacion + puntosSumados;
  setPuntos(puntuacionTrasSuma);
};

const setPuntos = (nuevoPunto: number): void => {
  puntuacion = nuevoPunto;
};

const mostrarMensaje = (mensaje: string): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  elementoPuntuacion
    ? (elementoPuntuacion.innerHTML = mensaje)
    : console.error(
        "muestraMensajeComprobacion: No se ha encontrado el elemento con id puntuación"
      );
};

const resultadoPartida = () => {
  const estado = comprobarEstadoPartida(puntuacion);

  if (estado === "TE_HAS_PASADO") {
    gameOver();
  }
  if (estado === "JUSTO_MAXIMA") {
    partidaGanada();
  }
};

const partidaGanada = () => {
  let mensaje: string = `${puntuacion} ¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉`;
  mostrarMensaje(mensaje);

  gestionarResultado();
};

const gameOver = () => {
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
  let mensaje = `Tu puntuación es ${puntuacion}`;
  mostrarMensaje(mensaje);
  resultadoPartida();
};

const gestionarResultado = () => {
  habilitarBotonComprobarCarta(false);
  habilitarBotonMePlanto(false);
  habilitarBotonNuevaPartida();
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
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  mensajeSegunPuntuacion(mensaje);

  resultadoPartida();
  habilitarBotonNuevaPartida();
  habilitarBotonQueHabriaPasado();
  habilitarBotonComprobarCarta(false);
  habilitarBotonMePlanto(false);
};

const habilitarBotonComprobarCarta = (estaHabilitado: boolean) => {
  if (
    estaHabilitado &&
    botonComprobarCarta &&
    botonComprobarCarta instanceof HTMLButtonElement
  ) {
    botonComprobarCarta.disabled = false;
  }

  if (
    !estaHabilitado &&
    botonComprobarCarta &&
    botonComprobarCarta instanceof HTMLButtonElement
  ) {
    botonComprobarCarta.disabled = true;
  }
};

const habilitarBotonMePlanto = (estaHabilitado: boolean) => {
  if (
    estaHabilitado &&
    botonMePlanto &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
    botonMePlanto.disabled = false;
  }
  if (
    !estaHabilitado &&
    botonMePlanto &&
    botonMePlanto instanceof HTMLButtonElement
  ) {
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
  habilitarBotonComprobarCarta(true);
  habilitarBotonMePlanto(true);
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  mostrarMensaje(mensaje);
  ocultaBotonNuevaPartida();
  ocultaBotonQueHabriaPasado();
};

const habilitarBotonNuevaPartida = () => {
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

const habilitarBotonQueHabriaPasado = () => {
  const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
  if (
    botonQueHabriaPasado &&
    botonQueHabriaPasado instanceof HTMLButtonElement
  ) {
    botonQueHabriaPasado.hidden = false;
  }
};

const mostrarMensajeResultadoPosible = (estado: EstadoPartida) => {
  let mensaje: string = `Tu puntuación habría sido ${puntuacion}`;

  if (estado === "POR_DEBAJO_MAXIMO") {
    mostrarMensaje(mensaje);
  }

  if (estado === "TE_HAS_PASADO") {
    mensaje = `${puntuacion} Te habrías pasado 🪦 GAME OVER`;
    mostrarMensaje(mensaje);
  }
  if (estado === "JUSTO_MAXIMA") {
    mensaje = `${puntuacion} Habrías ganado! 🫠`;
    mostrarMensaje(mensaje);
  }
};

const mostrarQueHabriaPasado = () => {
  let cartaGenerada = generarNumeroAleatorio();
  cartaGenerada = transformaNumeroAleatorio(cartaGenerada);
  mostrarCarta(cartaGenerada);
  generarPuntuacion(cartaGenerada);

  const estado = comprobarEstadoPartida(puntuacion);
  mostrarMensajeResultadoPosible(estado);
};

let mensaje: string = `Tu puntuación es ${puntuacion}`;
document.addEventListener("DOMContentLoaded", () => mostrarMensaje(mensaje));
const botonComprobarCarta = document.getElementById("dame-carta");
if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
  botonComprobarCarta.addEventListener("click", dameCarta);
}

const botonMePlanto = document.getElementById("me-planto");
if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
}
const botonNuevaPartida = document.getElementById("nueva-partida");
if (botonNuevaPartida && botonNuevaPartida instanceof HTMLButtonElement) {
  botonNuevaPartida.addEventListener("click", handlerNuevaPartida);
}
const botonQueHabriaPasado = document.getElementById("que-habria-pasado");
if (botonQueHabriaPasado && botonQueHabriaPasado instanceof HTMLButtonElement) {
  botonQueHabriaPasado.addEventListener("click", handlerQueHabriaPasado);
}

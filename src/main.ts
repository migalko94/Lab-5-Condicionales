let puntuacion: number = 0;

const asDeCopas = document.getElementById("miniatura1");
const dosDeCopas = document.getElementById("miniatura2");
const tresDeCopas = document.getElementById("miniatura3");
const cuatroDeCopas = document.getElementById("miniatura4");
const cincoDeCopas = document.getElementById("miniatura5");
const seisDeCopas = document.getElementById("miniatura6");
const sieteDeCopas = document.getElementById("miniatura7");
const sotaDeCopas = document.getElementById("miniatura10");
const caballoDeCopas = document.getElementById("miniatura11");
const reyDeCopas = document.getElementById("miniatura12");

const mostrarCarta = (cartaGenerada: number): void => {
  let cartaMostrada = document.getElementById("carta-mostrada");
  switch (cartaGenerada) {
    case (cartaGenerada = 1):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        asDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = asDeCopas.src;
      }
      break;
    case (cartaGenerada = 2):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        dosDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = dosDeCopas.src;
      }
      break;
    case (cartaGenerada = 3):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        tresDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = tresDeCopas.src;
      }
      break;

    case (cartaGenerada = 4):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        cuatroDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = cuatroDeCopas.src;
      }
      break;
    case (cartaGenerada = 5):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        cincoDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = cincoDeCopas.src;
      }
      break;
    case (cartaGenerada = 6):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        seisDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = seisDeCopas.src;
      }
      break;

    case (cartaGenerada = 7):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        sieteDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = sieteDeCopas.src;
      }
      break;
    case (cartaGenerada = 10):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        sotaDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = sotaDeCopas.src;
      }
      break;
    case (cartaGenerada = 11):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        caballoDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = caballoDeCopas.src;
      }
      break;
    case (cartaGenerada = 12):
      if (
        cartaMostrada instanceof HTMLImageElement &&
        reyDeCopas instanceof HTMLImageElement
      ) {
        cartaMostrada.src = reyDeCopas.src;
      }
      break;

    default:
      console.log(cartaGenerada);
      console.log("No deberías estar aquí");

      break;
  }
};

const dameCarta = (): void => {
  let cartaGenerada = Math.floor(Math.random() * 10 + 1);

  if (cartaGenerada > 7) {
    cartaGenerada = cartaGenerada + 2;
  } else {
    cartaGenerada = cartaGenerada;
  }

  console.log(cartaGenerada);

  mostrarCarta(cartaGenerada);
  if (cartaGenerada < 10) {
    puntuacion = puntuacion + cartaGenerada;
  } else puntuacion = puntuacion + 0.5;

  muestraPuntuacion();
  gestionarGameOver();
};

const muestraPuntuacion = (): void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = mensaje;
  } else {
    console.error(
      "muestraMensajeComprobacion: No se ha encontrado el elemento con id puntuación"
    );
  }
};

const gestionarGameOver = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  if (puntuacion > 7.5) {
    if (
      elementoPuntuacion &&
      botonComprobarCarta &&
      botonComprobarCarta instanceof HTMLButtonElement &&
      botonMePlanto instanceof HTMLButtonElement
    ) {
      mensaje = `${puntuacion} Te has pasado 🪦 GAME OVER`;
      elementoPuntuacion.innerHTML = mensaje;
      botonComprobarCarta.disabled = true;
      botonMePlanto.disabled = true;
      nuevaPartida();
    }
  } else {
    console.error(
      "gestionarGameOver: no se ha encontrado el elemento con id dame-carta"
    );
  }
};

document.addEventListener("DOMContentLoaded", muestraPuntuacion);
const botonComprobarCarta = document.getElementById("dame-carta");
if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
  botonComprobarCarta.addEventListener("click", dameCarta);
}

const mePlanto = () => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  let mensaje: string = `Tu puntuación es ${puntuacion}`;
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = mensaje;
  }

  if (puntuacion < 4 && elementoPuntuacion) {
    mensaje = `${puntuacion} Has sido muy conservador 😐`;
    elementoPuntuacion.innerHTML = mensaje;
  }

  if (puntuacion >= 4 && puntuacion < 6 && elementoPuntuacion) {
    mensaje = `${puntuacion} Te ha entrado el canguelo eh? 😉`;
    elementoPuntuacion.innerHTML = mensaje;
  }
  if (puntuacion >= 6 && puntuacion <= 7 && elementoPuntuacion) {
    mensaje = `${puntuacion} Casi casi...🫣🫣`;
    elementoPuntuacion.innerHTML = mensaje;
  }

  if (puntuacion === 7.5 && elementoPuntuacion) {
    mensaje = `${puntuacion} ¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉`;
    elementoPuntuacion.innerHTML = mensaje;
  }

  if (botonComprobarCarta && botonComprobarCarta instanceof HTMLButtonElement) {
    botonComprobarCarta.disabled = true;
  }

  nuevaPartida();
  queHabriaPasado();
};

let botonNuevaPartidaCreado = false;
let botonQueHabriaPasadoCreado = false;

const nuevaPartida = () => {
  if (!botonNuevaPartidaCreado) {
    const botonNuevaPartida = document.createElement("button");
    botonNuevaPartida.setAttribute("id", "boton-nueva-partida");
    botonNuevaPartida.innerHTML = "Nueva partida 🆕";
    botonNuevaPartida.setAttribute("onclick", "location.reload()");

    const divBotones = document.getElementById("botones");
    if (divBotones) {
      divBotones.appendChild(botonNuevaPartida);
    }
    botonNuevaPartidaCreado = true;
  }
};

const queHabriaPasado = () => {
  if (!botonQueHabriaPasadoCreado) {
    const botonQueHabriaPasado = document.createElement("button");
    botonQueHabriaPasado.setAttribute("id", "boton-nuevo");

    botonQueHabriaPasado.innerHTML = "🤔 Si hubiese pedido una carta más...";
    const divBotones = document.getElementById("botones");
    if (divBotones) {
      divBotones.appendChild(botonQueHabriaPasado);
    }

    if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
      botonQueHabriaPasado.addEventListener("click", mostrarQueHabriaPasado);
      botonQueHabriaPasado.addEventListener(
        "click",
        () => (botonQueHabriaPasado.disabled = true)
      );
    }
    botonQueHabriaPasadoCreado = true;
  }
};

const mostrarQueHabriaPasado = () => {
  dameCarta();
  muestraPuntuacion();
  const elementoPuntuacion = document.getElementById("puntuacion");
  let mensaje: string = `Tu puntuación es ${puntuacion}`;

  if (puntuacion > 7.5 && elementoPuntuacion) {
    mensaje = `${puntuacion} Te habrías pasado 🪦 GAME OVER`;
    elementoPuntuacion.innerHTML = mensaje;
  }

  if (puntuacion === 7.5 && elementoPuntuacion) {
    mensaje = `${puntuacion} Habrías ganado! 🫠`;
    elementoPuntuacion.innerHTML = mensaje;
  }
};

const botonMePlanto = document.getElementById("me-planto");
if (botonMePlanto && botonMePlanto instanceof HTMLButtonElement) {
  botonMePlanto.addEventListener("click", mePlanto);
  botonMePlanto.addEventListener("click", () => {
    {
      botonMePlanto.disabled = true;
    }
  });
}

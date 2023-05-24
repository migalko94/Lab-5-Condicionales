# Laboratorio Condicionales

> Implementación del juego de cartas de las 7 1/2 en modo solitario.

## Reglas

1. Baraja una baraja española de 40 cartas y coloca las cartas boca abajo sobre la mesa.

2. Gira la primera carta y colócala boca arriba en la mesa. Esta carta será la carta del jugador.

3. Decide si deseas tomar otra carta o quedarte con la que tienes. El objetivo del juego es tener una mano que sume 7 y media puntos o lo más cerca posible de este número sin pasarse.

4. Si decides tomar otra carta, gira la siguiente carta boca arriba. Añade el valor de esta carta a tu mano y decide si deseas tomar otra carta o quedarte con lo que tienes. Puedes tomar tantas cartas como desees, pero si la suma de los valores de las cartas de tu mano supera los 7,5 puntos, pierdes automáticamente la partida.

5. Si decides quedarte con la carta que tienes, tu turno termina. Anota tu puntuación y pasa al siguiente turno.

6. Continúa jugando hasta que hayas jugado todas las cartas de la baraja o decidas detenerte.

7. Si logras una mano con una puntuación de 7 y media, has ganado el juego. Si no, tu objetivo es obtener la mano con la puntuación más cercana a 7 y media.

Es importante recordar que las cartas numéricas valen su valor nominal, es decir, el As (uno de cada palo) vale 1 punto, las cartas del 2 al 7 valen su valor nominal y las figuras (sota, caballo y rey) valen medio punto cada una.

## Material

Para simplificar la implementación del juego sólo vamos a mostrar cartas del palo de copas.

## Apartados obligatorios

**Emplearemos el _sandbox_ de TS.**

### 1. Mostrar puntuación

Arranca por crear una variable que almacena la puntuación que lleve el usuario:

1. Crea una variable para almacenar la puntuación, inicialmente será 0.

Creamos la variable con _let_ y la tipamos.

2. Crea un div en el HTML en el que podamos mostrar la puntuación.

Creamos el _div_ y cambiamos el _h1_.

3. Crea una función que se llame muestraPuntuacion que muestre la puntuación actual en el div.

Cremos la función `muestraPuntuacion`. En ella, destacamos que interpolamos con _backticks_ la variable y de forma alternativa tenemos un _console.error_.

4. Invoca a la función en cuanto este disponible el DOM.

Lo hacemos con `DOMContentLoaded`.

> Más adelante invocaremos muestraPuntuación cada vez que el usuario pida carta nueva.

### 2. Pedir carta

Implementa la funcionalidad de pedir carta.

- Hay que generar una función que nos devuelva una carta aleatoria, la podemos llamar dameCarta.
- Para ello exponemos un botón en el HTML que al pulsarlo llame a la función dameCarta.
- Para probar este caso, de momento muestra la carta elegida por consola.

Creamos la función `dameCarta`. En ella utilizamos _Math.random_ y _Math.floor_ para generar las opciones del 1 al 7 y 10, 11 y 12. Para ello usamos condicionales. Lo formulamos, además, de forma tal que se evite el 0. En la función queda también un _console.log_ que muestra la _cartaGenerada_ como guía ante posibles fallos.

En esta función, ya queda establecida también la asignación de valor. Sabemos que 10, 11 y 12 valen 0.5 y el resto su valor nominal. El as vale 1. Lo establecimos con condicionales. Por último _dameCarta_ invoca funciones auxiliares que exponemos más adelante.

Creamos el correlativo botón en el HTML.

### 3. Mostrar carta

Crea una función que se llame muestraCarta que muestre la carta que le pasemos por parámetro.
La firma podría ser:
`const mostrarCarta = (carta: number) : void;`

Como pistas, se nos dice además:

- Añade un img en el HTML en el que podamos mostrar la carta.
- Ese img va a tener un src que va a ser la url de la imagen de la carta, de momento, utiliza la imagen de carta boca abajo.
- Crea una función mostrar carta, para mapear valor a imagen de carta puedes utilizar un switch para hacer la conversión, recuerda que más arriba tienes los enlaces a las imágenes de las cartas.
- Cuando el usuario pulse en el bóton Pide Carta llama a pideCarta y con el resultado llama a mostrarCarta.

Creamos nuestras variables con las miniaturas de las diferentes opciones de cartas. Optamos por un modelo como el "carrusel" de fotos del módulo 4.

Creamos una función _mostrarCarta_ que mapea los múltiples valores posibles que se generen a cada carta que puede surgir desde el carrete de miniaturas. Para "valorar" los casos empleamos _switch_. Cuando el usuario pulsa en el botón Dame (_Pide_) Carta, llama a dameCarta (_pideCarta_) y con el resultado llama a mostrarCarta.

Para el caso de que no se dé ninguno de los supuestos, hemos creado un _default_ que, aunque en el _display_ no genere nada, muestra un mensaje y nos da por _console.log_ el valor que ha salido para que podamos corregir el error en caso de que surja.

### 4. Sumar puntuación

Una vez que le hemos dado la carta al usuario, tenemos que sumar la puntuación de la carta a la puntuación total.
Como pistas, se nos dice:

- Tenemos un div donde mostramos la puntuación y tenemos una variable donde la almacenamos.
- Suma el nuevo valor y llama a la función que creamos previamente para mostrar la información.

Hemos desarrollado esta funcionalidad y expuesto cómo funciona en el apartado correspondiente a _dameCarta_.

## Apartados opcionales

### Game Over

Si el usuario se pasa de 7,5 puntos, el juego termina y se muestra un mensaje de Game Over, además el usuario no puede seguir pidiendo cartas.

Lo implementamos con la función _gestionarGameOver_. Utilizamos condicionales. Si la puntuación excede los 7.5, no sólo tenemos un mensaje que revela el "game over" sino que se deshabilitan los botones de pedir carta, pero también (exponemos más adelante la función) el plantarse. No se puede plantar el usuario si ya ha perdido. Por último, aquí destaca el _console.error_ si algo va mal, tal y como se ha explicado en el presente módulo.

### Me planto

Añadir un botón para que el usuario pueda plantarse, si el usuario se planta, el juego termina, el usuario no puede pedir más cartas y:

- Si su puntación es menor que 4, mostrar un mensaje que diga "Has sido muy conservador".

- Si la puntuación es mayor o igual que 4 y menor que 6, mostrar un mensaje que diga "Te ha entrado el canguelo eh?".

- Si la puntuación ha sido mayor o igual a 6 o menor o igual a 7, mostrar un mensaje que diga... "Casi casi...".

- Si la puntuacion es 7.5, mostrar un mensaje que diga "¡Lo has clavado! ¡Enhorabuena!"

Implementamos la función _mePlanto_ con condicionales y en ella, llamamos a la función _nuevaPartida_ y _queHabriaPasado_ descritas más abajo. Al pulsar en el botón de plantarse, hemos introducido una función en línea que hace que "me planto" se deshabilite a sí mismo. Uno no puede plantarse dos veces.

### Nueva partida

Una vez que el usuario ha terminado la partida (sea porque se ha plantado o porque ha perdido), se le muestra un botón para que pueda empezar una nueva partida.

Creamos la función _nuevaPartida_. Esta función básicamente lo que hace es crear con _createElement_ un botón, al que damos un "id" para que su posicionamiento sea dentro del _div_ de botones del HTML y esté al lado del resto. Creamos el _div_ de botones para botones nuevos. A este botón le asignamos directamente en su cualidad HTML la capacidad de refrescar la página, que implica iniciar una nueva partida: `"onclick", "location.reload()"`

Nos encontramos con el problema de que el botón de nueva partida se duplica en algunos casos dada nuestra estructura. Por ejemplo, el usuario se planta y se genera la opción de nueva partida; pero si, además, quiere saber qué habría pasado se genera de nuevo el botón de nueva partida por la forma en que se invocan las funciones.

Para solucionar esto, hemos investigado y es un problema similar al llamado _double postback_ y que se soluciona a veces con una variable _boolean_. Así hemos hecho. De este modo, hay un _check_ de si existe ya o no el botón para no crearlo dos veces.

### Saber lo que habría pasado

Una vez que el usuario ya se ha plantado, se le muestra un botón para que pueda saber lo que habría pasado si hubiera seguido pidiendo cartas.

Creamos en esta ocasión dos funciones. Una función _queHabriaPasado_ tiene una lógica prácticamente idéntica a la del anterior apartado. Destacar que hemos optado por que el botón se deshabilite a sí mismo una vez pulsado.

Por otro lado, hemos creado la función _mostrarQueHabriaPasado_ que se limita a invocar a las funciones _dameCarta_ y _mostrarPuntuacion_.

El _Game Over_ que existiría lo hemos reflejado emulando a la función de _Game Over_. Utilizamos el condicional "_te habrías pasado_" en vez del actual "_te has pasado_".
Hemos hecho lo mismo si la puntuación es justamente 7.5, caso en que el usuario habría ganado.

Para evitar duplicidades, también recurrimos al método expuesto antes.

### Estila la aplicación

Utilizando CSS, estila la aplicación (margenes, espacios, colores, etc...) para que tenga el mejor aspecto posible.

Hemos estilado la aplicación con el color _darkseagreen_ y _lightcyan_. También con la propiedad `mix-blend-mode: luminosity;` le dimos un toque más retro. En este sentido, hay bastantes iconos de _Terra_ y algunos de ellos van directamente en el _HTML_. Queríamos un efecto parecido a cuando pintábamos el _console.log_.

Por último, como ya indicamos, elegimos una disposición en miniatura de las cartas que no se están mostrando y que en sí misma ya es más estética. La misma está tomada del "carrusel" de fotos del módulo 4.

> Fin del laboratorio

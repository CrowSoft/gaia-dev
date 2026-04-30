---
id: fase1-fundamentos
title: "Fase 1 — Fundamentos"
sidebar_label: "🔵 Fase 1 · Fundamentos"
sidebar_position: 2
description: "Sesiones 1 a 8 — LED, variables, loops, funciones y PWM. Proyecto final: semáforo con botón peatonal."
tags:
  - arduino
  - fundamentos
  - led
  - variables
  - funciones
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Fase 1 — Fundamentos
### Sesiones 1 a 8

:::info Perfil del estudiante
9 años · Ya armó un circuito simple · Se frustra rápido si no ve resultados rápido

**Regla de oro de esta fase:** algo tiene que funcionar en los primeros 15 minutos de cada sesión.
:::

---

## Qué debe saber al terminar la Fase 1

### 💡 Conceptos que debe poder explicar con sus palabras

- Qué es Arduino y para qué sirve en la vida real
- Qué hace `setup()` y qué hace `loop()`, y por qué son distintas
- Qué es una variable y por qué es útil
- Qué es un `for` y cuándo usarlo
- Qué hace un `if` / `else` y cómo conectarlo a una decisión real
- Qué es una función y por qué "organizar" el código importa
- Qué es PWM con sus propias palabras (sin la definición técnica)
- Por qué un LED necesita resistencia y qué pasa si no tiene

### ⌨️ Código que debe poder escribir sola

```cpp
// Pines
pinMode(pin, OUTPUT);         // configurar salida
pinMode(pin, INPUT_PULLUP);   // configurar botón

// Salidas digitales y analógicas
digitalWrite(pin, HIGH/LOW);  // encender / apagar
analogWrite(pin, 0-255);      // brillo / velocidad (PWM)

// Entradas
digitalRead(pin);             // leer botón

// Tiempo
delay(ms);                    // esperar milisegundos

// Variables
int nombre = valor;           // número entero
bool bandera = false;         // verdadero / falso

// Estructuras de control
for (int i = 0; i < n; i++) { }    // repetir n veces
if (condicion) { } else { }         // decidir

// Funciones
void miFuncion() { }          // definir
void miFuncion(int param) { } // definir con parámetro
miFuncion();                  // llamar

// Monitor serial
Serial.begin(9600);
Serial.println(valor);
```

### 🛒 Materiales de toda la Fase 1

| Material | Cantidad | Notas |
|----------|----------|-------|
| Arduino Uno + cable USB | 1 | |
| Breadboard grande | 1 | 830 puntos |
| Jumpers macho-macho | 20–30 | Colores variados |
| LEDs rojos | 3 | Para semáforo |
| LED verde | 2 | |
| LED amarillo | 2 | |
| LED azul | 1 | |
| LED RGB cátodo común | 1 | Para variación sesión 7 |
| Resistencias 220Ω | 10 | Para LEDs |
| Push buttons | 3 | |
| Buzzer pasivo | 1 | Variaciones sesión 4+ |
| Multímetro | 1 | Sesión 2 |

---

## Vista general

```
S1              S2              S3              S4
¿Qué es esto?  Mi primer        Variables    →  Bucles
Blink       →  circuito real →  y delay()       3 LEDs

S5              S6              S7              S8
Botón +      →  Funciones:   →  PWM: luz     →  🏆 SEMÁFORO
if / else       organizar       suave y fade     con botón
                el código                        peatonal
```

---

## Sesión 1 — ¿Qué es Arduino?

> 🌍 **Problema de la vida real:** ¿Cómo saben las luces de la calle cuándo encenderse? ¿Quién les dice qué hacer? Arduino es exactamente eso: una pequeña computadora que le da instrucciones al mundo físico.

**Gancho:** *"Hoy vas a escribir tu primera orden que el Arduino va a obedecer. No importa si te equivocas — los ingenieros se equivocan todo el tiempo y eso está bien."*

**Materiales:** Arduino + cable USB + computadora con IDE instalado. Nada más (usamos el LED integrado).

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Explorar la placa juntos: pines, GND, 5V, el chip central |
| 10–20 min | Abrir el IDE → File → Examples → 01.Basics → Blink. Leer el código en voz alta |
| 20–30 min | Cargar el programa → ver parpadear. Cambiar `delay(1000)` a `delay(100)` y a `delay(5000)` |
| 30–45 min | Ella elige los números. Predecir antes de cargar: *"¿qué va a pasar?"* |
| 45–50 min | Foto del setup. *"¿Qué le contarías a un amigo sobre hoy?"* |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```
Al encender (1 vez):        Para siempre:
┌─────────────┐             ┌─────────────────────┐
│   setup()   │    →        │       loop()        │
│             │             │                     │
│ "Prepárate" │             │  encender → esperar │
│             │             │  apagar  → esperar  │
└─────────────┘             │  encender → esperar │
                            │       ...           │
                            └─────────────────────┘
```

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Sustituir el LED por algo más
**Buzzer en el pin 13** → el Arduino bip-bip en lugar de parpadear. Sorpresa instantánea.

**Relay de 5V** → prende y apaga una lámpara de verdad. ⚠️ Supervisión total.
:::

**Por sus intereses:**

🏰 *Destripando la Historia:* "Imagínate que eres el mensajero del rey y tienes que parpadear una antorcha en código Morse. ¿Cómo harías la letra S (tres parpadeos rápidos)?"

🎵 *Música:* "¿Puedes hacer que parpadee al ritmo de una canción que te sepas?"

:::note Pregunta para la próxima sesión
*"¿Por qué crees que el LED de la placa no se quema si le mandamos corriente directamente, pero si conectamos uno externo sin resistencia sí se puede quemar?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** qué es Arduino, qué hace `setup()` vs `loop()`, qué hace `delay()`.

---

## Sesión 2 — El circuito: resistencias y LED externo

> 🌍 **Problema de la vida real:** Cuando conectas algo a la corriente equivocada, se quema. Los electricistas saben exactamente cuánta corriente necesita cada cosa. Hoy aprendemos eso.

**Gancho:** *"El LED interno de la placa está escondido. Hoy vas a poner tu propio LED donde tú quieras y hacerlo parpadear. Ese LED, ese circuito, es tuyo."*

**Materiales:** Arduino + breadboard + 1 LED + resistencia 220Ω + jumpers + multímetro.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Retomar la pregunta de la semana pasada. Analogía: *"la resistencia frena la corriente como una manguera más angosta frena el agua"* |
| 10–20 min | Conocer el breadboard. Dibujar cómo están conectados los hoyos. Probar con el multímetro |
| 20–35 min | Armar el circuito: pin 13 → resistencia 220Ω → LED → GND. Cargar Blink |
| 35–45 min | Experimentar: ¿qué pasa si volteas el LED? ¿Si quitas la resistencia? Medir voltaje con multímetro |
| 45–55 min | Mover el cable al pin 7 y cambiar el código. Ella lo hace sola |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```
Circuito:
Arduino Pin 13 → [R 220Ω] → (+)LED(-) → GND

Cómo leer el color de la resistencia:
220Ω = Rojo · Rojo · Café · Dorado
        2  ·   2  ·  ×10  ·  ±5%

El LED tiene polaridad:
  Pata larga (+) → va hacia el positivo
  Pata corta (-) → va hacia GND
```

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Sustituir el LED por algo más
**LED de 10mm gigante** → mucho más visible y espectacular.

**Tira de LEDs de 5V** (con transistor NPN) → ilumina una parte de su cuarto.

**Motor de vibración** (de teléfono viejo) → el Arduino hace vibrar algo físico.
:::

:::tip Usar el cautín
Si los headers del Arduino están sueltos, este es el momento perfecto para que ella vea — y con supervisión, intente — soldar. Es muy motivador la primera vez.
:::

**Por sus intereses:**

🦋 *Animales:* "Las luciérnagas parpadean para comunicarse. Hoy tú también tienes tu propia luciérnaga electrónica."

:::note Pregunta para la próxima sesión
*"¿Cómo harías para cambiar la velocidad del parpadeo sin tener que cambiar el número cada vez? ¿Hay una forma más inteligente?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** cómo armar un circuito en breadboard, por qué existe la resistencia, polaridad del LED, cómo medir con el multímetro.

---

## Sesión 3 — Variables

> 🌍 **Problema de la vida real:** En las apps de tu teléfono, cuando cambias el volumen, no reprograman toda la app. Hay un número guardado que cambian. Eso es una variable.

**Materiales:** Mismo circuito de sesión 2. No se necesita nada nuevo.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Ella arma el circuito de memoria. Cargar Blink y confirmar que funciona → victoria temprana |
| 10–20 min | El problema: buscar el número dos veces. *"¿No sería mejor tenerlo en un solo lugar?"* |
| 20–35 min | Crear `int velocidad = 500;` y reemplazar los `delay()`. Cambiar solo el número arriba |
| 35–45 min | Agregar `int tiempoEncendido` y `int tiempoApagado` por separado |
| 45–50 min | Reto libre: *"¿Puedes hacer que parezca que respira?"* |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```cpp
int velocidad = 500;
 │      │         │
 │      │         └── valor (puede cambiar)
 │      └──────────── nombre (ella lo elige)
 └─────────────────── tipo (por ahora siempre int)
```

Cuando el código llega a `delay(velocidad)`, lo sustituye mentalmente por `delay(500)`.

:::tip Hacerlo tangible
Escribir la variable en un **post-it** y pegarlo junto a la computadora. Cuando ella cambia el número, cambiar también el post-it. *"Esto es lo que el Arduino tiene en su memoria ahorita."*
:::

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Ampliar el circuito
**Segundo LED** con su propio tiempo → dos variables independientes, se desincroniza.

**Buzzer:** `tone(pin, frecuencia)` → la variable cambia el tono, no solo la velocidad.
:::

**Por sus intereses:**

🏰 *Destripando la Historia:* "Los barcos se comunicaban con señales de luz. El código Morse tiene tiempos exactos: punto = corto, raya = largo. ¿Puedes hacer la letra A (punto-raya) con variables?"

🎵 *Música:* "¿Puedes hacer que el LED parpadee al ritmo de tu canción favorita?"

:::note Pregunta para la próxima sesión
*"Si quisieras que el LED parpadeara 10 veces seguidas y luego se apagara, ¿tendrías que escribir encender-apagar 10 veces? ¿O hay una forma más corta?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** qué es una variable, cómo declararla, por qué los nombres descriptivos importan, qué son los comentarios `//`.

---

## Sesión 4 — Bucles `for`

> 🌍 **Problema de la vida real:** Cuando una canción tiene un coro que se repite, el compositor no escribe la letra 4 veces. Escribe "repetir coro ×4". En programación, eso se llama bucle.

**Gancho:** *"Hoy vas a hacer que 3 LEDs se enciendan en secuencia, como las luces de un escenario. Sin copiar y pegar el mismo código 30 veces."*

**Materiales:** Arduino + breadboard + 3 LEDs de distintos colores + 3 resistencias 220Ω + jumpers.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Ella arma el circuito: 3 LEDs en pines 9, 10, 11 |
| 10–25 min | Hacer la secuencia manualmente (sin `for`) → señalar que con 10 LEDs sería imposible |
| 25–40 min | Introducir el `for` con arreglo de pines |
| 40–50 min | Experimentar: cambiar orden del arreglo, cambiar el `delay`, agregar `for` inverso |
| 50–55 min | Reto: efecto "ida y vuelta" sin repetir el código de ida |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```cpp
int pines[] = {9, 10, 11};

for (int i = 0; i < 3; i++) {
//        │         │    │
//        │         │    └── "sube i en 1 cada vuelta"
//        │         └─────── "mientras i sea menor que 3"
//        └───────────────── "empieza i en 0"
  digitalWrite(pines[i], HIGH);
  delay(300);
  digitalWrite(pines[i], LOW);
}
```

```
Vuelta 0: pines[0] = pin 9  → LED izquierdo
Vuelta 1: pines[1] = pin 10 → LED centro
Vuelta 2: pines[2] = pin 11 → LED derecho
```

:::warning El índice empieza en 0, no en 1
Esto suele sorprender. Vale la pena dedicarle un momento específico.
:::

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Efectos con 3 LEDs
**"Cargando"** → encienden de uno en uno, luego apagan todos juntos.

**"Latido"** → encender todos → apagar → pausa corta → encender → pausa larga.

**"K.I.T.T."** (El Auto Fantástico) → ida y vuelta continua.
:::

**Por sus intereses:**

🎵 *Música:* "El `for` es como una partitura que dice 'toca esta nota, espera, siguiente nota'. ¿Puedes hacer una melodía de 3 notas?"

🦋 *Animales:* "Las luciérnagas macho y hembra parpadean en patrones distintos para reconocerse. Crea dos patrones diferentes."

🏰 *Destripando la Historia:* "Los faros de los puertos tenían secuencias específicas para que los barcos supieran dónde estaban. Crea la señal de tu puerto."

:::note Pregunta para la próxima sesión
*"El LED siempre hace lo mismo sin importar lo que pase. ¿Cómo le dirías al Arduino que haga algo diferente solo cuando tú le das una señal?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** qué es un `for`, qué son los arreglos, por qué el índice empieza en 0.

---

## Sesión 5 — `if` / `else`: el Arduino que decide

> 🌍 **Problema de la vida real:** Cuando el semáforo detecta que no hay carros, cambia más rápido. Está tomando una decisión basada en información. Hoy hacemos eso.

**Gancho:** *"Hasta ahora el Arduino hace lo mismo sin importar nada. Hoy por primera vez va a reaccionar a ti."*

**Materiales:** Arduino + breadboard + 1 LED + resistencia 220Ω + 1 botón push + jumpers.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Conectar el botón al pin 2 con `INPUT_PULLUP` |
| 10–20 min | Leer el botón en el monitor serial. Ver 1 y 1 y 1... luego presionar y ver 0 |
| 20–35 min | Escribir el primer `if`: LED enciende cuando botón en LOW |
| 35–45 min | Invertir la lógica → ella lo resuelve sola |
| 45–55 min | Reto: LED verde = sin botón, LED rojo = botón presionado |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```
         ┌────────────────────┐
         │ ¿Botón presionado? │
         └────────┬───────────┘
                  │
        ┌─────────┴──────────┐
       SÍ                    NO
        │                    │
        ▼                    ▼
  LED encendido         LED apagado
```

```cpp
// INPUT_PULLUP: sin presionar = HIGH, presionado = LOW
if (digitalRead(2) == LOW) {
  digitalWrite(LED, HIGH);  // botón presionado
} else {
  digitalWrite(LED, LOW);   // botón suelto
}
```

:::tip Por qué INPUT_PULLUP
Usa la resistencia interna del Arduino. No necesitamos resistencia externa para el botón.
Sin presionar → pin HIGH. Al presionar → pin LOW (conecta directo a GND).
:::

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Sustituir el botón
**Dos cables de jumper** que hay que tocar entre sí → más dramático y teatral.

**Sensor de inclinación (tilt sensor)** → el LED reacciona si la placa está inclinada.
:::

:::tip Sustituir el LED
**Buzzer** → el botón hace sonar una alarma (como un timbre de puerta real).

**Servo** → el botón hace girar algo (como una compuerta que se abre).
:::

**Por sus intereses:**

🏰 *Historias y personajes:* "Eres la guarda del castillo. El botón es la palanca secreta. Si alguien la activa, suena la alarma. Programa el sistema de seguridad."

🦋 *Animales:* "Algunos animales se congelan cuando detectan peligro. ¿Puedes hacer que los LEDs se congelen cuando presionas el botón?"

:::note Pregunta para la próxima sesión
*"Cuando el código para encender y apagar el LED se repite en varios lugares, ¿hay una forma de escribirlo una sola vez y llamarlo cuando lo necesites?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** `if / else`, `digitalRead()`, `INPUT_PULLUP`, `==` vs `=`, monitor serial.

---

## Sesión 6 — Funciones

> 🌍 **Problema de la vida real:** En una receta, cuando dice "haz la salsa", no escribe toda la receta ahí mismo. Te dice que vayas a la página 47. Las funciones son eso: instrucciones con nombre.

**Materiales:** Mismo circuito de sesión 5. No se necesita nada nuevo.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Revisar código de sesión 5. *"¿Qué partes hacen 'una sola cosa'?"* |
| 10–25 min | Crear la primera función `void encenderLed()` |
| 25–35 min | Función con parámetro: `void parpadear(int veces)` |
| 35–45 min | Refactorizar el código de sesión 5 usando funciones |
| 45–50 min | Reto: función `alerta()` que parpadea rápido 5 veces y espera |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```cpp
// DEFINIR (una sola vez):
void parpadear(int veces) {
  for (int i = 0; i < veces; i++) {
    digitalWrite(LED, HIGH);
    delay(200);
    digitalWrite(LED, LOW);
    delay(200);
  }
}

// USAR (todas las veces que quieras):
void loop() {
  parpadear(3);   // ← aquí
  delay(1000);
  parpadear(1);   // ← y aquí
}
```

El objetivo: que `loop()` se lea casi como español.

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Funciones con personalidad
`celebrar()` → parpadeo rápido de todos los LEDs + buzzer.

`alerta()` → LED rojo parpadeando rápido.

`dormido()` → LED azul parpadeando muy lento, como respiración.

Luego el `loop()` queda: `if (boton) { alerta(); } else { dormido(); }`
:::

**Por sus intereses:**

🏰 *Historias y personajes:* "Cada función es un personaje con su propio comportamiento. `villano()` hace una cosa, `heroe()` hace otra. El `loop()` es la historia de lo que pasa."

🎵 *Música:* "Las funciones son como acordes con nombre. Puedes construir una 'canción' de LEDs llamando funciones en orden."

🦋 *Animales:* Funciones `dormir()`, `comer()`, `correr()` para una "mascota LED" que cambia de estado con el botón.

:::note Pregunta para la próxima sesión
*"El LED siempre está completamente encendido o completamente apagado. ¿Crees que se puede hacer que esté a la mitad de brillo? ¿Cómo?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** definir y llamar funciones, usar parámetros, qué es refactorizar, por qué el código legible importa.

---

## Sesión 7 — PWM: la luz que respira

> 🌍 **Problema de la vida real:** El regulador de luz de tu cuarto no tiene dos posiciones: encendido o apagado. Puede estar a la mitad. Los focos de teatro suben y bajan suavemente. Eso es lo que hacemos hoy.

**Gancho:** *"El Arduino no puede dar 'medio voltaje'. Pero tiene un truco muy inteligente: parpadea tan rápido que tu ojo no lo ve y parece que está atenuado. Ese truco se llama PWM."*

**Materiales:** Arduino + breadboard + 1 LED en pin 9 + resistencia 220Ω. Opcional: LED RGB cátodo común.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–10 min | Explicar PWM: abrir y cerrar los ojos muy rápido → parece que la luz está tenue. Los pines con `~` lo pueden hacer |
| 10–20 min | `analogWrite(9, 0)` → `analogWrite(9, 127)` → `analogWrite(9, 255)`. Ella elige números al azar |
| 20–35 min | Efecto fade: `for` de 0 a 255 con `delay(8)`, luego el inverso |
| 35–45 min | Efecto respiración: combinar los dos `for` en el `loop()` |
| 45–55 min | Reto: *"¿Puedes hacer que el LED lata como un corazón?"* |

  </TabItem>
  <TabItem value="concepto" label="🧠 Concepto clave">

```
analogWrite(pin, 255):  ████████████████  siempre encendido
analogWrite(pin, 127):  ████░░░░████░░░░  mitad del tiempo
analogWrite(pin, 64):   ██░░░░░░██░░░░░░  cuarto del tiempo
analogWrite(pin, 0):    ░░░░░░░░░░░░░░░░  siempre apagado

→ Tan rápido que el ojo lo ve como distintos brillos
```

:::warning Solo pines con ~
Los pines 3, 5, 6, 9, 10, 11 pueden usar `analogWrite()` en el Arduino Uno.
:::

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Con LED RGB (cátodo común, 4 patas)
```cpp
// Conectar R=9, G=10, B=11
analogWrite(9, 255);  // rojo puro
analogWrite(10, 0);
analogWrite(11, 0);
// Mezclar valores → cualquier color del espectro
```
Hacer un ciclo que recorra todos los colores → efecto arcoíris.
:::

:::tip Simular una vela con random()
```cpp
int brillo = random(100, 255);
analogWrite(9, brillo);
delay(random(50, 150));
```
Parpadeo irregular que simula perfectamente la llama de una vela.
:::

**Por sus intereses:**

🎵 *Música:* "En los conciertos, el técnico de luces sube y baja la intensidad. Tú eres la técnica de luces hoy."

🦋 *Animales:* "Las medusas tienen una luz que pulsa suavemente. Haz la medusa electrónica."

🏰 *Destripando la Historia:* "Las velas de las iglesias medievales parpadeaban con el viento. Haz un LED que simule una vela con `random()`."

:::note Pregunta para la próxima sesión
*"Ya sabes encender, apagar, atenuar y crear secuencias. ¿Qué pasaría si combinamos todo en un solo proyecto real?"*
:::

  </TabItem>
</Tabs>

**Al salir de esta sesión sabe:** `analogWrite()`, valores 0–255, qué pines tienen PWM, cómo combinar dos `for` para un efecto continuo, `random()`.

---

## Sesión 8 — 🏆 Mini-proyecto: El Semáforo

> 🌍 **Problema de la vida real:** Los semáforos inteligentes no solo cuentan tiempo: responden a las personas. El botón peatonal le dice al semáforo que alguien quiere cruzar. Hoy construyes uno de verdad.

**Materiales:** Arduino + LED rojo + LED amarillo + LED verde + LED blanco/azul (peatón) + 4 resistencias 220Ω + 1 botón + jumpers. Opcional: buzzer.

<Tabs>
  <TabItem value="flujo" label="📋 Flujo de sesión" default>

| Tiempo | Actividad |
|--------|-----------|
| 0–5 min | Diseñar en papel: dibujar el semáforo y sus estados. ¿Cuánto dura cada color? ¿Qué pasa con el botón? |
| 5–20 min | Ella arma el circuito completo: 4 LEDs + resistencias + botón |
| 20–30 min | **Etapa 1:** Ciclo básico sin botón (verde 3s → amarillo 1s → rojo 3s) |
| 30–40 min | **Etapa 2:** Leer el botón con variable `bool peatonEspera` |
| 40–50 min | **Etapa 3:** Responder al peatón al final del ciclo. Resetear la bandera |
| 50–60 min | Prueba y ajuste. Ella opera el semáforo |

  </TabItem>
  <TabItem value="concepto" label="🧠 Diagrama de flujo">

```
         ┌──────────────────┐
         │     INICIO       │
         └────────┬─────────┘
                  │
         ┌────────▼─────────┐
         │  Verde (3 seg)   │◄──────────────────┐
         └────────┬─────────┘                   │
                  │                             │
         ┌────────▼─────────┐                   │
         │ Amarillo (1 seg) │                   │
         └────────┬─────────┘                   │
                  │                             │
         ┌────────▼─────────┐                   │
         │   Rojo (3 seg)   │                   │
         └────────┬─────────┘                   │
                  │                             │
         ┌────────▼──────────────┐              │
         │ ¿peatonEspera = true? │              │
         └───┬───────────────┬───┘              │
            SÍ               NO                 │
             │               └──────────────────┘
    ┌────────▼────────┐
    │  Verde peatón   │
    │  (parpadeo ×5)  │
    │ peatonEspera =  │
    │    false        │
    └────────┬────────┘
             └──────────────────────────────────┘
```

  </TabItem>
  <TabItem value="divertido" label="🎉 Variaciones">

:::tip Detalles realistas
**Buzzer:** pitido lento durante el rojo, pitido rápido durante el verde peatonal.

**Monitor serial:** mostrar el estado actual en tiempo real.

**LED RGB** en lugar de 3 LEDs separados → más limpio visualmente.
:::

:::tip Ampliar el proyecto
**Segundo semáforo coordinado:** cuando uno está verde, el otro está rojo.

**Modo nocturno:** si hay poca luz (con LDR) → solo el amarillo parpadea.
:::

**Por sus intereses:**

🏰 *Historias y personajes:* "Eres la controladora de tráfico de una ciudad medieval. Los caballos (carros) van por un lado, los aldeanos (peatones) por el otro."

🦋 *Animales:* Renombrar todo: el semáforo controla quién cruza el río — cocodrilos (rojo) o flamencos (verde peatonal).

  </TabItem>
  <TabItem value="checklist" label="✅ Checklist">

Antes de cerrar la sesión 8, verificar que ella puede:

| ☐ | Tarea |
|---|-------|
| ☐ | Explicar el ciclo verde → amarillo → rojo con sus palabras |
| ☐ | Demostrar que el botón funciona en cualquier momento del ciclo |
| ☐ | Confirmar que el semáforo atiende al peatón al **terminar** el ciclo (no interrumpe) |
| ☐ | Mostrar que después de dar paso al peatón, vuelve al ciclo normal |
| ☐ | Explicar cada parte del código sin ayuda |

  </TabItem>
</Tabs>

**Código nuevo en esta sesión:** `bool peatonEspera = false;` — variable booleana como bandera de estado.

---

## ✅ Cierre de Fase 1

Al terminar la sesión 8, hacer una revisión breve. Ella responde con sus palabras:

| Pregunta | Lo que esperamos escuchar |
|----------|--------------------------|
| ¿Qué hace `setup()`? | Se ejecuta una vez cuando enciende |
| ¿Qué hace `loop()`? | Se repite para siempre |
| ¿Para qué sirve una variable? | Para guardar un valor con nombre |
| ¿Qué hace un `for`? | Repetir algo un número de veces |
| ¿Qué hace un `if`? | Hacer algo solo si se cumple una condición |
| ¿Qué es una función? | Un bloque de código con nombre que puedo llamar |
| ¿Qué es PWM? | Parpadear muy rápido para simular brillo intermedio |
| ¿Por qué el LED necesita resistencia? | Para que no se queme con demasiada corriente |

:::tip Criterio de avance
Si puede responder **6 de 8** con sus palabras (no necesitan ser exactas), está lista para la Fase 2.
:::

---

*Siguiente: 🟡 Fase 2 — Sensores (próximamente)*

*Plan Arduino para niñas · 2026*
# JS NOTES

## BOM

### Browser Object Model

## DOM

### Document Object Model

HTML
Árbol de elementos --> nodos relacionados.

### Eventos

## UML
Unified Modeling Language
Modelo gráfico.
Diagramas de interacción.

## SPA
Single Page Application

-----
## Variables

Es una referencia/definición que apunta a un valor en memoria.

Cuando un valor pierde la referencia, se quita de memoria, y pasa a ser susceptible de garbage collector.

Cuando definimos una variable sin "var", pasa al contexto global. <--MALA PRÁCTICA>

pero si hacemos 
```
var a =10, b=20;
```

b se define como var, la coma lo adjudica;

### Tipos de datos:

Los primitivos son inmutables, no alterables.
```
Booleanos
Números
Strings: cadenas de carácteres
```

Los de datos compuestos (de referencia) pueden modificarse al albergar otras variables:

````
Objetos
Matriz
````

Especiales
```
Null
No definido: undefined
```

## Control Flow

If
Else
Else if

For
For in
While
Do While

Switch: Breaks.

## Operadores

Aritméticos
De asignación
Operadores lógicos

```
function fun(){ console.log("ENTRA!!")};

var a=true
a
>>>>>true
a && fun();
>>>>> ENTRA!!!
```

```
function salute(name) {console.log("hello" + (name || "world))}
salute("mary");
>>>>>hello mary
salute()
>>>>> hello world;
```

typeof
instanceof <-- para objetos, no primitivos

```
Object (padre de...)
--String
--Date
--Number

```

operador aritmético bitwise
|
&

<<


## strict mode

```
'use strict'
```
---------

## higher order function

forEach
filter
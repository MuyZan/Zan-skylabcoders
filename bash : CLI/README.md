## Comandos bash / CLI

### Listar, navegar y visualizar paths/rutas y directorios
----

- Listar estructura de ficheros del directorio actual.
List files.

```sh
$ ls
```

- Listar path, estructura de ficheros del directorio actual incluyendo archivos ocultos.

```sh
$ ls -a
```

- Visualizar directorios y ficheros de esa raíz con mayor información (permisos, users...)

```sh
$ ls -l
```

- Visualizar path/ruta en el que nos encontramos.

```sh
$ pwd
```

- Cambiar de carpeta. Change folder.

```sh
$ cd nombre_carpeta
```
```sh
$ cd ruta/del/folder
```

- Volver a la carpeta anterior.

```sh
$ cd ..
```

- Visualizar el directorio en formato árbol

```sh
$ tree
```

### Creación de ficheros y carpetas
----

- Crear nueva carpeta en el directorio actual.

```sh
$ mkdir nombre_de_la_carpeta
```

- Crear nueva carpeta oculta en el directorio actual (incluir un punto antes del nombre de la carpeta).

```sh
$ mkdir .nombre_de_la_carpeta
```

- Crear un nuevo archivo en el directorio actual.

```sh
$ touch nombre_del_archivo.extension
```

- Crear un nuevo archivo oculto en el directorio actual (incluir un punto antes del nombre del archivo).

```sh
$ touch .nombre_del_archivo.extension
```

- Creación de un archivo incluyéndole contenido en texto en el mismo directorio. Create file with initial content.

```sh
$ echo "contenido del archivo" > nombre_del_archivo.extension
```



### Modificación y visualización de archivos y carpetas.
----



- Borrar toda una carpeta con su contenido.

```sh
$ rm -r <nombre_de_la_carpeta>
```
```sh
$ rmdir -r <nombre_de_la_carpeta>
````

- Cambiar el nombre de un archivo o carpeta. Rename a file o folder.

```sh
$ mv <from-path> <to-path>
```

```sh
$ mv <nombre_archivo_original.extension> <nuevo_nombre.extension>
```

- Mover archivos a otras carpetas

```sh
$ mv <nombre_del_archivo.ext> <nombre_carpeta/>
```

- Visualizar contenido/texto del archivo.

```sh
$ cat <nombre_del_archivo.extension>
```

- Buscar archivos con determinado contenido.

el punto es la carpeta / directorio en el que estamos
-r (repulsivamente, solo esta carpeta, busca repulsivamente)
-e (expresión)

```sh
$ grep -r . -e <contenido>
```

### Otros.
----

- Editor con lineo de comandos, para poder editar archivos y evitar el reformateo por ejemplo del un html

```sh
$ nano <nombre_del_archivo.ext>
```
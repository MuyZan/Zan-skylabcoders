## GIT CHEATSHEET
------

![image](images/git_img.png)

- iniciar git en un directorio.
```sh
$ git init
```

- Visualizar status del working copy.

```sh
$ git status
```

- Navegar a una rama.  (los archivos se mostrarán en el estado de esa rama)
```sh
$ git checkout <nombre-rama>
```

- Generar una rama base de desarrollo a partir de otra.

```sh
$ git checkout -b <name_of_branch>
```

- Subir archivo de la working area al staging area (carpeta a la ruta git) pero "no cerrar el cajón" (no commiteado aún).

```sh
$ git add <nombre.archivo>
```

- Añadir todo lo modificado.
```sh
$ git add --all
```
```sh
$ git add -a
```
- Añadir todo, pero sólo lo contenido en es carpeta.
```sh
$ git add .
```

- Subir repositorio (cerrar cajón).

```sh
$ git commit -m 'mensaje explicatorio'
```

- Visualizar rama.

```sh
$ git branch -v
```

- Visualizar diferencias entre nuestra working copy y la copia que tenemos commiteada en la rama del repositorio.

```sh
$ git diff
```


- Historial de commits.

```sh
$ git log
```

- Volver a una versión anterior.

```sh
$ git checkout <número del commit>
```

- Moverse a otra rama (viendo en que rama se está)

```sh
$ git branch
$ git checkout <ruta/del/branch>
```

- Fusionar ramas. primero navegas a la rama y luego te traes el contenido de la rama 2
```sh
$ git checkout <branch 1>
$ git merge <path branch 2>
```

- Clonar repositorio

```sh
$ git clone <path-original>
```

- Borrar carpeta y todo su contenido sin preguntar. recursive force.

```sh
$ rm -rf <folder-path>
```

- Borrar carpeta y todo su contenido preguntando antes.

```sh
$ rm -r <folder-path>
```


- Borrar rama
```sh
$ git -d <branch>
```

- Resetear el add antes de un commit (te lo saca del cajón staging)

```sh
$ git reset
```

- Resetear al último commit. (también borra lo que haya en el cajón añadido)

```sh
$ git reset --hard HEAD
```

- Resetear al archivo guardado en el stage (sin commit), al haber modificado el archivo

```sh
$ git checkout <file-name>
```

- Generar un archivo para ignorar, por ejemplo, los .DS_Store de mac. Esto no se subirá a git. En la raiz:
- luego en el archivo .gitignore introducir texto .DS_Store

```sh
$ git touch .gitignore
```
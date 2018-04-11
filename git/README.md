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

- Historial de commits con resumen

```sh
$ git log --summary
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

- Abrir directorio en el visual code

```sh
$ code .
```

- Ver configuración git
```sh
$ git config --list
```

- Crear un repositorio remoto
Donde origin puede ser cambiado por otro nombre, pero generalmente se mantiene origin.
```sh
$ git remote add origin <url-repo>
````

- Subir a github por primera vez el directorio local recordando los cambios. Luego ya sólo tendremos que hacer "$ git push"

```sh
$ git push -u <name-of-Repo> <branch>
```

- Subir a github.

```sh
$ git push
```

- Clonar repo

```sh
$ git clone <url-repo>
```



### Actualizar fork.

- Establecer vínculo entre un repositorio local y otro remoto. Desde el directorio de nuestro fork local. para mantener actualizado tu fork con las actualizaciones de otros pullrequest.

```sh
$ git remote add upstream <url-repo>
```

- Bajarnos los cambios de ese repo remoto
```sh
$ git fetch upstream
```

- Mergear esos cambios a nuestro repo local
```sh
$ git merge upstream/<branch>
```


[Esquema visual Git](https://qph.fs.quoracdn.net/main-qimg-d151c0543baa145e6252c1ec95199963.webp)


1. MASTER

    1.2. DEVELOP

        1.3. FEATURE

```sh
$ mkdir git
$ mkdir project
$ cd project
$ touch html.index
```
go to HTML file > select html5 dropdown

```sh
$ git status
fatal: Not a git repository !! 
$ git init (crear repositorio)
$ git status (! no commits yet)
```
PARA GUARDAR CAMBIOS
$ git add index.html
$ git status
$ git commit -m 'added initial codebase' (con mensaje descriptivo sobre cambio )

> cambio el html, salvo
(todo esto lo hemos hecho en master pero no deberiamos)

CREAR RAMA DEVELOP
$ git checkout -b develop
$ git checkout develop: (Already on 'develop')
CREATE FEATURE BRANCH
$ git checkout -b feature/add-js
$ git log
$ mkdir scripts
(ESTAMOS EN ADD-JS)
$ git status (VEMOS que han habido cambios)
$ git add . === git add -A (añade cambioS de todas as carpetas)
$ git status (SALE VERDE)
$ git commit -m 'add js'
$ git status (>On branch feature/add-js>nothing to commit, working tree clean)
$ git log (MOST RECENT ON TOP! Nos salen 3 codigos)

CAMBIAMOS A DEVELOP (one up)
$ git checkout develop
$ git merge feature/add-js (hace un 'autocommit' a la vez)

AHORA EL CLIENTE NOS PIDE DOS CAMBIOS: Todo en Rojo Y traducido al inglés

$ git branch (para ver donde estoy)
$ git branch -d feature/add-js (PODEMOS BORRAR EL feature!)

$ git checkout -b feature/translate
$ git status (y vemos q estamos en la rama transalte)
(>cambiamos al ingles)
$ git add -A (SIEMPRE ANTES DE COMMIT!!) va al padre.
    $git add . (GUARDA SOLO LO DE LA CARPETA ACTUAL)
$ git commit -m 'translate to Eng'
$ git status (vemos que estamos en la rama feat/trs)
$ git checkout develop
(VEMOS que todo está en castellano todavía)
(TODAVIA NO MERGEAMOS)

CREAMOS LA NUEVA RAMA PARA EL CSS
$ git checkout -b feature/add-css
(  ADD color to css and this to HTML, along w/ h1 in title <link rel="stylesheet" href="styles/main.css">
)
$ git status (VEOMS los cambios no guardados)
$ git add -A || 'period'
$ git commit -m 'add style'

MERGEAMOS el Translate y ahora nos sale en Ingles.
$ git merge feature/translate

$ git branch (PARA VER todas las carpetas)
$ git branch -d feature/translate (ELIMINAMOS LA TRADU)
$ git merge feature/add-css (NOS MUESTRA UN CONFLICTO y subraya las lineas que tienen conflicto)
PORQUE HEMOS MODIFICADO EL <H1> 

## LO MODIFICAMOS MANUALMENTE
$ git status
(vemos que el html ha sido modificado)
$ git add index.html
$ git stauts (Nos salen los dos files en VERDE)
$ git add .
$ git commit -m 'asd'

STAGING AREA (what shows green when you do git status)

$ git checkout index.html (RECUPERA el archivo que esté en el cajón de STAGING area.)


CUANDO LA CAGAS Y GUARDAS (add -A/ OR FILE NAME) - pero no commit
PARA QUITARLO DEL CAJON
    $ git reset
    $ git status (Sale en ROJO 'modified:')
    $ git reset --hard HEAD
    $ git status (te devuelve el ultimo commit hecho. Si habias ya hecho commit de lo malo tienes que arreglarlo manualmente.)



# Server - Sockets

## Creación del el proyecto en NODE
```
npm init
npm install express
npm install cors
npm install body-parser

npm install @types/express --save-dev
npm install @types/cors --save-dev
```
## Configuración de TypeScript
```
tsc --init
```
En tsconfig.json, desmarcar:
```
"types":["node"]
"outDir":"dist/"
```
Los ficheros generados js se guardarán en *dist*

#### BodyParser

Genera en el request un objeto JS con el contenido del formulario que nos llega mediante un POST: ```req.body```

#### CORS

Utilidad que permite consumir los recursos del servidor generado desde dominios distintos.

## Instalar el proyecto

**Consola 1:**

Para reconstruir los módulos de NODE:

```npm install```
Compilar los fciheros TS en dist:

```tsc -w``` compila tras cada cambio.

**Consola 2**

```nodemon dist/``` ejecuta la aplicación tras cada compilación.

ó

```node dist/``` ejecuta la aplicaicón manualmente.

## Configurar GitHub
Iniciar el repositorio:
```git init```

Guardar los cambios en el repositorio:
```
git add .
git commit -m "Primera versión"
```
Tras el commit si se cambia algo accidentalmente se puede recuperar con:
```git checkout -- .```

#### Crear el repositorio en la página de GitHub

Desde la página crear el repositorio y desde la consola ejecutar el comando que indica donde se almacena el repositorio remótamente:
```
git remote add origin https://github.com/carlos-claveria/socket-server.git
```
#### Subir los cambios
```
git push -u origin master
```



#### Subir al repositorio GitHub




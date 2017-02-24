# Iniciación a NodeJS con ejemplos básicos

## :wrench: Instalación de NodeJS en Ubuntu

```console
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## :zap: Ejecución de los ejemplos

Para probar cualquiera de los ejemplos basta teclear `node` seguido del nombre del fichero que se quiere ejecutar.

Por ejemplo, para ejecutar el "Hola mundo":

```console
cd 01HolaMundo
node server.js
```

## :clipboard: Descripción de los ejemplos

<a href="01HolaMundo">:file_folder: 01HolaMundo</a>

Un "Hola mundo" con lo mínimo.


<a href="02HolaMundoSeparandoServirdor">:file_folder: 02HolaMundoSeparandoServirdor</a>

"Hola mundo" separado en dos partes: `index.js` y `server.js`.


<a href="03RecogeUrl">:file_folder: 03RecogeUrl</a>

Recoge los datos de la URL. Probar por ejemplo <a href="http://localhost:8888/hola?nombre=Luis">http://localhost:8888/hola?nombre=Luis</a>


<a href="04RouterIncipiente">:file_folder: 04RouterIncipiente</a>

Empezamos a aislar en un fichero la funcionalidad de *routing*.


<a href="05ManejadorDeEventos">:file_folder: 05ManejadorDeEventos</a>

Se crea el manejador de eventos `requestHandlers.js`.


<a href="06WebConSecciones">:file_folder: 06WebConSecciones</a>

Web con las secciones **inicio**, **contacto** y **productos**.

<a href="07WebConPlantilla">:file_folder: 07WebConPlantilla</a>

La página de **inicio** es la plantilla `index.html`.


<a href="08PasoDeParametros">:file_folder: 08PasoDeParametros</a>

Paso de parámetros por la URL.

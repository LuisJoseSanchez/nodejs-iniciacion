# Iniciación a NodeJS con ejemplos básicos

## Instalación de NodeJS en Ubuntu

```console
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

## Ejecución de los ejemplos

Para probar cualquiera de los ejemplos basta teclear `node` seguido del nombre del fichero que se quiere ejecutar.

Por ejemplo, para ejecutar el "Hola mundo":

```console
cd 01HolaMundo
node server.js
```

## Descripción de los ejemplos

:file_folder: <01HolaMundo>

Un "Hola mundo" con lo mínimo.

:file_folder: <02HolaMundoSeparandoServirdor>

"Hola mundo" separado en dos partes: `index.js` y `server.js`.

:file_folder: 03RecogeUrl

Recoge los datos de la URL. Probar por ejemplo <localhost:8888/hola?nombre=Luis>

:file_folder: 04RouterIncipiente

Empezamos a aislar en un fichero la funcionalidad de *routing*.

# Proyecto MQTT Broker con Publisher

Este proyecto implementa un broker MQTT utilizando Node.js. Además, incluye un publisher MQTT con mosquito que permite enviar mensajes a los clientes suscritos al broker.

## Requisitos

- Node.js (versión v21.6.2 o superior)

## Instalación

1. Clona este repositorio en tu máquina local:

    ```bash
    git clone https://github.com/FJRecinos/promqtt.git
    ```

2. Navega hasta el directorio del proyecto:

    ```bash
    cd promqtt
    ```

3. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

## Uso

1. Inicia el broker MQTT:

    ```bash
    node broker.js
    ```

2. Inicia el publisher MQTT:

    ```bash
    node temperatura.js
    ```

3. El publisher enviará mensajes a los clientes suscritos al broker.

## Contribución

Si deseas contribuir a este proyecto, sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una rama con tu nueva funcionalidad: `git checkout -b nueva-funcionalidad`.
3. Realiza los cambios necesarios y realiza un commit: `git commit -m "Agrega nueva funcionalidad"`.
4. Envía tus cambios al repositorio remoto: `git push origin nueva-funcionalidad`.
5. Abre un pull request en este repositorio.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.
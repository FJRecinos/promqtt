const mqtt = require('mqtt');

const brokerUrl = 'mqtt://192.168.2.220:1883'; // Cambia la dirección IP al servidor MQTT
const topic = 'humedad'; // Tópico para enviar la temperatura al ESP32
const message = 'datoHumedad'; // Indicador para enviar la lectura de temperatura

const client = mqtt.connect(brokerUrl);

client.on('connect', () => {
    console.log('Conexión exitosa al broker MQTT');
    client.publish(topic, message, (err) => {
        if (err) {
            console.error('Error al publicar el mensaje:', err);
        } else {
            console.log('Mensaje publicado correctamente');
        }
        client.end();
    });
});

client.on('error', (err) => {
    console.error('Error al conectar al broker MQTT:', err);
});

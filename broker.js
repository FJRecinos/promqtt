const mosca = require('mosca');

// Configuración del broker
const settings = {
    port: 1883 // Puerto en el que escuchará el broker
};

// Crear el servidor MQTT
const server = new mosca.Server(settings);

// Evento cuando el servidor MQTT está listo
server.on('ready', () => {
    console.log('Broker MQTT listo');
});

// Evento cuando un cliente se conecta al broker
server.on('clientConnected', (client) => {
    console.log('Cliente conectado:', client.id);
});

// Evento cuando un cliente publica un mensaje en un tópico
server.on('published', (packet, client) => {
    const topic = packet.topic;
    const payload = packet.payload.toString();

    if (topic.startsWith('$SYS/')) {
        console.log('Mensaje $SYS: ', payload);
        return;
    }

    // Verificar el topic publicado y actuar en consecuencia
    if (topic === 'allSensors') {
        console.log('Mensaje recibido en el tópico allSensors:', payload);
        
    } else if (topic === 'temperatura') {
        console.log('Mensaje recibido en el tópico temperatura:', payload);
        
    } else if (topic === 'co2') {
        console.log('Mensaje recibido en el tópico co2:', payload);
        
    } else if (topic === 'humedad') {
        console.log('Mensaje recibido en el tópico humedad:', payload);
       
    } else if (topic === 'distancia') {
        console.log('Mensaje recibido en el tópico distancia:', payload);
        
    } else {
        console.log('Mensaje recibido en un tópico no reconocido:', topic, payload);
        
    }
});


// Evento cuando un cliente se desconecta del broker
server.on('clientDisconnected', (client) => {
    console.log('Cliente desconectado:', client.id);
});


// Evento cuando un cliente se suscribe a un tópico
server.on('subscribed', (topic, client) => {
    console.log('Cliente suscrito:', client.id);
});

// Evento cuando un cliente se desuscribe de un tópico
server.on('unsubscribed', (topic, client) => {
    console.log('Cliente desuscrito:', client.id);
});

// Evento cuando ocurre un error en el servidor MQTT
server.on('error', (err) => {
    console.log('Error en el servidor MQTT:', err);
});


const express = require('express');
const { dbConnection } = require('../database/config');

class Server {
    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.clientesPath = '/api/clientes';
        this.tipoPersonasPath = '/api/tipoPersonas';
        this.empleadosPath = '/api/empleados';
        this.paquetesPath = '/api/paquetes';
        this.rutasPath = '/api/rutas';
        this.destinatariosPath = '/api/destinatarios';
        this.tipoPaquetesPath = '/api/tipoPaquetes';
        this.entregasPath = '/api/entregas';
        this.tipoNovedadesPath = '/api/tipoNovedades';
        this.novedadesPath = '/api/novedades';
        this.usuariosPath = '/api/usuarios'

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    async conectarDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.clientesPath, require('../routes/clientes'));
        this.app.use(this.tipoPersonasPath, require('../routes/tipoPersonas'));
        this.app.use(this.empleadosPath, require('../routes/empleados'));
        this.app.use(this.paquetesPath, require('../routes/paquetes'));
        this.app.use(this.rutasPath, require('../routes/rutas'));
        this.app.use(this.destinatariosPath, require('../routes/destinatarios'));
        this.app.use(this.tipoPaquetesPath, require('../routes/tipoPaquetes'));
        this.app.use(this.entregasPath, require('../routes/entregas'));
        this.app.use(this.tipoNovedadesPath, require('../routes/tipoNovedades'));
        this.app.use(this.novedadesPath, require('../routes/novedades'));
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}

module.exports = Server;
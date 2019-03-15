import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

// ----------------------------------------------------- BodyParser
server.app.use( bodyParser.urlencoded({ extended: true}));
// Para que bodyparser devuelva la información en un JSON
server.app.use( bodyParser.json() );

// ------------------------------------------------------ CORS
// Permito que culquier persona acceda a los servicios
server.app.use( cors({origin: true, credentials: true}));

// Instancia de express Router creada en routes/router.ts
server.app.use('/', router);







server.start( () => { console.log(`Servidor en puerto ${ server.port }`); });

# Ecosense Seeds - API de Sensores IoT para Riego Automatizado

Ecosense Seeds es un sistema de riego automatizado que utiliza sensores IoT para monitorear y gestionar el riego de plantas, optimizando el uso del agua y mejorando la salud de las plantas. Esta API permite gestionar y almacenar datos de sensores de humedad del suelo, temperatura ambiente, humedad ambiental, luz, anemómetro, y servomotores para el control de flujo de agua. Los datos se almacenan en una base de datos MySQL y están disponibles para ser visualizados en Google Looker Studio.

## Equipo de desarrollo
**Equipo #1: “Null”**
- Santiago Quintana Moreno - A01571222
- Javier Santos Pérez - A01198909
- Irvin David Ornelas García - A00839065
- Alejandro Orta Rodríguez - A00840490

## Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```

2. **Instalar dependencias**:
   Asegúrate de tener [Node.js](https://nodejs.org/) y [npm](https://www.npmjs.com/) instalados en tu sistema. Luego, instala las dependencias ejecutando:
   ```bash
   npm install
   ```

3. **Configurar la base de datos**:
   En el archivo `constants.js`, verifica y actualiza las credenciales de la base de datos para que coincidan con tu configuración.

4. **Iniciar el servidor**:
   Inicia la aplicación con `nodemon` o `node`:
   ```bash
   nodemon start
   ```
   El servidor se ejecutará en el puerto especificado en `constants.js` (por defecto, `3000`).

## Endpoints de la API

La API ofrece los siguientes endpoints para interactuar con cada tipo de sensor:

### Sensor de Temperatura
- **GET** `/getTemperatures` - Obtener datos de temperatura.
- **POST** `/insertTemperature` - Insertar un nuevo registro de temperatura.

### Sensor de Humedad del Suelo
- **GET** `/getSoilMoisture` - Obtener datos de humedad del suelo.
- **POST** `/insertSoilMoisture` - Insertar un nuevo registro de humedad del suelo.

### Sensor de Luz
- **GET** `/getLight` - Obtener datos de luz.
- **POST** `/insertLight` - Insertar un nuevo registro de luz.

### Servo Motor
- **GET** `/getServoMotor` - Obtener datos del servo motor.
- **POST** `/insertServoMotor` - Insertar un nuevo registro de servo motor.

### Anemómetro
- **GET** `/getAnemometer` - Obtener datos del anemómetro.
- **POST** `/insertAnemometer` - Insertar un nuevo registro del anemómetro.

## Estructura de Archivos

- **app.js**: Archivo principal donde se configura el servidor y se definen las rutas de la API.
- **route.js**: Define las rutas de los endpoints y asigna sus respectivos controladores.
- **constants.js**: Contiene las configuraciones de la base de datos, el puerto del servidor y las rutas de los endpoints de la API.
- **RestControllers/**: Carpeta que contiene los controladores para cada sensor, encargados de realizar las operaciones CRUD en la base de datos.

## Dependencias
Este proyecto utiliza las siguientes dependencias:
- **express**: Framework para manejar las rutas y peticiones de la API.
- **body-parser**: Middleware para analizar el cuerpo de las peticiones.
- **cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **mysql**: Cliente de MySQL para conectarse a la base de datos.

## Ejemplo de Uso

Para probar la conexión al servidor, puedes acceder a la ruta principal:
```
http://localhost:3000/
```

Esto mostrará una página simple con información sobre la API.

## Licencia

Este proyecto es para fines académicos y de demostración. No está destinado para uso en producción sin las adecuadas revisiones de seguridad y optimización.

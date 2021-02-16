# Docker

Quizas la forma mas sencilla de evaluar Liceo sea ejecutarlo usando [Docker](https://www.docker.com/). Docker es una plataforma de software que permite probar y desplegar aplicaciones rápidamente.

## Prerequisitos

Para poder ejecutar una instancia de Liceo en Docker es necesario instalar Docker primero. Recomendamos consultar [la pagina oficial de docker](https://docs.docker.com/get-docker/) donde se puede encontrar documentacion detallada para diferentes sistemas operativos.

## Lanzando Liceo

Una vez instalado docker, puedes ejecutar simplemente la siguiente linea:

```shell
docker run --rm -d -p 8080:8080 liceo-docker-public.bintray.io/web:latest
```

En unos instantes tu instancia de Liceo deberia estar disponible en [http://localhost:8080](http://localhost:8080) desde tu navegador. Se estara ejecutando una instancia de Liceo con los valores por defecto. Solamente recomendamos la configuracion por defecto para el proposito de evaluacion de Liceo. A continuacion se muestran los valores que se pueden configurar:

| Variable        | Descripcion                                  | valor por defecto|
| --------------- |:--------------------------------------------:| ----------------:|
| ADMIN_NAME      | Nombre del administrador                     | admin            |
| ADMIN_USERNAME  | Nombre con el que el administrador se loga   | admin            |
| ADMIN_PASSWORD  | Password inicial del administrador           | admin            |
| DATABASE_URL    | URL de la base de datos (JDBC)               | *                |
| DATABASE_USERNAME | Username de la base de datos               | liceo            |
| DATABASE_PASSWORD | Password de la base de datos               | liceo            |
| DATABASE_DRIVER_CLASSNAME | Nombre de la clase que crear las conexiones | org.h2.Driver |
| LICEO_FILES      | Directorio donde guardar los ficheros      | /tmp/kk          |

*jdbc:h2:mem:devDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE

El valor de `DATABASE_DRIVER_CLASSNAME` y `DATABASE_URL` varia dependiendo de la base de datos que se elija:

| Base de datos | DATABASE_DRIVER_CLASSNAME | DATABASE_URL |
| --------------|---------------------------|--------------|
| H2            | org.h2.Driver             | jdbc:h2:mem:devDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE} |
| PostgreSQL    | org.postgresql.Driver     | jdbc:postgresql://host[:puerto]/basededatos |

Por ejemplo si quisieramos cambiar el password del administrador podriamos ejecutar:

```shell
docker run --rm -d -p 8080:8080 -e ADMIN_PASSWORD=liceopassword liceo-docker-public.bintray.io/web:latest
```

Se pueden agregar cuantos parametros **-e** como se necesite. De todas maneras si se quiere especificar un entorno un poco mas complejo, se puede usar [Docker Compose](docker-compose.md)

> Recomendamos cambiar los valores por defecto si se va a utilizar Liceo para cualquier otro proposito que no sea su simple evaluacion

El valor de la variable de entorno **LICEO_FILES** tiene que corresponder con el path mapeado con la ruta del host, por ejemplo:

```shell
docker run --rm -d -p 8080:8080 -v /host/directory:/tmp/liceo -e LICEO_FILES=/tmp/liceo liceo-docker-public.bintray.io/web:latest
```
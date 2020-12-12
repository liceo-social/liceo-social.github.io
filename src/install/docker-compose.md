# Docker Compose

Si quieres correr la aplicacion contra una base de datos mas seria y no complicarte mucho, quizas la mejor opcion es usar el repositorio https://github.com/liceo-social/liceo-docker-compose. Para poder utilizar este repositorio deberias tener pre instalado [docker-compose](https://docs.docker.com/compose/).

Clonate el repositorio con [Git](https://git-scm.com/):

```shell
git clone https://github.com/liceo-social/liceo-docker-compose
```

> [En este link](https://git-scm.com/book/es/v2) puedes encontrar un enlace de como usar Git en español

Si entras dentro del repositorio que acabas de clonar encontraras 2 ficheros `docker-compose.yml` y el script `liceo.sh`.

## liceo.sh

Para facilitar la ejecucion y el mantenimiento de la aplicacion, se ha creado el comando `liceo.sh` que permite entre otras cosas, arrancar/parar la aplicacion, y hacer un backup tanto de la base de datos como de los ficheros creados utilizando `docker-compose`.

### arrancar y parar la aplicacion

Para arrancar los contenedores (manager + db):

```shell
./liceo.sh startup
```

Para parar los contenedores (manager + db):

```shell
./liceo.sh shutdown
```

Para saber el estado de los contenedores:

```shell
./liceo.sh status
```

### backup de la aplicacion

Para hacer un backup tanto de la base de datos como los ficheros creados:

```shell
./liceo.sh backup
```

### logs en tiempo real de la aplicacion

En caso de que haya que analizar alguna traza de la aplicacion.

```shell
./liceo.sh logs
```

## Configuracion

Por defecto se ejecutara la aplicacion contra una base de datos PostgreSQL y los ficheros creados se guardaran en `/tmp/kk`. Puedes configurar `Liceo` para correr contra una base de datos H2 (en memoria), PostgreSQL o MariaDB y tambien configurar el directorio en donde se guardaran los ficheros. Para cambiar estos datos debes pasar una serie de variables de entorno a la ejecucion de Docker.

| Variable        | Descripcion                                  | valor por defecto|
| --------------- |:--------------------------------------------:| ----------------:|
| ADMIN_NAME      | Nombre del administrador                     | admin            |
| ADMIN_USERNAME  | Nombre con el que el administrador se loga   | admin            |
| ADMIN_PASSWORD  | Password inicial del administrador           | admin            |
| DATABASE_URL    | URL de la base de datos (JDBC)               | *                |
| DATABASE_USERNAME | Username de la base de datos               | liceo            |
| DATABASE_PASSWORD | Password de la base de datos               | liceo            |
| DATABASE_DRIVER_CLASSNAME | Nombre de la clase que crear las conexiones | org.h2.Driver |
| STORAGE_PATH      | Directorio donde guardar los ficheros      | /tmp/kk          |

*jdbc:h2:mem:devDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE

El valor de `DATABASE_DRIVER_CLASSNAME` y `DATABASE_URL` varia dependiendo de la base de datos que se elija:

| Base de datos | DATABASE_DRIVER_CLASSNAME | DATABASE_URL |
| --------------|---------------------------|--------------|
| H2            | org.h2.Driver             | jdbc:h2:mem:devDb;MVCC=TRUE;LOCK_TIMEOUT=10000;DB_CLOSE_ON_EXIT=FALSE} |
| PostgreSQL    | org.postgresql.Driver     | jdbc:postgresql://host[:puerto]/basededatos |



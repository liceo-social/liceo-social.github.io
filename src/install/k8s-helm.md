# Kubernetes

## Helm

### Prerequisitos

Para poder desplegar Liceo en un entorno Kubernetes, hemos creado un chart de Helm. Este chart despliega una instancia de Liceo y una instancia de PostgreSQL como base de datos. 

Para poder utilizar este chart previamente se debe:

- Instalar kubectl ([documentacion externa](https://kubernetes.io/es/docs/tasks/tools/install-kubectl/))
- Instalar Helm ([documentacion externa](https://helm.sh/docs/intro/install/))
- Clonar el chart de Helm
- Ejecutar el chart de Helm

Para instalar kubectl y Helm recomendamos visitar la documentacion de ambos proyectos. Una vez instalados kubectl y Helm deberemos clonar el repositorio liceo-helm en nuestra maquina local usando [Git](https://git-scm.com/):

```shell
git clone https://github.com/liceo-social/liceo-helm.github.io
```

### Configurando el chart

Una vez clonado, deberemos crear un fichero `values.yaml` con los valores que queramos para la instancia de Liceo en el entorno en el que lo vamos a instalar: password del administrador, de la base de datos, donde se guardaran los ficheros...etc. Hay un fichero `values.yaml.template` que se puede usar de guia. Por un lado estan la configuracion de la base de datos:

```yaml
db:
  deployment:    
    # donde se guardara la base de datos en disco
    disk_mount: /var/data
    pg_data: /var/data/liceo    
    # nombre de la base de datos
    name: liceo
    # nombre del usuario de la base de datos
    username: liceo
    # password del usuario de la base de datos
    password: liceo
    # puerto en el que se expone el contenedor
    port: 5432
  service:
    # puerto en el que se expondra el servicio al resto de servicios k8s
    port: 5432
```

Y por otro el de la instancia de Liceo:

```yaml
web:
  deployment:
    # cuanta memoria necesita la aplicacion
    resources:
      memory: 2G
    # que version de Liceo se va a desplegar
    version: latest
    # lenguage por defecto que se va a ejecutar
    locale: en
    # url en la que estara disponible Liceo 
    host: "https://liceo-web-socseross.cloud.okteto.net"
    # datos de conexion con la base de datos
    database:
      url: "jdbc:postgresql://liceo-db:5432/liceo"
      username: liceo
      password: liceo
      driver: org.postgresql.Driver
    # donde se guardaran los ficheros: fotos, documentos...
    storagepath: /app/storage
    # datos iniciales del administrador principal
    admin:
      name: admin
      username: admin
      password: admin
      email: admin@email.com
  service:  
    # en que puerto estara desplegado Liceo para otros servicios
    port: 8080        
```

### Ejecutando el chart

Una vez creado el fichero `values.yaml` dentro del directorio clonado, situate en el mismo directorio desde el que hemos ejecutado `git clone`. Ahora podremos instalar nuestro chart en el entorno de al que apunte nuestra configuracion de kubernetes ejecutando:

```shell
helm install liceo ./liceo-helm
```

### liceo.sh

Dentro de los ficheros que contiene el repositorio **liceo-helm** se encuentra el fichero **liceo.sh**. Este script contiene una serie de tareas de mantenimiento que pueden ser utiles dentro del entorno de Kubernetes como realizar backups de la base de datos o de los ficheros que se hayan subido a la instancia de Liceo. Si entramos en el directorio del repositorio **liceo-helm** que hemos clonado y ejecutamos:

```shell
./liceo.sh
```

Se nos mostraran las distintas tareas disponibles:

```shell
liceo.sh redeploy|list|backup-all|backup-db|backup-files
```

- **redeploy**: puede redesplegar las instancias de Liceo web o de la base de datos
- **list**: lista los pods que se estan ejecutando
- **backup-all**: ejecuta el backup de la base de datos y de los ficheros de Liceo
- **backup-db**: ejecuta el backup de la base de datos
- **backup-files**: ejecuta el backup de los ficheros de Liceo
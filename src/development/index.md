---
sidebar: auto
---

# Desarrollo

Esta seccion esta dirigida a desarrolladores que quieran colaborar en Liceo. Es una guia para poder empezar a colaborar en el codigo de Liceo.

## Prerrequisitos

Liceo esta basado en [Grails](https://grails.org/) un framework web basado en el lenguage de programacion [Groovy](https://groovy-lang.org/) construido sobre [Spring Boot](https://spring.io/projects/spring-boot). 

Para poder contribuir y trabajar sobre el proyecto lo basico seria:

- Instalar JDK 11 (recomendamos instalarla a traves de [SDKManager](https://sdkman.io/))
- Usar un IDE de desarrollo (Echa un vistazo a la tabla de [IDEs disponibles](https://groovy-lang.org/ides.html) para desarrollar con proyectos Groovy)
- Descargar el codigo fuente de Github usando un cliente Git

Para comprobar que el codigo se puede compilar y ejecutar correctamente, abrir un terminal y ejecutar en el directorio del repositorio git clonado:

```shell
./gradlew clean bootRun
```

En un momento determinado la consola informara que la aplicacion se puede acceder en [http://localhost:8080](http://localhost:8080). La aplicacion se levanta con una base de datos [H2](https://www.h2database.com/html/main.html) con usuario/password por defecto **admin/admin**. 

> Para cualquier ejecucion que no sea de desarrollo recomendamos usar una base de datos [PostgreSQL](https://www.postgresql.org/)

## Arrancar la aplicacion

TODO

### Configuracion

TODO

### Environments

TODO

## Ejecutar tests

TODO

## Deployment

#### Docker: crear y publicar imagen

El comando para crear una imagen nueva de Docker

```shell
./gradlew buildImage
```

Despues para poder subir la imagen al repositorio de Bintray debes hacer login:

```
docker login -u <USERNAME> liceo-docker-public.bintray.io
```

Entonces hay que tagear la imagen:

```shell
docker tag <ID> liceo-docker-public.bintray.io/manager:<VERSION>
```

Y por ultimo subirla al repositorio remoto:

```shell
docker push liceo-docker-public.bintray.io/manager:<VERSION>
```

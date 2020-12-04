# Personas

Al pulsar sobre el elemento **Personas** en el menu de la izquierda, veremos el listado de personas que gestiona Liceo.

![Listado](/guide/personas_listado_empty.png)

## Filtrado

El listado de personas se puede filtrar. Para filtrar el resultado del listado se puede pulsar sobre el boton **Filtros**

![Filtros](/guide/personas_listado_filtros_boton.png)

Al pulsar sobre el boton **Filtros** se abrira una ventana modal en la que se muestran todos los filtros disponibles.

![Listado](/guide/personas_filtros_modal.png)

Una vez se han seleccionado los parametros por los que se quiere filtrar el listado pulse sobre **Buscar** y se mostrara de nuevo el listado con los filtros aplicados. Se podran ver los filtros aplicados en la parte superior izquierda del listado.

Si se quieren eliminar todos los filtros aplicados se puede pulsar sobre el boton **Borrar Filtros** que se encuentra en la parte superior izquierda del listado.

![Listado](/guide/personas_filtros_tags.png)

## Exportacion CSV

Cualquier listado de personas (filtrado y no filtrado) se puede exportar en formato **CSV** pulsando sobre el boton **Exportar** que se encuentra en la parte superior derecha del listado de personas. Al pulsar sobre el boton se iniciara la descarga del listado en formato CSV.

> La codificacion del fichero es UTF-8

## Agregar una nueva persona 

Para agregar una nueva persona al sistema, desde el listado de personas puedes pulsar sobre el boton **Nuevo** en la parte superior derecha.

## Editar

Todo usuario logado en la aplicacion puede editar los datos personales de una persona. Como medida de trazabilidad y auditoria, cada vez que un usuario modifica la ficha de una persona queda registrado quien actualizo por ultima vez esos datos.

Para poder editar los datos personales de una persona se puede realizar de dos maneras: en el listado de personas, pulsando sobre el boton **Editar** en aquella persona que se quiera editar.

![Listado](/guide/personas_listado.png)

Tambien se puede editar a traves de la pantalla de detalle de la persona en cuestion, pulsando sobre el boton **Editar** que se encuentra en la parte inferior izquierda.

## Inhabilitar

TODO

## Seguridad

A continuacion se muestra una tabla con el resumen de los permisos que puede tener un usuario sobre las acciones que se pueden realizar sobre la entidad **Persona**.

|     Accion     |   Tipo Usuario  |   Permitido    |
| -------------- | --------------- | -------------- |
| Crear          |      ADMIN      |       SI       |
| Editar         |  USUARIO LOGADO |       SI       |
| Inhabilitar    |      ADMIN      |       SI       |
| Inhabilitar    |  USUARIO LOGADO |       NO       |
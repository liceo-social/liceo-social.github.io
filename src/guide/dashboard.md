# Dashboard

Nada mas entrar en la aplicacion se visualizara la zona del dashboard:

![Dashboard](/guide/dashboard.png)

En el dashboard se pueden visualizar una serie de estadisticas generales:

![Login](/guide/dashboard_stats.png)

De izquierda a derecha, la **primera columna** visualiza el **numero de personas gestionadas por el sistema** y debajo se mostrara una lista de personas. Esta lista de personas se ordenara por el numero e importancia de alertas asignadas a esa persona. De esta manera se prioriza que en el dashboad siempre se puedan visualizar aquellas personas que puedan necesitar supervision.

La **segunda columna** muestra el **numero de personas asignadas al usuario logado**. Justo debajo se mostrara una lista con aquellas personas asignadas con un mayor numero de alertas asignadas. Igual que en la anterior columna, se priorizan aquellas personas que puedan necesitar mas atencion.

## Organizacion general de Liceo

En general liceo se divide en secciones y tiene tres zonas importantes:

- Zona central: Donde se muestra el contenido de la seccion que estamos visitando
- Zona superior: Acciones accesibles desde cualquier pantalla
- Zona izquierda: Acceso a secciones concretas

En la zona superior podemos ver acciones generales como **Nueva persona** para crear una nueva ficha o **Busqueda por ID** para ir a la ficha de una persona usando su identificador:

![Cabecera](/guide/dashboard_upper.png)

En la zona izquieda tenemos acceso a las diferentes secciones de Liceo:

![Menu](/guide/dashboard_menu.png)

Todas las secciones se agrupan en **Asociacion**, **Datos Maestros** y **Seguridad**. Dependiendo de si el usuario es de tipo administrador o no tendra acceso o no a todas las secciones. Los usuarios que no son administrador solo tendran acceso al grupo de secciones **Asociacion**.
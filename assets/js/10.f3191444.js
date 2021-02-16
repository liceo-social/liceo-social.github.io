(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{363:function(a,e,r){"use strict";r.r(e);var t=r(42),o=Object(t.a)({},(function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[r("h1",{attrs:{id:"desarrollo"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#desarrollo"}},[a._v("#")]),a._v(" Desarrollo")]),a._v(" "),r("p",[a._v("Esta seccion esta dirigida a desarrolladores que quieran colaborar en Liceo. Es una guia para poder empezar a colaborar en el codigo de Liceo.")]),a._v(" "),r("h2",{attrs:{id:"prerrequisitos"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerrequisitos"}},[a._v("#")]),a._v(" Prerrequisitos")]),a._v(" "),r("p",[a._v("Liceo esta basado en "),r("a",{attrs:{href:"https://grails.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Grails"),r("OutboundLink")],1),a._v(" un framework web basado en el lenguage de programacion "),r("a",{attrs:{href:"https://groovy-lang.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Groovy"),r("OutboundLink")],1),a._v(" construido sobre "),r("a",{attrs:{href:"https://spring.io/projects/spring-boot",target:"_blank",rel:"noopener noreferrer"}},[a._v("Spring Boot"),r("OutboundLink")],1),a._v(".")]),a._v(" "),r("p",[a._v("Para poder contribuir y trabajar sobre el proyecto lo basico seria:")]),a._v(" "),r("ul",[r("li",[a._v("Instalar JDK 11 (recomendamos instalarla a traves de "),r("a",{attrs:{href:"https://sdkman.io/",target:"_blank",rel:"noopener noreferrer"}},[a._v("SDKManager"),r("OutboundLink")],1),a._v(")")]),a._v(" "),r("li",[a._v("Usar un IDE de desarrollo (Echa un vistazo a la tabla de "),r("a",{attrs:{href:"https://groovy-lang.org/ides.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("IDEs disponibles"),r("OutboundLink")],1),a._v(" para desarrollar con proyectos Groovy)")]),a._v(" "),r("li",[a._v("Descargar el codigo fuente de Github usando un cliente Git")])]),a._v(" "),r("p",[a._v("Para comprobar que el codigo se puede compilar y ejecutar correctamente, abrir un terminal y ejecutar en el directorio del repositorio git clonado:")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("./gradlew clean bootRun\n")])])]),r("p",[a._v("En un momento determinado la consola informara que la aplicacion se puede acceder en "),r("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[a._v("http://localhost:8080"),r("OutboundLink")],1),a._v(". La aplicacion se levanta con una base de datos "),r("a",{attrs:{href:"https://www.h2database.com/html/main.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("H2"),r("OutboundLink")],1),a._v(" con usuario/password por defecto "),r("strong",[a._v("admin/admin")]),a._v(".")]),a._v(" "),r("blockquote",[r("p",[a._v("Para cualquier ejecucion que no sea de desarrollo recomendamos usar una base de datos "),r("a",{attrs:{href:"https://www.postgresql.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("PostgreSQL"),r("OutboundLink")],1)])]),a._v(" "),r("h2",{attrs:{id:"arrancar-la-aplicacion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#arrancar-la-aplicacion"}},[a._v("#")]),a._v(" Arrancar la aplicacion")]),a._v(" "),r("p",[a._v("TODO")]),a._v(" "),r("h3",{attrs:{id:"configuracion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#configuracion"}},[a._v("#")]),a._v(" Configuracion")]),a._v(" "),r("p",[a._v("TODO")]),a._v(" "),r("h3",{attrs:{id:"environments"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#environments"}},[a._v("#")]),a._v(" Environments")]),a._v(" "),r("p",[a._v("TODO")]),a._v(" "),r("h2",{attrs:{id:"ejecutar-tests"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ejecutar-tests"}},[a._v("#")]),a._v(" Ejecutar tests")]),a._v(" "),r("p",[a._v("TODO")]),a._v(" "),r("h2",{attrs:{id:"deployment"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#deployment"}},[a._v("#")]),a._v(" Deployment")]),a._v(" "),r("h4",{attrs:{id:"docker-crear-y-publicar-imagen"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-crear-y-publicar-imagen"}},[a._v("#")]),a._v(" Docker: crear y publicar imagen")]),a._v(" "),r("p",[a._v("El comando para crear una imagen nueva de Docker")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("./gradlew buildImage\n")])])]),r("p",[a._v("Despues para poder subir la imagen al repositorio de Bintray debes hacer login:")]),a._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[a._v("docker login -u <USERNAME> liceo-docker-public.bintray.io\n")])])]),r("p",[a._v("Entonces hay que tagear la imagen:")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("docker tag "),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("ID"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" liceo-docker-public.bintray.io/manager:"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),r("p",[a._v("Y por ultimo subirla al repositorio remoto:")]),a._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[a._v("docker push liceo-docker-public.bintray.io/manager:"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION"),r("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=o.exports}}]);
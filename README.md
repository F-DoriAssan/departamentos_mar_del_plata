## TecnoHogar 2.0 es una pagina en proceso, realizada con NodeJS, ExpressJS, su estilo es MVC. Tambien cuenta con mdb de bs en cual me ayudan con las clases. Eso quiere decir que tambien cuenta con css para el diseño de algunos objetos. Cabe aclarar que la pagina se encuentra en proceso y es realizada 100% por Federico Dorigatti solamente. Gracia a la conexion con base de datos en esta pagina se pueden agregar productos en la seccion de productos, si esta se lo marca aparecera en el inicio de la pagina. Una vez cargado los productos podemos empezar agregarlos en el carro de compras. Para pude terminar nuestra compra debemos loguernos y iniciar seccion de ahi elegimos el metodo de envio y pago y confirmamos el pedido. Cuentas con validaciones y es 100% responsive.

Instalación
Clonar el repo
    Instalar paquetes npm i , npm i express , npm i nodemon -D, npm i method-override (El uso de nodemon para el reinicio del servidor es opcional)
    Agregar en el packge.json start:"nodemon ./bin/www"

Crear .env para las variables de entorno cp
    .env.example .env

    Crear la base de datos en PHPMyAdmin 
    
Configurar el .env con los datos de su conexión
    PORT=
    DB_USER=
    DB_PASS=
    DB_NAME=

Instalar sequelize
        npm i sequelize
    Ejecutar la migración para crear las tablas en la DB_NAME
        sequelize db:migrate
    Ver si se realizaron las migraciones en phpmyAdmin

Si seguiste paso a paso podemos arrancar nuestro servidor!!
    npm start

Si no funciono elimina el modulo node y el package json
    rm -rf node_modules
    rm -rf package-lock.json
Vuelva a instalar npm i
© 2022 DoriAss
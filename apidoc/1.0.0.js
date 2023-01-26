 /**
 * @api {post} /info Códigos y mensajes de respuestas
 * @apiVersion v1.0.0
 * @apiGroup 1. Información
 * @apiParam {String} code Código del mensaje que retorna el API
 * @apiSuccess  {String} type Tipo de mensaje que retorna el API
 * @apiSuccess  {String} code Código del mensaje que retorna el API
 * @apiSuccess  {String} message Mensaje que retorna el API
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
 * El codigo de entrada es opcional, si desea ver todas las respuestas existentes se debe enviar la peticion vacia.

    {
        "code": "1000"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "data": [
            {
                "type": "success",
                "code": "1000",
                "message": "La operación fue realizada exitosamente."
            },
            {
                "type": "info",
                "code": "1001",
                "message": "La planilla solicitada ya ha sido pagada."
            },
            {
                "type": "info",
                "code": "1002",
                "message": "La planilla solicitada no existe."
            },
            {
                "type": "error",
                "code": "1100",
                "message": "Ha ocurrido un error inesperado."
            }
        ]
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */


 /**
 * @api {post} /user/create Creación de Usuario
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiName CrearUsuario
 * @apiParam {String} nombre Nombre del Usuario
 * @apiParam {String} apellido Apellido del Usuario
 * @apiParam {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiParam {String} email Email del Usuario
 * @apiParam {String} password Contraseña del Usuario
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "nombre":"Jeison",
        "apellido":"Villalobos",
        "usuario":"jvillalobos",
        "email":"jeisonjlvb@gmail.com",
        "password":"123456"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1001,
        "message": "El usuario ingresado ya se encuentra en uso."
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /user/login Login de Usuario
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiName LoginUsuario
 * @apiParam {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiParam {String} password Contraseña del Usuario
 * @apiSuccess {String} nombre Nombre del Usuario
 * @apiSuccess {String} apellido Apellido del Usuario
 * @apiSuccess {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiSuccess {String} email Email del Usuario
 * @apiSuccess {String} password Contraseña del Usuario
 * @apiSuccess {String} token Token valido para el usuario logeado
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "usuario": "jvillalobos",
        "password": "123456"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": {
            "id": "1",
            "nombre": "Jeison",
            "apellido": "Villalobos",
            "usuario": "jvillalobos",
            "email": "jeisonjlvb@gmail.com",
            "password": "$2a$10$mPEjGAjkF7LsAUAMrxe1TueelaTJkq2PieLtMGjM31jSAOSL0j1/2",
            "activo": true
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsIm5vbWJyZSI6IkplaXNvbiIsImFwZWxsaWRvIjoiVmlsbGFsb2JvcyIsInVzdWFyaW8iOiJqdmlsbGFsb2JvcyIsImVtYWlsIjoiamVpc29uamx2YkBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRtUEVqR0Fqa0Y3THNBVUFNcnhlMVR1ZWVsYVRKa3EyUGllTHRNR2pNMzFqU0FPU0wwajEvMiIsImFjdGl2byI6dHJ1ZX0sImlhdCI6MTYyOTA4NzU4M30.sZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1002,
        "message": "Usuario o contraseña incorrecta."
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */


 /**
 * @api {get} /user/index Usuarios del sistema
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiSuccess {Integer} id Itendificador del Usuario
 * @apiSuccess {String} nombre Nombre del Usuario
 * @apiSuccess {String} apellido Apellido del Usuario
 * @apiSuccess {String} usuario Nombre de Usuario para ingresar al sistema
 * @apiSuccess {String} email Email del Usuario
 * @apiSuccess {Boolean} activo Indica si el Usuario esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": [
            {
                "id": "1",
                "nombre": "Jeison",
                "apellido": "Villalobos",
                "usuario": "jvillalobos",
                "email": "jeisonjlvb@gmail.com",
                "activo": true
            }
        ]
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /user/edit Editar Usuario
 * @apiVersion v1.0.0
 * @apiGroup 2. Usuarios
 * @apiParam {String} nombre Nombre del Usuario
 * @apiParam {String} apellido Apellido del Usuario
 * @apiParam {String} usuario Nombre de Usuario para ingresar al sistema (Campo clave)
 * @apiParam {String} email Email del Usuario
 * @apiParam {Boolean} activo Indica si el Usuario esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "nombre":"Jeison",
        "apellido":"Villalobos",
        "usuario":"jvillalobos",
        "email":"jeisonjlvb@gmail.com",
        "password":"123456"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {get} /producto/index Productos Existentes
 * @apiVersion v1.0.0
 * @apiGroup 4. Productos
 * @apiName BuscarProductos
 * @apiSuccess {String} id Identificador del Producto
 * @apiSuccess {String} codigo Código del Producto
 * @apiSuccess {String} descripcion Descripción del Producto
 * @apiSuccess {Boolean} activo Indica si el Usuario esta activo o inactivo
 * @apiSuccess {Array} detalle_productos Array de Detalles del Producto
 * @apiSuccess {Integer} detalle_productos.detalle_producto_id Identificador del Detalle del Producto
 * @apiSuccess {String} detalle_productos.descripcion Descripción del Detalle del Producto
 * @apiSuccess {Integer} detalle_productos.stock Stock del Producto
 * @apiSuccess {Number} detalle_productos.precio Precio del Producto
 * @apiSuccess {Boolean} detalle_productos.activo Indica si el Detalle del Producto esta activo o inactivo
 * @apiSuccess {Array} productos_categorias Array de Categorias del Producto
 * @apiSuccess {Integer} productos_categorias.categoria_id Identificador de la Categoria
 * @apiSuccess {String} productos_categorias.categoria.descripcion Descripcion de la Categorias
 * @apiSuccess {Boolean} productos_categorias.categoria.true Indica si la Categoria esta activo o inactivo
 * 
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente.",
        "data": [
            {
                "id": "12",
                "codigo": "002",
                "descripcion": "Huawei x1 pro",
                "activo": true,
                "detalle_productos": [
                    {
                        "detalle_producto_id": "1",
                        "descripcion": "Color blanco, 250gb de memoria interna",
                        "stock": 10,
                        "precio": "300.23",
                        "activo": true
                    }
                ],
                "productos_categorias": [
                    {
                        "categoria_id": "1",
                        "categoria": {
                            "descripcion": "Electrónica",
                            "activo": true
                        }
                    }
                ]
            }
        ]
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /producto/create Crear Productos
 * @apiVersion v1.0.0
 * @apiGroup 4. Productos
 * @apiParam {String} codigo Código del Producto
 * @apiParam {String} descripcion Descripción del Producto
 * @apiParam {Array} categoria Array para la asignación de Categorias
 * @apiParam {Integer} categoria.categoria_id Identificador de Categorias a asignar
 * @apiParam {Array} detalle_producto Array para la asignación de Detalle Productos
 * @apiParam {String} detalle_producto.descripcion Descripción del Detalle Producto
 * @apiParam {Integer} detalle_producto.stock Stock del Producto
 * @apiParam {Number} detalle_producto.precio Precio del Producto
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "codigo": "001",
        "descripcion": "Huawei x1 pro",
        "categoria":[
            {"categoria_id":1}
        ],
        "detalle_producto":[
            {
                "descripcion": "Color azul, 160gb de memoria interna",
                "stock": 10,
                "precio":250
            }
        ]
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1005,
        "message": "La información ingresada ya esta en uso."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /producto/edit Editar Productos
 * @apiVersion v1.0.0
 * @apiGroup 4. Productos
 * @apiParam {String} codigo Código del Producto
 * @apiParam {String} descripcion Descripción del Producto
 * @apiParam {Array} categoria Array para la asignación de Categorias
 * @apiParam {Integer} categoria.categoria_id Identificador de Categorias a asignar
 * @apiParam {Array} detalle_producto Array para la asignación de Detalle Productos
 * @apiParam {String} detalle_producto.descripcion Descripción del Detalle Producto
 * @apiParam {Integer} detalle_producto.stock Stock del Producto
 * @apiParam {Number} detalle_producto.precio Precio del Producto
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "codigo": "001",
        "descripcion": "Huawei x1 pro",
        "categoria":[
            {"categoria_id":1}
        ],
        "detalle_producto":[
            {
                "descripcion": "Color azul, 160gb de memoria interna",
                "stock": 10,
                "precio":250
            }
        ]
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

/**
 * @api {get} /producto/categoria/index Buscar Categorias
 * @apiVersion v1.0.0
 * @apiGroup 3. Categorias
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1005,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */
    
 /**
 * @api {post} /producto/categoria/create Crear Categorias
 * @apiVersion v1.0.0
 * @apiGroup 3. Categorias
 * @apiParam {String} descripcion Descripción de la Categoria
 * @apiParam {Boolean} activo Indica si la Categoria esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "descripcion": "Electrónica"
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1005,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */

 /**
 * @api {post} /producto/categoria/edit Editar Categorias
 * @apiVersion v1.0.0
 * @apiGroup 3. Categorias
 * @apiParam {Integer} categoria_id Identificador de la Categoria
 * @apiParam {String} descripcion Descripción de la Categoria
 * @apiParam {Boolean} activo Indica si la Categoria esta activo o inactivo
 * @apiHeader {String} token Token de autenticación del usuario.
 * @apiHeaderExample {json} Ejemplo de envio de token por Header
 *     "headers": {
 *           "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjp7ImlkIjoiOCIsZIHQelbhwTK_1LL5XSERzOK_pvw2Du0yAb-Jg0ffAQ"
 *       }
 * @apiParamExample {json} Ejemplo de Parametros de Entrada
    {
        "categoria_id": 4,
        "descripcion": "Electrónica",
        "activo": true
    }
 * @apiSuccessExample {json} Respuesta Success
 * HTTP/1.1 200 OK
    {
        "type": "success",
        "code": 1000,
        "message": "La operación fué realizada exitosamente."
    }
 * @apiSuccessExample {json} Respuesta Info
 * HTTP/1.1 200 OK
    {
        "type": "info",
        "code": 1004,
        "message": "La información solicitada no existe."
    }
 * @apiSuccessExample {json} Token Invalido
 * HTTP/1.1 403 OK
    { 
        "message": "Token invalido"
    }
 * @apiSuccessExample {json} Respuesta Error
 * HTTP/1.1 200 OK
    {
        "type": "error",
        "code": 1100,
        "message": "Ha ocurrrido un error inesperado.",
        "reference": "{Identificador de Error}"
    }
 */
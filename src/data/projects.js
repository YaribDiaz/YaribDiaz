 const projects = [
    {
        id: 1,
        title: 'QUIZTIFY',
        subtitle: 'Organizador de emails',
        description: 
        'Un juego en el cual el objetivo es adivinar la canción que se reproduce, las canciones se obtienen de la API de Spotify, escoges una playlist, obtiene las canciones de esta playlist para después escoger una canción de forma aleatoria, cuando llega el momento en que escoges el título de la canción genera 4 posibles respuestas entre ellas la opción correcta, el que adivine más canciones gana.',
        link: '',
        cover:'01-quiztify',
        repository: 'https://github.com/yaribdiaz/quiztify',
        site: 'https://quiztify.netlify.app/',
        images: [
            {
                description:'Podrás buscar tus playlists favoritas para jugar, aunque por defecto te muestro las playlists del momento de Spotify.' ,
                image:'02-quiztify'
            },
            {
                description:'Ejemplo de búsqueda con playlists que llevan por nombre  navidad para mostrar la portada de playlist y el nombre, la API de Spotify da la oportunidad de filtrar las playlist pasandole un parámetro.' ,
                image:'03-quiztify'
            },
            {
                description:'Una vez que se selecciona la playlist de tu agrado, te redirige para poder escoger cuántas canciones quieres adivinar y poder elegir si quieres adinivar por nombre de la canción o por artista' ,
                image:'04-quiztify'
            },
            {
                description:'Si alguno de los dos jugadores selecciona la opción correcta se muestra el artista y el nombre de la canción, dándole un punto a ese jugador, en caso de que ninguno haya acertado al acabar el tiempo para dar tu respuesta de igual forma se muestra la información del tema.',
                image:'01-quiztify'
            },
            {
                description:'Tienes la opción de poner pause/play al juego pausando todo así como la reproducción de la canción a adivinar, siempre y cuando no esté en contra tiempo para poder escoger tu respuesta. ',
                image:'05-quiztify'
            },
            {
                description:'Una vez que empieza el juego las posibles respuestas no se muestran hasta que esté el contra tiempo para poder escoger tu respuesta y la canción está en curso.',
                image:'06-quiztify'
            },
            {
                description:'Felicitación al jugador con más puntos al adivinar las canciones con animaciones de confetti, ¡se los merece!.',
                image:'07-quiztify'
            }
        ],
        technologies:["API's", "REACT", "VITE", "REDUX TOOLKIT", "AXIOS", "HTML5", "TAILWIND"]
    },
    {
        id: 2,
        title: 'GuitarLA',
        subtitle: 'Carrito de compras',
        description: 
        'Carrito de compras simulando una tienda en línea en dónde puedes agregar artículos al carrito, así como eliminarlos, aumentar y disminuir el número de productos a la vez que se actualiza el total y subtotal de la cantidad a pagar.',
        link: '',
        cover:'01-guitarLAVue',
        repository: 'https://github.com/yaribdiaz/MAILO',
        site: '',
        images: [
            {
                description:'Así se ve una vez cargada la página web de carrito de compras teniendo un estilo real de una tienda en línea.' ,
                image:'01-guitarLAVue'
            },
            {
                description:'Tenemos una colección de guitarras tal como sería en una tienda real, con opción de agregar al carrito.' ,
                image:'02-guitarLAVue'
            },
            {
                description:'Una vez que se agrega al carrito podemos dirigirnos a la parte superior de la página para seleccionar el carrito y mostrar nuestros productos agregados' ,
                image:'03-guitarLAVue'
            },
            {
                description:'Podemos añadir más unidades de un producto a nuestro carrito facilmente, cambiando así también el total a pagar.' ,
                image:'04-guitarLAVue'
            },
            {
                description:'Se tiene la opción de eliminar artículos al carrito y así como añadir más unidades también puedes disminuirlas, actualizando el total a pagar.' ,
                image:'05-guitarLAVue'
            }
        ],
        technologies:["VUE3", "VITE", "HTML5", "CSS3"]
    },
    {
        id: 3,
        title: 'MAYA PET SHOP',
        subtitle: 'Tienda de alimentos para mascotas',
        description: 
        'Página realizada para Maya Pet Shop en la cual muestra datos de contacto y ubicación, así como también facilita los pedidos, mostrando los productos con los que cuentan para posteriormente crear el pedido y enviarlo mediante la API de WhatsApp.',
        link: '',
        cover:'01-mayaPetShop',
        repository: 'https://github.com/yaribdiaz/MAILO',
        site: '',
        images: [
            {
                description:'Pantalla de inicio de la página web mostrando lo más relevante, que ofrecen, ubicación, contacto, etc...',
                image:'01-mayaPetShop'
            },
            {
                description:'Listado de productos que ofrecen incluyendo imagen, botón de agregar al carrito y si ya es agregado al carrito muestra un texto.',
                image:'02-mayaPetShop'
            },
            {
                description:'Cuenta con una barra de búsqueda para buscar más facilmente un producto cuando el texto de búsqueda coincide con el nombre del artículo.',
                image:'03-mayaPetShop'
            },
            {
                description:'Una vez que se tienen los productos deseados nos dirigimos a la pestaña de "Resumen", mostrando una vista pequeña de la imagen y nombre del producto, así como poder incrementar las unidades o eliminar el artículo, enviando este pedido mediante la API de WhatsApp. ',
                image:'04-mayaPetShop'
            },
            {
                description:'Ubicación del establecimiento.',
                image:'05-mayaPetShop'
            },
        ],
        technologies:["REACT", "VITE", "HTML5", "TAILWIND", "API's"]
    },
    {
        id: 4,
        title: 'VETERINARIA',
        subtitle: 'Seguimiento de pacientes',
        description: 
        'Seguimiento de pacientes para veterinaria, en donde tiene opciones como agregar a pacientes evitando duplicados, editar, eliminarlos y persistencia de datos con local storage.',
        link: '',
        cover:'01-veterinariaReact',
        repository: 'https://github.com/yaribdiaz/MAILO',
        site: '',
        images: [
            {
                description:'Realizado todo la parte de CSS con Tailwind, puedes agregar pacientes junto con los campos como nombre del propietario, email, fecha de alta y sintomas que presenta.' ,
                image:'01-veterinariaReact'
            },
            {
                description:'El paciente agregado se muestra en la parte derecha de la pantalla junto con los datos, dato importante es que tiene campos obligatorios así es que no se podrán agregar pacientes si no es llenado el campo requerido.',
                image:'02-veterinariaReact'
            },
            {
                description:'Se muestra como al editar es rellenado el formulario de la izquierda con los datos del paciente para ser editado sin ser duplicado.' ,
                image:'03-veterinariaReact'
            },
        ],
        technologies:["REACT", "VITE", "TAILWIND", "HTML5"]
    },
    {
        id: 5,
        title: 'GASTOS',
        subtitle: 'Planificador de gastos',
        description: 
        'Consulta API de GMAIL para mostrar los correos con filtros de: Leído, Todos, Borrados, Buscador',
        link: '',
        cover:'01-planificadorGastos',
        repository: 'https://github.com/yaribdiaz/MAILO',
        site: '',
        images: [
            {
                description:'' ,
                image:'02-guitarLAVue'
            },
        ],
        technologies:["REACT", "VITE", "TAILWIND", "HTML5"]
    },
    {
        id: 6,
        title: 'MAILO',
        subtitle: 'Organizador de emails',
        description: 
        'Consulta API de GMAIL para mostrar los correos con filtros de: Leído, Todos, Borrados, Buscador',
        link: '',
        cover:'01-quiztify',
        repository: 'https://github.com/yaribdiaz/MAILO',
        site: '',
        images: [
            {
                description:'' ,
                image:'02-guitarLAVue'
            },
        ],
        technologies:["API's", "REACT", "VITE", "REDUX TOOLKIT", "HTML5"]
    },

    
    // {
    //     title: '',
    //     subtitle: '',
    //     description: '',
    //     link: '',
    //     cover:'',
    //     repository: '',
    //     images: [],
    //     technologies:[]
    // }
]

export default projects
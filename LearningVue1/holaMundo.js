const app = new Vue({
    //Aqui instanciamos cada uno de los containers, en este caso instanciamos el div llamado 'app'
    el: '#app',
    data: {
        titulo: "Hola Mundo con Vue",
        temas: [
            {unidad: "1 Hola Mundo", fecha: "07/10/19", estado:true},
            {unidad: "2 Objetos en Vue", fecha: "10/11/19", estado:false},
            {unidad: "3 Arreglos en Vue", fecha: "12/12/19", estado:false}
        ],
        nuevoTema: '',
    },
    methods:{
        agregarTema(){
            console.log('Click!');
        }
    }
})
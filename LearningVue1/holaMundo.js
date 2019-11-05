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
        nuevaFecha: '',
        TemaEstudiado: '',
        totalTemas: 0
    },
    methods:{
        agregarTema(){
            this.temas.push({
                unidad: this.nuevoTema, fecha: this.nuevaFecha, estado: this.TemaEstudiado
            });
            this.nuevoTema = '';
            this.nuevaFecha = '';
            this.TemaEstudiado = '';
        },
    },
    computed:{
        sumarTemas(){
            this.totalTemas = 0;
            for (tema of this.temas) {
                this.totalTemas++;              
            }
            return this.totalTemas;
        }
    }
})
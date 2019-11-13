const app = new Vue({
    el: '#app',
    data: {
        titulo: 'GYM con Vue',
        tareas: [],
        nuevaTarea: '',
    },
    methods: {
        agregarTarea: function () {
            
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false
            });
            console.log(this.tareas);
            this.nuevaTarea = '';
        },
        realizarTarea: function (index) {
            this.tareas[index].estado = !this.tareas[index].estado
        },
        eliminarTarea: function (index) {
            this.tareas.pop(index);
        }

    }
});
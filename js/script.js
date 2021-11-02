"use strict"

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        listTasks: ["Fare la spesa", "Pulire il giardino"],
        newTask: "",
    },
    methods: {
        onClickBtnAdd() {
            if (this.newTask.trim() === "") {
                alert("Il valore inserito non contiene nulla. Riprovare")
                return
            }

            const checkSameElement = this.listTasks.find((el) => {
                return el.toLowerCase() === this.newTask.trim().toLowerCase()
            })

            if (checkSameElement) {
                alert("Attenzione, il valore inserito è già presente. Aggiungerne uno nuovo.")
                return
            }

            this.listTasks.push(this.newTask)
            this.newTask = ""
        },
        onClickBtnRemove(i) {
            return this.listTasks.splice(i, 1)
        }
    }
})
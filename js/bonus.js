"use strict"

Vue.config.devtools = true;

new Vue({
    el: "#root",
    data: {
        listTasks: [
            {
                text: "Fare la spesa",
                check: false,
                color: "#ff0000"
            },
            {
                text: "Pulire il giardino",
                check: false,
                color: "#ff0000"
            }
        ],
        newTask: "",
        newTaskColor: "#ff0000"
    },
    methods: {
        onClickBtnAdd() {
            if (this.newTask.trim() === "") {
                alert("Il valore inserito non contiene nulla. Riprovare")
                return
            }

            const checkSameElement = this.listTasks.find((el) => {
                return el.text.toLowerCase() === this.newTask.trim().toLowerCase()
            })

            if (checkSameElement) {
                alert("Attenzione, il valore inserito è già presente. Aggiungerne uno nuovo.")
                return
            }

            this.listTasks.push({
                text: this.newTask.trim(),
                check: false,
                color: this.newTaskColor
            })

            this.newTask = ""
        },
        onClickBtnRemove(i) {
            return this.listTasks.splice(i, 1)
        }
    }
})
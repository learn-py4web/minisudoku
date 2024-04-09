"use strict";

let app = {};

app.data = {    
    data: function() {
        return {
            values: [
                [1, 2, 3], [4, 8, 6], [7, 8, 9],
            ],
            editing: [[false, false, false], [false, false, false], [false, false, false]],
            is_valid: true,
        };
    },
    computed: {
    },
    methods: {
        start_edit: function(j, i) {
            this.stop_edit();
            this.editing[j][i] = true;
        },
        stop_edit: function() {
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < 3; i++) {
                    this.editing[j][i] = false;
                }
            }
        },
        check_table: function() {
            for (let j = 0; j < 3; j++) {
                for (let i = 0; i < 3; i++) {
                    for (let jj = 0; jj < 3; jj++) {
                        for (let ii = 0; ii < 3; ii++) {
                            if ((j != jj || i != ii) && this.values[j][i] == this.values[jj][ii]) {
                                this.is_valid = false;
                                return;
                            }
                        }
                    }
                    if (this.values[j][i] < 1 || this.values[j][i] > 9) {
                        this.is_valid = false;
                        return;
                    }
                }
            };
            this.is_valid = true;
        }
    }
};

app.vue = Vue.createApp(app.data).mount("#app");
app.vue.check_table();

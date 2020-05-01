/**
 * 主要用于地址的选择, 可以用其他类型的选择 ,
 * 最好不要超过三级
 */
// let Vue = require('vue');
let app = require('common');

let Picker = require('Picker');

let vPickerHTML = __inline("vPicker.htm");

let city = __inline('city.json');
var vm;
var picker

var vPicker = {
    template: vPickerHTML,
    props: {
        province: {
            type: String,
            default: ""
        },
        city: {
            type: String,
            default: ""
        },
        county: {
            type: String,
            default: ""
        }
    },
    data() {
        return {
            address: "",
        }
    },
    mounted() {
        vm = this;
        // console.log();

        vm.initPicker();

    },
    watch: {
        address: function (ne, old) {

            console.log('000');


        },
        province: function (ne, old) {
            this.address = [{
                name: vm.province
            }, {
                name: vm.city
            }, {
                name: vm.county
            }]

            if(picker){
                // 刷新数据
                picker.update()
            }
            

        }
    },
    methods: {
        /**
         * init picker  
         */
        initPicker() {
            console.log("init");


            setTimeout(() => {
                picker = new Picker({
                    target: '#vpick',
                    data: city.data,
                    value: vm.address,
                    valueKey: 'name',
                    textKey: 'name',
                    childKey: 'child',
                    confirm: function (value, result) {
                        console.log(value, result)
                        var str = [];
                        for (var i = 0, len = result.length; i < len; i++) {
                            str.push(result[i].name);
                        }

                        this.target.value = str.join('-');

                        vm.$emit('change', result);

                    },
                    cancel: function () {
                        console.log('取消,不做变更');
                    },
                    initCallback: function (value, result) {
                        var str = [];
                        for (var i = 0, len = result.length; i < len; i++) {
                            str.push(result[i].name);
                        }

                        this.target.value = str.join('-');
                        vm.$emit('change', result);
                    }
                });

            }, 200);

        }
    }

}


export default vPicker
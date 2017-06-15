<template>
    <div id="app">
        <!--<router-view></router-view>-->
        <div id="demo">
            <form id="search">
                Search <input name="query" v-model="searchQuery">
            </form>
            {{ msg }}
            <tableau
                    :data="gridData"
                    :columns="gridColumns"
                    :filter-key="searchQuery">
            </tableau>
        </div>
    </div>
</template>

<script>
    import Tableau from './components/Tableau.vue'
    import $ from 'jquery'

    export default {
        components:{
            Tableau
        },
        name: 'app',
        data () {
            return {
                msg:"vide",
                pokemons: [],
                pokemonsName:[],
                searchQuery: '',
                gridColumns: ['name', 'power'],
                gridData: [
                    { name: 'Chuck Norris', power: Infinity },
                    { name: 'Bruce Lee', power: 9000 },
                    { name: 'Jackie Chan', power: 7000 },
                    { name: 'Jet Li', power: 8000 }
                ]

            }
        },
        methods:{
            /*save (user) {
                this.$http.put('http://jsonplaceholder.typicode.com/users/' + user.id, {
                    name: user.name
                }).then(response => {
                    // get body data
                    this.users = response.data
                }, response => {
                    // error callback
                    console.log('test3', response.body)
                });
            },*/

        },
        mounted (){
            //inutilisé pour l'instant
            this.pokemonName = this.$resource('http://pokeapi.co/api/v2/pokemon')

            this.$http.get('http://pokeapi.co/api/v2/pokemon').then(response => {
                // get body data
                    this.pokemons = response.data

            }, response => {
                // error callback
                console.log('test2', response.body)
            })
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>



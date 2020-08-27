<template>
    <div class="counter">
        <h1>{{number}}</h1>
        <button @click = "decrement">-</button>
        <button @click = "increment">+</button>        
    </div>
</template>
<script>
    export default {
        data(){
            return{
                number: 0,
            }
        },
        methods:{
            increment(){
                if(this.number >= 0){
                    this.number++
                }
            },
            decrement(){
                if(this.number > 0){
                    this.number --
                }
            }
        }
    }
</script>
<style scoped>
.counter{
    display: flex;
    align-content: center;
    justify-content: center;
}
button{
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
}
</style>
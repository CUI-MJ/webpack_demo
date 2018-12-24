<template>
    <div >
        <!-- -->
        <div class="test">
            {{text}}
        </div>
        <div class="aaa">
            {{msg}}
        </div>
        <input type="file" name="picFieldName" id="picFieldId" v-on:change="uploadPic($event)" />
    </div>
   
</template>

<script>
    export default {
        data() {     
            return {
                text: 'abc',
                msg :'11111111111111111111111111111111111',
            }
        },
        methods:{
            uploadPic(target){
                console.log(target)
            }
        }
    }
</script>

<style lang="stylus" scoped>

.test
    font-size: 20px;
    color: blueviolet;
    background: url('../asset/images/bg1.jpg')
</style>


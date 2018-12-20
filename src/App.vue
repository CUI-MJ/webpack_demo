<template>
    <div class="test">{{text}}</div>
</template>

<script>
    export default {
        data() {     
            return {
                text: 'abc'
            }
        }
    }
</script>

<style lang="stylus" scoped>
@import url('test.styl');
.test
    font-size: 20px;
    color: blueviolet;
    background: url('../asset/images/bg1.jpg')
</style>


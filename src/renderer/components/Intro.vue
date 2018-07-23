<template>
    <div class="intro">
        <div class="intro__block">
            <h1 class="intro__header">Добро пожаловать!</h1>

            <button class="intro__button" @click="startTest">
                Приступить к тестированию
            </button>
        </div>
    </div>
</template>

<script>
    import { mutateStateProp } from "../services/simpleStore";

    export default {
        methods: {
            startTest() {
                mutateStateProp('startTime', Date.now());
                this.$router.push('/quiz');
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .intro
        height 100%
        display flex
        flex-direction column
        justify-content center
        text-align center

        &__header
            color #2c3e50;
            font-size 20px;
            font-weight bold;

        &__button
            font-size 16px;
            color: #fff;
            background-color: #4fc08d;
            border: 1px solid #4fc08d;
            border-radius: 6px;
            outline: none;
            cursor: pointer;
</style>
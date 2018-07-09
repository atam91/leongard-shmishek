<template>
    <div class="quiz">
        <div class="quiz__status">
            <b>{{ number }}</b> / {{ questionsCount }}
        </div>
        <div class="quiz__question">{{ currentQuestion }}</div>

        <div class="quiz__buttons">
            <button class="quiz__button" @click="takeAnswer('Y')">Да</button>
            <button class="quiz__button" @click="takeAnswer('N')">Нет</button>
        </div>
    </div>
</template>

<script>
    import questions from '../data/questions'
    import { setAnswers } from '../services/quiz'

    export default {
        data: () => ({
            questions,
            answers: []
        }),

        computed: {
            currentQuestion() {
                return this.questions[this.answers.length];
            },
            number() {
                return this.answers.length + 1;
            },
            questionsCount() {
                return this.questions.length;
            }
        },

        methods: {
            takeAnswer(answer) {
                this.answers.push(answer);

                if (this.answers.length === this.questions.length) {
                    setAnswers(this.answers);
                    this.$router.push('/result');
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .quiz
        height 100%
        display flex
        flex-direction column
        justify-content center
        text-align center
        margin 0 50px
        color #2c3e50;

        &__status
            font-size 16px;
            margin-bottom 40px

        &__question
            font-size 20px;
            font-weight bold;

        &__buttons
            margin-top 20px

        &__button
            font-size 16px;
            color: #fff;
            background-color: #4fc08d;
            border: 1px solid #4fc08d;
            border-radius: 6px;
            outline: none;
            cursor: pointer;
            width 60px
</style>
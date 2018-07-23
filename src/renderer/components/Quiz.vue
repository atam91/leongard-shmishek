<template>
    <div class="quiz">
        <div class="quiz__status">
            <b>{{ number }}</b> / {{ questionsCount }}
        </div>
        <div class="quiz__question">{{ currentQuestion }}</div>

        <div class="quiz__buttons">
            <button class="quiz__button" @click="takeAnswer(YES)">Да</button>
            <button class="quiz__button" @click="takeAnswer(NO)">Нет</button>
        </div>
    </div>
</template>

<script>
    import { QUESTIONS } from '../data/test'
    import { YES, NO } from '../data/constants'
    import { mutateStateProp } from '../services/simpleStore'

    const myAnswers = [ "Yes", "Yes", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "No", "Yes", "No", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "No", "Yes", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "No", "Yes", "No", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "No", "No", "Yes", "No", "Yes", "Yes", "Yes", "Yes", "Yes", "Yes", "No", "Yes", "Yes", "Yes", "Yes", "No", "No", "Yes", "No", "No", "No", "No", "Yes", "No", "Yes", "No" ];

    export default {
        data: () => ({
            QUESTIONS,
            answers: [ ...myAnswers ],
            YES,
            NO
        }),

        computed: {
            currentQuestion() {
                return QUESTIONS[this.answers.length];
            },
            number() {
                return this.answers.length + 1;
            },
            questionsCount() {
                return QUESTIONS.length;
            }
        },

        methods: {
            takeAnswer(answer) {
                this.answers.push(answer);

                if (this.answers.length === QUESTIONS.length) {
                    mutateStateProp('answers', this.answers);
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
        margin 0 100px
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
<template>
    <div>
        Результат
        <p>{{ answers }}</p>

        <button @click="$router.push('/')">назад</button>
    </div>
</template>

<script>
    import { getAnswers } from '../services/quiz'

    export default {
        data: () => ({
            answers: null
        }),

        mounted() {
            this.answers = getAnswers();
        }
    }
</script>
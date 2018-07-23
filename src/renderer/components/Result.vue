<template>
    <div class="result">
        <div class="result__time">
            Тест пройден за {{ timePassed.min }} мин. {{ timePassed.sec }} сек.
        </div>

        <table class="result__table">
            <tbody>
                <tr v-for="{ type, score } in result.types">
                    <td>{{ ACCENTUATED_PERSONALITIES_NAMES[type] }}</td>
                    <td><b>{{ score }}</b></td>
                </tr>
            </tbody>
        </table>

        <p>Д{{ solidity }}</p>


        <button @click="$router.push('/')">назад</button>
    </div>
</template>

<script>
    import { getState } from "../services/simpleStore";
    import { getResult } from '../services/test'
    import { LIE } from '../data/constants'
    import { ACCENTUATED_PERSONALITIES_NAMES } from '../data/description'
    import { LIE_INTERPRITATION } from '../data/test'

    export default {
        data: () => ({
            ACCENTUATED_PERSONALITIES_NAMES,
            timePassed: null,
            result: null
        }),

        computed: {
            solidity() {
                const score = this.result[LIE];

                return LIE_INTERPRITATION.find(({ min, max }) => score >= min && score <= max).short;
            }
        },

        mounted() {
            const { answers, startTime } = getState();

            this.result = getResult(answers);
            this.result.types.sort((a, b) => b.score - a.score);

            const seconds = (Date.now() - startTime) / 1000;
            this.timePassed = {
                min: parseInt(seconds / 60),
                sec: parseInt(seconds % 60)
            };
        }
    }
</script>
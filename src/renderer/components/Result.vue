<template>
    <div class="result">
        <div class="result__time" v-if="timePassed">
            Тест пройден за {{ timePassed.min }} мин. {{ timePassed.sec }} сек.
        </div>

        <div class="result__row-area">
            <table class="result__table" v-if="result">
                <tbody>
                    <tr v-for="{ type, score } in result.types">
                        <td class="result__table-name-column" @click="setPersonalityDescription(type)">
                            {{ ACCENTUATED_PERSONALITIES_NAMES[type] }}
                        </td>
                        <td class="result__table-score-column">
                            {{ score }}
                        </td>
                    </tr>
                </tbody>
            </table>

            <div class="result__personality-description">
                {{ personalityDescription }}
            </div>
        </div>

        <span class="result__solidity">Д{{ solidity }}</span>

        <button class="result__button" @click="$router.push('/')">назад</button>
    </div>
</template>

<script>
    import { getState } from "../services/simpleStore";
    import { getResult } from '../services/test'
    import { LIE } from '../data/constants'
    import { ACCENTUATED_PERSONALITIES_NAMES, ACCENTUATED_PERSONALITIES_DESCRIPTIONS } from '../data/description'
    import { LIE_INTERPRITATION } from '../data/test'

    export default {
        data: () => ({
            ACCENTUATED_PERSONALITIES_NAMES,
            timePassed: null,
            result: null,
            personalityDescription: null
        }),

        computed: {
            solidity() {
                if (!this.result) {
                    return;
                }

                const score = this.result[LIE];

                return LIE_INTERPRITATION.find(({ min, max }) => score >= min && score <= max).short;
            }
        },

        methods: {
            setPersonalityDescription(type) {
                this.personalityDescription = ACCENTUATED_PERSONALITIES_DESCRIPTIONS[type];
            }
        },

        mounted() {
            const { answers, startTime } = getState();

            const seconds = (Date.now() - startTime) / 1000;
            this.timePassed = {
                min: parseInt(seconds / 60),
                sec: parseInt(seconds % 60)
            };

            this.result = getResult(answers);
            this.result.types.sort((a, b) => b.score - a.score);

            this.setPersonalityDescription(this.result.types[0].type);
        }
    }
</script>

<style lang="stylus" scoped>
    .result
        font-size 16px;
        text-align center

        &__time
            font-size 20px;

        &__row-area
            display flex
            margin 100px 50px 100px 100px

        &__table
            font-size 20px;

            &-name-column
                cursor pointer

            &-score-column
                padding-left 20px

        &__personality-description
            margin-left 50px

        &__solidity
            display block
            text-align left;
            margin-left 20px

        &__button
            font-size 16px;
            color: #fff;
            background-color: #4fc08d;
            border: 1px solid #4fc08d;
            border-radius: 6px;
            outline: none;
            cursor: pointer;
</style>
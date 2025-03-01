<template>
    <div>
        <div class="main">
            <h2 class="main-title">
                {{ $t("statistics") }}
            </h2>
            <h2 class="main-title">
                Jurnalning sonlari bo‘yicha maqolalar
            </h2>
            <div class="main-basic" v-if="journal_statistics.length > 0">
                <div class="table">
                    <table>
                        <tr>
                            <th>T/r.</th>
                            <th>Jurnalning soni</th>
                            <th>Maqolalar soni</th>
                        </tr>
                        <tr v-for="(item, index) in journal_statistics" :key="index">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.magazine_info }}</td>
                            <td>{{ item.articles_count }} ta</td>
                        </tr>
                    </table>
                </div>
            </div>
            <div v-else id="main-basic">
                <h3 style="color: red; text-align: center;">Mavjud emas</h3>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            journal_statistics: [],
        };
    },
    mounted() {
        this.getAbout();
    },
    methods: {
        async getAbout() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/en-gb/jurnal/statistics");

                this.journal_statistics = response.data;
                console.log(response.data);
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>
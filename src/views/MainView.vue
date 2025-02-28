<template>
    <div>
        <div class="main">
            <!-- <div>
                <button @click="changeLang('uz')">UZ</button>
                <button @click="changeLang('ru')">RU</button>
                <button @click="changeLang('en')">EN</button>
            </div> -->
            
            <div class="main-basic" v-if="datas.length > 0">
                <h4>Bosh menyu</h4>
                <div v-for="(item, index) in datas" :key="index">
                    <h4 class="main-basic-title">{{ item.magazine.which_number }}</h4>
                    <div class="table">
                        <table>
                            <tr>
                                <th>Maqolaning nomi</th>
                                <th>Mualliflar FISH</th>
                                <th>Yuklab olish</th>
                            </tr>
                            <tr>
                                <td></td>
                            </tr>
                        </table>
                    </div>
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
            datas: [],
        };
    },
    mounted() {
        this.getOrders();
    },
    methods: {
        changeLang(lang) {
            this.$i18n.locale = lang;
            localStorage.setItem("locale", lang);
        },
        async getOrders() {
            try {
                const response = await axios.get("https://back.tift-fintech.uz/uz/articles");

                this.datas = response.data;
            } catch (error) {
                console.error("Xatolik yuz berdi:", error);
            }
        },

    }
};
</script>

<style></style>
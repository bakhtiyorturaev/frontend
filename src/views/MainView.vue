<template>
    <div>
        <div class="main">
            <div class="main-basic" v-if="datas.length > 0">
                <h4>{{ $t("home_page") }}</h4>
                <div v-for="(item, index) in transformList(datas)" :key="index">
                    <h4 class="main-basic-title">{{ item?.magazine?.which_number }}</h4>
                    <div class="table">
                        <table>
                            <tr>
                                <th>{{ $t("maqola_name") }}</th>
                                <th>{{ $t("download") }}</th>
                            </tr>
                            <tr>
                                <td>{{ item.name }}</td>
                                <td>
                                    <a :href="item.upload_file" target="_blank" download>
                                        <button class="btn_download">{{ $t("download") }}</button>
                                    </a>
                                    <br>
                                    <a :href="item.upload_file" target="_blank">
                                        <button class="btn_view">{{ $t("view") }}</button>
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
            <div v-else id="main-basic">
                <h3 style="color: red; text-align: center;">{{ $t("mavjud_emas") }}</h3>
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
        transformList(data, type = "array") {
            const locale = localStorage.getItem("locale") || "uz";
            const transformObject = (obj) => {
                let newObj = { ...obj };
                Object.keys(obj).forEach(key => {
                    if (key.endsWith("_uz") || key.endsWith("_ru") || key.endsWith("_en")) {
                        const baseKey = key.slice(0, -3);
                        if (!newObj[baseKey]) {
                            newObj[baseKey] = obj[`${baseKey}_${locale}`] || obj[`${baseKey}_uz`];
                        }
                    }
                }); return newObj;
            };
            if (type === "array" && Array.isArray(data)) return data.map(transformObject);
            if (type === "obj" && typeof data === "object" && data !== null) return transformObject(data);
            return data;
        },
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
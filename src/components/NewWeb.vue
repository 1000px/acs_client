<template>
    <v-container fluid>
        <form>
            <v-text-field
                v-model="sitename"
                label="网站名称"
                required
            ></v-text-field>
            <v-text-field
                v-model="desc"
                label="概要说明"
                required
            ></v-text-field>
            <v-select
                v-model="sitetype"
                :items="types"
                return-object
                label="网站类型"
                @change="changeSiteType"
                required
            ></v-select>

            <v-row v-if="priceList.length>=1">
                <v-col cols="9">
                    您选中的网站类型是：<span class="red--text darken-1">{{ sitetype.text }}</span>，
                    价格为：<span class="red--text darken-1">{{ priceObj.abate }}</span><br>
                    <p class="orange--text">您可以选择合适的网站使用期限，时间越长，折扣越多。</p>
                </v-col>
                <v-col cols="3">
                    <v-select
                        v-model="priceObj"
                        return-object
                        solo
                        :items="priceList"></v-select>
                </v-col>
            </v-row>
            <v-btn class="mr-4" color="primary">提交</v-btn>
            <v-btn color="warning" @click="clearForm">清除</v-btn>
        </form>
    </v-container>
</template>

<script>
export default {
    name: 'NewWeb',
    data: () => ({
        sitename: '',
        desc: '',
        sitetype: '',
        priceObj: '', 
        priceList: [],
        types: [
            {   
                id: 1,
                text: '企业网站',
                priceList:  [
                    {
                        duration: 1,
                        text: '1年',
                        abate: 2000
                    },
                    {
                        duration: 2,
                        text: '2年',
                        abate: 3800
                    },
                    {
                        duration: 3,
                        text: '3年',
                        abate: 5280
                    }
                ]
            },
            {
                id: 2,
                text: '电子商城',
                priceList:  [
                    {
                        duration: 1,
                        text: '1年',
                        abate: 4800
                    },
                    {
                        duration: 2,
                        text: '2年',
                        abate: 8640
                    },
                    {
                        duration: 3,
                        text: '3年',
                        abate: 11520
                    }
                ]
            }
        ]
    }),
    methods: {
        changeSiteType: function (obj) {
            this.priceList = obj.priceList
            this.priceObj = this.priceList[0]
        },
        clearForm: function () {
            this.priceObj = ''
            this.priceList = []
            this.sitename = ''
            this.desc = ''
            this.sitetype = ''
        }
    }
}
</script>
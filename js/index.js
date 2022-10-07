Vue.createApp({
    data() {
        return {
            products: [{
                title: '抗菌洗手乳',
                img: './image/product-a.jpg',
                price: 200,
                amountShow: 0
            }, {
                title: '一般醫療口罩',
                img: './image/product-b.jpg',
                price: 180,
                amountShow: 0
            }, {
                title: '特殊N95口罩',
                img: './image/product-c.jpg',
                price: 50,
                amountShow: 0
            }, {
                title: '滾筒衛生紙',
                img: './image/product-d.jpg',
                price: 60,
                amountShow: 0
            }, {
                title: '體溫計',
                img: './image/product-e.jpg',
                price: 99,
                amountShow: 0
            }, {
                title: '冷凍健康餐',
                img: './image/product-f.jpg',
                price: 160,
                amountShow: 0
            },],
            chat: '',
            input: [],
            reply: [
                '目前疫情嚴重疫世界關心您!', '有甚麼需要服務的嗎?', '有甚麼需要服務的嗎?'
            ]
        }
    }, methods: {
        minus(product) {
            product.amountShow--
            product.amountShow = (product.amountShow < 1) ? 0 : product.amountShow
        },
        plus(product) {
            product.amountShow++
            product.amountShow = (product.amountShow > 9) ? 9 : product.amountShow
        },
        addInput() {
            this.input.push(this.chat)
            this.chat = '';
            
        },
        h() {
            this.$refs.chat.scrollTop = this.$refs.chat.scrollHeight + 100
        },
        async go() {
            await this.addInput();
            await this.h();
        }
    },
    computed: {
        sub() {
            return this.products.map(data => data.price * data.amountShow)
        },
        total() {
            return this.sub.reduce((a, b) => a + b)
        },
    }
}).mount("#app");
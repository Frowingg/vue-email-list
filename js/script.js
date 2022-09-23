var app = new Vue(
    {
        el: '#app',
        data: {
            randomMail: null,
        },
        methods: {
            getRandomMailFromApiTenTimes() {
                for(i=0; i <= 10; i++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                    this.randomMail = response.data.response;
                    })
                }
            },
        },
        mounted() {
            this.getRandomMailFromApiTenTimes();
        }
    }
);

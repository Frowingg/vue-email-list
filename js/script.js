var app = new Vue(
    {
        el: '#app',
        data: {
            randomMail: null,
        },
        methods: {
            getRandomMailFromApi() {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((response) => {
                    this.randomMail = response.data.response;
                });
            }
        },
        mounted() {
            this.getRandomMailFromApi();
        }
    }
);

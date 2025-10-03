const { createApp } = Vue;

// main app
const app = createApp({
  data() {
    return {
      message: 'Hello World!',
      name: 'Samuel',
      yourName: '',
      nameIs: '',
      price: 1000,
      your_discount: 100,
      temp: 0,
      message_2:'',
      status: false,
      gate: false,
      students: ['Jim','Alex','Sam','Tom'],
      players: [
        {name: 'Joe', score:5},
        {name: 'Max', score: 3},
        {name: 'Ellie', score:5},
        {name: 'Kate', score: 4}
      ],
      link: 'https://www.google.com',
      interest: ''
    }
  },
  methods: {
    discount() { return this.price - this.your_discount },
    increase() { this.temp++ },
    decrease() { this.temp-- },
    reset() { this.temp = 0 },
    keypressed() { console.log('key pressed') },
    calculateInterest() {
      const principal = this.$refs.principal.value
      const years = 2
      const rate = 2
      this.interest = principal * years * rate
    },
    saveName() {
      this.nameIs = this.yourName
    }
  }
})

// components
app.component('my-component', {
  template: '<p>This is my component {{ name }} - {{ temperature }}<button @click="changeTemp()">Increase Temperature</button></p>',
  data() {
    return { name: 'Khris' ,  temperature: 20}
  },
  methods:{
    changeTemp(){this.temperature = this.temperature + 10}
  }
})

// mounting
app.mount('#app')

// 2 app
createApp({
  data() {
    return { value: 100, price: '$2000' }
  }
}).mount('#app2')

// 3 app
createApp({
  data() {
    return { value: 200, price: '$2000' }
  }
}).mount('#app3')

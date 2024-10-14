vue.createApp({data(){return{count:0}}}).mount('#people');
var vm = new Vue({
    el: '#time',
    data: {
      message: 'Hello'
    },
    computed: {
        endDate = new Date(2024, 1, 31, 0, -1);
        currentDate = Date.now();
        timeDiff = endDate - currentDate;
        leftDay = Math.floor(timeDiff / (1000 * 60 * 60 * 24))


      }
    }
  })
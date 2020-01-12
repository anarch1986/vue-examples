new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highlight: false,
      shrink: true
    },
    float: 'float',
    userClass: ''
  },
  methods: {
    startEffect: function () {
      var myVue = this;
      setInterval(function () {
        myVue.effectClasses.highlight = !myVue.effectClasses.highlight;
        myVue.effectClasses.shrink = !myVue.effectClasses.shrink;
      }, 1000)
    }
  }
});

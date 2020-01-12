new Vue({
  el: '#exercise',
  data: {
    effectClasses: {
      highLight: false,
      shrink: true
    },
    float: 'float',
    userClass: '',
    isVisible: true,
    myStyle: {
      width: '100px',
      height: '150px',
      backgroundColor: 'gray'
    },
    progressBar: {
      width: '0px',
      backgroundColor: '#8956e1'

    }
  },
  methods: {
    startEffect: function () {
      var vm = this;
      setInterval(function () {
        vm.effectClasses.highLight = !vm.effectClasses.highLight;
        vm.effectClasses.shrink = !vm.effectClasses.shrink;
      }, 1000)
    },
    startProgress: function () {
      var vm = this;
      var width = 0;
      setInterval(function () {
        width <= 200 ? width = width + 10 : width;
        vm.progressBar.width = width + 'px';
      }, 1000)
    }
  }
});

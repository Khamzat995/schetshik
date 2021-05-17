function createCounter() {
  const counterObject = {
    value: 0,

    increment: function () {
      this.value++;
    },

    incrementBy: function (amount) {
      this.value += amount;
    },

    decrement: function () {
      this.value--;
    },

    print: function () {
      console.log(this.value);
    },
      reset: function () {
        this.value = 0;
    },

  }
    return counterObject;
  }


const counter = createCounter();



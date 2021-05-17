function createTamagochi() {
  const tamagochiObject = {
    name: 'Tamagochi',
    food: -1,
    energy: 0,
    mood: 0,

    getStatus: function () {
      if (this.food < 3) {
         console.log(`Я голоден(${this.food})`);
      } else {
         console.log(`Я не голоден(${this.food})`) ;
      }
       if (this.energy < 3) {
        console.log(`Я хочу спасть(${this.energy})`);
      } else {
         console.log(`Я не хочу спать(${this.energy})`);
      }
      if (this.mood < 3) {
        console.log(`Мне скучно(${this.mood})`);
      } else {
        console.log(`Мне весело(${this.mood})`);
      }

      if (this.food <= 0) {
        console.log(this.name + `${" умер :("}`)
      }
      return tamagochiObject;
    },

    setName: function (name) {
      this.name = name;
    },

    eat: function () {
      if (this.food < 5 || this.mood < 5) {
        this.food++ && this.mood--;
      }
      },

    sleep: function () {
      if (this.energy < 5 || this.food < 5) {
        this.energy++ && this.food--;
      }
    },

    play: function () {
      if (this.mood < 5 || this.energy < 5) {
        this.mood++ && this.energy--;
      }
    }
  }


  return tamagochiObject;
}

const tamagochi = createTamagochi();


//eat sleep play
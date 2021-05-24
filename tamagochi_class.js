function createTamagochi() {
  class tamagochiObject {
    constructor(name, food, energy, mood) {
      this.name = name;
      this.food = food;
      this.energy = energy;
      this.mood = mood;

      let a = 'Tamagochi';
      let b = 1;
      let c = 1;
      let d = 0;
    }

    getStatus () {
      if (this.food < 3) {
        console.log(`Я голоден(${this.food})`);
      } else {
        console.log(`Я не голоден(${this.food})`);
      }

      if (this.energy < 3) {
        console.log(`Я хочу спать(${this.energy})`);
      } else {
        console.log(`Я не хочу спать(${this.energy})`);
      }

      if (this.mood < 3) {
        console.log(`Мне скучно(${this.mood})`);
      } else {
        console.log(`Мне не скучно(${this.mood})`);
      }

      if (this.food <= 0 || this.energy <= 0) {
        console.log(this.name + ' умер :(')
      }
      if (this.mood <= 0) {
        console.log(this.name + ' умер :(')
      }

    }

    setName (name) {
      this.name = name;
    }

    eat () {
      if (this.food < 5 || this.mood < 5) {
        this.food++ && this.mood--;
      }
    }

    sleep () {
      if (this.energy < 5 || this.food < 5) {
        this.energy++ && this.food--;
      }
    }

    play () {
      if (this.mood < 5 || this.energy < 5) {
        this.mood++ && this.energy--;
      }
    }

  }
  return tamagochiObject;
}

const tamagochi = createTamagochi();
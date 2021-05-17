function createTamagochi() {
  const tamagochiObject = {
    name: 'Tamagochi',
    food: 4,
    energy: 1,
    mood: 3,

    getStatus: function () {
      return tamagochiObject;
    },

    setName: function (chengeName) {
      this.name = chengeName;
    },

  }


  return tamagochiObject;
}

const tamagochi = createTamagochi();
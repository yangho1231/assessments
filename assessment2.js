var data = [
    {
      name: 'Califlower',
      cost: 60,
      sell: 100,
      grow: 6
    },
      {
      name: 'sunflower',
      cost: 20,
      sell: 50,
      grow: 6
    },
      {
      name: 'pancake',
      cost: 40,
      sell: 60,
      grow: 6
    },
      {
      name: 'gaga',
      cost: 30,
      sell: 60,
      grow: 8
    },
  ]
  function profit(plants, money) {
    let count = 1;
    let arrayResult = [];
    plants.forEach((plant) => {
      plant.profit = (plant.sell - plant.cost) / plant.grow
    });
    let sortedPlant = plants.sort((a, b) => {
      return a.profit -b.profit;
    })
    while(money >= 0) {
      let highestCostPlant = sortedPlant[sortedPlant.length - count];
      if (money >= highestCostPlant.cost) {
        money = money - highestCostPlant.cost;
        arrayResult.push(highestCostPlant.name);
      }
      if (money <= highestCostPlant.cost) {
        count++;
      }
      if (count >= sortedPlant.length) {
        return arrayResult;
      }
    }
  }
  profit(data, 200)
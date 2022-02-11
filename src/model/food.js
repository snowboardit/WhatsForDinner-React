// Get data from backend
async function _getFood() {

    // Fetch food data from backend
    const url = 'http://localhost:3000/food';
    const data = await fetch(url);
    const food_list = await data.json();

    return food_list['data'];
};

// Choose a random food
async function chooseRandomFood() {

    // Fetch data from API
    const food_list = await _getFood();

    // Define variables and generate random food
    const max = food_list.length;
    const min = 0;
    const randNum = Math.random();
    const randIndex = Math.floor(randNum * (max - min) + min);

    console.log('randIndex', randIndex);

    return food_list[randIndex];
}

module.exports.chooseRandomFood = chooseRandomFood;
/**
 * Food.js - API interface for Notion
 * Built by Max Lareau
 * https://github.com/snowboardit
 * ** Assumes env:NOTION_TOKEN is set to integration secret **
 */

// IMPORTS
const { Client } = require("@notionhq/client")


// FOOD Class
class Food {

  constructor() {
    this.notion = new Client({ auth: process.env.NOTION_TOKEN });
    this.food_list = [];
  }


  /**
   * getFood - fetches food data from Notion DB and assigns it to food_list
   * @returns [{ 
   *  name: String,
   *  ingredients: [String],
   *  image: String
   * }]
   */
  async getFood() {

    // Request Notion for the food database contents
    let { results } = await this.notion.databases.query({
      database_id: "a0da46d77a624675897f79dcc71dd00d",
    });

    // console.log(results);

    // Unpack food data and assign it to food array
    if (results) {
      results.forEach(f => {

        this.food_list.push({
          name: f["properties"]["Name"]["title"][0]["plain_text"],
          ingredients: f["properties"]["Ingredients"]["rich_text"][0]["plain_text"].split('\n'),
          image: f["properties"]["Image"]["files"][0]["name"],
        })

      });
    }

    return this.food_list;

  }
}

module.exports.Food = Food;

/**
 * EXAMPLE OUTPUT
 * 
 * [
  {
    name: 'Homemade Pizza',
    ingredients: [ '- Pizza dough', '- Red sauce', '- Pizza cheese', '- Veges' ],
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-homemade-pizza-horizontal-1542312378.png?crop=1.00xw:1.00xh;0,0&resize=480:*'
  },
  {
    name: 'Tortilla Mexican Soup',
    ingredients: [ '- Black beans', '- Tortilla chips', '- Vegetable broth' ],
    image: 'https://www.onionringsandthings.com/wp-content/uploads/2013/09/chicken-tortilla-soup-3a-1.jpg'
  },
  {
    name: 'Baked Salmon',
    ingredients: [ '- Salmon' ],
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/7/26/1/CN1B01_oven-baked-salmon_s4x3.jpg.rend.hgtvcom.616.462.suffix/1382545141944.jpeg'
  },
  {
    name: 'Tacos',
    ingredients: [
      '- Beef, turkey, or plant-based',
      '- Vegges',
      '- Sauce',
      '- Hot sauce',
      '- Hard, soft shells, bowls'
    ],
    image: 'tacos.png'
  },
  {
    name: 'Cheesy Sweet Potatos',
    ingredients: [ '- 1 or 2 Sweet potatoes', '- Cheddar/sharp cheese', '- Onions' ],
    image: 'https://hips.hearstapps.com/del.h-cdn.co/assets/16/50/1481827053-unspecified-8.jpg'
  }
]
 */
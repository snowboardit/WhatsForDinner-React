/**
 * Food.js - API interface for Notion
 * Built by Max Lareau
 * https://github.com/snowboardit
 * ** Assumes env:NOTION_TOKEN is set to integration secret **
 */

// IMPORTS
const { Client } = require("@notionhq/client")


// FOOD Class
export class Food {

    constructor() {
        this.notion = new Client({ auth: process.env.NOTION_TOKEN });
    }



    /**
     * getFoodData
     * @returns [{name: String, ingredients: String}]
     */
    async getFoodData() {

        // Variables
        let food = [];

        // Request Notion for the food database contents
        let { results } = await this.notion.databases.query({
            database_id: "a0da46d77a624675897f79dcc71dd00d",
        });

        // Unpack food data and assign it to food array
        if (results) {
            results.forEach(f => {

                food.push({
                    name: f["properties"]["Name"]["title"][0]["plain_text"] || "Unknown",
                    ingredients: f["properties"]["Ingredients"]["rich_text"][0]["plain_text"] || "No ingredients"
                })

            });
        }

        // Return food array
        console.log(food)
        return food

    }
}
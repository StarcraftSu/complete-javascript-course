// "https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=012de08e9d801e2661940c8f6a652e6e&q=pizza";

const key = '012de08e9d801e2661940c8f6a652e6e';
const api =
  "https://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search";
import {fetchData} from "../api/axios";
async function getResult(query){
    const res = await fetchData("GET", api,{
        key,
        q:query
    });

    const recipes = res.data.recipes;
    console.log(recipes);
}

getResult('pizza');
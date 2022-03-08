// import { API_KEY } from "../../apikey";
const recipeContainer = document.querySelector('.recipe');
const timeout = function(s) {
    return new Promise(function(_, reject) {
        setTimeout(function() {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
        }, s * 1000);
    });
};
// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////
const showRecipe = async function() {
    try {
        const res = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/075dcf44-8101-470e-9c57-f669d9b9ccd1`);
        const data = await res.json();
        console.log(res, data);
    } catch (err) {
        alert(err);
    }
};
showRecipe();

//# sourceMappingURL=index.62406edb.js.map

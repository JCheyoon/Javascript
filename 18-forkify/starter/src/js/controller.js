import { API_KEY } from '../../apikey';
import * as model from './model';
import recipeView from './recipeView';

import 'core-js/stable'; //polyfill another

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    //1)loading recipes
    await model.loadRecipe(id);

    //2)Rendering recipes
    recipeView.render(model.state.recipe); // const recipeVies = new recipeView(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};

init();
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);

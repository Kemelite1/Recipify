import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};


// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const showRecipe = async function () {
try {
  const id = window.location.hash.slice(1);
  console.log(id);

  if(!id) return;
  recipeView.loadSpinner();

  //loading recipe
  await model.loadRecipe(id);

  //rendering recipe
  recipeView.render(model.state.recipe);
} catch (err){
  alert(err)
}
};

//showRecipe()
['hashchange', 'load'].forEach(event => window.addEventListener(event, showRecipe));
// window.addEventListener('hashchange', showRecipe);
// window.addEventListener('load', showRecipe);
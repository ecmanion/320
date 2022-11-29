var MODEL = (function (){

  var homeContent = `<div class="home">
<div class="home-hero-image">
  <img src="images/hero.jpg" alt="Hero">
</div>
<div class="outside-big-circle">
<div class="big-circle">
  <h1>The Jungle Cook</h1>
  <h3>The home to various recipes of your choice. Add your own recipe today and fill the world with joy!</h3>
</div>
</div>
<div class="outside-small-circle">
  <div class="small-circle">
    <h3>Want to be a Jungle Cook? Go ahead and the kitchen is yours!</h3>
  </div>
</div>
    </div>`;
  var browseContent = `<div class="browse">
<div class="browse-image">
  <img src="images/recipe-hero.jpg" alt="recipe hero">
</div>
<div class="title-box">
<div class="browse-title">
  <h1>Recipes: Try some today!</h1>
</div>
</div>
<div class="try-recipes-content">
  <div class="browse-recipes-big-box">
    <div class="single">
      <img src="images/recipe-pizza.jpg" alt="pizza">
    <div class="single-content">
      <h2>Supreme Pizza</h2>
      <div class="recipe-description">
      <p>Make pizza night super duper out of this world with homeade pizza. This recipe is supreme with vegetables and two types of meat. Yum!</p>
      </div>
      <div class="browse-icons">
        <div class="time">
        <img src="images/time.svg" alt="time icon">
        <h6>1h 24min</h6>
        </div>
        <div class="servings">
        <img src="images/servings.svg" alt="servings icon">
        <h6>4 Servings</h6>
        </div>
      </div>
      </div>
    </div>


    <div class="single">
      <img src="images/recipe-burger.jpg" alt="pizza">
    <div class="single-content">
      <h2>Classic Burger</h2>
      <div class="recipe-description">
      <p>Sink your teeth into a delicious restaurant-style hamburger recipe made from lean beef. Skip the prepackaged patties and take the extra time to craft up your own. and that little extra effort with be worth it.</p>
    </div>
      <div class="browse-icons">
        <div class="time">
        <img src="images/time.svg" alt="time icon">
        <h6>30min</h6>
        </div>
        <div class="servings">
        <img src="images/servings.svg" alt="servings icon">
        <h6>4 Servings</h6>
        </div>
      </div>
      </div>
    </div>

    <div class="single">
      <img src="images/recipe-pilaf.jpg" alt="pizza">
    <div class="single-content">
      <h2>Chicken Biryani</h2>
      <div class="recipe-description">
      <p>Chicken Biryani is a bold and flavorful Indian dish with crazy tender bites of chicken with bell peppers in a deliciously spiced and fragrant rice.</p>
      </div>
      <div class="browse-icons">
        <div class="time">
        <img src="images/time.svg" alt="time icon">
        <h6>1h 15min</h6>
        </div>
        <div class="servings">
        <img src="images/servings.svg" alt="servings icon">
        <h6>6 Servings</h6>
        </div>
      </div>
      </div>
    </div>

    <div class="single">
      <img src="images/recipe-chowmein.jpg" alt="pizza">
    <div class="single-content">
      <h2>Ch. Chow Mein</h2>
      <div class="recipe-description">
      <p>A great Chow Mein comes down to the sauce - it takes more than just soy sauce and sugar! Jam packed with a surprising amount of hidden vegetables, customize this Chicken Chow Mein recipe using your protein of choice!</p>
      </div>
      <div class="browse-icons">
        <div class="time">
        <img src="images/time.svg" alt="time icon">
        <h6>20min</h6>
        </div>
        <div class="servings">
        <img src="images/servings.svg" alt="servings icon">
        <h6>4 Servings</h6>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
    </div>`;
  var createRecipeContent = `<div class="create-recipe">
<!-- there is an initListeners here! -->
        <form onsubmit="initListeners();return false">
          <h1>Hey <div class="name"></div>, create your recipe!</h1>
          <div class="add-recipe-image">
            <button class="attach-file">Attach File</button>
              <input id="recipeImg" type="text" name="recipeImg" placeholder="Add Recipe Image"> 
              </div>
              <input id="recipeName" for="recipeName" type="text" name="recipeName" placeholder="Recipe Name">
              <input id="recipeDes" type="text" name="recipeDes" placeholder="Recipe Description">
              <input id="recipeTT" type="text" name="recipeTT" placeholder="Recipe Total Time">
              <input id="recipeSS" type="text" name="recipeSS" placeholder="Recipe Serving Size">
              <h2>Enter Ingredients:</h2>
              <input id="ingredientOne" type="text" name="ingredientOne" placeholder="Ingredient #1">
              <input id="ingredientTwo" type="text" name="ingredientTwo" placeholder="Ingredient #2">
              <div class="add-ingredient">
                <button class="add-ingredient-button">+</button>
              <input id="ingredientThree" type="text" name="ingredientThree" placeholder="Ingredient #3">
              </div>
              <h2>Enter Instructions</h2>
              <input id="instructionOne" type="text" name="instructionOne" placeholder="Instruction #1">
              <input id="instructionTwo" type="text" name="instructionTwo" placeholder="Instruction #2">
              <div class="add-instruction">
                <button class="add-instruction-button">+</button>
              <input id="instructionThree" type="text" name="instructionThree" placeholder="Instruction #3">
              </div>
              <input type="submit" name="submit" id="createSubmit" value="Create Recipe">
          </form>
    </div>`;
  var logContent = `<div class="log">
<div class="loggingIn">
  <div class="login-heading">
    <h1>Login Here!</h1></div>
<form onclick="logIn(); return false">
    <input type="email" name="email" id="logEmail" placeholder="Email Address">
    <input type="password" name="password" id="logPassword" placeholder="Password">
    <div class="login-button">
    <input class="signIn" onclick="logIn(); return false" type="submit" value="Login" id=logSubmit> 
    </div>
  </form>
</div>
<div class="create-account">
  <div class="create-account-heading">
  <h5>don't have an account?</h5>
    <h1>Sign Up!</h1>
  </div>
    <form onclick="createAccount(); return false">
        <input type="text" name="fName" id="fName" placeholder="First Name">
        <input type="text" name="lName" id="lName" placeholder="Last Name">
        <input type="email" name="email" id="email" placeholder="Email Address">
        <input type="password" name="password" id="password" placeholder="Password">
        <div class="create-account-button">
        <input onclick="createAccount()"type="submit" value="Sign Up" id="createAccountSubmit">
        </div>
      </form>
</div>
    </div>`;
  var yourRecipeContent = `<div class="yourRecipe">
  <div class="browse-image">
    <img src="images/recipe-hero.jpg" alt="recipe hero">
  </div>
  <div class="title-box">
  <div class="browse-title">
    <h1>Hey <div class="name"></div>, here are your recipes!</h1>
  </div>
  </div>
  <div class="try-recipes-content">
  <div class="browse-recipes-big-box">
    <div class="single">
      <div class="another-one">
      <div class="your-recipe-image">
        <a id="view" class="button view">View</a>
      </div>
    <div class="single-content">
      <h2>Supreme Pizza</h2>
      <div class="recipe-description">
      <p>Make pizza night super duper out of this world with homeade pizza. This recipe is supreme with vegetables and two types of meat. Yum!</p>
      </div>
  
  
      <div class="browse-icons">
        <div class="time">
        <img src="images/time.svg" alt="time icon">
        <h6>1h 24min</h6>
        </div>
        <div class="servings">
        <img src="images/servings.svg" alt="servings icon">
        <h6>4 Servings</h6>
        </div>
      </div>
    </div>
    <div class="button-holder">
        <a id="edit" class="button bottom">Edit Recipe</a>
        <div class="button bottom">Delete</div>
      </div>
    </div>
    </div>
  </div>
  
  </div>



</div>

`;
var viewContent = `<div class="view-your-recipes">
<div class="photo-and-description">
  <div class="photo">
    <div class="recipe-name-box">
    <h1>recipeName</h1></div>
    <div class="your-image">
    <img src="images/recipe-pizza.jpg" alt="">
  </div>
</div>
  <div class="description">
    <h1>Description:</h1>
    <p>Make pizza night super duper out of this world with homemade pizza. This recipe is supreme with vegetables and two types of meat. Yum!</p>
    <h2>Total Time:</h2>
    <h6>totalTime</h6>
    <h2>Servings:</h2>
    <h6>servings</h6>
  </div>
  </div>
  <div class="ingredients-and-instructions">
    <div class="your-ingredients">
      <h1>Ingredients:</h1>
      <h6>ingredients</h6>
    </div>
    <div class="instructions">
      <h1>Instructions:</h1>
      <h6>instructions</h6>
    </div>
  </div>
  <div class="edit-recipe-button-box">
  <a id="edit" class="edit-recipe-button">Edit Recipe</a>
  </div>
    </div>`;
var editContent = `<div class="create-recipe">
<!-- there is an initListeners here! -->
        <form onsubmit="initListeners();return false">
          <h1>Hey <div class="name"></div>, edit your recipe!</h1>
          <div class="add-recipe-image">
            <button class="attach-file">Attach File</button>
              <input id="recipeImg" type="text" name="recipeImg" placeholder="Edit Recipe Image"> 
              </div>
              <input id="recipeName" for="recipeName" type="text" name="recipeName" placeholder="Recipe Name">
              <input id="recipeDes" type="text" name="recipeDes" placeholder="Recipe Description">
              <input id="recipeTT" type="text" name="recipeTT" placeholder="Recipe Total Time">
              <input id="recipeSS" type="text" name="recipeSS" placeholder="Recipe Serving Size">
              <h2>Enter Ingredients:</h2>
              <input id="ingredientOne" type="text" name="ingredientOne" placeholder="Ingredient #1">
              <input id="ingredientTwo" type="text" name="ingredientTwo" placeholder="Ingredient #2">
              <div class="add-ingredient">
                <button class="add-ingredient-button">+</button>
              <input id="ingredientThree" type="text" name="ingredientThree" placeholder="Ingredient #3">
              </div>
              <h2>Enter Instructions</h2>
              <input id="instructionOne" type="text" name="instructionOne" placeholder="Instruction #1">
              <input id="instructionTwo" type="text" name="instructionTwo" placeholder="Instruction #2">
              <div class="add-instruction">
                <button class="add-instruction-button">+</button>
              <input id="instructionThree" type="text" name="instructionThree" placeholder="Instruction #3">
              </div>
              <input type="submit" name="submit" id="createSubmit" value="Submit Changes">
          </form>
    </div>`;
  function initOtherListeners() {
    
    $("a").click(function(e) {
        let btnId = e.currentTarget.id;
        MODEL.changePageContent(btnId);
    })

}

        
var _changePageContent = function(pageName) {
    let contentName = pageName + "Content";
    $("#app").html(eval(contentName));
     
    initOtherListeners();

}


return {
    changePageContent: _changePageContent,
}

})();


$(document).ready(function() {
    MODEL.changePageContent("home");
});
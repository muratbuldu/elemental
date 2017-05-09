//--- The main program

//Load the image
var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "dragAndDrop.png";
assetsToLoad.push(image);

//A variable to store the current sprite being dragged
var dragSprite = null;

//Game states
var LOADING = 0;
var PLAYING = 1;
var gameState = LOADING;

update();

function update()
{
  //The animation loop
  requestAnimationFrame(update, canvas);

  //Change what the game is doing based on the game state
  switch(gameState)
  {
    case LOADING:
      console.log("loading...");
      break;

    case PLAYING:
      playGame();
      break;
  }

  //Render the game
  render();
}

function loadHandler()
{
  assetsLoaded++;
  if(assetsLoaded === assetsToLoad.length)
  {
    gameState = PLAYING;
  }
}

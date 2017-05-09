//Variables to store the mouse's position and velocity
var mouseX = 0;
var mouseY = 0;
var oldMouseX = 0;
var oldMouseY = 0;

//Event listeners
canvas.addEventListener("mousemove", mousemoveHandler, false);
canvas.addEventListener("mousedown", mousedownHandler, false);
window.addEventListener("mouseup", mouseupHandler, false);

function mousedownHandler(event)
{
  //Loop through all the sprites and find out if
  //the mouse is over any of them
  for(var i = sprites.length - 1; i > -1; i--)
  {
    sprite = sprites[i];

    if(hitTestPoint(mouseX, mouseY, sprite)
    && sprite.draggable)
    {
      //Assign the sprite to the dragSprite variable
      dragSprite = sprite;

      //push the dragSprite to the end of the sprites
      //array so that it's displayed last
      sprites.push(dragSprite);

      //Splice the dragSprite from its previous
      //position in the sprites array
      sprites.splice(i, 1);
      break;
    }
  }
}

function mousemoveHandler(event)
{
  //Find the mouse's x and y position on the canvas
  mouseX = event.pageX - canvas.offsetLeft;
  mouseY = event.pageY - canvas.offsetTop;

  //Turn the cursor into a hand pointer if its over a sprite
  for(var i = 0; i < sprites.length; i++)
  {
    sprite = sprites[i];

    if(hitTestPoint(mouseX, mouseY, sprite)
    && sprite.draggable)
    {
      canvas.style.cursor = "pointer";
      break;
    }
    else
    {
      canvas.style.cursor = "auto";
    }
  }

  //Move the dragSprite if it's not null
  if(dragSprite !== null)
  {

    dragSprite.x = mouseX - (oldMouseX - dragSprite.x);
    dragSprite.y = mouseY - (oldMouseY - dragSprite.y);

    /*
    //Use this to drag the sprite from the center
    dragSprite.x = mouseX - (dragSprite.width / 2);
    dragSprite.y = mouseY - (dragSprite.height / 2);
    */
  }

  //Capture the current mouse position to use
  //in the next frame
  oldMouseX = mouseX;
  oldMouseY = mouseY;
}

function mouseupHandler(event)
{
  //Release the dragSprite by setting it to null
  dragSprite = null;
}


function hitTestPoint(pointX, pointY, sprite)
{
  return pointX > sprite.left() && pointX < sprite.right()
  && pointY > sprite.top() && pointY < sprite.bottom();
}

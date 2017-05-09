function render()
{
  drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

  //Display the sprites
  if(sprites.length !== 0)
  {
	  for(var i = 0; i < sprites.length; i++)
	  {
	     var sprite = sprites[i];
	     if(sprite.visible)
	     {
		     drawingSurface.drawImage
		     (
		       image,
		       sprite.sourceX, sprite.sourceY,
		       sprite.sourceWidth, sprite.sourceHeight,
		       Math.floor(sprite.x), Math.floor(sprite.y),
		       sprite.width, sprite.height
		     );
	     }
	  }
  }
}

//--- The sprite object
var spriteObject =
{
  sourceX: 0,
  sourceY: 0,
  sourceWidth: 64,
  sourceHeight: 64,
  width: 64,
  height: 64,
  x: 0,
  y: 0,
  visible: true,

  //A draggable property
  draggable: true,

  //Getters to define the
  //left, right, top and bottom sides
  left: function()
  {
    return this.x;
  },
  right: function()
  {
    return this.x + this.width;
  },
  top: function()
  {
    return this.y;
  },
  bottom: function()
  {
    return this.y + this.height;
  },
  centerX: function()
  {
    return this.x + (this.width / 2);
  },
  centerY: function()
  {
    return this.y + (this.height / 2);
  },
  halfWidth: function()
  {
    return this.width / 2;
  },
  halfHeight: function()
  {
    return this.height / 2;
  }
};

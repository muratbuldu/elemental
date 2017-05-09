//Object arrays
var sprites = [];
var assetsToLoad = [];
var assetsLoaded = 0;

//Create the sprites
var cat = Object.create(spriteObject);
cat.x = canvas.width / 2 - cat.halfWidth();
cat.y = canvas.height / 2 - cat.halfHeight();
sprites.push(cat);

var tiger = Object.create(spriteObject);
tiger.sourceX = 64;
tiger.x = 100;
tiger.y = 100;
sprites.push(tiger);

var hedgehog = Object.create(spriteObject);
hedgehog.sourceX = 128;
hedgehog.x = 375;
hedgehog.y = 250;
sprites.push(hedgehog);

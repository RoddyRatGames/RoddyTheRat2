function preload(){
  alphaRoddy=loadImage('alpharoddy.png')
  alphaRat2=loadImage('alpharat2.png')
  cheese=loadImage('cheese.png')
}
// global variables
let screen=1
let bgcR=0
let bgcG=0
let bgcB=0
let difficulty=0
let mode=0
let character=0
let startsNow=false
// main mletnctions
let mainMenu={
  enter:function(){
    setTimeout(function(){
      screen=2
    },1)
  }
}
// mode select functions
let modeSelect={
  one:function(){
    setTimeout(function(){
      mode=1
      screen=3
    },1)
  },
  two:function(){
    setTimeout(function(){
      mode=2
      screen=4
    },1)
  },
  back:function(){
    setTimeout(function(){
      screen=1
    },1)
  }
}
// character select functions
let charSelect={
  one:function(){
    setTimeout(function(){
      character=1
      screen=4
    },1)
  },
  two:function(){
    setTimeout(function(){
      character=2
      screen=4
    },1)
  },
  back:function(){
    setTimeout(function(){
      screen=2
      mode=0
    },1)
  }
}
// difficulty select functions
let difficultySelect={
  one:function(){
    difficulty=1
    startsNow=true
    if(mode==1){
      setTimeout(function(){
        screen=5
      },1)
    }
    else if(mode==2){
      setTimeout(function(){
        screen=6
      },1)
    }
  },
  two:function(){
    difficulty=2
    startsNow=true
    if(mode==1){
      setTimeout(function(){
        screen=5
      },1)
    }
    else if(mode==2){
      setTimeout(function(){
        screen=6
      },1)
    }
  },
  three:function(){
    difficulty=3
    startsNow=true
    if(mode==1){
      setTimeout(function(){
        screen=5
      },1)
    }
    else if(mode==2){
      setTimeout(function(){
        screen=6
      },1)
    }
  },
  back:function(){
    if(mode==1){
      setTimeout(function(){
        screen=3
        character=0
      },1)
    }
    else if(mode==2){
      setTimeout(function(){
        screen=2
        mode=0
      },1)
    }
  }
}
// one player functions
let oneplayer={
  roddy: new Roddy(),
  rat2: new Rat2(),
  cheese: new OnePCheese(),
  nextCheese: new OnePNextCheese()
}
// two player functions
let twoplayer={
  
}
// key pressed functions
function keyReleased(){
// main menu keys
  if(screen==1&&keyCode==RETURN){
    mainMenu.enter()
  }
// mode select keys
  if(screen==2&&keyCode==49){
    modeSelect.one()
  }
  else if(screen==2&&keyCode==50){
    modeSelect.two()
  }
  else if(screen==2&&keyCode==ESCAPE){
    modeSelect.back()
  }
// character select keys
  if(screen==3&&keyCode==49){
    charSelect.one()
  }
  else if(screen==3&&keyCode==50){
    charSelect.two()
  }
  else if(screen==3&&keyCode==ESCAPE){
    charSelect.back()
  }
// difficulty select keys
  if(screen==4&&keyCode==49){
    difficultySelect.one()
  }
  else if(screen==4&&keyCode==50){
    difficultySelect.two()
  }
  else if(screen==4&&keyCode==51){
    difficultySelect.three()
  }
  else if(screen==4&&keyCode==ESCAPE){
    difficultySelect.back()
  }
}
function setup() {
  createCanvas(1280,720);
}

function draw() {
  background(bgcR,bgcG,bgcB);
// main menu visuals
  if(screen==1){
    bgcR=200
    bgcG=200
    bgcB=150
    fill(0)
    textSize(115)
    text("Roddy The Rat 2",200,100)
    textSize(60)
    text("press enter to start",400,500)
  }
// mode select visuals
  if(screen==2){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(100)
    text("mode select",350,80)
    textSize(400)
    text("1    2",200,500)
    textSize(120)
    text("player          player",160,600)
  }
// character select visuals
  if(screen==3){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(100)
    text("character select",250,80)
    textSize(400)
    text("1    2",200,500)
    textSize(120)
    text("Roddy          Rat 2",160,600)
  }
// difficulty select visuals
  if(screen==4){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(100)
    text("difficulty select",300,80)
    textSize(400)
    text("1  2  3",100,500)
    textSize(120)
    text("slow   medium    fast",100,600)
  }
// one player visuals
  if(screen==5){
    oneplayer.cheese.show()
    oneplayer.nextCheese.show()
    if(startsNow==true){
      oneplayer.nextCheese.randomize(random(15,620),random(0,620))
    }
    if(startsNow==true){
      startsNow=false
    }
    if(oneplayer.roddy.y+90>=oneplayer.cheese.y&&oneplayer.roddy.x<=oneplayer.cheese.x+60&&oneplayer.roddy.y<=oneplayer.cheese.y+60&&oneplayer.roddy.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.nextCheese.randomize(random(15,620),random(0,620))
    }
    if(oneplayer.rat2.y+90>=oneplayer.cheese.y&&oneplayer.rat2.x<=oneplayer.cheese.x+60&&oneplayer.rat2.y<=oneplayer.cheese.y+60&&oneplayer.rat2.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.nextCheese.randomize(random(15,620),random(0,620))
    }
    if(character==1){
      bgcR=255
      bgcG=200
      bgcB=220
      oneplayer.roddy.show()
      oneplayer.roddy.move()
    }
    else if(character==2){
      bgcR=200
      bgcG=255
      bgcB=220
      oneplayer.rat2.show()
      oneplayer.rat2.move()
    }
    fill(0)
    rect(720,0,560,720)
  }
// two player visuals
  if(screen==6){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255,200,220)
    rect(0,110,500,500)
    fill(200,255,220)
    rect(780,110,500,500)
  }
  textSize(50)
  fill(50,100,255)
  text("alpha 1.1",1050,700)
  
  if (keyIsDown(87)){
      oneplayer.roddy.up()
      oneplayer.rat2.up()
    }
    else if(keyIsDown(83)){
      oneplayer.roddy.down()
      oneplayer.rat2.down()
    }
    else{
      oneplayer.roddy.ySpeed=0
      oneplayer.rat2.ySpeed=0
  }
  if(keyIsDown(65)){
      oneplayer.roddy.left()
      oneplayer.rat2.left()
    }
    else if(keyIsDown(68)){
      oneplayer.roddy.right()
      oneplayer.rat2.right()
    }
    else{
      oneplayer.roddy.xSpeed=0
      oneplayer.rat2.xSpeed=0
    }
}

function preload(){
  alphaRoddy=loadImage('alpharoddy.png')
  alphaDaisy=loadImage('alphadaisy.png')
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
  daisy: new Daisy(),
  cheese: new OnePCheese(),
  nextCheese: new OnePNextCheese(),
  back: function(){
    setTimeout(function(){
      screen=4
      difficulty=0
    },1)
  }
}
// two player functions
let twoplayer={
  player1: new Player1(),
  player2: new Player2(),
  p1cheese: new TwoPCheese(230,400),
  p2cheese: new TwoPCheese(1010,400),
  nextCheeseX: [],
  nextCheeseY: [],
  p1nextCheese: new TwoPNextCheese(),
  p2nextCheese: new TwoPNextCheese(),
  p1score:0,
  p2score:0,
  highest:0,
  newHighest:false,
  back: function(){
    setTimeout(function(){
      screen=4
      difficulty=0
    },1)
  }
}
function reset(){
  oneplayer.roddy.x=315
  oneplayer.roddy.y=315
  oneplayer.daisy.x=315
  oneplayer.daisy.y=315
  oneplayer.cheese.x=330
  oneplayer.cheese.y=420
  twoplayer.player1.x=220
  twoplayer.player1.y=330
  twoplayer.player2.x=1000
  twoplayer.player2.y=330
  twoplayer.p1cheese.x=230
  twoplayer.p1cheese.y=400
  twoplayer.p2cheese.x=1010
  twoplayer.p2cheese.y=400
  twoplayer.p1score=0
  twoplayer.p2score=0
  twoplayer.highest=0
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
  if(screen==5&&keyCode==ESCAPE){
    oneplayer.back()
    reset()
  }
  if(screen==6&&keyCode==ESCAPE){
    twoplayer.back()
    reset()
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
    text("Roddy          Daisy",160,600)
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
    if(oneplayer.daisy.y+90>=oneplayer.cheese.y&&oneplayer.daisy.x<=oneplayer.cheese.x+60&&oneplayer.daisy.y<=oneplayer.cheese.y+60&&oneplayer.daisy.x+90>=oneplayer.cheese.x){
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
      oneplayer.daisy.show()
      oneplayer.daisy.move()
    }
    fill(0)
    rect(720,0,560,720)
  }
// two player visuals
  if(screen==6){
    bgcR=0
    bgcG=0
    bgcB=0
    if(startsNow==true){
      twoplayer.nextCheeseX[0]=random(10,440)
      twoplayer.nextCheeseY[0]=random(110,540)
    }
    if(startsNow==true){
      startsNow=false
    }
    fill(255,200,220)
    rect(0,110,500,500)
    fill(200,255,220)
    rect(780,110,500,500)
    twoplayer.p1cheese.show()
    twoplayer.p2cheese.show()
    if(twoplayer.p1score>twoplayer.highest){
      twoplayer.newHighest=true
      twoplayer.highest=twoplayer.p1score
    }
    if(twoplayer.p2score>twoplayer.highest){
      twoplayer.newHighest=true
      twoplayer.highest=twoplayer.p2score
    }
    if(twoplayer.newHighest==true){
      twoplayer.nextCheeseX[twoplayer.highest]=random(10,440)
      twoplayer.nextCheeseY[twoplayer.highest]=random(110,540)
      twoplayer.newHighest=false
    }
    twoplayer.p1nextCheese.show(twoplayer.nextCheeseX[twoplayer.p1score],twoplayer.nextCheeseY[twoplayer.p1score])
    twoplayer.p2nextCheese.show(780+twoplayer.nextCheeseX[twoplayer.p2score],twoplayer.nextCheeseY[twoplayer.p2score])
    if(twoplayer.player1.y+60>=twoplayer.p1cheese.y&&twoplayer.player1.x<=twoplayer.p1cheese.x+40&&twoplayer.player1.y<=twoplayer.p1cheese.y+40&&twoplayer.player1.x+60>=twoplayer.p1cheese.x){
      twoplayer.p1score+=1
      twoplayer.p1cheese.x=twoplayer.p1nextCheese.x
      twoplayer.p1cheese.y=twoplayer.p1nextCheese.y
    }
    if(twoplayer.player2.y+60>=twoplayer.p2cheese.y&&twoplayer.player2.x<=twoplayer.p2cheese.x+40&&twoplayer.player2.y<=twoplayer.p2cheese.y+40&&twoplayer.player2.x+60>=twoplayer.p2cheese.x){
      twoplayer.p2score+=1
      twoplayer.p2cheese.x=twoplayer.p2nextCheese.x
      twoplayer.p2cheese.y=twoplayer.p2nextCheese.y
    }
    twoplayer.player1.show()
    twoplayer.player1.move()
    twoplayer.player2.show()
    twoplayer.player2.move()
  }
  textSize(50)
  fill(50,100,255)
  text("alpha 1.2",1050,700)
  
  if (keyIsDown(87)){
      oneplayer.roddy.up()
      oneplayer.daisy.up()
      twoplayer.player1.up()
    }
    else if(keyIsDown(83)){
      oneplayer.roddy.down()
      oneplayer.daisy.down()
      twoplayer.player1.down()
    }
    else{
      oneplayer.roddy.ySpeed=0
      oneplayer.daisy.ySpeed=0
      twoplayer.player1.ySpeed=0
  }
  if(keyIsDown(65)){
      oneplayer.roddy.left()
      oneplayer.daisy.left()
      twoplayer.player1.left()
    }
    else if(keyIsDown(68)){
      oneplayer.roddy.right()
      oneplayer.daisy.right()
      twoplayer.player1.right()
    }
    else{
      oneplayer.roddy.xSpeed=0
      oneplayer.daisy.xSpeed=0
      twoplayer.player1.xSpeed=0
  }
  if(keyIsDown(73)){
      twoplayer.player2.up()
    }
    else if(keyIsDown(75)){
      twoplayer.player2.down()
    }
    else{
      twoplayer.player2.ySpeed=0
  }
  if(keyIsDown(74)){
      twoplayer.player2.left()
    }
    else if(keyIsDown(76)){
      twoplayer.player2.right()
    }
    else{
      twoplayer.player2.xSpeed=0
  }
}

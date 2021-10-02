function preload(){
  RoddyUp=loadImage('a_roddyup.png')
  RoddyRight=loadImage('a_roddyright.png')
  RoddyDown=loadImage('a_roddydown.png')
  RoddyLeft=loadImage('a_roddyleft.png')
  DaisyUp=loadImage('a_daisyup.png')
  DaisyRight=loadImage('a_daisyright.png')
  DaisyDown=loadImage('a_daisydown.png')
  DaisyLeft=loadImage('a_daisyleft.png')
  cheese=loadImage('cheese.png')
  pixelFont=loadFont('prstart.ttf')
  comicSans=loadFont('COMIC.TTF')
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
let started=false
let go=false
let gameover=false
let countdown=3
let timer=30
let retry=function(){
  gameover=false
  oneplayer.score=0
  twoplayer.p1score=0
  twoplayer.p2score=0
  startsNow=true
}
// main menu functions
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
  score: 0,
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
// reset function
function reset(){
  oneplayer.roddy.x=315
  oneplayer.roddy.y=315
  oneplayer.roddy.direction=3
  oneplayer.daisy.x=315
  oneplayer.daisy.y=315
  oneplayer.daisy.direction=3
  oneplayer.cheese.x=330
  oneplayer.cheese.y=420
  twoplayer.player1.x=220
  twoplayer.player1.y=330
  twoplayer.player1.direction=3
  twoplayer.player2.x=1000
  twoplayer.player2.y=330
  twoplayer.player2.direction=3
  twoplayer.p1cheese.x=230
  twoplayer.p1cheese.y=400
  twoplayer.p2cheese.x=1010
  twoplayer.p2cheese.y=400
  twoplayer.p1score=0
  twoplayer.p2score=0
  twoplayer.highest=0
  started=false
  go=false
  gameover=false
  countdown=3
  timer=30
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
// exit gameplay keys
  if(screen==5&&keyCode==ESCAPE){
    oneplayer.back()
    reset()
  }
  if(screen==6&&keyCode==ESCAPE){
    twoplayer.back()
    reset()
  }
  if(gameover==true&&keyCode==32){
    reset()
    retry()
  }
}
function setup() {
  createCanvas(1280,720);
}

function draw() {
  background(bgcR,bgcG,bgcB);
// main menu visuals
  textFont(pixelFont)
  if(screen==1){
    bgcR=200
    bgcG=200
    bgcB=150
    fill(0)
    textSize(58)
    text("RODDY THE RAT 2",200,100)
    textSize(30)
    text("PRESS ENTER TO START",400,500)
  }
// mode select visuals
  if(screen==2){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(50)
    text("MODE SELECT",350,80)
    textSize(200)
    text("1  2",225,500)
    textSize(60)
    text("PLAYER   PLAYERS",160,600)
  }
// character select visuals
  if(screen==3){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(50)
    text("CHARACTER SELECT",250,80)
    textSize(200)
    text("1  2",225,500)
    textSize(60)
    text("RODDY     DAISY",160,600)
  }
// difficulty select visuals
  if(screen==4){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(50)
    text("DIFFICULTY SELECT",225,80)
    textSize(200)
    text("1 2 3",150,500)
    textSize(60)
    text("SLOW  MEDIUM  FAST",100,600)
  }
// one player--cheese
  if(started==false){
      frameCount=0
    }
    else{
      started=true
    }
  if(screen==5){
    oneplayer.cheese.show()
    oneplayer.nextCheese.show()
// random starting position
    
    if(startsNow==true){
      oneplayer.nextCheese.randomize(random(15,620),random(0,620))
      started=true
    }
    if(startsNow==true){
      startsNow=false
    }
    if(frameCount==60){
      countdown=2
    }
    if(frameCount==120){
      countdown=1
    }
    if(frameCount==180){
      countdown=0
    }
    if(frameCount==240){
      countdown=-1
      go=true
    }
    if(go==true){
      if(frameCount%60==0){
        timer--
      }
    }
    if(timer<0){
      gameover=true
    }
    if(gameover==true){
      
    }
// collision
    if(oneplayer.roddy.y+90>=oneplayer.cheese.y&&oneplayer.roddy.x<=oneplayer.cheese.x+60&&oneplayer.roddy.y<=oneplayer.cheese.y+60&&oneplayer.roddy.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.nextCheese.randomize(random(15,620),random(0,620))
      oneplayer.score++
    }
    if(oneplayer.daisy.y+90>=oneplayer.cheese.y&&oneplayer.daisy.x<=oneplayer.cheese.x+60&&oneplayer.daisy.y<=oneplayer.cheese.y+60&&oneplayer.daisy.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.nextCheese.randomize(random(15,620),random(0,620))
      oneplayer.score++
    }
// characters
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
// ui
    fill(0)
    rect(720,0,560,720)
    fill(255)
    textSize(120)
    if(timer>=10){
        text("0:"+timer,750,120)
      }
      else if(timer>=1){
        text("0:0"+timer,750,120)
      }
      else{
        text("0:00",750,120)
      }
    textSize(60)
    text("SCORE:"+oneplayer.score,750,220)
    fill(0)
    if(countdown>=1){
        text(countdown,325,300)
      }
      else if(countdown==0){
        text("GO!",275,300)
      }
      else{
        
      }
    if(gameover==true){
      textSize(60)
      text("GAME OVER",100,300)
      textSize(25)
      text("PRESS SPACE TO TRY AGAIN",50,700)
    }
  }
// two player visuals
  if(screen==6){
    bgcR=0
    bgcG=0
    bgcB=0
// random starting position
    if(startsNow==true){
      twoplayer.nextCheeseX[0]=random(10,440)
      twoplayer.nextCheeseY[0]=random(110,540)
      started=true
    }
    if(startsNow==true){
      startsNow=false
    }
    
    if(startsNow==true){
      startsNow=false
    }
    if(frameCount==60){
      countdown=2
    }
    if(frameCount==120){
      countdown=1
    }
    if(frameCount==180){
      countdown=0
    }
    if(frameCount==240){
      countdown=-1
      go=true
    }
    if(go==true){
      if(frameCount%60==0){
        timer--
      }
    }
    if(timer<0){
      gameover=true
    }
    if(gameover==true){
    }
// sides
    fill(255,200,220)
    rect(0,110,500,500)
    fill(200,255,220)
    rect(780,110,500,500)
// cheese
    twoplayer.p1cheese.show()
    twoplayer.p2cheese.show()
// highest score continues the list of random spawns for the cheese. both sides cheese spawn in the same list of random positions.
// the idea of new highest will be replaced by the antagonist we have yet to name or add. they will play the route perfectly which will obviously continue the route.
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
// as the highest possible score continues the array of random numbers, the players personal score corresponds to the index of their next cheese location
    twoplayer.p1nextCheese.show(twoplayer.nextCheeseX[twoplayer.p1score],twoplayer.nextCheeseY[twoplayer.p1score])
    twoplayer.p2nextCheese.show(780+twoplayer.nextCheeseX[twoplayer.p2score],twoplayer.nextCheeseY[twoplayer.p2score])
// collision
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
// characters
    twoplayer.player1.show()
    twoplayer.player1.move()
    twoplayer.player2.show()
    twoplayer.player2.move()
// ui
    fill(255)
    textSize(65)
    if(timer>=10){
        text("0:"+timer,515,200)
      }
      else if(timer>=1){
        text("0:0"+timer,515,200)
      }
      else{
        text("0:00",515,200)
      }
    textSize(30)
    text("SCORE",565,275)
    textSize(50)
    textAlign(CENTER)
    text(twoplayer.p1score+"-"+twoplayer.p2score,640,335)
    textAlign(LEFT,BOTTOM)
    fill(0)
    if(countdown>=1){
        text(countdown,225,300)
        text(countdown,1005,300)
      }
      else if(countdown==0){
        text("GO!",200,300)
        text("GO!",1000,300)
      }
      else{
        
      }
    if(gameover==true)
      fill(255)
      text("PRESS SPACE TO TRY AGAIN",50,700)
      if(twoplayer.p1score>twoplayer.p2score){
          text("PLAYER 1 WINS!",300,75)
        }
        else if(twoplayer.p1score<twoplayer.p2score){
          text("PLAYER 2 WINS!",300,75)
        }
        else{
          text("IT'S A TIE!",350,75)
        }
  
    }
// version #
  textFont(comicSans)
  textSize(50)
  fill(50,100,255)
  text("alpha 1.3",1050,700)
// inputs
  if (keyIsDown(87)&&frameCount>180){
      oneplayer.roddy.up()
      oneplayer.daisy.up()
      twoplayer.player1.up()
    }
    else if(keyIsDown(83)&&frameCount>180){
      oneplayer.roddy.down()
      oneplayer.daisy.down()
      twoplayer.player1.down()
    }
    else{
      oneplayer.roddy.ySpeed=0
      oneplayer.daisy.ySpeed=0
      twoplayer.player1.ySpeed=0
  }
  if(keyIsDown(65)&&frameCount>180){
      oneplayer.roddy.left()
      oneplayer.daisy.left()
      twoplayer.player1.left()
    }
    else if(keyIsDown(68)&&frameCount>180){
      oneplayer.roddy.right()
      oneplayer.daisy.right()
      twoplayer.player1.right()
    }
    else{
      oneplayer.roddy.xSpeed=0
      oneplayer.daisy.xSpeed=0
      twoplayer.player1.xSpeed=0
  }
  if(keyIsDown(73)&&frameCount>180){
      twoplayer.player2.up()
    }
    else if(keyIsDown(75)&&frameCount>180){
      twoplayer.player2.down()
    }
    else{
      twoplayer.player2.ySpeed=0
  }
  if(keyIsDown(74)&&frameCount>180){
      twoplayer.player2.left()
    }
    else if(keyIsDown(76)&&frameCount>180){
      twoplayer.player2.right()
    }
    else{
      twoplayer.player2.xSpeed=0
  }
  if(gameover==true){
    oneplayer.roddy.xSpeed=0
    oneplayer.roddy.ySpeed=0
    oneplayer.daisy.xSpeed=0
    oneplayer.daisy.ySpeed=0
    twoplayer.player1.xSpeed=0
    twoplayer.player1.ySpeed=0
    twoplayer.player2.xSpeed=0
    twoplayer.player2.ySpeed=0
  }
}
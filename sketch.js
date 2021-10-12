function preload(){
  RoddyUp=loadImage('a_roddyup.png')
  RoddyRight=loadImage('a_roddyright.png')
  RoddyDown=loadImage('a_roddydown.png')
  RoddyLeft=loadImage('a_roddyleft.png')
  DaisyUp=loadImage('a_daisyup.png')
  DaisyRight=loadImage('a_daisyright.png')
  DaisyDown=loadImage('a_daisydown.png')
  DaisyLeft=loadImage('a_daisyleft.png')
  ogRoddyUp=loadImage('ogroddyup.png')
  ogRoddyRight=loadImage('ogroddyright.png')
  ogRoddyDown=loadImage('ogroddydown.png')
  ogRoddyLeft=loadImage('ogroddyleft.png')
  cheeseIcon=loadImage('cheeseicon.png')
  ogRoddyIcon=loadImage('ogroddyicon.png')
  daisyIcon=loadImage('daisyicon.png')
  roddyIcon=loadImage('roddyicon.png')
  pennyIcon=loadImage('pennyicon.png')
  cheese=loadImage('cheese.png')
  pixelFont=loadFont('prstart.ttf')
// https://www.1001fonts.com/magnolia-script-font.html
  pFont=loadFont('yoster.ttf')
  comicSans=loadFont('COMIC.TTF')
  titleIntro=loadSound('titlescreenintro.wav')
  titleMusic=loadSound('titlescreensong.wav')
}
// global variables
let screen=0
let bgcR=0
let bgcG=0
let bgcB=0
let difficulty=0
let mode=0
let character=0
let startsNow=false
let started=false
let go=false
let gameover=true
let countdown=3
let timer=30
let retry=function(){
  gameover=false
  oneplayer.score=0
  oneplayer.pennyScore=0
  twoplayer.p1score=0
  twoplayer.p2score=0
  twoplayer.pennyScore=0
  startsNow=true
}
// main menu functions
let mainMenu={
  intro:true,
  play:false,
  enter:function(){
    setTimeout(function(){
      screen=1.1
    },1)
  }
}
let tutorial={
  toTutorial:function(){
    screen=1.2
  },
  toCharSelect:function(){
    screen=2
  },
  roddy:new Roddy(),
  cheese:new OnePCheese(),
  nextCheese: new OnePNextCheese(),
  nextCheeseX:0,
  nextCheeseY:0,
  score:0
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
  p:function(){
    setTimeout(function(){
      mode=3
      screen=3
    },1)
},
  back:function(){
    setTimeout(function(){
      screen=1
      tutorial.score=0
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
  a:function(){
    setTimeout(function(){
      character=3
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
    else if(mode==3){
      setTimeout(function(){
        screen=7
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
    else if(mode==3){
      setTimeout(function(){
        screen=7
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
    else if(mode==3){
      setTimeout(function(){
        screen=7
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
  ogRoddy: new OGRoddy(),
  penny: new PennyOne(),
  pennyScore: 0,
  newHighest: false,
  highest: 0,
  cheese: new OnePCheese(),
  pennyCheese: new OnePCheese(),
  nextCheese: new OnePNextCheese(),
  pennyNextCheese: new OnePNextCheese(),
  nextCheeseX: [],
  nextCheeseY: [],
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
  p1name: "",
  p2name: "",
  player2: new Player2(),
  penny: new PennyTwo(),
  p1cheese: new TwoPCheese(230,400),
  p2cheese: new TwoPCheese(1010,400),
  pennyCheese: new TwoPCheese(230,400),
  nextCheeseX: [],
  nextCheeseY: [],
  p1nextCheese: new TwoPNextCheese(),
  p2nextCheese: new TwoPNextCheese(),
  pennyNextCheese: new TwoPNextCheese(),
  p1score:0,
  p2score:0,
  pennyScore:0,
  highest:0,
  newHighest:false,
  back: function(){
    setTimeout(function(){
      screen=4
      difficulty=0
    },1)
  }
}
let vspenny={
  back: function(){
    setTimeout(function(){
      screen=1
      mode=0
      character=0
      difficulty=0
    },1)
  }
}
// reset function
function reset(){
  oneplayer.roddy.x=315
  oneplayer.roddy.y=315
  oneplayer.roddy.xSpeed=0
  oneplayer.roddy.ySpeed=0
  oneplayer.roddy.direction=3
  oneplayer.daisy.x=315
  oneplayer.daisy.y=315
  oneplayer.daisy.xSpeed=0
  oneplayer.daisy.ySpeed=0
  oneplayer.daisy.direction=3
  oneplayer.ogRoddy.x=315
  oneplayer.ogRoddy.y=315
  oneplayer.ogRoddy.xSpeed=0
  oneplayer.ogRoddy.ySpeed=0
  oneplayer.ogRoddy.direction=3
  oneplayer.penny.x=315
  oneplayer.penny.y=315
  oneplayer.penny.xSpeed=0
  oneplayer.penny.tSpeed=0
  oneplayer.cheese.x=330
  oneplayer.cheese.y=420
  oneplayer.pennyCheese.x=330
  oneplayer.pennyCheese.y=420
  oneplayer.score=0
  oneplayer.pennyScore=0
  oneplayer.highest=0
  twoplayer.player1.x=220
  twoplayer.player1.y=330
  twoplayer.player1.xSpeed=0
  twoplayer.player1.ySpeed=0
  twoplayer.player1.direction=3
  twoplayer.player2.x=1000
  twoplayer.player2.y=330
  twoplayer.player2.xSpeed=0
  twoplayer.player2.ySpeed=0
  twoplayer.player2.direction=3
  twoplayer.penny.x=220
  twoplayer.penny.y=330
  twoplayer.penny.xSpeed=0
  twoplayer.penny.ySpeed=0
  twoplayer.p1cheese.x=230
  twoplayer.p1cheese.y=400
  twoplayer.p2cheese.x=1010
  twoplayer.p2cheese.y=400
  twoplayer.pennyCheese.x=230
  twoplayer.pennyCheese.y=400
  twoplayer.p1score=0
  twoplayer.p2score=0
  twoplayer.pennyScore=0
  twoplayer.highest=0
  started=false
  go=false
  gameover=false
  countdown=3
  timer=30
}
// key pressed functions
function keyPressed(){
  if(screen==0){
    screen=1
    frameCount=0
  }
  if(screen==1.2&&tutorial.score>=20&&keyCode==32){
    screen=2
    started=false
  }
}
function keyReleased(){
// main menu keys
  if(screen==1&&keyCode==RETURN){
    mainMenu.enter()
  }
// tutorial keys
  if(screen==1.1&&keyCode==89){
    tutorial.toTutorial()
  }
  if(screen==1.1&&keyCode==78){
    tutorial.toCharSelect()
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
  else if(screen==3&&keyCode==65){
    charSelect.a()
  }
  else if(screen==2&&keyCode==80){
    modeSelect.p()
  }
  else if(screen==3&&keyCode==ESCAPE){
    charSelect.back()
  }
// difficulty select keys
  if(screen==4&&keyCode==49){
    difficultySelect.one()
    reset()
  }
  else if(screen==4&&keyCode==50){
    difficultySelect.two()
    reset()
  }
  else if(screen==4&&keyCode==51){
    difficultySelect.three()
    reset()
  }
  else if(screen==4&&keyCode==ESCAPE){
    difficultySelect.back()
  }
// exit gameplay keys
  if(screen==5&&keyCode==ESCAPE){
    oneplayer.back()
    reset()
    retry()
  }
  if(screen==6&&keyCode==ESCAPE){
    twoplayer.back()
    reset()
    retry()
  }
  if(screen==7&&keyCode==ESCAPE){
    vspenny.back()
    reset()
    retry()
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
  if(screen==0){

    bgcR=175
    bgcG=175
    bgcB=175
    textSize(75)
    fill(255)
    stroke(0)
    strokeWeight(20)
    text("SPECIAL THANKS~",75,100)
    strokeWeight(11)
    textSize(30)
    text("   To all the alpha testers that encourage me to make games,",100,175,1150)
    text("   And Landon for imagining this awesome game.",100,275,1150)
    text("   Many more updates to come!",100,380,1150)
  text("     Thank you all,",100,525,1150)
  text("              Matt",100,575,1150)
  noStroke()
  textSize(25)
  
  text("press any button to continue",275,675)
  }
      if((screen==0||screen==1)&&mainMenu.intro==true){
      
      mainMenu.intro=false
      titleIntro.play()
      titleIntro.setVolume(0.5)
      setTimeout(function(){
      mainMenu.play=true
      },6000)
    }
    if((screen==0||screen==1)&&mainMenu.play==true){
      titleMusic.play()
      titleMusic.loop()
      
      titleMusic.setVolume(0.5)
      mainMenu.play=false
    }
  if(screen>1){
    titleIntro.stop()
    titleMusic.stop()
  }
  if(screen==1){
    bgcR=200
    bgcG=200
    bgcB=150
    fill(0)
    rect(550,50,420,230)
    fill(175)
    textSize(105)
    strokeWeight(54)
    stroke(0)
    text("RODDY",300,160)
    textSize(75)
    text("THE",325,250)
    text("RAT",575,275)
    fill(100,200,150)
    textSize(150)
    strokeWeight(40)
    text("2",835,152)
    textFont(pFont)
    textSize(225)
    fill(200,100,150)
    text("p",945,200)
    image(ogRoddyIcon,800,145,120,120)
    image(cheeseIcon,885,175,80,80)
    image(daisyIcon,575,275,250,250)
    image(roddyIcon,400,300,200,200)
    image(pennyIcon,785,300,200,200)
    textFont(pixelFont)
    fill(0)
    textSize(30)
    noStroke()
    text("PRESS ENTER TO START",350,650)
  }
// tutorial?
  if(screen==1.1){
    mainMenu.play=true
    bgcR=255
    bgcG=200
    bgcB=220
    stroke(0)
    strokeWeight(20)
    textSize(60)
    fill(150)
    textAlign(CENTER)
    text("Do You Want To Play The Tutorial?",50,200,1180)
    textSize(150)
    strokeWeight(50)
    text("Y   N",640,600)
    textAlign(LEFT,BOTTOM)
    tutorial.nextCheeseX=random(15,620)
    tutorial.nextCheeseY=random(0,615)
  }
// tutorial
  if (screen==1.2){
    started=true
    frameCount=181
    fill(0)
    rect(720,0,560,720)
    
        if(tutorial.roddy.y+90>=tutorial.cheese.y&&tutorial.roddy.x<=tutorial.cheese.x+60&&tutorial.roddy.y<=tutorial.cheese.y+60&&tutorial.roddy.x+90>=tutorial.cheese.x){
      tutorial.cheese.x=tutorial.nextCheese.x
      tutorial.cheese.y=tutorial.nextCheese.y
          tutorial.nextCheeseX=random(15,620)
          tutorial.nextCheeseY=random(0,615)
      tutorial.score++
    }
    tutorial.cheese.show()
    tutorial.nextCheese.show(tutorial.nextCheeseX,tutorial.nextCheeseY,96)
    tutorial.roddy.show()
    tutorial.roddy.move()
    
  
    fill(255)
    textSize(45)
    
    textFont(pFont)
    text("   Pick up the cheese as fast as you can!",750,50,500)
    text("   A shadow will show you where the next cheese will apear.",750,250,500)
    
      textAlign(CENTER)
    if(tutorial.score<20){
      fill(255,200,0)
      let cheeseLeft=20-tutorial.score
      text("Collect "+cheeseLeft+" cheese to move on.",750,500,500)
    }
    else{
      fill(0,200,100)
      text("Press space bar to continue.",750,500,500)
    }
    
      textAlign(LEFT,BOTTOM)
    textSize(60)
    fill(255)
  text("SCORE:"+tutorial.score,750,700)
  }
  // mode select visuals
  if(screen==2){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(50)
    text("CHOOSE MODE",350,80)
    image(roddyIcon,100,75,300,300)
    image(daisyIcon,500,75,300,300)
    image(pennyIcon,900,75,300,300)
    textSize(200)
    text("1 2 P",150,625)
    textSize(40)
    text("PLAYER   PLAYERS  VS PENNY",150,675)
  }
// character select visuals
  if(screen==3){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(50)
    text("CHOOSE YOUR CHARACTER",125,80)
    image(roddyIcon,150,75,300,300)
    image(daisyIcon,800,75,300,300)
    textSize(200)
    text("1  2",225,625)
    textSize(60)
    text("RODDY     DAISY",160,675)
  }
// difficulty select visuals
  if(screen==4){
    bgcR=0
    bgcG=0
    bgcB=0
    fill(255)
    textSize(50)
    text("SET DIFFICULTY",325,80)
    textSize(200)
    text("1 2 3",150,625)
    textSize(60)
    text("SLOW  MEDIUM  FAST",100,675)
    if(mode==2){
      
    }
  }
// one player--start
  if(started==false){
      frameCount=0
    }
    else{
      started=true
    }
  if(screen==5){
// cheese
    oneplayer.cheese.show()
// random starting position
    
    if(startsNow==true){
      oneplayer.nextCheeseX[0]=(random(15,620))
      oneplayer.nextCheeseY[0]=(random(0,620))
      oneplayer.nextCheeseX[1]=(random(15,620))
      oneplayer.nextCheeseY[1]=(random(0,620))
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
// penny
    if(oneplayer.penny.y+90>=oneplayer.pennyCheese.y&&oneplayer.penny.x<=oneplayer.pennyCheese.x+60&&oneplayer.penny.y<=oneplayer.pennyCheese.y+60&&oneplayer.penny.x+90>=oneplayer.pennyCheese.x){
      oneplayer.pennyScore++
      oneplayer.pennyCheese.x=oneplayer.pennyNextCheese.x
      oneplayer.pennyCheese.y=oneplayer.pennyNextCheese.y
    }
    
    if(oneplayer.penny.y+90<oneplayer.pennyCheese.y&&frameCount>180&&gameover==false){
      setTimeout(function(){
      oneplayer.penny.down()
    },180/difficulty)
    }
    if(oneplayer.penny.x>oneplayer.pennyCheese.x+60&&frameCount>180&&gameover==false){
      setTimeout(function(){
      oneplayer.penny.left()
      },180/difficulty)
    }
    if(oneplayer.penny.y>oneplayer.pennyCheese.y+60&&frameCount>180&&gameover==false){
      setTimeout(function(){
      oneplayer.penny.up()
      },180/difficulty)
    }
    if(oneplayer.penny.x+90<oneplayer.pennyCheese.x&&frameCount>180&&gameover==false){
      setTimeout(function(){
      oneplayer.penny.right()
      },180/difficulty)
    }

// collision
    if(oneplayer.roddy.y+90>=oneplayer.cheese.y&&oneplayer.roddy.x<=oneplayer.cheese.x+60&&oneplayer.roddy.y<=oneplayer.cheese.y+60&&oneplayer.roddy.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.score++
    }
    if(oneplayer.daisy.y+90>=oneplayer.cheese.y&&oneplayer.daisy.x<=oneplayer.cheese.x+60&&oneplayer.daisy.y<=oneplayer.cheese.y+60&&oneplayer.daisy.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.score++
    }
    if(oneplayer.ogRoddy.y+90>=oneplayer.cheese.y&&oneplayer.ogRoddy.x<=oneplayer.cheese.x+60&&oneplayer.ogRoddy.y<=oneplayer.cheese.y+60&&oneplayer.ogRoddy.x+90>=oneplayer.cheese.x){
      oneplayer.cheese.x=oneplayer.nextCheese.x
      oneplayer.cheese.y=oneplayer.nextCheese.y
      oneplayer.score++
    }
      if(oneplayer.score>oneplayer.highest){
      oneplayer.newHighest=true
      oneplayer.highest=oneplayer.score
    }
    if(oneplayer.pennyScore>oneplayer.highest){
      oneplayer.newHighest=true
      oneplayer.highest=oneplayer.pennyScore
    }
    if(oneplayer.newHighest==true){
      
      newHighest=false
      oneplayer.nextCheeseX[oneplayer.highest+1]=(random(15,620))
      oneplayer.nextCheeseY[oneplayer.highest+1]=(random(0,620))
    }
    // next cheese
    oneplayer.nextCheese.show(oneplayer.nextCheeseX[oneplayer.score],oneplayer.nextCheeseY[oneplayer.score],96)
    oneplayer.pennyNextCheese.show(oneplayer.nextCheeseX[oneplayer.pennyScore],oneplayer.nextCheeseY[oneplayer.pennyScore],0)
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
    else if(character==3){
      bgcR=200
      bgcG=200
      bgcB=150
      oneplayer.ogRoddy.show()
      oneplayer.ogRoddy.move()
    }
    oneplayer.penny.move()
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
    fill(bgcR,bgcG,bgcB)
    text("SCORE:"+oneplayer.score,750,220)
    fill(175,125,75)
    text("PENNY:"+oneplayer.pennyScore,750,300)
    let onePCPS=0
    if(30-timer>0&&timer>-1){
        onePCPS=oneplayer.score/(30-timer)
      }
      else{
        onePCPS=oneplayer.score/30
    }
      fill(255,200,0)
      text("C/S:"+onePCPS.toFixed(2),750,380)
    let 
  onePEfficiency=oneplayer.score/oneplayer.pennyScore*100
    fill(0,255,0)
    if(difficulty==3&&oneplayer.pennyScore>0){
        text("EFF:"+Math.round(onePEfficiency)+"%",750,460)
      }
      else if(difficulty==3){
        text("EFF:100%",750,460)
    }
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
    if(twoplayer.penny.y+60>=twoplayer.pennyCheese.y&&twoplayer.penny.x<=twoplayer.pennyCheese.x+40&&twoplayer.penny.y<=twoplayer.pennyCheese.y+40&&twoplayer.penny.x+60>=twoplayer.pennyCheese.x){
      twoplayer.pennyScore+=1
      twoplayer.pennyCheese.x=twoplayer.pennyNextCheese.x
      twoplayer.pennyCheese.y=twoplayer.pennyNextCheese.y
    }
    if(twoplayer.p1score>twoplayer.highest){
      twoplayer.newHighest=true
      twoplayer.highest=twoplayer.p1score
    }
    if(twoplayer.p2score>twoplayer.highest){
      twoplayer.newHighest=true
      twoplayer.highest=twoplayer.p2score
    }
    if(twoplayer.pennyScore>twoplayer.highest){
      twoplayer.newHighest=true
      twoplayer.highest=twoplayer.pennyScore
    }
    if(twoplayer.newHighest==true){
      twoplayer.nextCheeseX[twoplayer.highest]=random(10,440)
      twoplayer.nextCheeseY[twoplayer.highest]=random(110,540)
      twoplayer.newHighest=false
    }
    // as the highest possible score continues the array of random numbers, the players personal score corresponds to the index of their next cheese location
    twoplayer.p1nextCheese.show(twoplayer.nextCheeseX[twoplayer.p1score],twoplayer.nextCheeseY[twoplayer.p1score],96)
    twoplayer.p2nextCheese.show(780+twoplayer.nextCheeseX[twoplayer.p2score],twoplayer.nextCheeseY[twoplayer.p2score],96)
    twoplayer.pennyNextCheese.show(twoplayer.nextCheeseX[twoplayer.pennyScore],twoplayer.nextCheeseY[twoplayer.pennyScore],0)
    if(twoplayer.penny.y+60<twoplayer.pennyCheese.y&&frameCount>180&&gameover==false){
      setTimeout(function(){
      twoplayer.penny.down()
    },180/difficulty)
    }
    if(twoplayer.penny.x>twoplayer.pennyCheese.x+40&&frameCount>180&&gameover==false){
      setTimeout(function(){
      twoplayer.penny.left()
      },180/difficulty)
    }
    if(twoplayer.penny.y>twoplayer.pennyCheese.y+40&&frameCount>180&&gameover==false){
      setTimeout(function(){
      twoplayer.penny.up()
      },180/difficulty)
    }
    if(twoplayer.penny.x+60<twoplayer.pennyCheese.x&&frameCount>180&&gameover==false){
      setTimeout(function(){
      twoplayer.penny.right()
      },180/difficulty)
    }

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
    twoplayer.penny.move()
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
    let POneCPS=0
    let PTwoCPS=0
    let POneEfficiency=twoplayer.p1score/twoplayer.pennyScore*100
    let PTwoEfficiency=twoplayer.p2score/twoplayer.pennyScore*100
    if(30-timer>0&&timer>-1){
        POneCPS=twoplayer.p1score/(30-timer)
        PTwoCPS=twoplayer.p2score/(30-timer)
      }
      else{
        POneCPS=twoplayer.p1score/30
        PTwoCPS=twoplayer.p2score/30
    }
    textSize(30)
    if(twoplayer.p1score>twoplayer.p2score){
        fill(255,200,220)
      }
      else if(twoplayer.p2score>twoplayer.p1score){
        fill(200,2550,220)
      }
      else{
        fill(255)
      }
    text("SCORE",565,255)
    fill(175,125,75)
    text("PENNY",565,370)
    fill(255,200,0)
    text("C/S",600,470)
    textSize(28)
    fill(0,255,0)
    text("EFFICIENCY",500,560)
    textSize(50)
    textAlign(CENTER)
    fill(255)
    text(twoplayer.p1score+"-"+twoplayer.p2score,640,305)
    text(twoplayer.pennyScore,640,420)
    textSize(30)
    text(POneCPS.toFixed(2)+"-"+PTwoCPS.toFixed(1),640,500)
    if(difficulty==3&&twoplayer.pennyScore>0){
        text(Math.round(POneEfficiency)+"%-"+Math.round(PTwoEfficiency)+"%",640,590)
      }
      else if(difficulty==3){
        text("100%-100%",640,590)
    }
    textAlign(LEFT,BOTTOM)
    
    fill(0)
    textSize(50)
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
  if(screen==7){
    fill(255)
    textSize(75)
    text("COMING SOON...",150,400)
    // if(character==1){
    //     fill(255,200,220)
    //   }
    //   else if(character==2){
    //     fill(200,255,220)
    //   }
    // else if(character==3){
    //   fill(200,200,150)
    // }
    // rect(0,110,500,500)
    // fill(255,220,200)
    // rect(780,110,500,500)
  }
// version #
  textFont(comicSans)
  strokeColor=color(0)
  strokeColor.setAlpha(192)
  stroke(strokeColor)
  strokeWeight(10)
  betaColor=color(255,100,220)
  betaColor.setAlpha(192)
  fill(betaColor)
      textSize(45)
      betaText=text("beta 1.0",25,700)
  noStroke()
// inputs
  if(frameCount>180){
    if (keyIsDown(87)&&frameCount>180){
        twoplayer.player1.up()
      }
      else if(keyIsDown(83)&&frameCount>180){
        twoplayer.player1.down()
      }
      else{
        twoplayer.player1.ySpeed=0
    }
    if(keyIsDown(65)&&frameCount>180){
        twoplayer.player1.left()
      }
      else if(keyIsDown(68)&&frameCount>180){
        twoplayer.player1.right()
      }
      else{
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
      if(keyIsDown(87)||keyIsDown(73)){
        oneplayer.roddy.up()
        oneplayer.daisy.up()
        oneplayer.ogRoddy.up()
        tutorial.roddy.ySpeed=-4
        tutorial.roddy.direction=1
       }
       else if(keyIsDown(83)||keyIsDown(75)){
        oneplayer.roddy.down()
        oneplayer.daisy.down()
        oneplayer.ogRoddy.down()
         tutorial.roddy.ySpeed=4
         tutorial.roddy.direction=3
       }
       else{
        oneplayer.roddy.ySpeed=0
        oneplayer.daisy.ySpeed=0
        oneplayer.ogRoddy.ySpeed=0
         tutorial.roddy.ySpeed=0
    }
    if(keyIsDown(65)||keyIsDown(74)){
        oneplayer.roddy.left()
        oneplayer.daisy.left()
        oneplayer.ogRoddy.left()
      tutorial.roddy.xSpeed=-4
      tutorial.roddy.direction=4
      }
      else if(keyIsDown(68)||keyIsDown(76)){
        oneplayer.roddy.right()
        oneplayer.daisy.right()
        oneplayer.ogRoddy.right()
        tutorial.roddy.xSpeed=4
        tutorial.roddy.direction=2
      }
      else{
        oneplayer.roddy.xSpeed=0
        oneplayer.daisy.xSpeed=0
        oneplayer.ogRoddy.xSpeed=0
        tutorial.roddy.xSpeed=0
    }
  }
  if(gameover==true){
    oneplayer.roddy.xSpeed=0
    oneplayer.roddy.ySpeed=0
    oneplayer.daisy.xSpeed=0
    oneplayer.daisy.ySpeed=0
    oneplayer.ogRoddy.xSpeed=0
    oneplayer.ogRoddy.ySpeed=0
    oneplayer.penny.xSpeed=0
    oneplayer.penny.ySpeed=0
    twoplayer.player1.xSpeed=0
    twoplayer.player1.ySpeed=0
    twoplayer.player2.xSpeed=0
    twoplayer.player2.ySpeed=0
    twoplayer.penny.xSpeed=0
    twoplayer.penny.ySpeed=0
  }
}
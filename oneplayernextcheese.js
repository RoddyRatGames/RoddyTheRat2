class OnePNextCheese{
  constructor(){
    this.x=0
    this.y=0
    this.size=60
  }
  show(){
    tint(255,96)
    image(cheese,this.x,this.y,this.size,this.size)
    noTint()
  }
  randomize(x,y){
    this.x=x
    this.y=y
  }
}
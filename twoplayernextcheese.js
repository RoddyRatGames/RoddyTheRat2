class TwoPNextCheese{
  constructor(){
    this.x=0
    this.y=0
    this.size=40
  }
  show(x,y){
    this.x=x
    this.y=y
    tint(255,128)
    image(cheese,this.x,this.y,this.size,this.size)
    noTint()
  }
}
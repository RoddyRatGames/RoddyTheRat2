class OnePNextCheese{
  constructor(){
    this.x=0
    this.y=0
    this.size=60
  }
  show(x,y,t){
    this.x=x
    this.y=y
    tint(255,t)
    image(cheese,this.x,this.y,this.size,this.size)
    noTint()
  }
}
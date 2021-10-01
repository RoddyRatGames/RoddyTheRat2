class TwoPCheese{
  constructor(x,y){
    this.x=x
    this.y=y
    this.size=40
  }
  show(){
    image(cheese,this.x,this.y,this.size,this.size)
  }
}
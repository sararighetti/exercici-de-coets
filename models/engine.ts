class Engine{
    speed:number;
    _maxSpeed:number;

    constructor(maxSpeed:number){
       this._maxSpeed = maxSpeed;
       this.speed = 0;
   }

    get getmaxSpeed(): number{
       return this._maxSpeed;
    }
    set setMaxSpeed(maxSpeed:number){
       this._maxSpeed = maxSpeed;
    }
    get getSpeed(){
       return this.speed;
    }
    set setSpeed(speed:number){
       this.speed = speed;
    }
  
    acceleraPropulsore(){    
     return this.speed +=10;
    }
    decelerate(){
     return this.speed += -10;
    }
}
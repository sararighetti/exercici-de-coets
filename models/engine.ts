class Engine{
    speed:number;
    _maxSpeed:number;

    constructor(maxSpeed:number){
       this._maxSpeed = maxSpeed;
       this.speed = 0;
   }
  
    acceleraPropulsore(){    
     return this.speed +=10;
    }

    decelerate(){
     return this.speed += -10;
    }
}

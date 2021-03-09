 class  Rocket{
    _name:string; 
    _engines:Engine[] = new Array(); 
    _currentPower: number = 0;
    
    constructor(name:string,){
        this._name = name;    
    }
    
    addEngine(engine:Engine):void{
        this._engines.push(engine);
    }
   // metodo para obtner todas las info de un rocket
    GetRocketInfo(): string{
      let actualEngine;
      let infoEngine = "";
      for(let i=0; i <this._engines.length; i ++){
          actualEngine=this._engines[i];
         infoEngine+= " " + actualEngine._maxSpeed;
      }
      return this._name + " has " + this._engines.length + " thrusters " + "<br>" + infoEngine + "<br>" ; 
    }      
    // metodo para saber cual es la max power del rocket
    maxPower(){
        let thruster;
        let maxPower = 0;
        for(let i=0; i <this._engines.length; i ++){
            thruster=this._engines[i];
           maxPower+= thruster._maxSpeed;
        }
        return  maxPower  ; 
    }
    acelerarRocket(){
        let maxPower2 = this.maxPower();
        let accelerate;
        if (this._currentPower < maxPower2){
            for(let i=0; i <this._engines.length ; i ++){
                accelerate=this._engines[i];
                if(accelerate.speed < accelerate._maxSpeed){
                         accelerate.acceleraPropulsore();
                         this._currentPower+=10                                               
                }
            }
        }           
        return "Actual power: " + this._currentPower; 
    }   
  
    frenarRocket(){
        let decelerate;
        if (this._currentPower > 0){
            for(let i=0; i <this._engines.length; i ++){
                decelerate=this._engines[i];
                if(decelerate.speed >0){
                    decelerate.decelerate();
                    this._currentPower+= -10
                }
            }
        }           
        return  this._currentPower;   
        }
    } 

   



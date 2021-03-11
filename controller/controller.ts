// Declaros vaiables y recojo los valores
let arrayRockets: any = []
let rockets1Info = <HTMLInputElement>document.getElementById("Rocketsinfo1");
let rockets2Info = <HTMLInputElement>document.getElementById("Rocketsinfo2");
let allRocketsInfo= <HTMLInputElement>document.getElementById("RocketsinfoAll");
let rocket1Accelerate =<HTMLInputElement>document.getElementById("RocketAcelerado");
let RocketAcelerado_div = <HTMLInputElement>document.querySelector("#RocketAcelerado_div");
let RocketAcelerado2_div = <HTMLInputElement>document.querySelector("#RocketAcelerado2_div");
let RocketAcelerado2 = <HTMLInputElement>document.getElementById("RocketAcelerado2");
let rocket1: Rocket;
let rocket2:Rocket;
           
// Imprime las info sobre Rocket 1
function CreateRocket1(){
   rocket1 = new Rocket("32WESSDS"); 
    rocket1.addEngine(new Engine(10));
    rocket1.addEngine(new Engine(30));
    rocket1.addEngine(new Engine(80));
    arrayRockets.push(rocket1);
    rockets1Info.classList.replace("d-none", "d-flex");
    rockets1Info.innerHTML = "<br>" + " Rocket 1: " + rocket1.GetRocketInfo() + "max power: " + rocket1.maxPower() + "<br>";
}

// Imprime las info sobre Rocket 2
function CreateRocket2(){
    rocket2 =new Rocket("LDSFJA32"); 
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(40));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(50));
    rocket2.addEngine(new Engine(30));
    rocket2.addEngine(new Engine(10));
    rockets2Info.classList.replace("d-none", "d-flex");
    rockets2Info.innerHTML ="<br>" + " Rocket 2: " + rocket2.GetRocketInfo() + "max power: " + rocket2.maxPower() + "<br>" ;
    arrayRockets.push(rocket2); 
}
// Imprime las info sobre todos los Rockets
function PrintRocketAll(){ 
    arrayRockets.forEach(elem => {
    allRocketsInfo.classList.replace("d-none", "d-flex");
    allRocketsInfo.innerHTML+="Rocket " + elem.GetRocketInfo() + "max power: " + elem.maxPower() + "<br>";
    });
    }

// Accelerar Rockets 1
function accelerarRocket1(){
   RocketAcelerado_div.classList.replace("d-none", "d-flex")
    if(rocket1._currentPower <  rocket1.maxPower() ){
       rocket1Accelerate.innerHTML =  rocket1.acelerarRocket(); 
         
    }else{
       rocket1Accelerate.innerHTML =  "Max Power";      
    }   
} 

// Accelerar Rockets 2
function accelerarRocket2(){
    RocketAcelerado2_div.classList.replace("d-none", "d-flex");
    if(rocket2._currentPower <  rocket2.maxPower() ){
       RocketAcelerado2.innerHTML =  rocket2.acelerarRocket()
    }else{
       RocketAcelerado2.innerHTML =  "Max Power";
    }
}
// Frenar Rockets 1
function frenarRocket1(){
    if(rocket1._currentPower >0 ){
    let verifica  = rocket1.frenarRocket();
    if(verifica >0 ){
       rocket1Accelerate.innerHTML  = "Actual power: " + verifica;
    }else{
       rocket1Accelerate.innerHTML =  "Rocket stops";
    }         
    }
}
// Frenar Rockets 2
function frenarRocket2(){
    if(rocket2._currentPower >0 ){
    let verifica =  rocket2.frenarRocket();
    if(verifica > 0){
       RocketAcelerado2.innerHTML  = "Actual power: " + verifica;   
    }else{
       RocketAcelerado2.innerHTML =  "Rocket stops";
    }
} 
}

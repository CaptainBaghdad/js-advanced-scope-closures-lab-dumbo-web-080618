function produceDrivingRange(blockRange){

  return function(start, end){
    let num = parseInt(end) - parseInt(start);
    //console.log(num + " " + typeof num);
    if(num > blockRange){ 
      return `${num - blockRange} blocks out of range`;
      
    }
    else {
     return  `within range by ${num}`;
    }
  }
 
  
  
}

function produceTipCalculator(fare){
  
  return function(percent){
    let amount = fare * parseFloat(percent);
    let ans = fare - amount;
    let b = Math.round(ans);
    return Math.abs(b);
  }
  
  
  
}




function createDriver(){
  let driverId = 0;
  return class Driver{
    constructor(name){
      this.name = name
      this.driverId = driverId++;
      
    }
  
    
  }
  
  
  
}
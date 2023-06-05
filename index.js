 document.querySelector(".btn1").addEventListener("click",function(){
    var randomnumber1 = Math.floor( Math.random()*6+1);
    
    document.querySelector(".dice-1 img").setAttribute("src","dice"+randomnumber1+".png");
    
    var randomnumber2 = Math.floor( Math.random()*6+1);
    
    document.querySelector(".dice-2 img").setAttribute("src","dice"+randomnumber2+".png");
    
    
    
    if(randomnumber1 > randomnumber2){
        document.querySelector("h1").textContent = "player-1 win"
    }else if(randomnumber1 === randomnumber2){
        document.querySelector("h1").textContent = " draw"
    }else{
        document.querySelector("h1").textContent = "player-2 win"
    
    }
  
 })
  
 
   
    






    


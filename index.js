
var drum=document.querySelectorAll(".drum");


for(var i=0;i<drum.length;i++)
{

    drum[i].addEventListener("click",function() {

       
        
        thekey(this.innerHTML);
        animate(this.innerHTML);

        
    });

}


document.addEventListener("keypress",function(event){


thekey(event.key);
animate(event.key);

});




function thekey(kkey)
{

    switch(kkey)
       {
           case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            
            break;


            case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;

            case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

            case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;

            case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

            case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

            case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

            

               
       }

}






function animate(k)
{


    document.querySelector("."+k).classList.add("pressed");
    setTimeout(function(){

        document.querySelector("."+k).classList.remove("pressed");
    },100);

}
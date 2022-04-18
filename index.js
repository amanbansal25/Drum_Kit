for (i = 0; i<7; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        // this.style.color = "white";

        var buttonSelected = this.innerHTML;
        drumSound(buttonSelected);
        buttonPressed(buttonSelected);

    }
    );

}

document.addEventListener("keypress", function(event){
    
    var f = event.key;
    drumSound(f);
    buttonPressed(f);

    
});

function drumSound(e){
    switch(e){
        case "w":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;
    
            case "a":
                let kickbass = new Audio("./sounds/kick-bass.mp3");
                kickbass.play();
                break;
        
                case "s":
                    let snare = new Audio("./sounds/snare.mp3");
                    snare.play();
                    break;
    
                    case "d":
                        let tom1 = new Audio("./sounds/tom-1.mp3");
                        tom1.play();
                        break;
    
                        case "j":
                            let tom2 = new Audio("./sounds/tom-2.mp3");
                            tom2.play();
                            break;
    
                            case "k":
                                let tom3 = new Audio("./sounds/tom-3.mp3");
                                tom3.play();
                                break;
    
                                case "l":
                                    let tom4 = new Audio("./sounds/tom-4.mp3");
                                    tom4.play();
                                    break;
                                    
        
        }
}

function buttonPressed(buttonpress){
    var a = document.querySelector("."+buttonpress).classList;
    a.add("pressed");
    setTimeout(function() {
        a.remove("pressed");     
    }, 100);

}
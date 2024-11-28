
function startTime(){
    let input = window.prompt("What is your name?...");
    
    if(input==''||(input.valueOf== Number)){
        let p = document.getElementById("para1");
        let text1 = "Welcome nameless bitch😣"
        p.append(text1);

    }else{
        let p = document.getElementById("para1");
        let text = "Welcome "+input+ "😎"
        p.append(text)
    }
    document.title= input;
}

function setTimer(){
    setTimeout(startTime, 0.5)
}
let button = document.getElementById("btn");
button.addEventListener("click", setTimer, false)

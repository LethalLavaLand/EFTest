var startupDelay = 4000;

setTimeout(delayStart, startupDelay);

function delayStart() {
    
    //addAction
    //X({type:gw,challenge:0});
    
    //closeAllDialogs
    //La();
    
    //update
    //W();
    
    
    var b = document.body;
    const div1 = document.createElement('div');
    div1.id = "ef1";
    div1.style.position = "absolute";
    div1.style.left = "1100px";
    div1.style.top = "50px";
    div1.style.boxSizing = "border-box";
    b.insertAdjacentElement("beforeend", div1);
    
    const button = document.createElement('button');
    button.innerText = 'Bungus?';
    button.addEventListener('click', () => {
      console.log("test2");
      //alert('bingo bango');  
    })
    button.style.position = "absolute";
    button.style.width = "150px";
    button.style.height = "50px";
    button.style.fontSize = "150%";
    document.getElementById("ef1").appendChild(button);
    
    const transcendTimeInput = document.createElement('input');
    transcendTimeInput.id = "transcendTimeInput";
    transcendTimeInput.style.position = "absolute";
    transcendTimeInput.style.width = "150px";
    transcendTimeInput.style.height = "50px";
    transcendTimeInput.style.top = "50px";
    transcendTimeInput.style.fontSize = "150%";
    transcendTimeInput.style.left = "170px";
    div1.appendChild(transcendTimeInput);
    var x = document.getElementById("transcendTimeInput").value;
    
    const info1 = document.createElement('label');
    info1.innerText = "Time for bungus:";
    info1.style.position = "absolute";
    info1.style.width = "150px";
    info1.style.height = "50px";
    info1.style.top = "50px";
    info1.style.fontSize = "150%";
    
    //setInterval(scriptLoop, 1000);
}

function scriptLoop(){
    //console.log("test");
}

    //Fv(true, false, false);
    //DA(0);
    //Js(B);
    //su();
    //CA();
    //var ac = new action();
    //ac.type = 12;
    //GA[0].type = 12;

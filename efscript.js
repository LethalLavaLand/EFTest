var startupDelay = 4000;

setTimeout(delayStart, startupDelay);

function delayStart() {
    
    //addAction
    //X({type:gw,challenge:0});
    
    //closeAllDialogs
    //La();
    
    //update
    //W();
    
    const div1 = document.createElement('div');
    const button = document.createElement('button');
    button.innerText = 'Bungus';
    button.addEventListener('click', () => {
      alert('bingo bango');  
    })
    
    div1.style.left = "700px";
    
    var b = document.body;
    b.insertAdjacentElement("beforebegin", div1);
    div1.appendChild(button);
    
    document.body.appendChild(button);
    
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

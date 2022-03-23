var startupDelay = 4000;

var isBungus = false;

function delayStart() {
    var b = document.body;
    const div1 = document.createElement('div');
    div1.id = "ef1";
    div1.style.position = "absolute";
    div1.style.left = "1100px";
    div1.style.top = "50px";
    div1.style.boxSizing = "border-box";
    b.insertAdjacentElement("beforeend", div1);
    
    const button = document.createElement('button');
    button.id = "startTranscends";
    button.innerText = 'Bungus?';
    //button.addEventListener('click', () => {
      //console.log("test2");
      //alert('bingo bango');  
        //isBungus = !isBungus;    
        //document.getElementById("startTranscends").innerText = isBungus ? "Stopus" : "Bungus?";
    //})
    button.addEventListener('click', startBungus)
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
    transcendTimeInput.value = 60;
    div1.appendChild(transcendTimeInput);
    var x = document.getElementById("transcendTimeInput").value;
    
    const info1 = document.createElement('label');
    info1.innerText = "Time for bungus:";
    info1.style.position = "absolute";
    info1.style.width = "150px";
    info1.style.height = "50px";
    info1.style.top = "65px";
    info1.style.fontSize = "120%";
    info1.style.verticalAlign = "middle";
    div1.appendChild(info1);
    
    
    
    const productionTimeInput = document.createElement('input');
    productionTimeInput.id = "productionTimeInput";
    productionTimeInput.style.position = "absolute";
    productionTimeInput.style.width = "150px";
    productionTimeInput.style.height = "50px";
    productionTimeInput.style.top = "150px";
    productionTimeInput.style.fontSize = "150%";
    productionTimeInput.style.left = "170px";
    productionTimeInput.value = 50;
    div1.appendChild(productionTimeInput);
    var y = document.getElementById("productionTimeInput").value;
    
    const info2 = document.createElement('label');
    info2.innerText = "Time for wungus:";
    info2.style.position = "absolute";
    info2.style.width = "150px";
    info2.style.height = "50px";
    info2.style.top = "165px";
    info2.style.fontSize = "120%";
    info2.style.verticalAlign = "middle";
    div1.appendChild(info2);
    
    
    
    const speedFruitInput = document.createElement('input');
    speedFruitInput.id = "speedFruitInput";
    speedFruitInput.style.position = "absolute";
    speedFruitInput.style.width = "50px";
    speedFruitInput.style.height = "50px";
    speedFruitInput.style.top = "250px";
    speedFruitInput.style.fontSize = "150%";
    speedFruitInput.style.left = "170px";
    speedFruitInput.value = 3;
    div1.appendChild(speedFruitInput);
    var fruit1 = document.getElementById("speedFruitInput").value;
    
    const speedFruitInfo = document.createElement('label');
    speedFruitInfo.innerText = "Bungus Fruit";
    speedFruitInfo.style.position = "absolute";
    speedFruitInfo.style.width = "150px";
    speedFruitInfo.style.height = "50px";
    speedFruitInfo.style.top = "265px";
    speedFruitInfo.style.fontSize = "120%";
    speedFruitInfo.style.verticalAlign = "middle";
    div1.appendChild(speedFruitInfo);
    
    
    const productionFruitInput = document.createElement('input');
    productionFruitInput.id = "productionFruitInput";
    productionFruitInput.style.position = "absolute";
    productionFruitInput.style.width = "50px";
    productionFruitInput.style.height = "50px";
    productionFruitInput.style.top = "350px";
    productionFruitInput.style.fontSize = "150%";
    productionFruitInput.style.left = "170px";
    productionFruitInput.value = 4;
    div1.appendChild(productionFruitInput);
    var fruit2 = document.getElementById("productionFruitInput").value;
    
    const productionFruitInfo = document.createElement('label');
    productionFruitInfo.innerText = "Wungus Fruit";
    productionFruitInfo.style.position = "absolute";
    productionFruitInfo.style.width = "150px";
    productionFruitInfo.style.height = "50px";
    productionFruitInfo.style.top = "365px";
    productionFruitInfo.style.fontSize = "120%";
    productionFruitInfo.style.verticalAlign = "middle";
    div1.appendChild(productionFruitInfo);
    
    const atranscensionInfo = document.createElement('label');
    atranscensionInfo.innerText = "No bungus amungus";
    atranscensionInfo.style.position = "absolute";
    atranscensionInfo.style.width = "350px";
    atranscensionInfo.style.height = "50px";
    atranscensionInfo.style.top = "465px";
    atranscensionInfo.style.fontSize = "170%";
    atranscensionInfo.style.verticalAlign = "middle";
    div1.appendChild(atranscensionInfo);
    
    
    //setInterval(scriptLoop, 1000);
}

function startBungus(){
    isBungus = !isBungus;
    alert('bungus');
    document.getElementById("startTranscends").innerText = isBungus ? "Stopus" : "Bungus?";
}

function scriptLoop(){
    //console.log("test");
}

function autoBungus(){     
    //addAction
    X({type:gw,challenge:0});
    
    //closeAllDialogs
    La();
    
    //update
    W();
}

setTimeout(delayStart, startupDelay);

    //Fv(true, false, false);
    //DA(0);
    //Js(B);
    //su();
    //CA();
    //var ac = new action();
    //ac.type = 12;
    //GA[0].type = 12;


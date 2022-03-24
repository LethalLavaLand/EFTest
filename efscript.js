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
    
    const button2 = document.createElement('button');
    button2.innerText = 'Top Secret Button';
    button2.addEventListener('click', translateBungus)
    button2.style.position = "absolute";
    button2.style.width = "200px";
    button2.style.height = "30px";
    button2.style.top = "800px";
    //button2.style.left = "160px";
    button2.style.fontSize = "100%";
    document.getElementById("ef1").appendChild(button2);
    
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
    info1.id = "info1";
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
    info2.id = "info2";
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
    speedFruitInfo.id = "sfi";
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
    productionFruitInfo.id = "pfi";
    productionFruitInfo.innerText = "Wungus Fruit";
    productionFruitInfo.style.position = "absolute";
    productionFruitInfo.style.width = "150px";
    productionFruitInfo.style.height = "50px";
    productionFruitInfo.style.top = "365px";
    productionFruitInfo.style.fontSize = "120%";
    productionFruitInfo.style.verticalAlign = "middle";
    div1.appendChild(productionFruitInfo);
    
    
    
    const blueprintTInput = document.createElement('input');
    blueprintTInput.id = "blueprintTInput";
    blueprintTInput.style.position = "absolute";
    blueprintTInput.style.width = "50px";
    blueprintTInput.style.height = "50px";
    blueprintTInput.style.top = "450px";
    blueprintTInput.style.fontSize = "150%";
    blueprintTInput.style.left = "170px";
    blueprintTInput.value = 3;
    div1.appendChild(blueprintTInput);
    var bp = document.getElementById("blueprintTInput").value;
    
    const blueprintTInfo = document.createElement('label');
    blueprintTInfo.id = "bbj";
    blueprintTInfo.innerText = "Blueberry Jam";
    blueprintTInfo.style.position = "absolute";
    blueprintTInfo.style.width = "150px";
    blueprintTInfo.style.height = "50px";
    blueprintTInfo.style.top = "465px";
    blueprintTInfo.style.fontSize = "120%";
    blueprintTInfo.style.verticalAlign = "middle";
    div1.appendChild(blueprintTInfo);
    
    
    
    const wblueprintTInput = document.createElement('input');
    wblueprintTInput.id = "wblueprintTInput";
    wblueprintTInput.style.position = "absolute";
    wblueprintTInput.style.width = "50px";
    wblueprintTInput.style.height = "50px";
    wblueprintTInput.style.top = "550px";
    wblueprintTInput.style.fontSize = "150%";
    wblueprintTInput.style.left = "170px";
    wblueprintTInput.value = 1;
    div1.appendChild(wblueprintTInput);
    var bp = document.getElementById("wblueprintTInput").value;
    
    const wblueprintTInfo = document.createElement('label');
    wblueprintTInfo.id = "wbbj";
    wblueprintTInfo.innerText = "Blackberry Jam";
    wblueprintTInfo.style.position = "absolute";
    wblueprintTInfo.style.width = "150px";
    wblueprintTInfo.style.height = "50px";
    wblueprintTInfo.style.top = "565px";
    wblueprintTInfo.style.fontSize = "120%";
    wblueprintTInfo.style.verticalAlign = "middle";
    div1.appendChild(wblueprintTInfo);
    
    
    const atranscensionInfo = document.createElement('label');
    atranscensionInfo.innerText = "Not transcending";
    atranscensionInfo.style.position = "absolute";
    atranscensionInfo.style.width = "350px";
    atranscensionInfo.style.height = "50px";
    atranscensionInfo.style.top = "665px";
    atranscensionInfo.style.fontSize = "170%";
    atranscensionInfo.style.verticalAlign = "middle";
    div1.appendChild(atranscensionInfo);
    transcendInfo = atranscensionInfo;

    //alert(Ah());
    setTimeout(translateBungus, 200);
    //setInterval(scriptLoop, 1000);
}

function startBungus(){
    isBungus = !isBungus;
    if (isBungus){
        transcendTime = document.getElementById("transcendTimeInput").value * 60;
        productionTime = document.getElementById("productionTimeInput").value * 60;
        document.getElementById("transcendTimeInput").disabled = true;
        document.getElementById("productionTimeInput").disabled = true;
        switchFruits(false); 
        if (bungify){
           transcendInfo.innerText = "Startus";
        }else{
           transcendInfo.innerText = "Starting...";
        }
        
        setTimeout(scriptLoop, 1000);
    }
    else{
        document.getElementById("transcendTimeInput").disabled = false;
        document.getElementById("productionTimeInput").disabled = false;
        if (bungify){
           transcendInfo.innerText = "No bungus amungus";
        }else{
           transcendInfo.innerText = "Not transcending";
        }

        timePassed = 0;
    }
    //alert('bungus');
    if (bungify){
       document.getElementById("startTranscends").innerText = isBungus ? "Stopus" : "Bungus?";
    }else{
       document.getElementById("startTranscends").innerText = isBungus ? "Stop" : "Start";
    }
}

var transcendTime = 1000;
var productionTime = 700;
var timePassed = 0;
var transcendInfo = null;
function scriptLoop(){
    
    if (timePassed == productionTime){
         switchFruits(true);  
    }
    if (timePassed >= transcendTime){        
        timePassed = 0;
        switchFruits(false);  
        autoBungus();
        setTimeout(scriptLoop, 3000);
        if (bungify){
            transcendInfo.innerText = "Bungus commence";
        }else{
            transcendInfo.innerText = "Transcending...";
        }
        return;   
    }
    if (timePassed % 5 == 0){
        vv(false,false);
        if (timePassed > productionTime){
            if (getWeathers()){
                bungusAbility(2);
            }
            if (getWeathers()){
                bungusAbility(0);
            }
            if (getWeathers()){
                bungusAbility(1);
            }
            
            collectFern();
        }
    }


    if (!isBungus){
        return;   
    }
    
    if (bungify){
       transcendInfo.innerText = "Time until bungus: " + (transcendTime - timePassed) + "s";
    }else{
       transcendInfo.innerText = "Time until transcend: " + (transcendTime - timePassed) + "s";
    }

    timePassed++;
    setTimeout(scriptLoop, 1000);
}

function autoBungus(){     
    //addAction
    X({type:gw,challenge:0});
    
    //closeAllDialogs
    La();
    
    //update
    W();
    
    //var bpt = document.getElementById("blueprintTInput").value;
    //if (bpt > 9 || bpt <= 0){
    //    btp = 1;
    //}
    //X({type:Lz,fh:B.Ld[bpt-1]})
    //W();
    setTimeout(loadBlueprint, 500);
}

//FALSE == SPEED && TRUE == PRODUCTION
function switchFruits(x){
    if (x){
        X({type:Av,slot:document.getElementById("productionFruitInput").value-1,silent:true,pi:true})
    }
    else{
        X({type:Av,slot:document.getElementById("speedFruitInput").value-1,silent:true,pi:true})
    }
    W();
}

function loadBlueprint(){
    //addAction({type:ACTION_PLANT_BLUEPRINT, blueprint:blueprints[index]});
    var bpt = document.getElementById("blueprintTInput").value;
    if (Ah() == 3){
        bpt = document.getElementById("wblueprintTInput").value;
    }

    if (bpt > 9 || bpt <= 0){
        btp = 1;
    }
    
    X({type:Lz,fh:B.Ld[bpt-1]})
    W();
}

function bungusAbility(x){
    X({type:uv,pe:x});
    W();
}

var bungify = true;
function translateBungus(){
    bungify = !bungify;
    if (!bungify){
        document.getElementById("startTranscends").innerText = isBungus ? "Stop" : "Start";
        document.getElementById("info1").innerText = "Transcension time:";
        document.getElementById("info2").innerText = "Production time:";
        document.getElementById("sfi").innerText = "Speed fruit:";
        document.getElementById("pfi").innerText = "Production fruit:";
        document.getElementById("bbj").innerText = "Blueprint:";
        document.getElementById("wbbj").innerText = "Winter Blueprint:";
    }
    else{
        document.getElementById("startTranscends").innerText = isBungus ? "Stopus" : "Bungus?";
        document.getElementById("info1").innerText = "Time for bungus:";
        document.getElementById("info2").innerText = "Time for wungus:";
        document.getElementById("sfi").innerText = "Bungus fruit:";
        document.getElementById("pfi").innerText = "Wungus fruit:";
        document.getElementById("bbj").innerText = "Blueberry Jam:";
        document.getElementById("wbbj").innerText = "Blackberry Jam:";
    }
}

function getWeathers(){
    var sun = B.time-B.$a;
    var rainbow = B.time-B.Oa;
    var mist = B.time-B.Na
    
    return !((sun < Rg(120) && B.Ua == 0) || (mist < Rg(180) && B.Ua == 1) || (rainbow < Rg(240) && B.Ua == 2));
    //return (sun < Rg(120) && B.Ua != 0) && (mist < Rg(180) && B.Ua != 1) && (rainbow < Rg(240) && B.Ua != 2);
}

function collectFern(){
    for(var XX = 0; XX <= 9; XX++) {
        for(var YY = 0; YY <= 9; YY++) {
            X({type:Mv,x:XX,y:YY});
        }
    }
    W();
    //X({type:Mv,x:B.Nf,y:B.$b});
    //!N&&B.qa&&B.Ca==L.x&&B.Da==L.y
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


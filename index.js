let expression;
let operatorMatch;

numPadCrea();
operatorCrea();
operatorButtons();
boutondenba();
screenCrea();

function screenCrea(){
    const p = document.createElement("p");
    p.textContent = "";
    document.getElementById("screen").appendChild(p);
    const button = document.createElement("button");
    button.textContent = "<";
    button.id="erase";
    button.addEventListener("click",function(){eraseOne()});
    document.getElementById("screen").appendChild(button);
}
function numPadCrea(){
    for(let i = 0; i < 10; i++){
        if(i < 9){
            const numDiv = document.createElement("button");
            numDiv.textContent = i+1;
            numDiv.classList.add("numpadbutton");
            numDiv.addEventListener("click",function(){screenWrite((i+1))});
            document.getElementById("numpad").appendChild(numDiv);
        }
        if(i == 9){
            const numDiv = document.createElement("button");
            numDiv.textContent = 0;
            numDiv.classList.add("numpadbutton");
            numDiv.addEventListener("click",function(){screenWrite(0)});
            document.getElementById("numpad").appendChild(numDiv)
        }
    }
    for(let i = 0; i < 2; i++){
        let buttons = ["Clear","Enter"];
        const operatorDiv = document.createElement("button");
        operatorDiv.textContent = buttons[i];
        operatorDiv.classList.add("boutendenba");
        operatorDiv.id = buttons[i];
        document.getElementById("numpad").appendChild(operatorDiv);
    }
}
function operatorCrea(){
    for(let i = 0; i<4;i++){
        let operator = ["+","-","*","/"];
        let operatorId = ["add","sub","mul","divide"];
        const operatorButton = document.createElement("button");
        operatorButton.textContent=operator[i];
        operatorButton.id = operatorId[i];
        document.getElementById("operator").appendChild(operatorButton);
    }
}
function screenWrite(str){
    const screenText = document.querySelector("#screen p");
    screenText.textContent += str;
}
function resetScreen(){
    const screenText = document.querySelector("#screen p");
    screenText.textContent = "";
}
function eraseOne(){
    const screenText = document.querySelector("#screen p");
    let res = screenText.textContent;
    res = res.split("");
    res.pop();
    res = res.join("");
    screenText.textContent = res;
    console.log("erased !");
}
function clearText(){
    const screenText = document.querySelector("#screen p");
    screenText.textContent = "";
}
function operatorButtons(){
    const addButton = document.getElementById('add');
    addButton.addEventListener("click",function(){screenWrite("+")});

    const subButton = document.getElementById('sub');
    subButton.addEventListener("click", function(){screenWrite("-")});

    const mulButton = document.getElementById('mul');
    mulButton.addEventListener("click", function(){screenWrite("*")});

    const divButton = document.getElementById('divide');
    divButton.addEventListener("click", function(){screenWrite("/")});
}
function boutondenba(){
    const clearButton = document.querySelector("#Clear");
    clearButton.addEventListener("click",function(){clearText()})

    const enterButton = document.querySelector("#Enter");
    enterButton.addEventListener("click", function(){readContent()})

}
function getScreenContent(){return document.querySelector("#screen p").textContent}
function readContent(){
    const fullContent = getScreenContent();
    const getOperator = fullContent.match(/\W/)[0];
    const array = fullContent.split(getOperator);
    clearText();
    switch(getOperator){
        case "+":{screenWrite(Number(array[0])+Number(array[1]))}
        break;
        case "-":{screenWrite(Number(array[0])-Number(array[1]))}
        break;
        case "*":{screenWrite(Number(array[0])*Number(array[1]))}
        break;
        case "/":{screenWrite(Number(array[0])/Number(array[1]))}
        break;
        default:{alert("Faut mettre 1 operator max.")};
    }
}
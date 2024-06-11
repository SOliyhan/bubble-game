const timer = 6;
let score=0;
let hit_num;

function makeBubble() {
    let bubble="";

    for (let i=1;i<=250;i++){
        let rn = Math.floor(Math.random()*10)
        bubble += `<div class="bubble">${rn}</div>`
    }

    document.querySelector("#pbtm").innerHTML = bubble;
}


function runTimer(timer){
    let interval = setInterval(()=>{
        if(timer>0){
            timer--;
        document.querySelector('#timer').textContent = timer;
        }
        else {
            clearInterval(interval);
            document.querySelector('#pbtm').innerHTML = `<h1>Game Over</h1>`;
        }

    }, 1000);
}

function getNewHit(){
    hit_num = Math.floor(Math.random()*10);
    document.querySelector('#hit').textContent = hit_num;
}

function increaseScore(){
    score+=10;
    document.querySelector('#score').textContent = score;
}




runTimer(timer);
makeBubble();
getNewHit(hit_num);

document.querySelector('#pbtm')
    .addEventListener('click', (details)=>{
        let bubble = Number(details.target.textContent);
        if (hit_num===bubble){
            increaseScore();
            makeBubble();
            getNewHit();
        }
    })
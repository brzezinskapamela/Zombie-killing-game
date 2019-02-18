const board =document.querySelector(".board");
let score = 0;


setInterval(function () {
    const zombie = document.createElement('div');
    zombie.classList.add('zombie');

    const bottom = Math.floor(Math.random() * 220);
    zombie.style.bottom = bottom + "px";

    const min =10;
    const max = 12;
    const speed = Math.floor(Math.random()*(max-min+1)+min);

    zombie.style.animationDuration = `0.7s, ${speed}s`;

    zombie.style.zIndex = 220 - bottom;

    const min2= 2;
    const max2= 5;
    const scalePart =Math.floor(Math.random()*(max2-min2+1)+min2);
    const scale = 0.7 + scalePart / 10;
    zombie.style.transform = `scale(${scale})`;

    board.appendChild(zombie);

    zombie.addEventListener("click", function () {
        this.remove();
        score ++;

        let points = document.querySelector("strong");
        points.innerHTML =score;

    })

}, 1000);
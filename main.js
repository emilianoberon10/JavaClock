window.onload = ()=>{
    h=0; m=0; s=0; ms=0; timeStarted=0;
    clock = document.getElementById('clock');
    btnStar = document.getElementById('btnstart');
    btnStop = document.getElementById('btnstop');
    btnReset = document.getElementById('btnreset');
    event();
};

function event(){
    btnStar.addEventListener('click', startClock);
    btnStop.addEventListener('click', stopClock);
    btnReset.addEventListener('click', resetClock);
}
function write(){
    let ht, mt, st, mst;
    ms++;
    if(ms > 90){s++; ms=0;}
    if(s > 59){m++; s= 0;}
    if(m > 59){h++; m= 0;}
    if(h > 24){h0;}

    mst =('0' + ms).slice(-2);
    st =('0' + s).slice(-2);
    mt =('0' + m).slice(-2);
    ht =('0' + h).slice(-2);

    clock.innerHTML = `${ht}:${mt}:${st}:${mst}`;
}
function startClock(){
    write();
    timeStarted = setInterval(write,10);
    btnStar.removeEventListener('click', starClock);
}
function stopClock(){
    clearInterval(timeStarted);
    btnStar.addEventListener('click', startClock);
}
function resetClock(){
    clearInterval(timeStarted);
    clock.innerHTML ="00:00:00.00"
    h=0; m=0; s=0; ms=0; timeStarted=0;
    btnStar.addEventListener('click',startClock)
}


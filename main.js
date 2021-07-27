var h = 0, m = 0, s = 0, ms = 0, timeStarted = 0;
const clock = document.getElementById("clock");
const btnStar = document
  .getElementById("btnstart")
  .addEventListener("click", startClock);
const btnStop = document
  .getElementById("btnstop")
  .addEventListener("click", stopClock);
const btnReset = document
  .getElementById("btnreset")
  .addEventListener("click", resetClock);

const records = document.querySelector(".records");


function write() {
  let ht = 0,
    mt = 0,
    st = 0,
    mst = 0;
  ms++;
  if (ms > 90) {
    s++;
    ms = 0;
  }
  if (s > 59) {
    m++;
    s = 0;
  }
  if (m > 59) {
    h++;
    m = 0;
  }
  if (h > 24) {
    h0;
  }

  mst = ("0" + ms).slice(-2);
  st = ("0" + s).slice(-2);
  mt = ("0" + m).slice(-2);
  ht = ("0" + h).slice(-2);

  clock.innerHTML = `${ht}:${mt}:${st}.${mst}`;
}
function startClock() {
  write();
  timeStarted = setInterval(write, 10);
  btnStar.removeEventListener("click", starClock);
}
function stopClock() {
  createRecord(clock.innerHTML );
  localStorage.setItem("nombre", clock.innerText);
  clearInterval(timeStarted);
  btnStar.addEventListener("click", startClock);
}
function resetClock() {
  createRecord(clock.innerHTML );
  clearInterval(timeStarted);
  clock.innerHTML = "00:00:00.00";
  h = 0;
  m = 0;
  s = 0;
  ms = 0;
  timeStarted = 0;
  btnStar.addEventListener("click", startClock);
}

function createRecord(time) {
    const record = document.createElement("div");
    record.classList.add("record");
    const rec_time = document.createElement("p");
    rec_time.innerHTML = `${time}`;
    rec_time.classList.add("record__time");
    record.appendChild(rec_time);
    const rec_btn = document.createElement("button");
    rec_btn.innerHTML = "Remove";
    rec_btn.classList.add("record__btn");
    rec_btn.classList.add("clock__button");
    rec_btn.addEventListener("click", removeRecord);
    record.appendChild(rec_btn);
    records.appendChild(record);
}
function removeRecord(e){
    const item = e.target
    if (item.classList[0] === "record__btn"){
        const rec = item.parentElement;
        rec.remove();
    }
}
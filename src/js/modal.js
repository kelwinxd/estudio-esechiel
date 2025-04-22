// Modal One - Silvia
const modal = document.getElementById("modalOne");
const btn = document.getElementById("btnOne");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Modal Two - Ana
const modaltwo = document.getElementById("modalTwo");
const btntwo = document.getElementById("btnTwo");
const spantwo = document.getElementsByClassName("close2")[0];

btntwo.onclick = function() {
  modaltwo.style.display = "block";
}

spantwo.onclick = function() {
  modaltwo.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modaltwo) {
    modaltwo.style.display = "none";
  }
}

// Modal Three - Julia
const modalthree = document.getElementById("modalThree");
const btnthree = document.getElementById("btnThree");
const spanthree = document.getElementsByClassName("close3")[0];

btnthree.onclick = function() {
  modalthree.style.display = "block";
}

spanthree.onclick = function() {
  modalthree.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalthree) {
    modalthree.style.display = "none";
  }
}

// Modal For - Catia
const modalfor = document.getElementById("modalFor");
const btnfor = document.getElementById("btnFor");
const spanfor = document.getElementsByClassName("close4")[0];

btnfor.onclick = function() {
  modalfor.style.display = "block";
}

spanfor.onclick = function() {
  modalfor.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalfor) {
    modalfor.style.display = "none";
  }
}
function onoff() {
  document.querySelectorAll("#files form")
    .forEach(function (frm) {
      frm.style.display = 'none'
    })
}


document.querySelector('#fileicon')
  .addEventListener('click', function () {
    onoff();
    document.querySelector('#fileform').style.display = 'block';
  })


document.querySelector('#foldericon')
  .addEventListener('click', function () {
    onoff();
    document.querySelector('#folderform').style.display = 'block';
  })

document.querySelector('#restart')
  .addEventListener('click', function () {
    onoff();
    document.querySelector('#fileform').style.display = 'none';
  })


var a = document.querySelector("#left")
var b = document.querySelector(".explore")
var c = document.querySelector("#right")

var check = 0

b.addEventListener("click", function () {
  if (check == 0) {
    a.style.width = "0%"
    // c.style.width = "100%"
    check = 1
  } else {
    a.style.width = "20%"
    c.style.width = "80%"
    check = 0
  }
})

var files = document.querySelector('#files')
var popup = document.querySelector('#popup')
var inp = document.querySelector('#inp')
var popupform = document.querySelector("#popup form")

  files.addEventListener("click", function (dets) {
    if (dets.target.id === "edit") {
      var val = dets.srcElement.parentElement.parentElement.textContent.trim();
      inp.value = val
     popup.style.display = "flex";
      popupform.setAttribute("action",`/updatename/${val}`)
    }
  })
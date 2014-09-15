window.onload = function(){
  setSize();
}

function setSize(){
  parent.document.getElementsByName("main_frame")[0].style.height = "auto";
  var height = document.body.scrollHeight;
  parent.document.getElementsByName("main_frame")[0].style.height = (height + "px");
}
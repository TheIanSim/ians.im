function openNav() {
  var element = document.getElementById("topnav");
  if (!element.style.top) {
    element.style.top = '0%';
  }else{
  element.style.top = element.style.top === '-100%' ? '0%' : '-100%';
  }
}

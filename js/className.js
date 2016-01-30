
function addClass(el, newClass) {
  if(el.className.indexOf(newClass) !== -1) {
    return;
  }

  el.className += el.className === '' ? newClass : ' ' + newClass;
}
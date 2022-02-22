let dateelem = document.getElementsByClassName('date');
let now = new Date();
dateelem[0].innerHTML = "Today's Date: "+now.toDateString();
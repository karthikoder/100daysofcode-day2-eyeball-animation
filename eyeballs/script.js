var balls = document.getElementsByClassName("eyeball");
   function fun(event)
   {
    var x = event.clientX * 100 / window.innerWidth + "%";
    var y = event.clientY * 100 / window.innerHeight + "%";
  document.getElementById("demo").style.top =y;
  document.getElementById("demo").style.left =x;
   }
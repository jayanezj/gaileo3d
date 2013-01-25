	function parpadear() {
  var blink = document.all.tags("BLINK")
  for (var i=0; i < blink.length; i++)
    blink[i].style.visibility = blink[i].style.visibility == "" ? "hidden" : "" 
	}

	function empezar() {
  if (document.all)
    setInterval("parpadear()",1000)
	}
	window.onload = empezar;
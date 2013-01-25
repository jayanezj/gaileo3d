	// haces referencia al elemento (en este caso div) e indicas el tiempo de espera en segundos
	var strCmd = "document.getElementById('entrar').style.display = 'block'";
	var waitseconds = 5;

	// Calculas el tiempo en milisegundos y ejecutas la acción
	var timeOutPeriod = waitseconds * 1000;
	var hideTimer = setTimeout(strCmd, timeOutPeriod);

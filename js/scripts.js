///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//Script layer for http://3d.iesgalileo.org
//version 0.1
//Last Updated: 25/01/2013
//Author: José Antonio Yáñez Jiménez -- http://www.jimenezfrontend.es
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////

function initUpperRooms()
	{
	////////////////////////////////////////////////
	////////////////////////////////////////////////
	////            AULA FINANCIERA             ////
	////////////////////////////////////////////////
	////////////////////////////////////////////////
	$('#upper_a-finan').mouseenter(function() 
		{
		showText(0,"upper_a-finan_text");
		});
	$('#upper_a-finan').mouseleave(function() 
		{
		if($('#video').css('display')=='none') //si estamos viendo el video no queremos que se oculte la capa
			{
			$('#upper_a-finan_text').fadeOut(700);
			}
		});
	$('#upper_a-finan').click(function(e) 
		{
		e.preventDefault();
		loadRoom(0);
		$('#shadow').css("background-color","rgba(0,0,0,0.6)");
		$('#shadow').css("z-index","8");
		});
	////////////////////////////////////////////////
	////////////////////////////////////////////////
	////          AULA INFORMATICA 3            ////
	////////////////////////////////////////////////
	////////////////////////////////////////////////
	$('#upper_aisle-inf3').mouseenter(function() 
		{
		showText(1,"upper_aisle-inf3_text");
		});
	$('#upper_aisle-inf3').mouseleave(function() 
		{
		if($('#video').css('display')=='none') //si estamos viendo el video no queremos que se oculte la capa
			{
			$('#upper_aisle-inf3_text').fadeOut(700);
			}
		});
	$('#upper_aisle-inf3').click(function(e) 
		{
		e.preventDefault();
		loadRoom(1);
		$('#shadow').css("background-color","rgba(0,0,0,0.6)");
		$('#shadow').css("z-index","8");
		});
	}
function initLowerPlants()
	{
	$('#lowerplantsmall').mouseenter(function() 
		{
		$('#shadow').fadeIn(700);
		$('#lowerplantbig').fadeIn(700);
		});
	$('#lowerplantbig').mouseleave(function() 
		{
		$('#shadow').fadeOut(700);

		$('#lowerplantbig').fadeOut(700);
		});
	}
function initUpperPlants()
	{
	$('#upperplantbig').mouseleave(function() 
		{
		if($('#shadow').css("z-index")!='8')
			{
			$('#shadow').fadeOut(700);
			$('#upperplantbig').fadeOut(700);
			}
		});
	$('#upperplantsmall').mouseenter(function() 
		{
		$('#shadow').fadeIn(700);
		$('#upperplantbig').fadeIn(700);
		});
	}
function openLink(link)
	{
	window.open(link, '_blank');
	}


function initSVG()
	{
	$('#svgccommons').mouseenter(function() 
		{
		$(this).css('cursor','pointer');
		$('#ccommons_circle_cc_border,#ccommons_circle_nc_border,#ccommons_circle_by_person,#ccommons_circle_by_border,#ccommons_circle_nd_border,#ccommons_circle_nd_equal,#ccommons_border,#ccommons_circle_nd_inner,#ccommons_circle_by_inner,#ccommons_circle_cc_inner,#ccommons_circle_nc_inner,#ccommons_by,#ccommons_nc,#ccommons_nd,#ccommons_inner').css('transition','fill 700ms');
		$('#ccommons_circle_cc_border,#ccommons_circle_nc_border,#ccommons_circle_by_person,#ccommons_circle_by_border,#ccommons_circle_nd_border,#ccommons_circle_nd_equal,#ccommons_border').css("fill","#FFFFCC");
		$('#ccommons_circle_nd_inner,#ccommons_circle_by_inner,#ccommons_circle_cc_inner,#ccommons_circle_nc_inner,#ccommons_by,#ccommons_nc,#ccommons_nd,#ccommons_inner').css("fill","#F9CD19");
		});
	$('#svgccommons').mouseleave(function() 
		{
		$(this).css('cursor','auto');
		$('#ccommons_circle_cc_border,#ccommons_circle_nc_border,#ccommons_circle_by_person,#ccommons_circle_by_border,#ccommons_circle_nd_border,#ccommons_circle_nd_equal,#ccommons_border,#ccommons_circle_nd_inner,#ccommons_circle_by_inner,#ccommons_circle_cc_inner,#ccommons_circle_nc_inner,#ccommons_by,#ccommons_nc,#ccommons_nd,#ccommons_inner').css('transition','fill 700ms');
		$('#ccommons_circle_cc_border,#ccommons_circle_nc_border,#ccommons_circle_by_person,#ccommons_circle_by_border,#ccommons_circle_nd_border,#ccommons_circle_nd_equal,#ccommons_border').css("fill","#F9CD19");
		$('#ccommons_circle_nd_inner,#ccommons_circle_by_inner,#ccommons_circle_cc_inner,#ccommons_circle_nc_inner,#ccommons_by,#ccommons_nc,#ccommons_nd,#ccommons_inner').css("fill","#FFFFCC");
		});
	$('#svgxhtml5').mouseenter(function() 
		{
		$(this).css('cursor','pointer');
		$('#xhtml5_bright1,#xhtml5_bright2,#xhtml5_bright3,#xhtml5_bright4,#xhtml5_bright5,#xhtml5_bright6,#xhtml5_number,#xhtml5_shield,#xhtml5_dark1,#xhtml5_dark2,#xhtml5_dark3,#xhtml5_dark4,#xhtml5_dark5,#xhtml5_dark6,#xhtml5_dark7,#xhtml5_dark8,#xhtml5_dark9').css('transition','fill 700ms');
		$('#xhtml5_bright1,#xhtml5_bright2,#xhtml5_bright3,#xhtml5_bright4,#xhtml5_bright5,#xhtml5_bright6').css("fill","#F9CD19");
		$('#xhtml5_number').css("fill","#E4B700");
		$('#xhtml5_shield,#xhtml5_dark1,#xhtml5_dark2,#xhtml5_dark3,#xhtml5_dark4,#xhtml5_dark5,#xhtml5_dark6,#xhtml5_dark7,#xhtml5_dark8,#xhtml5_dark9').css("fill","#FDF4C4");
		});
	$('#svgxhtml5').mouseleave(function() 
		{
		$(this).css('cursor','auto');
		$('#xhtml5_bright1,#xhtml5_bright2,#xhtml5_bright3,#xhtml5_bright4,#xhtml5_bright5,#xhtml5_bright6,#xhtml5_number,#xhtml5_shield,#xhtml5_dark1,#xhtml5_dark2,#xhtml5_dark3,#xhtml5_dark4,#xhtml5_dark5,#xhtml5_dark6,#xhtml5_dark7,#xhtml5_dark8,#xhtml5_dark9').css('transition','fill 700ms');
		$('#xhtml5_bright1,#xhtml5_bright2,#xhtml5_bright3,#xhtml5_bright4,#xhtml5_bright5,#xhtml5_bright6').css("fill","#FDF4C4");
		$('#xhtml5_number').css("fill","#FFFFFF");
		$('#xhtml5_shield,#xhtml5_dark1,#xhtml5_dark2,#xhtml5_dark3,#xhtml5_dark4,#xhtml5_dark5,#xhtml5_dark6,#xhtml5_dark7,#xhtml5_dark8,#xhtml5_dark9').css("fill","#F9CD19");
		});
	$('#svghumans').mouseenter(function() 
		{
		$(this).css('cursor','pointer');
		$('#humans_form,#humans_text1,#humans_text2,#humans_text3').css('transition','fill 700ms');
		$('#humans_form,#humans_text1,#humans_text2,#humans_text3').css("fill","#FDF4C4");
		});
	$('#svghumans').mouseleave(function() 
		{
		$(this).css('cursor','auto');
		$('#humans_form,#humans_text1,#humans_text2,#humans_text3').css('transition','fill 700ms');
		$('#humans_form,#humans_text1,#humans_text2,#humans_text3').css("fill","#F9CD19");
		});
	$('#svgccommons').click(function(e) 
		{
		openLink("http://creativecommons.org/licenses/by-nc-nd/3.0/deed.es_CO");
		});
	$('#svgxhtml5').click(function(e) 
		{
		openLink("http://validator.nu/?doc=http%3A%2F%2Fprojects.jimenezfrontend.es%2Fgalileo3d%2Fmain.xhtml&amp;showimagereport=yes&amp;showsource=yes");
		});
	$('#svghumans').click(function(e) 
		{
		openLink("humans.txt");
		});
	}

function showText(roomid, textid)
	{
	$.ajax(
		{
		type: "GET",
		url: "db/rooms.xml",
		dataType: "xml",
		success: function(xml) 
			{
			$('#'+textid+'1').remove();
			$('#'+textid+'2').remove();
			$('#'+textid+'3').remove();
			$(xml).find('room[id='+roomid+']').each(function()
				{
				var title = $(this).find('title').text();					
				var desc = $(this).find('desc').text();
				$('<p id="'+textid+'1" class="centered-text"></p>').html(title+'<br /><br />').appendTo('#'+textid);
				$('<p id="'+textid+'2" class="justified"></p>').html(desc+'<br /><br />').appendTo('#'+textid);
				$('<p id="'+textid+'3" class="centered-text"></p>').html("Haz clic para ver un recorrido").appendTo('#'+textid);
				$('#'+textid).fadeIn(700);
				});
			}
		});
	}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////
////////////////////// ESTA FUNCIÓN ELIMINA EL CONTENIDO DEL DIV VIDEO PARA DEJARLO EN BLANCO, DESPUÉS CONSULTA
////////////////////// EN LA BASE DE DATOS XML LOS DATOS DEL AULA A MOSTRAR (RECIBIDO POR PARÁMETRO) Y CREA LOS
////////////////////// OBJETOS NECESARIOS EN EL DIV VIDEO. LLAMA A LA FUNCIÓN QUE ESTARÁ PENDIENTE DE QUE SE 
////////////////////// PULSE EL BOTÓN DE CIERRE PARA VOLVER AL ESTADO ANTERIOR A LA PROYECCIÓN DEL VIDEO Y POR
////////////////////// ÚLTIMO MUESTRA LA CAPA DEL VIDEO.
//////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function loadRoom(roomid)
	{
	$.ajax(
		{
		type: "GET",
		url: "db/rooms.xml",
		dataType: "xml",
		success: function(xml) 
			{
			$('#video1').remove();
			$('#video2').remove();
			$('#video3').remove();
			$('#video4').remove();
			$('#thevid').remove();
			$(xml).find('room[id='+roomid+']').each(function()
				{
				var close = $(this).find('closeid').text();
				var textid = $(this).find('textid').text();
				var title = $(this).find('title').text();
				var desc = $(this).find('desc').text();
				var vid0 = $(this).find('vid0').text();
				var vid1 = $(this).find('vid1').text();
				$('<p id="video1" class="righted"></p>').html('<a href="#" id="'+close+'">Cerrar</a><br /><br />').appendTo('#video');
				$('<h1 id="video2"></h1>').html(title).appendTo('#video');
				$('<p id="video3" class="justified"></p>').html(desc).appendTo('#video');
				$('<div id="thevid" class="videoContainer"></div>').html('').appendTo('#video');
				$('<video id="myVideo" controls="controls" poster="img/posters/poster.jpg" width="600" height="350"></video>').html('').appendTo('#thevid');
				$('<source src="'+vid0+'" type="video/mp4"></source>').html('').appendTo('#myVideo');
				$('<div class="caption"></div>').html(title).appendTo('#thevid');
				$('<div id="vidControl" class="control"></div>').html('').appendTo('#thevid');
				$('<div id="topVidControl" class="topControl"></div>').html('').appendTo('#vidControl');
				$('<div id="progressControl" class="progress"></div>').html('').appendTo('#topVidControl');
				$('<span class="bufferBar"></span>').html('').appendTo('#progressControl');
				$('<span class="timeBar"></span>').html('').appendTo('#progressControl');
				$('<div id="timeControl" class="time"></div>').html('').appendTo('#topVidControl');
				$('<span class="current"></span>').html('').appendTo('#timeControl');
				$('<span></span>').html(' / ').appendTo('#timeControl');
				$('<span class="duration"></span>').html('').appendTo('#timeControl');
				$('<div id="vidBtmControl" class="btmControl"></div>').html('').appendTo('#vidControl');
				$('<div class="btnPlay btn" title="Reproducir/Pausar video"></div>').html('').appendTo('#vidBtmControl');
				$('<div class="btnStop btn" title="Detener video"></div>').html('').appendTo('#vidBtmControl');
				$('<div class="spdText btn"></div>').html('Vel: ').appendTo('#vidBtmControl');
				$('<div class="btnx1 btn text selected" title="Avance normal"></div>').html('x3').appendTo('#vidBtmControl');
				$('<div class="btnx3 btn text" title="Avance x3"></div>').html('x1').appendTo('#vidBtmControl');
				$('<div class="btnFS btn" title="Cambio a pantalla completa"></div>').html('').appendTo('#vidBtmControl');
				$('<div class="btnLight lighton btn" title="Encender/Apagar luces"></div>').html('').appendTo('#vidBtmControl');
				$('<div id="vidVolControl" class="volume" title="Ajustar volumen"></div>').html('').appendTo('#vidBtmControl');
				$('<span class="volumeBar"></span>').html('').appendTo('#vidVolControl');
				$('<div class="sound sound2 btn" title="Silencio/Sonido"></div>').html('').appendTo('#vidBtmControl');
				$('<div id="vidLoaded" class="loading"></div>').html('').appendTo('#thevid');
				initLinks(close,textid);
				loadVidControls();
				});
			}
		});
	$('#video').fadeIn(300);
	}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////
////////////////////// FUNCIÓN ENCARGADA DE ESCUCHAR EL CLICK SOBRE EL CIERRE DE UN VIDEO, MOMENTO EN EL QUE
////////////////////// SE OCULTA EL DIV VIDEO Y SE CAMBIAN LOS TONOS DE LA CAPA DE SOMBREADO.
//////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function initLinks(close,textid)
	{
	$('#'+close).on('click', function(e)
		{
		e.preventDefault();
		$('.overlay').remove();
		$('#video').fadeOut(700);
		$('#'+textid).fadeOut(700);
		$('#shadow').css("background-color","rgba(236,236,102,0.4)");
		$('#shadow').css("z-index","2");
		});
	}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////
////////////////////// CARGA EN EL DOCUMENT READY
//////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
$(document).ready(function()
	{
	initUpperPlants();
	initLowerPlants();
	initUpperRooms();
	initSVG();
	});


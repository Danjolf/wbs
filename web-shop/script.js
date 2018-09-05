var line = document.getElementById('color_line');

var links_color = [
	document.getElementById('orange_color'), 
	document.getElementById('purple_color'),
	document.getElementById('red_color'), 
	document.getElementById('green_color')
];

function change_color() 
{
	line.style.transition = '0.5s';

	links_color[0].onmouseover = function() {
		line.style.backgroundColor = '#ff9000';
		links_color[0].onmouseout = function() {
			line.style.backgroundColor = 'gray';
		}
	}

	links_color[1].onmouseover = function() {
		line.style.backgroundColor = '#8400ff';
		links_color[1].onmouseout = function() {
			line.style.backgroundColor = 'gray';
		}
	}

	links_color[2].onmouseover = function() {
		line.style.backgroundColor = '#f10000';
		links_color[2].onmouseout = function() {
			line.style.backgroundColor = 'gray';
		}
	}

	links_color[3].onmouseover = function() {
		line.style.backgroundColor = '#00ff36';
		links_color[3].onmouseout = function() {
			line.style.backgroundColor = 'gray';
		}
	}

	var btn_hover = document.getElementById('check_stock');

	btn_hover.onmouseover = function() {
		line.style.backgroundColor = 'lightgreen';
		btn_hover.onmouseout = function() {
			line.style.backgroundColor = 'gray';
		}
	}
}

change_color();
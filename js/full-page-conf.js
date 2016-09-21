$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke'],
		scrollingSpeed: 600,
		continuousVertical: true, 
		loopBottom: false,
		scrollBar: false,
		touchSensitivity: 15,
		anchors: ['introPage', 'skillsPage', 'experiencePage','personalPage'],
		menu: "#menu"
	});
});
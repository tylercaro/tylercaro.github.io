$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#f2f2f2', '#FCF9E2'],
		scrollingSpeed: 600,
		continuousVertical: true, 
		loopBottom: false,
		scrollBar: false,
		touchSensitivity: 15,
		anchors: ['introPage', 'skillsPage', 'personalPage'],
		menu: "#menu"
	});
});
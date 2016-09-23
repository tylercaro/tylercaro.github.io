$(document).ready(function() {
	$('#fullpage').fullpage({
		sectionsColor: ['#f2f2f2', '#f2f2f2', '#FCF9E2'],
		scrollingSpeed: 600,
		loopBottom: true,
		scrollBar: false,
		anchors: ['introPage', 'skillsPage', 'personalPage'],
		menu: "#menu"
	});
});
$(document).ready(function() {
	$("#btn_bars").click(function(e) {
		e.preventDefault();
        $("#menu").toggleClass("toggled");
    });
});
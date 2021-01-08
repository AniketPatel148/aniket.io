$(document).ready(function () {
	$(window).scroll(function () {
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		} else {
			$(".navbar").removeClass("sticky");
		}
	});

	$(".navbar__burger").click(function () {
		$(".navbar__menu").toggleClass("open");
		$(".navbar__burger i").toggleClass("open");
	});
});

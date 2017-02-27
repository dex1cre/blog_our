$(function() {
	$(".date").click(function() {
		$.ajax({
			url: "/delete",
			type: "POST",
			data: {
				id: $(this).children("span").text()
			},
		});
		$(this).parents("li").next("hr").remove();
		$(this).parents("li").remove();
	});

	$(".write").click(function() {
		$(".write-sms").slideToggle(300);
	});

	$("textarea").click(function() {
		$(".shadow, .intent").fadeIn(350);
	});

	$(".to-blogers").click(function() {
		document.location.href="/";
	});
});
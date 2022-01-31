const subscribeBtn = document.getElementById("subscribe-btn");
const inputField = document.getElementById("input-field");
(function () {
	$("#subscribe-btn").on("click", function () {
		if (inputField.value === "" || !inputField.value.includes("@")) {
			$(this).siblings(".input-message").addClass("input-rejected");
		} else {
			$(this)
				.siblings(".input-message")
				.text("input-success")
				.addClass("input-success");

			$(this).siblings(".input-message").removeClass("input-rejected");
		}
	});
})(jQuery);

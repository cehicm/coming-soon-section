const subscribeBtn = document.getElementById("subscribe-btn");
const inputField = document.getElementById("input-field");
(function () {
	$("#subscribe-btn").on("click", function () {
		if (inputField.value === "" || !inputField.value.includes("@")) {
			$(this).siblings(".input-message").addClass("input-rejected");
			$(this).siblings(".icon-error").addClass("icon-error--active");
			$(this).siblings(".input-email").addClass("input-border-error");
		} else {
			$(this)
				.siblings(".input-message")
				.text("Thank you for subscribing!")
				.addClass("input-success");

			$(this).siblings(".input-message").removeClass("input-rejected");
			$(this).addClass("input-btn--clicked");
			$(this).siblings(".icon-error").removeClass("icon-error--active");
			$(this).siblings(".input-email").removeClass("input-border-error");
		}
	});
})(jQuery);

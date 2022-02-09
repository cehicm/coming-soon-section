(function () {
	$("#subscribe-btn").on("click", function () {
		let $this = $(this),
			$inputMessage = $this.siblings(".input-message"),
			$iconError = $this.siblings(".icon-error"),
			$inputEmail = $this.siblings(".input-email"),
			$wrapper = $this.closest(".input-field");


		const errorMessages = {
			emptyField: "This field can't be empty!",
			invalidEmail: "Please enter a valid email",
			success: "Thank you for subscribing!",
		};

		const emailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		let isValid = $inputEmail.val().match(emailRegex);

		if ($inputEmail.val() === "") {
			$inputMessage.remove();
			$iconError.addClass("icon-error--active");
			$inputEmail.addClass("input-border-error");
			$wrapper.append(`<p class="input-message error"> ${errorMessages.emptyField}</p>`);
		} else if ($inputEmail.val() === "" || isValid === null) {
			$inputMessage.remove();
			$iconError.addClass("icon-error--active");
			$inputEmail.addClass("input-border-error");
			$wrapper.append(`<p class="input-message error"> ${errorMessages.invalidEmail}</p>`);
		} else {
			$inputMessage.remove();
			$this.addClass("input-btn--clicked");
			$iconError.removeClass("icon-error--active");
			$inputEmail.removeClass("input-border-error");
			$wrapper.append(`<p class="input-message success"> ${errorMessages.success}</p>`);
		}
	});
})(jQuery);
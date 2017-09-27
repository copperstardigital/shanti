(function() {
    var StripeBilling = {
        init : function() {
            this.form = $('#billing-form');
            this.submitButton = this.form.find('input[type="submit"]');
            this.submitButtonValue = this.submitButton.val();

            var stripeKey = $('meta[name="publishable-key"]').attr('content');
            Stripe.setPublishableKey(stripeKey);

            this.bindEvents();
        },
        bindEvents : function() {
            this.form.on('submit', $.proxy(this.sendToken, this));
        },
        sendToken : function(e) {
            this.submitButton.val('Still Processing...').prop('disabled', true);
            e.preventDefault();
            // alert('Do not click the submit button twice or you will be charged twice.');
            Stripe.createToken(this.form, $.proxy(this.stripeResponseHandler, this));
        },
        stripeResponseHandler : function(status, response) {
            this.submitButton.val('Processing...').prop('disabled', true);

            if (response.error) {
                $('.payment-errors').show().text(response.error.message);
                return this.submitButton.val('Submit Payment').prop('disabled', false);
            }


            $('<input>', {
                type  : 'hidden',
                name  : 'stripe_token',
                value : response.id
            }).appendTo(this.form);

            this.form[0].submit();

            //console.log(status, response);
        }
    };

    StripeBilling.init();
})();

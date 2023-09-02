 
  
  window.PianoESPConfig = {
        id: 295
	};
  
  (function () {
    tp = window["tp"] || [];

    /* Checkout related */
    /**
     * Event properties
     *
     * chargeAmount - amount of purchase
     * chargeCurrency
     * uid
     * email
     * expires
     * rid
     * startedAt
     * termConversionId
     * termId
     * promotionId
     * token_list
     * cookie_domain
     * user_token
     *
     */
    function onCheckoutComplete(data) {
    }

    function onCheckoutExternalEvent() {
    }

    function onCheckoutClose(event) {
        /* Default behavior is to refresh the page on successful checkout */
        if (event && event.state == "checkoutCompleted") {
            location.reload();
        }
    }

    function onCheckoutCancel() {
    }

    function onCheckoutError() {
    }

    function onCheckoutSubmitPayment() {
    }

    /* Meter callback */
    function onMeterExpired() {

    }

    /* Meter callback */
    function onMeterActive() {

    }

    /* Callback executed when a user must login */
    function onLoginRequired() {
        // this is a reference implementation only
        // your own custom login/registration implementation would
        // need to return the tinypass-compatible userRef inside the callback

        // mysite.showLoginRegistration(function (tinypassUserRef)
        // tp.push(["setUserRef", tinypassUserRef]); // tp.offer.startCheckout(params); // }
        // this will prevent the tinypass error screen from displaying

        return false;
    }

    /* Callback executed after a tinypassAccounts login */
    function onLoginSuccess(data) {
	    if (data.source == "PIANOID" && data.params.confirmed){
      		location.reload(); // this reloads the page after direct login (NOT login inside checkout)
  		}
    }

    /* Callback executed after an experience executed successfully */
    function onExperienceExecute(event) {
    }

    /* Callback executed if experience execution has been failed */
    function onExperienceExecutionFailed(event) {
    }

    /* Callback executed if external checkout has been completed successfully */
    function onExternalCheckoutComplete(event) {
        /* Default behavior is to refresh the page on successful checkout */
        location.reload();
    }

    tp.push(["setAid", 'tALT38iXpe']);
    tp.push(["setEndpoint", 'https://buy-eu.piano.io/api/v3']);
    tp.push(["setUseTinypassAccounts", false ]);
    tp.push(["setUsePianoIdUserProvider", true ]);
    tp.push(['setPianoIdUrl', 'https://id-eu.piano.io/']);

    /* checkout related events */
    tp.push(["addHandler", "checkoutComplete", onCheckoutComplete]);
    tp.push(["addHandler", "checkoutClose", onCheckoutClose]);
    tp.push(["addHandler", "checkoutCustomEvent", onCheckoutExternalEvent]);
    tp.push(["addHandler", "checkoutCancel", onCheckoutCancel]);
    tp.push(["addHandler", "checkoutError", onCheckoutError]);
    tp.push(["addHandler", "checkoutSubmitPayment", onCheckoutSubmitPayment]);

    /* user login events */
    tp.push(["addHandler", "loginRequired", onLoginRequired]);
    tp.push(["addHandler", "loginSuccess", onLoginSuccess]);

    /* meter related */
    tp.push(["addHandler", "meterExpired", onMeterExpired]);
    tp.push(["addHandler", "meterActive", onMeterActive]);

    tp.push(["addHandler", "experienceExecute", onExperienceExecute]);
    tp.push(["addHandler", "experienceExecutionFailed", onExperienceExecutionFailed]);

    /* external checkout related events */
    tp.push(["addHandler", "externalCheckoutComplete", onExternalCheckoutComplete]);

    tp.push(["init", function () {
        try{
            var _mo_tp_cv = JSON.parse(localStorage.getItem("_mo_tp_cv"));
            if (_mo_tp_cv && _mo_tp_cv.length){
                for (var i=0; i<_mo_tp_cv.length; i++) {
                    tp.push(["setCustomVariable",_mo_tp_cv[i][0],_mo_tp_cv[i][1]]);
                }
            }
        }catch(e){}
        tp.experience.init()
    }]);
})();


    // do not change this section
    // |BEGIN INCLUDE TINYPASS JS|
    (function(src){var a=document.createElement("script");a.type="text/javascript";a.async=true;a.src=src;var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})("//code.piano.io/api/tinypass.min.js");
    // |END   INCLUDE TINYPASS JS|


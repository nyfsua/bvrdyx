(function(){
	const storeCookies = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const gclid = urlParams.get('gclid');
		if ( null !== gclid ){
			Cookies.set('gf-ad-tracker-gclid', gclid, {expires: 7});
		} else {
			const gbraid = urlParams.get('gbraid');
			if ( null !== gbraid ) {
				Cookies.set('gf-ad-tracker-gclid', gbraid, {expires: 7});
			} else {
				campaignid = urlParams.get('campaignid');
				if ( null !== campaignid ) {
					Cookies.set('gf-ad-tracker-gclid', window.location.search, {expires: 7});
				}
			}
		}
	}
	const setFields = () => {
		if (document.querySelectorAll('.gf-google-ad input[type="text"]').length) {
			if ('undefined' !== typeof Cookies.get('gf-ad-tracker-gclid') && Cookies.get('gf-ad-tracker-gclid').length) {
				document.querySelectorAll('.gf-google-ad input[type="text"]').forEach((input) => {
					input.value = 'Yes';
				});
			} else {
				document.querySelectorAll('.gf-google-ad input[type="text"]').forEach((input) => {
					input.value = 'No';
				});
			}
		}
		if ('undefined' !== typeof Cookies.get('gf-ad-tracker-gclid') && document.querySelectorAll('.gf-google-ad-gclid input[type="text"]').length) {
			if (Cookies.get('gf-ad-tracker-gclid').length) {
				document.querySelectorAll('.gf-google-ad-gclid input[type="text"]').forEach((input) => {
					input.value = Cookies.get('gf-ad-tracker-gclid');
				});
			}
		}
	}
	const ready = (fn) => {
		if (document.readyState !== 'loading') {
			fn();
		} else {
			document.addEventListener('DOMContentLoaded', fn);
		}
	}
	ready(storeCookies);
	ready(setFields);
	jQuery(document).on('gform_post_render', function() {
		setFields();
	});
})();

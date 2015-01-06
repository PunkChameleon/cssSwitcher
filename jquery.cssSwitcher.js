// Needs jQuery (for now);

$(function() {
	window.$cssSwitcher = {
		add : function (cssUrl) {
			$('head').append('<link href="'+ cssUrl + '" rel="stylesheet">');
		},

		replace : function (oldUrl, newUrl) {
			this.remove(oldUrl);
			this.add(newUrl);
		},

		remove : function (cssUrl) {
			$('link[href="' + cssUrl + '"]').remove();
		}
	};
});
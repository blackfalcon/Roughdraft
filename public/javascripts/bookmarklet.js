(function(e, a, g, h, f, c, b, d) {
	if (! (f = e.jQuery) || g > f.fn.jquery || h(f)) {
		c = a.createElement('script');
		c.type = 'text/javascript';
		c.src = 'http://ajax.googleapis.com/ajax/libs/jquery/' + g + '/jquery.min.js';
		c.onload = c.onreadystatechange = function() {
			if (!b && (!(d = this.readyState) || d == 'loaded' || d == 'complete')) {
				h((f = e.jQuery).noConflict(1), b = 1);
				f(c).remove()
			}
		};
		a.documentElement.childNodes[0].appendChild(c)
	}
})(window, document, '1.4.2', function($, L) {
	var gist_re = /^https:\/\/gist\.github\.com\/([\w-]+)*?\/*?(\d+)$/i,
		rel_re = /^\/?(\d+)$/,
		on_gist = gist_re.test(location.href);
	if (on_gist) {
		i = location.pathname.split(/\/([\w-]+)\/(\d+)/);
		location.href = 'http://' + i[1] + '.roughdraft.dev/' + i[2];
	} else {
		$('a').each(function() {
			var b = $(this).attr('href') || '',
				a = b.match(gist_re);

			if (on_gist && !(a && a[2])) {
				a = b.match(rel_re)
			}
			if (a && a[2]) {
			  if(typeof(a[1]) == 'undefined') {
			    a[1] = 'www';
			  }

				$(this).after(' <a href=&quot;http://' + a[1] + '.roughdraft.dev/' + a[2] + '&quot;>[roughdraft.io]</a>')
			}
		});
	}
});
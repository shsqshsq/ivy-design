(function() {
	define('ivy-line', function() {
		var IvyLine = function(settings) {
			this.settings = settings || {};
		};

		IvyLine.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, begin = settings.begin, end = settings.end;
			if (!begin) {
				throw 'line must have a begin point';
			}
			if (!end) {
				throw 'line must have an end point';
			}
			ctx.beginPath();
			ctx.moveTo(begin.x, begin.y);
			ctx.lineTo(end.x, end.y);
			ctx.stroke();
		};

		return IvyLine;
	});
}());
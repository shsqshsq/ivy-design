/*
 * IvyLine
 */
(function() {
	define('ivy-line', ['ivy-utils'], function(ivyUtil) {
		var IvyLine = function(settings) {
			this.settings = settings || {};
		};

		IvyLine.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				begin = settings.begin, 
				end = settings.end;
			if (!begin) {
				throw new Error('line must have a begin point');
			}
			if (!end) {
				throw new Error('line must have an end point');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);
			
			ctx.beginPath();
			ctx.moveTo(begin.x, begin.y);
			ctx.lineTo(end.x, end.y);
			ctx.stroke();
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyLine;
	});
}());
/*
 * IvyBezier
 */
(function() {
	define('ivy-bezier', ['ivy-utils'], function(ivyUtil) {
		var IvyBezier = function(settings) {
			this.settings = settings || {};
		};

		IvyBezier.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				begin = settings.begin, 
				end = settings.end,
				control1 = settings.control1,
				control2 = settings.control2;
			if (!begin) {
				throw new Error('bezier must have a begin point');
			}
			if (!end) {
				throw new Error('bezier must have an end point');
			}
			if (!control1) {
				throw new Error('bezier must have a control point 1');
			}
			if (!control2) {
				throw new Error('bezier must have a control point 2');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);
			
			ctx.beginPath();
			ctx.moveTo(begin.x, begin.y);
			ctx.bezierCurveTo(control1.x, control1.y, control2.x, control2.y, end.x, end.y);
			ctx.stroke();
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyBezier;
	});
}());
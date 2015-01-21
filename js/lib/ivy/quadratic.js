/*
 * IvyQuadratic
 */
(function() {
	define('ivy-quadratic', ['ivy-utils'], function(ivyUtil) {
		var IvyQuadratic = function(settings) {
			this.settings = settings || {};
		};

		IvyQuadratic.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				begin = settings.begin, 
				end = settings.end,
				control = settings.control;
			if (!begin) {
				throw new Error('quadratic must have a begin point');
			}
			if (!end) {
				throw new Error('quadratic must have an end point');
			}
			if (!control) {
				throw new Error('quadratic must have a control point');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);
			
			ctx.beginPath();
			ctx.moveTo(begin.x, begin.y);
			ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
			ctx.stroke();
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyQuadratic;
	});
}());
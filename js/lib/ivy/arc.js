/*
 * IvyArc
 */
(function() {	
	define('ivy-arc', ['ivy-utils'], function(ivyUtil){
		var IvyArc = function(settings) {
			this.settings = settings || {};
		};
		IvyArc.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			
			var setting = this.settings,
				keepState = setting.keepState,
				center = setting.center,
				x = center ? center.x || 0 : undefined,
				y = center ? center.y || 0: undefined,
				radius = setting.radius,
				startAngle = setting.startAngle ? setting.startAngle : Math.PI,
				endAngle = setting.endAngle ? setting.endAngle : 0,
				counterClockwise = !!setting.counterClockwise;
			
			var startPoint = setting.startPoint,
				endPoint = setting.endPoint;
			
			if (center) {
				if (!radius) {
					throw new Error('arc must have a radius');
				}				
			} else if (startPoint && endPoint) {
				if (!height) {
					throw new Error('arc must have a height');
				}
				
			} else {
				throw new Error('wrong config for arc');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, this.settings.state);
			
			ctx.beginPath();
			ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
			ctx.stroke();
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyArc;
	});
}());
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
				throw 'line must have a begin point';
			}
			if (!end) {
				throw 'line must have an end point';
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
				x = center ? center.x : undefined,
				y = center ? center.y: undefined,
				radius = setting.radius,
				startAngle = setting.startAngle ? setting.startAngle : Math.PI,
				endAngle = setting.endAngle ? setting.endAngle : 0,
				counterClockwise = !!setting.counterClockwise;
			
			var startPoint = setting.startPoint,
				endPoint = setting.endPoint;
			
			if (center) {
				
			} else if (startPoint && endPoint) {
				
			} else {
				throw 'wrong config for ivy arc';
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, this.settings.state);
			
			ctx.beginPath();
			ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
			ctx.lineWidth = 15;
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyArc;
	});
}());



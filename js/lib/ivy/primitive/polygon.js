/*
 * IvyPolygon
 */
(function() {
	define('ivy-polygon', ['ivy-utils'], function(ivyUtil) {
		var IvyPolygon = function(settings) {
			this.settings = settings || {};
		};

		IvyPolygon.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				center = settings.center, 
				radius = settings.radius,
				n = settings.n;
			if (!center) {
				throw new Error('polygon must have a center point');
			}
			if (!radius) {
				throw new Error('polygon must have a radius');
			}
			if (!n || n < 3) {
				throw new Error('polygon must have more than 3 edges');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);
			
			var doublePi = 2 * Math.PI,
				share = doublePi/n,
				startAngle = (Math.PI - share)/2;


			ctx.beginPath();
			for(var i = 0; i< n; i++){
				var radian = startAngle + share*i,
					x = center.x + radius * Math.cos(radian),
					y = center.y + radius * Math.sin(radian);

				if(i == 0){
					ctx.moveTo(x, y);
				} else {
					ctx.lineTo(x, y);
				}
			}
			ctx.closePath();
			ctx.stroke();
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyPolygon;
	});
}());
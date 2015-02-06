/*
 * IvyOval
 */
(function() {
	define('ivy-oval', ['ivy-utils', 'ivy-math'], function(ivyUtil, ivyMath) {
		var IvyOval = function(settings) {
			this.settings = settings || {};
		};

		function drawOvalWithBezier(ctx, x, y, w, h, translateX, translateY, rotate) {
			var kappa = .5522848,
			ox = (w / 2) * kappa, // control point offset horizontal
			oy = (h / 2) * kappa, // control point offset vertical
			xe = x + w,           // x-end
			ye = y + h,           // y-end
			xm = x + w / 2,       // x-middle
			ym = y + h / 2;       // y-middle

			ctx.save();
			if(translateX){
				ctx.translate(translateX, 0);
			}
			if(translateY){
				ctx.translate(0, translateY);
			}
			if(rotate){
				ctx.rotate(rotate);
			}

			ctx.beginPath();
			ctx.moveTo(x, ym);
			ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
			ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
			ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
			ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
			ctx.stroke();

			ctx.restore();
		}

		IvyOval.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				x,
				y,
				w,
				h,
				translateX,
				translateY,
				rotate;

			if(settings.corner && settings.width && settings.height){
				x = settings.corner.x;
				y = settings.corner.y;
				w = settings.width;
				h = settings.height;
			} else if(settings.center && settings.width && settings.height){
				x = settings.center.x - settings.width/2;
				y = settings.center.y - settings.height/2;
				w = settings.width;
				h = settings.height;
			} else if (settings.begin && settings.end && settings.depth) {
				var distance = ivyMath.getDistance(settings.begin, settings.end);
				x = - distance / 2;
				y = -settings.depth;
				w = distance;
				h = 2 * settings.depth;

				var middlePoint = ivyMath.getMiddlePoint(settings.begin, settings.end);
				translateX = middlePoint.x;
				translateY = middlePoint.y;
				rotate = ivyMath.getRadians(settings.begin, settings.end);

			} else {
				throw new Error('wrong parameters for oval');
			}


			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);

			drawOvalWithBezier(ctx, x, y, w, h, translateX, translateY, rotate);

			if(!keepState){
				ctx.restore();
			}
		};

		return IvyOval;
	});
}());
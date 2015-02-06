/*
 * IvyCoordinate
 */
(function() {
	define('ivy-coordinate', ['ivy-utils', 'ivy-math'], function(ivyUtil, ivyMath) {
		var IvyCoordinate = function(settings) {
			this.settings = settings || {};
		};

		IvyCoordinate.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings,
				origin = settings.origin || {
					x: 0,
					y: 0
				},
				step = settings.step || 50,
				divider = settings.divider || 5,
				subStep = step/divider,
				xaxis = settings.xaxis || 500,
				yaxis = settings.yaxis || 500,
				showGrid = settings.showGrid,
				longMark = settings.longMark || 8,
				shortMark = settings.shortMark || 5,
				axisColor = settings.axisColor || 'red',
				longMarkColor = settings.longMarkColor || 'green',
				shortMarkColor = settings.shortMarkColor || 'purple',
				gridLineColor = settings.gridLineColor || '#efefef';
			
			ctx.save();

			ctx.lineWidth = 1;
			ctx.strokeStyle = axisColor;
			
			ctx.beginPath();
			ctx.moveTo(origin.x, origin.y);
			ctx.lineTo(origin.x + xaxis, origin.y);
			ctx.moveTo(origin.x, origin.y);
			ctx.lineTo(origin.x, origin.y + yaxis);
			ctx.stroke();

			for(var stepCount = Math.floor(xaxis/step), i = 1; i<=stepCount; i++){
				ctx.beginPath();
				ctx.strokeStyle = longMarkColor;
				var stepX = origin.x + i * step;
				ctx.moveTo(stepX, origin.y);
				ctx.lineTo(stepX, origin.y + longMark);
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = gridLineColor;
				ctx.moveTo(stepX, origin.y);
				ctx.lineTo(stepX, yaxis);
				ctx.stroke();

				var subStepStart = stepX - step;
				ctx.beginPath();
				ctx.strokeStyle = shortMarkColor;
				for(var j = 1; j<divider; j++) {
					var subStepX = subStepStart + subStep * j;
					ctx.moveTo(subStepX, origin.y);
					ctx.lineTo(subStepX, origin.y + shortMark);
				}
				ctx.stroke();
			}

			for(stepCount = Math.floor(yaxis/step), i = 1; i<=stepCount; i++){
				ctx.beginPath();
				ctx.strokeStyle = longMarkColor;
				var stepY = origin.y + i * step;
				ctx.moveTo(origin.x, stepY);
				ctx.lineTo(origin.x + longMark, stepY);
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = gridLineColor;
				ctx.moveTo(origin.x, stepY);
				ctx.lineTo(origin.x + xaxis, stepY);
				ctx.stroke();

				ctx.beginPath();
				ctx.strokeStyle = shortMarkColor;
				var subStepStart = stepY - step;
				for(var j = 1; j<divider; j++) {
					var subStepY = subStepStart + subStep * j;
					ctx.moveTo(origin.x, subStepY);
					ctx.lineTo(origin.x + shortMark, subStepY);
				}
				ctx.stroke();
			}
			
			ctx.restore();
		};

		return IvyCoordinate;
	});
}());
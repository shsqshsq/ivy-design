/*
 * IvyRect
 */
(function() {
	define('ivy-rect', ['ivy-utils', 'ivy-math'], function(ivyUtil, ivyMath) {
		var IvyRect = function(settings) {
			this.settings = settings || {};
		};

		IvyRect.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				begin = settings.begin, 
				center = settings.center,
				width = settings.width,
				height = settings.height,
				rotate = settings.rotate,
				borderRadius = settings.borderRadius;
			if (!begin && !center) {
				throw new Error('rect must have a begin point or a center point');
			}
			if (!width) {
				throw new Error('rect must have a width');
			}
			if (!height) {
				throw new Error('rect must have a height');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);

			var x = 0,
				y = 0;

			if(rotate){
				ctx.save();
				if(begin){
					ctx.translate(begin.x, begin.y);
					x = 0;
					y = 0;
				} else if (center) {
					ctx.translate(center.x, center.y);
					x = - width/2;
					y = - height/2;
				}
				ctx.rotate(ivyMath.toRadians(rotate));
			} else {
				if(begin){
					x = begin.x;
					y = begin.y;
				} else if (center) {
					x = center.x - width / 2;
					y = center.y - height / 2;
				}
			}

			ctx.beginPath();

			if(borderRadius && borderRadius.length > 0){
				var upLeft = borderRadius[0] || 0,
					upRight = borderRadius[1] || 0,
					bottomRight = borderRadius[2] || 0,
					bottomLeft = borderRadius[3] || 0;
				
				//first line
				if(upLeft > 0){
					ctx.arc(x + upLeft, 
							y + upLeft, 
							upLeft, 
							Math.PI, 
							1.5 * Math.PI);
				} else {
					ctx.moveTo(x, y);
				}
				ctx.lineTo(x + width - upRight, y);

				//second line
				if(upRight > 0){
					ctx.arc(x + width - upRight, 
							y + upRight, 
							upRight, 
							1.5 * Math.PI, 
							0);
				}
				ctx.lineTo(x + width, y + height - bottomRight);


				//third line
				if(bottomRight > 0){
					ctx.arc(x + width - bottomRight, 
							y + height - bottomRight, 
							bottomRight, 
							0, 
							Math.PI * 0.5);
				}
				ctx.lineTo(x + bottomLeft, y + height);

				//final line
				if(bottomLeft > 0){
					ctx.arc(x + bottomLeft, 
							y + height - bottomLeft, 
							bottomLeft, 
							Math.PI * 0.5, 
							Math.PI);
				}
				ctx.lineTo(x , y + upLeft);


			}else {
				ctx.rect(x, y, width, height);
			}

			if(state.fillStyle){
				ctx.fill();
			}
			ctx.stroke();

			if(rotate) {
				ctx.restore();
			}
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyRect;
	});
}());
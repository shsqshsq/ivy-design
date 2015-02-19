/*
 * IvySofa3
 */
 (function() {
 	define('ivy-sofa-3', ['ivy-utils', 'ivy-rect'], function(ivyUtil, ivyRect) {
		var IvySofa3 = function(settings) {
			this.settings = settings || {};
		};

		IvySofa3.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState,
				width = settings.width, 
				height = settings.height,
				center = settings.center;
			if (!width) {
				throw new Error('sofa-3 must have a width');
			}
			if (!height) {
				throw new Error('sofa-3 must have a height');
			}
			if (!center) {
				throw new Error('sofa-3 must have a center point');
			}
			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);
			
			var overlap = 0.03 * width,
				cushionSize = 0.73 * height,
				handRestWidth = 0.1 * width,
				backRestWidth = 3 * cushionSize,
				backRestHeight = 0.3 * height,
				handRestHeight = cushionSize - overlap,
				borderRadiusNumber = 0.025 * width,
				borderRadius = [borderRadiusNumber, borderRadiusNumber, borderRadiusNumber, borderRadiusNumber],
				state = {
					fillStyle: 'white',
					strokeStyle: 'black'
				};

			var middleCushion = new ivyRect({
					center: center,
					width: cushionSize,
					height: cushionSize,
					borderRadius: borderRadius,
					state: state
				}),
				leftCushion = new ivyRect({
					center: {
						x : center.x - cushionSize,
						y: center.y
					},
					width: cushionSize,
					height: cushionSize,
					borderRadius: borderRadius,
					state: state
				}),
				rightCushion = new ivyRect({
					center: {
						x : center.x + cushionSize,
						y: center.y
					},
					width: cushionSize,
					height: cushionSize,
					borderRadius: borderRadius,
					state: state
				}),
				leftHandRest = new ivyRect({
					center: {
						x : center.x - (cushionSize * 1.5),
						y: center.y - overlap
					},
					width: handRestWidth,
					height: handRestHeight,
					borderRadius: borderRadius,
					state: state
				}),
				rightHandRest = new ivyRect({
					center: {
						x : center.x + (cushionSize * 1.5),
						y: center.y - overlap
					},
					width: handRestWidth,
					height: handRestHeight,
					borderRadius: borderRadius,
					state: state
				})
				backRest = new ivyRect({
					center: {
						x : center.x,
						y: center.y - height/2 + backRestHeight/2
					},
					width: backRestWidth,
					height: backRestHeight,
					borderRadius: borderRadius,
					state: state
				});


			middleCushion.draw(ctx);
			leftCushion.draw(ctx);
			rightCushion.draw(ctx);
			leftHandRest.draw(ctx);
			rightHandRest.draw(ctx);
			backRest.draw(ctx);

			if(!keepState){
				ctx.restore();
			}
		};

		return IvySofa3;
	});	
 }());
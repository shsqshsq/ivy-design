/*
 * IvyOval
 */
(function() {
	define('ivy-oval', ['ivy-utils'], function(ivyUtil) {
		var IvyOval = function(settings) {
			this.settings = settings || {};
		};

		IvyOval.prototype.draw = function(ctx) {
			if (!ctx) {
				return;
			}
			var settings = this.settings, 
				state = settings.state,
				keepState = settings.keepState;

			
			if(!keepState){
				ctx.save();
			}
			ivyUtil.setDrawingState(ctx, state);
						
			ctx.stroke();
			
			if(!keepState){
				ctx.restore();
			}
		};

		return IvyOval;
	});
}());
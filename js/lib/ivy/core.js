(function(window) {

	define('ivy', function() {

		var IvyContext = function(canvasId) {
			var canvas = document.getElementById(canvasId);
			if (canvas && canvas.getContext) {
				this.ctx = canvas.getContext('2d');
				this.objList = [];
			}
		};

		IvyContext.prototype.append = function(obj) {
			this.objList.push(obj);
		};

		IvyContext.prototype.draw = function() {
			if (this.objList.length === 0) {
				return;
			}
			for ( var i = 0, len = this.objList.length; i < len; i++) {
				var obj = this.objList[i];
				if (obj.draw) {
					obj.draw(this.ctx);
				}
			}
		};

		return IvyContext;
	});
	

	define('ivy-utils', function() {
		return {
			setDrawingState : function(ctx, state) {
				var drawingState = state || {};
				for ( var key in drawingState) {
					if (drawingState.hasOwnProperty(key)) {
						ctx[key] = drawingState[key];
					}
				}
			}
		};
	});

}(window));
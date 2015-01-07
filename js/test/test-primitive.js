(function(){
	require(['ivy', 'ivy-line'], function(Ivy, IvyLine){
		var ivyCtx = new Ivy('ivy-canvas');
		var ivyLine = new IvyLine({
			begin: {
				x: 10,
				y: 10
			},
			end: {
				x: 20,
				y: 200
			}
		});
		
		ivyCtx.append(ivyLine);
		
		ivyCtx.draw();
	});
}());
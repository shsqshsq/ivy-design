(function(){
	require(['ivy', 'ivy-line'], function(Ivy, IvyLine){
		var ivyCtx = new Ivy('ivy-canvas');
		var ivyLine1 = new IvyLine({
			begin: {
				x: 10,
				y: 10
			},
			end: {
				x: 20,
				y: 200
			},
			state: {
				strokeStyle: 'blue',
				lineWidth: '20'
			}
		});
		
		ivyCtx.append(ivyLine1);
		
		var ivyLine2 = new IvyLine({
			begin: {
				x: 40,
				y: 70
			},
			end: {
				x: 20,
				y: 200
			},
			state: {
				strokeStyle: 'red'
			}
		});
		
		ivyCtx.append(ivyLine2);
		
		var ivyLine3 = new IvyLine({
			begin: {
				x: 90,
				y: 20
			},
			end: {
				x: 20,
				y: 200
			}
		});
		
		ivyCtx.append(ivyLine3);
		
		ivyCtx.draw();
	});
}());
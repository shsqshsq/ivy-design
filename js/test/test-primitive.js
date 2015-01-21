(function(){
	require(['ivy', 'ivy-line', 'ivy-arc', 'ivy-bezier', 'ivy-quadratic'], function(Ivy, IvyLine, IvyArc, IvyBezier, IvyQuadratic){
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
			},
			keepState: true
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
		
		var ivyArcStandard = new IvyArc({
			center: {
				x: 100,
				y: 80
			},
			radius: 20,
			startAngle: 1,
			endAngle: 2
		});
		ivyCtx.append(ivyArcStandard);
		
		var ivyBezier = new IvyBezier({
			begin: {
				x: 100,
				y: 80
			},
			end: {
				x: 180,
				y: 80
			},
			control1: {
				x: 110,
				y: 90
			},
			control2: {
				x: 160,
				y: 200
			}
		});
		ivyCtx.append(ivyBezier);
		
		var ivyQuadratic = new IvyQuadratic({
			begin: {
				x: 100,
				y: 80
			},
			end: {
				x: 180,
				y: 80
			},
			control: {
				x: 110,
				y: 90
			}
		});
		ivyCtx.append(ivyQuadratic);
		
		ivyCtx.draw();
	});
}());
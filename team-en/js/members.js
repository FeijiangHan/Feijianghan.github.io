(function (argument) {
	var table = [
				"images/1.jpg",
				"Jianheng Tang",
				"Changsha",
				"Senior",
				"CSU",
				"Male",
				"CS",
				"Passionate learner, obtained early admission to a direct Ph.D. program at Peking University, consistently ranked first in the Big Data major, received National Scholarship and Guangyun Technology Scholarship, recognized as an outstanding student and party member, selected as one of the top ten outstanding individuals in the CS School, Director of the Zhongnan Yulu Valley Information Technology Center.",
				"images/2.jpg",
				"Feijiang Han",
				"Changsha",
				"Senior",
				"CSU",
				"Male",
				"CS",
				"Key team member, achieved excellent results, received Xindi Technology Scholarship and annual first-class scholarship, ranked 5th out of 257 students in junior year, outstanding English proficiency, participated in various academic competitions and won national, provincial, and university-level awards, involved in innovative practices and developed a novel code performance analysis tool.",
				"images/3.jpg",
				"Kejia Fan",
				"Changsha",
				"Senior",
				"CSU",
				"Male",
				"CS",
				"Key team member, serious and diligent attitude towards studies, received National Scholarship and annual first-class scholarship, actively participates in academic competitions and won several national, provincial, and university-level awards, conducting research at Central South University, published international journal papers, applied for a software copyright and a patent.",
				"images/4.jpg",
				"Wenxuan Xie",
				"Changsha",
				"Senior",
				"CSU",
				"Male",
				"CS",
				"Key team member, demanded excellence in studies, received National Scholarship and annual first-class scholarship, attending summer camp at Tsinghua University, actively participated in academic competitions and won national, provincial, and university-level awards, published international journal papers, applied for a software copyright and a patent.",
				"images/5.jpg",
				"Anfeng Liu",
				"Changsha",
				"Professor",
				"CSU",
				"Male",
				"CS",
				"As the guiding professor of our team, he has led and participated in numerous research projects, including funding from the National Natural Science Foundation and the National 973 Program. He has published multiple SCI papers in renowned international journals and conferences, focusing on areas such as cloud computing, edge computing, big data, wireless sensor networks, and service-oriented computing. Additionally, he has received three provincial and ministerial-level awards for scientific and technological achievements and has made contributions as an editor for textbooks and international journals.",				
			];


			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			document.addEventListener( 'mousemove', onDocumentMouseMove, false );
			document.addEventListener( 'touchmove', onDocumentTouchMove, false );
			document.addEventListener( 'touchstart', onDocumentTouchMove, false );
			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY );

			}
			function onDocumentTouchMove( event ) {

				if ( event.touches.length == 1 ) {

                    event.preventDefault();

                    mouseX = ( event.clientX - windowHalfX );
					mouseY = ( event.clientY - windowHalfY );

                }

			}
			function onDocumentTouchStart( event ) {

                if ( event.touches.length > 1 ) {

                    event.preventDefault();

                   	mouseX = ( event.clientX - windowHalfX );
					mouseY = ( event.clientY - windowHalfY );

                }

            }
			var camera, scene, renderer;
			var controls;
			var elstyle={width:600,height:800,left:0,display:"none",opacity:0};
			var objects = [];
			var targets = [];

			init();
			animate();

			function init() {

				camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 3000;

				scene = new THREE.Scene();

				// table

				for ( var i = 0; i < table.length; i += 8 ) {

					var element = document.createElement( 'div' );
					element.className = 'element';
					element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
					
					var img = document.createElement( 'img' );
					img.className = 'img';
					img.src = table[i];
					element.appendChild( img );

					var name = document.createElement( 'div' );
					name.className = 'name';
					name.textContent = table[ i + 1];
					element.appendChild( name );

					var details = document.createElement( 'div' );
					details.className = 'details';
					details.innerHTML = table[ i + 2 ] + '<br>' + table[ i + 3 ];
					element.appendChild( details );

					// var img1 = document.createElement( 'img' );
					// img1.className = 'img';
					// img1.src = table[i];
					// img1.style.display="none";
					// element.appendChild( img1 );

					var details1= document.createElement( 'div' );
					details1.className = 'details1';
					details1.innerHTML = 'Name: ' + table[i + 1] + '<br>' +
					'Gender: ' + table[i + 5] + '<br>' +
					'Major: ' + table[i + 6] + '<br>' +
					'Education Level: ' + table[i + 3] + '<br>' +
					'Location: ' + table[i + 2] + '<br>' +
					'School: ' + table[i + 4];
					details1.style.display = "none";
					element.appendChild(details1);

					var details2 = document.createElement('div');
					details2.className = 'details2';
					details2.innerHTML = 'Bio: ' + table[i + 7];
					details2.style.display = "none";
					element.appendChild(details2);

					var object = new THREE.CSS3DObject( element );
					object.position.x = Math.random() * 4000 - 2000;
					object.position.y = Math.random() * 4000 - 2000;
					object.position.z = Math.random() * 4000 - 2000;
					scene.add( object );

					objects.push( object );

					//
					
					var object = new THREE.Object3D();
					object.position.x = i * 100 -1600;
					object.position.y = 0;

					targets.push( object );

					


				}
				

				//

				renderer = new THREE.CSS3DRenderer();
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.domElement.style.position = 'absolute';
				document.getElementById( 'container' ).appendChild( renderer.domElement );

				//

				// controls = new THREE.TrackballControls( camera, renderer.domElement );
				// controls.rotateSpeed = 1;
				// controls.minDistance = 500;
				// controls.maxDistance = 6000;
				// controls.addEventListener( 'change', render );

				

				transform( targets, 2000 );
				// rotate(targets);
				//

				window.addEventListener( 'resize', onWindowResize, false );

			}
			 // document.addEventListener( 'mousemove', onDocumentMouseMove, false );
				var oDiv=document.getElementById('container');
				var domnodes=oDiv.firstChild.firstChild.childNodes;
				var active=[];
				var up=0;
				var down=0;
				for (var i = 0; i < domnodes.length; i++) {
					active[i]=0;
					(function (a) {

						domnodes[a].addEventListener('touchstart',mousedownf);
						domnodes[a].addEventListener('touchend',function (argument) {
							if(up==0)
							{
								mouseupf();
							}
						});

						domnodes[a].addEventListener('mousedown',mousedownf);
						domnodes[a].addEventListener('mouseup',function (argument) {
							if(up==0)
							{
								mouseupf();
							}
						});

						function mousedownf(argument) {
							
							if (down==0) {
								
								down =1;
								 
							var res=0;
							var tween=new TWEEN.Tween( objects[a].position )
								.to( { z: -100},100)
								.easing( TWEEN.Easing.Exponential.InOut );
							for (var j = 0; j < active.length; j++) {
									// alert(j);
									if (active[j]==1) {
										res=1;
									}
								}
								if (res==0) {
									tween.start();
								}
								
								setTimeout(function () { down = 0;},2500);
								}						
							}
						
						function mouseupf(argument) {

							
									
								up=1;
								
								var bin=0;
								var res=0;
								for (var j = 0; j < active.length; j++) {
									// alert(j);
									if (active[j]==1) {
										
										var tweenback2=new TWEEN.Tween( objects[j].rotation )
										.to( { x:0},1000)
										.easing( TWEEN.Easing.Elastic.InOut );

										var tweenback=new TWEEN.Tween( objects[j].position )
										.to( { x:-1600+j*800,y:0,z:0}, 1000 )
										.easing( TWEEN.Easing.Elastic.InOut );
										var tweenback3;
									(function (b) {
											res=1;
											active[j]=0;
											function backupdate2() {
												domnodes[b].getElementsByTagName('img')[0].style.left=elstyle.left+'px';
												domnodes[b].getElementsByTagName('div')[0].style.display='block';
												domnodes[b].getElementsByTagName('div')[1].style.display='block';

											}
											function backupdate3() {
												// alert(domnodes[a].getElementsByTagName('div')[2].style.display);
												domnodes[b].getElementsByTagName('div')[2].style.display='none';
												domnodes[b].getElementsByTagName('div')[2].style.opacity=elstyle.opacity;
												domnodes[b].getElementsByTagName('div')[3].style.display='none';
												domnodes[b].getElementsByTagName('div')[3].style.opacity=elstyle.opacity;

											}
											function update2() {

											domnodes[b].style.width = elstyle.width + 'px';
											domnodes[b].style.height = elstyle.height + 'px';
											}
											tweenback6=new TWEEN.Tween( elstyle )
											.to( { width:610,height:800}, 1000 ) // 展示板高度
											.easing( TWEEN.Easing.Elastic.InOut )
											.onUpdate(update2);
											
											// tweenback3.chain(tweenback);
										// tweenback3.chain(tween);

										var tweenback4=new TWEEN.Tween( elstyle )
										.to( { left:0}, 300 )
										.easing( TWEEN.Easing.Exponential.InOut )
										.onUpdate(backupdate2);
										

										var tweenback5=new TWEEN.Tween( elstyle )
										.to( { display:'block'}, 500 )
										.easing( TWEEN.Easing.Exponential.InOut )
										.onUpdate(backupdate2);
										

										var tweenback3=new TWEEN.Tween( elstyle )
										.to( { opacity:0}, 500 )
										.easing( TWEEN.Easing.Exponential.InOut )
										.onUpdate(backupdate3);
										// tweenback5.chain(tweenback6);
										tweenback4.chain(tweenback5);
										tweenback3.chain(tweenback4);
										tweenback6.chain(tweenback2);
										tweenback3.start();
										tweenback.delay(1500);
										tweenback.start();
										tweenback6.delay(500);
										tweenback6.start();
										


									})(j)
										
									}
								}

								var tween1=new TWEEN.Tween( objects[a].position )
								.to( { z: 0},100)
								.easing( TWEEN.Easing.Exponential.InOut )
								;
								
								var tween2=new TWEEN.Tween(objects[a].rotation )
								.to({x:6.3},2000)
								.easing( TWEEN.Easing.Exponential.InOut );
								
								tween1.chain(tween2);

								var tween3=new TWEEN.Tween( objects[a].position )
								.to( { x:0,y:0,z:1000}, 1000 )
								.easing( TWEEN.Easing.Exponential.InOut );

								

								var tween4=new TWEEN.Tween( elstyle )
								.to( { width:1600,height:1200}, 1000 )
								.easing( TWEEN.Easing.Elastic.InOut )
								.onUpdate(update4);

								tween3.chain(tween4);

								var tween5=new TWEEN.Tween( elstyle )
								.to( { left:-500}, 500 )
								.easing( TWEEN.Easing.Exponential.InOut )
								.onUpdate(update2);
								tween4.chain(tween5);

								var tween6=new TWEEN.Tween( elstyle )
								.to( { display:'none'}, 10 )
								.easing( TWEEN.Easing.Exponential.InOut )
								.onUpdate(update2);
								tween5.chain(tween6);

								var tween7=new TWEEN.Tween( elstyle )
								.to( { opacity:1.0}, 200 )
								.easing( TWEEN.Easing.Exponential.InOut )
								.onUpdate(update3);
								tween6.chain(tween7);
								
								function update4() {

									domnodes[a].style.width = elstyle.width + 'px';
									domnodes[a].style.height = elstyle.height + 'px';


								}
								function update2() {
									domnodes[a].getElementsByTagName('img')[0].style.left=elstyle.left+'px';
									domnodes[a].getElementsByTagName('div')[0].style.display='none';
									domnodes[a].getElementsByTagName('div')[1].style.display='none';

								}
								function update3() {
									// alert(domnodes[a].getElementsByTagName('div')[2].style.display);
									domnodes[a].getElementsByTagName('div')[2].style.display='block';
									domnodes[a].getElementsByTagName('div')[2].style.opacity=elstyle.opacity;
									domnodes[a].getElementsByTagName('div')[3].style.display='block';
									domnodes[a].getElementsByTagName('div')[3].style.opacity=elstyle.opacity;

								}
								if (res==0) {
									active[a]=1;
									tween1.start();
									// domnodes[a].getElementsByTagName('img')[0].style.display='none';
									// domnodes[a].getElementsByTagName('img')[1].style.display='inline';
									tween3.start();
									
									bin=1;
								} 
								
								setTimeout(function () { up = 0 },2500);
								 
								
							}
							
						

					})(i)
			}
			

			function transform( targets, duration ) {

				TWEEN.removeAll();

				for ( var i = 0; i < objects.length; i ++ ) {
					// alert(objects[i]);
					var object = objects[ i ];
					var target = targets[ i ];

					new TWEEN.Tween( object.position )
						.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

					new TWEEN.Tween( object.rotation )
						.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
						.easing( TWEEN.Easing.Exponential.InOut )
						.start();

				}

				new TWEEN.Tween( this )
					.to( {}, duration * 2 )
					.onUpdate( render )
					.start();

			}

			function onWindowResize() {

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

				

			}

			function animate() {

				requestAnimationFrame( animate );

				TWEEN.update();
				render();
				// stats.update();

				// controls.update();

			}

			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.05;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.05;

				camera.lookAt( scene.position );

			


				renderer.render( scene, camera );

			}

})()

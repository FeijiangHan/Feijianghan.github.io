function onWindowResize() {
    window.glb.camera.aspect = window.innerWidth / window.innerHeight;
    window.glb.camera2.aspect = window.innerWidth / window.innerHeight;
    window.glb.camera.updateProjectionMatrix();
    window.glb.camera2.updateProjectionMatrix();
    window.glb.renderer.setSize(window.innerWidth, window.innerHeight);
}

function init() {
    window.glb.container = document.getElementById('container_3js');

    // 透视相机  Fov, Aspect, Near, Far – 相机视锥体的远平面
    window.glb.camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.001, 10000);
    window.glb.camera2 = new THREE.OrthographicCamera(window.innerWidth / -2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / -2, -1000, 1000);

    window.glb.scene = new THREE.Scene();

    const grid = new THREE.GridHelper(500, 500, 0xffffff, 0x555555);
    grid.position.y = 0;
    grid.visible = false

    window.glb.scene.add(grid);
    window.glb.scene.background = new THREE.Color("#202020");
    window.glb.light = new THREE.PointLight(0xffffff, 1);
    window.glb.light2 = new THREE.DirectionalLight(0xffffff, 1);
    window.glb.scene.add(window.glb.camera);
    window.glb.scene.add(window.glb.camera2);
    window.glb.camera.add(window.glb.light);
    window.glb.camera2.add(window.glb.light2);
    window.glb.camera2.remove(window.glb.light2)

    window.glb.renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    window.glb.renderer.setPixelRatio(window.devicePixelRatio);
    window.glb.renderer.setSize(window.innerWidth, window.innerHeight);
    window.glb.container.appendChild(window.glb.renderer.domElement);
    window.glb.stats = new window.glb.import_Stats();
    window.glb.container.appendChild(window.glb.stats.dom);

    window.glb.controls = new window.glb.import_OrbitControls(window.glb.camera, window.glb.renderer.domElement);
    window.glb.controls2 = new window.glb.import_OrbitControls(window.glb.camera2, window.glb.renderer.domElement);
    window.glb.controls.target.set(0, 0, 0); // 旋转的焦点在哪0,0,0即原点
    window.glb.controls2.target.set(0, 0, 0); // 旋转的焦点在哪0,0,0即原点
    window.glb.camera.position.set(0, 0, 10)
    window.glb.camera2.position.set(0, 0, 10)
    window.glb.controls.update();
    window.glb.controls2.update();
    window.glb.controls.autoRotate = true;
    window.glb.controls.autoRotateSpeed = 5;
    window.glb.controls2.autoRotate = false;
    window.glb.controls.enabled = true;
    window.glb.controls2.enabled = false;

    window.glb.controls.listenToKeyEvents(window);
    window.glb.controls.enableDamping = true;

    window.addEventListener('resize', onWindowResize);

    const loader = new window.glb.import_FontLoader();
    loader.load('examples/fonts/helvetiker_regular.typeface.json', function(font) {
        window.glb.font = font;
        parse_style('>>set_style(\'creative\', selection=\'creative_v1\')');
        parse_style('>>set_style(\'background\', color=\'black\')');
        parse_init(">>advanced_geometry_rotate_scale_translate('box','TorusKnotGeometry(10,3,100,16)',0,0,0,0.005,0.005,0.005,0,0,0)");
        parse_core_obj(">>v2dx('box|0|red|1.0',-5,0,1,0,0,0,label=\'Fei\',label_color=\'white\'),label_offset=[0,0,2]");
        parse_core_obj(">>v2dx('box|1|red|1.0',0,3,0,0,0,0,label=\'Jiang\',label_color=\'white\'),label_offset=[0,0,2]");
        parse_core_obj(">>v2dx('box|2|red|1.0',5,6,-1,0,0,0,label=\'Han\',label_color=\'white\'),label_offset=[0,0,2]");
        window.glb.controls.target.set(0, 0, 0); // 旋转的焦点在哪0,0,0即原点
        window.glb.controls2.target.set(0, 0, 0); // 旋转的焦点在哪0,0,0即原点
        window.glb.camera.position.set(0, 0, 10)
        window.glb.camera2.position.set(0, 0, 10)
        window.glb.controls.update();
        window.glb.controls2.update();
        window.glb.controls.autoRotate = true;
        window.glb.controls.autoRotateSpeed = 1;
        window.glb.controls2.autoRotate = false;
        window.glb.controls.enabled = true;
        window.glb.controls2.enabled = false;
    })


}
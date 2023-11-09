<template>
  <div id="view3d" class="container">
    <div class="movep">
      <span>经度：{{ movep.value.lon }}°</span>
      <span>纬度：{{ movep.value.lat }}°</span>
      <span>视角高度：{{ movep.value.alt }}米</span>
    </div>
  </div>
</template>
<script setup name="GisViewer">
import world from "@/assets/images/world.jpg";
import { ref, reactive, onMounted, onBeforeUnmount } from "vue";

let helper = ref(null);
const movep = reactive({
  // 默认为北京
  value: {
    lon: 116.395176,
    lat: 39.9045192,
    alt: 20000000,
  },
});
const emit = defineEmits(["loadcomplete"]);

// require("")
onMounted(() => {
  window.viewer = init3d();
  // viewer.extend(viewerCesiumInspectorMixin);
  viewer._cesiumWidget._creditContainer.style.display = "none";

  viewer.clock.shouldAnimate = true;
  viewer.scene.globe.enableLighting = true;
  viewer.scene.highDynamicRange = true;
  viewer.scene.maximumRenderTimeChange = 1 / 30;
  viewer.scene.requestRenderMode = false;
  viewer.scene.debugShowFramesPerSecond = false;
  viewer._cesiumWidget._creditContainer.style.display = "none";

  viewer.scene.light = new Cesium.DirectionalLight({
    //去除时间原因影响模型颜色
    direction: new Cesium.Cartesian3(
      0.35492591601301104,
      -0.8909182691839401,
      -0.2833588392420772
    ),
  });
  // viewer.extend(Cesium.viewerCesiumInspectorMixin);
  viewOptimize();
  viewer.scene.skyAtmosphere.show = true;
  // viewer.scene.screenSpaceCameraController.enableCollisionDetection = false;
  addTDTLayer();
  // 定位到中国版图
  setView(108, 34, 20000000);
  timeFormat();

  helper = new Cesium.EventHelper();
  helper.add(viewer.scene.globe.tileLoadProgressEvent, function (e) {
    // console.log('每次加载地图服务矢量切片都会进入这个回调',e);
    if (e == 0) {
      console.log("矢量切片加载完成时的回调");
      emit("loadcomplete");
    }
  });
});

onBeforeUnmount(() => {
  //   if (viewer) {
  //     let gl = viewer.scene.context._originalGLContext;
  //     viewer.destroy();
  //     viewer = null;
  //     gl.getExtension("WEBGL_lose_context").loseContext();
  //     gl = null;
  //   }
  //   console.log("3d地图销毁");
});

/**
 * 视图优化
 */
function viewOptimize() {
  // 设置相机最小值，放大后不会出现模型与波束分离
  // 300000
  viewer.scene.screenSpaceCameraController.minimumZoomDistance = 1500; // 相机的高度的最小值
  viewer.scene.screenSpaceCameraController.maximumZoomDistance = 300000000; // 相机高度的最大值
  viewer.scene.screenSpaceCameraController._minimumZoomRate = 30000; // 设置相机缩小时的速率
  viewer.scene.screenSpaceCameraController._maximumZoomRate = 590637627200; // 设置相机放大时的速率
  viewer.scene.screenSpaceCameraController.enableTilt = false;
  // 更改天空盒模型
  let groundSkybox = new Cesium.SkyBox({
    sources: {
      positiveX: "/Cesium/Assets/Textures/SkyBoxCustom/starmap_2020_16k_px.jpg",
      negativeX: "/Cesium/Assets/Textures/SkyBoxCustom/starmap_2020_16k_mx.jpg",
      positiveY: "/Cesium/Assets/Textures/SkyBoxCustom/starmap_2020_16k_py.jpg",
      negativeY: "/Cesium/Assets/Textures/SkyBoxCustom/starmap_2020_16k_my.jpg",
      positiveZ: "/Cesium/Assets/Textures/SkyBoxCustom/starmap_2020_16k_pz.jpg",
      negativeZ: "/Cesium/Assets/Textures/SkyBoxCustom/starmap_2020_16k_mz.jpg",
    },
  });
  viewer.scene.skyBox = groundSkybox;
  // 是否支持图像渲染像素化处理
  if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
    viewer.resolutionScale = window.devicePixelRatio;
  }
  // 开启抗锯齿
  viewer.scene.fxaa = false;
  viewer.scene.postProcessStages.fxaa.enabled = true;
  if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
    // 判断是否支持图像渲染像素化处理
    viewer.resolutionScale = window.devicePixelRatio;
  }

  viewer.scene.highDynamicRange = false;
  viewer._cesiumWidget._supportsImageRenderingPixelated =
    Cesium.FeatureDetection.supportsImageRenderingPixelated();
  viewer._cesiumWidget._forceResize = true;

  // 调整分辨率
  if (Cesium.FeatureDetection.supportsImageRenderingPixelated()) {
    var vtxf_dpr = window.devicePixelRatio;
    // 适度降低分辨率
    while (vtxf_dpr >= 2.0) {
      vtxf_dpr /= 2.0;
    }
    //alert(dpr);
    viewer.resolutionScale = vtxf_dpr;
  }

  // 获取要改变的的图层
  let layer1 = viewer.scene.imageryLayers.get(0);
  layer1.gamma = 0.66;

  // 改变当前地图的组织结构
  layer1.minificationFilter = Cesium.TextureMinificationFilter.NEAREST;
  layer1.magnificationFilter = Cesium.TextureMagnificationFilter.NEAREST;

  // viewer.scene.globe.lightingBrightness = 10.0;
}
/**
 * 初始化 Cesium 3D
 */
function init3d() {
  return new Cesium.Viewer("view3d", {
    shouldAnimate: true, // 动画
    animation: true, //是否显示左下角的仪表盘
    baseLayerPicker: false, //是否显示图层选择器按钮，右上角那个地图图标
    fullscreenButton: true, //是否显示全屏按钮
    vrButton: false, //是否显示VR按钮
    geocoder: false, //是否显示搜索按钮
    homeButton: false, //是否显示主页按钮
    infoBox: false, //是否显示提示信息
    sceneModePicker: false, //是否显示右上角的模式切换按钮
    selectionIndicator: true, //是否显示选取指示器组件
    timeline: true, //是否显示下边的时间轴
    navigationHelpButton: false, //是否显示右上角的帮助按钮
    navigationInstructionsInitiallyVisible: true, //是不显示导航
    //scene3DOnly: true, //是否指定仅为三维模式，全部使用三维模式可节约GPU资源
    fullscreenElement: "view3d", // 全屏元素
    sceneMode: Cesium.SceneMode.SCENE3D,
    shadows: true,
    imageryProvider: new Cesium.SingleTileImageryProvider({
      url: world,
      rectangle: Cesium.Rectangle.fromDegrees(-180, -90, 180, 90),
    }),
    // skyAtmosphere: true,
    navigationHelpButtonViewModel: true,
    orderIndependentTranslucency: false,
    contextOptions: {
      // threejs WebGLRenderer参数配置，基于webgl
      // https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene
      webgl: {
        alpha: true, // 画布是否包含alpha（透明度）缓冲区。默认值为false。
        // depth: true, // 绘图缓冲区是否具有至少16位的 深度缓冲区。默认为true。
        // stencil: true, // 绘图缓存是否有一个至少8位的模板缓存， 默认值true
        antialias: true, // 是否执行抗锯齿。默认值为false。
        // premultipliedAlpha: true, // 渲染器是否会假设颜色具有 预乘alpha。默认为true。
        preserveDrawingBuffer: true, // 是否保留缓冲区直到手动清除或覆盖。默认值为false。
        failIfMajorPerformanceCaveat: true, // 表明在一个系统性能低的环境是否创建该上下文的boolean值, 默认false
      },
    },
  });
}

function setView(lng, lat, height) {
  viewer.camera.flyTo({
    // fromDegrees()方法，将经纬度和高程转换为世界坐标
    destination: Cesium.Cartesian3.fromDegrees(lng, lat, height),
    // destination: Cesium.Cartesian3.fromDegrees(lng, lat, 20000000),
    orientation: {
      heading: Cesium.Math.toRadians(0),
      pitch: Cesium.Math.toRadians(-90),
      roll: Cesium.Math.toRadians(0),
    },
    duration: 3,
  });
  console.log("Cesium.VERSION: ", Cesium.VERSION);
}

function timeFormat() {
  let julianDT = new Cesium.JulianDate();

  //cesium时钟时间格式化
  function CesiumTimeFormatter(datetime) {
    Cesium.JulianDate.addHours(datetime, 8, julianDT);
    let gregorianDT = Cesium.JulianDate.toGregorianDate(julianDT);

    let hour = gregorianDT.hour + "";
    let minute = gregorianDT.minute + "";
    let second = gregorianDT.second + "";
    return `${hour.padStart(2, "0")}:${minute.padStart(
      2,
      "0"
    )}:${second.padStart(2, "0")}`;
  }

  //cesium时钟日期格式化
  function CesiumDateFormatter(datetime) {
    Cesium.JulianDate.addHours(datetime, 8, julianDT);
    let gregorianDT = Cesium.JulianDate.toGregorianDate(julianDT);

    return `${gregorianDT.year}年${gregorianDT.month}月${gregorianDT.day}日`;
  }

  // viewer.timeline.scrubColor = 'rgb(255, 0, 0)';
  viewer.animation.viewModel.dateFormatter = CesiumDateFormatter;
  viewer.animation.viewModel.timeFormatter = CesiumTimeFormatter;
}

// function startRun(option = { multiplier: 1 }) {
//   // 获取将在场景渲染后立即触发
//   // viewer.scene.postUpdate.addEventListener(rotateSetting);
//   if (viewer.clock) {
//     const keys = Object.keys(option);
//     for (let k of keys) {
//       viewer.clock[k] = option[k];
//     }
//   }
// }
// function rotateSetting() {
//   if (!viewer || viewer.scene.mode !== Cesium.SceneMode.SCENE3D) {
//     return;
//   }
//   const icrfToFixed = Cesium.Transforms.computeIcrfToFixedMatrix(
//     viewer.clock.currentTime
//   );
//   if (Cesium.defined(icrfToFixed)) {
//     const camera = viewer.camera;
//     const offset = Cesium.Cartesian3.clone(camera.position);
//     const transform = Cesium.Matrix4.fromRotationTranslation(icrfToFixed);
//     camera.lookAtTransform(transform, offset);
//   }
// }
function addTDTLayer() {
  // 天地图个人应用key，调用配额限制一天10000次
  const tdt_tk = "02ed99e199228a5d47960a0324894605"; //一天只能请求一万次啊
  // 服务域名
  const tdt_url = "https://t{s}.tianditu.gov.cn/";
  // 服务负载子域
  const subdomains = ["0", "1", "2", "3", "4", "5", "6", "7"];
  // EPSG:3857 地图切片
  let TDTImgProvider = new Cesium.WebMapTileServiceImageryProvider({
    // 参数键值对方式访问WMTS服务器，以下参数会自动组成键值对后与 GetTile 一起发送至WMTS服务器

    // 注意：_w 使用球面墨卡托，_c 无效
    // 旧后缀 tianditu.com，不支持 https。新后缀 tianditu.gov.cn，兼容 http 和 https
    url:
      tdt_url +
      "img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default&format=tiles&tk=" +
      tdt_tk,
    layer: "天地图影像",
    style: "default",
    format: "image/jpeg",
    subdomains: subdomains, // s占位符的子域，代表s的值
    tileMatrixSetID: "GoogleMapsCompatible", // 用于WMTS请求的TileMatrixSet的标识符
    // 设置最大最小层级，避免显示 此级别下该区域无影像
    minimumLevel: 2, // 最小层级
    maximumLevel: 18, // 最大层级
  });

  let TDTZJProvider = new Cesium.WebMapTileServiceImageryProvider({
    url:
      tdt_url +
      "cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={TileMatrix}&TileRow={TileRow}&TileCol={TileCol}&style=default.jpg&tk=" +
      tdt_tk,
    layer: "天地图中文注记",
    style: "default",
    format: "image/jpeg",
    subdomains: subdomains,
    tileMatrixSetID: "GoogleMapsCompatible",
    // 设置最大最小层级，避免显示 此级别下该区域无影像
    minimumLevel: 2, // 最小层级
    maximumLevel: 18, // 最大层级
  });

  // 叠加国界服务
  let iboMap = new Cesium.UrlTemplateImageryProvider({
    url: tdt_url + "DataServer?T=ibo_w&x={x}&y={y}&l={z}&tk=" + tdt_tk,
    subdomains: subdomains,
    tilingScheme: new Cesium.WebMercatorTilingScheme(),
    maximumLevel: 10,
  });

  viewer.imageryLayers.addImageryProvider(iboMap); // 加载边界
  viewer.imageryLayers.addImageryProvider(TDTImgProvider); // 加载影像
  viewer.imageryLayers.addImageryProvider(TDTZJProvider); // 加载中文标注
}
</script>

<style lang="scss" scoped>
.btn {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 20px;
  left: calc((100% - 416px) / 2);
  height: 20px;
  padding: 5px;
  line-height: 20px;
  border-radius: 15px;
  background: rgba(255, 255, 255, 0.71);
}

.btn div {
  padding: 0 5px;
  cursor: pointer;
}

.container {
  height: 100%;
  width: 100%;
  .movep {
    position: absolute;
    right: 0;
    bottom: 30px;
    z-index: 991;
    padding: 3px 10px;
    font-size: 13px;
    color: #e9e9e9;
    // background-color: rgba(0, 0, 0, 0.4);
    min-height: 26px;
    pointer-events: none;
    font-family: "Helvetica Neue", Helvetica, Tahoma, Arial, "Microsoft Yahei",
      "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
    span {
      height: 20px;
      display: inline-block;
    }
    span + span {
      padding-left: 10px;
    }
  }
}
</style>

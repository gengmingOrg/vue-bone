<template>
  <div
    :id='id'
    style="{ width: '100%',overflow: 'hidden',height:'100%'}"
  >
    <DefualtArcgisMap
      ref="map"
      @okLoad="loadMap"
    />
  </div>
</template>
<script>
import axios from "axios";
import map from "@emergency/common-map"
export default {
  name: 'windowMap',
  inject: ["context"],
  props: {
    id: {
      type: String,
      default: 'window_map',
    }
  },
  components: {
    DefualtArcgisMap: map.mapView
  },
  data () {
    return {
      arcgisRefreshToken: "http://portal.nxgxk.com/arcgis/sharing/rest/oauth2/token?client_id=EI6cJ8XQeRZEsaHj&grant_type=refresh_token&redirect_uri=http://172.31.109.95/DATACENTERPro/&refresh_token=RqyckWWEjr73QVxBzF9zUatvB0lXG-kbNn65KZBnt2N7aMqn5lvo-p4cx8RZ6_rvwoEGTerCwPCiDvsz12Q5FwUEEqfBuEN2352xkuvF3p1u-t81pcZBNvaemlnJjJncVWnYyd_aNgM5_aJz9dnmfYNxIKADNOEqPEz0eSDMKm1OXyw-BzKNXVAI0eZ4HKJDp8sSfM-LZHsL4WYGt0nTlRWTB_VSdPgn2Jl7OmkkijdMKUolH88-cdbrPi_0ptMvoeOTIx4CKgZRkQnesM9DZ4RLdicKUdfoF0fkGtZKvf-SrW3M8NZ2ZI5HMRt0WpFoqXiLHU7CLr0lg4EZxlyF81iNu8mqLJ4SM6HRQosBch4D8ukWRNNALdcUyIhCnqCXhrsoF9LnKhxQRZbiw1bIyQpCJ4Hd6hE9FG74_dxEQCWvO0TwjoO8JE43qg9az-V-rjrU286S-V5BHH5P-hjWxw..",
      areaLayerUrl: "https://portal.nxgxk.com/server1/rest/services/NXSTSJ/nx01wzqst/FeatureServer/3?token=",
      arcgisToken: "",
      timer: null, //token计时器
      centerlng: 106, //定义中心点经度,
      centerlat: 37, //定义中心点纬度
      areaLayer: {},
      obj: null,


    }
  },
  computed: {

  },
  created () {
    this.refreshToken();
  },
  mounted () {

  },
  methods: {
    loadMap (obj) {
      let temp = obj.mapModules.FeatureLayer

      console.info(obj)
      obj.view.set("center", [this.centerlng, this.centerlat]);
      var url = this.areaLayerUrl + this.arcgisToken;
      //为了测试图层适配哪种Layer合适，先构造3个，objArr=[FeatureLayer,WebTileLayer,TileLayer]
      this.areaLayer = new temp({
        // url: 'https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer',
        url: url,
        opacity: 0.3
      });
      obj.addLayer(this.areaLayer, 1);
      // obj.s
      this.obj = obj;
    },
    //监控token计时
    monitTimer () {
      //30分钟token失效，考虑网络延迟，29分钟刷新token，1000*60*29=1740000
      return setTimeout(() => {
        this.refreshToken()
      }, 1740000)
    },
    //刷新token
    async refreshToken () {
      var _t = this;
      await axios.get(this.arcgisRefreshToken).then(function (value) {
        //access_token, expires_in, username
        var jsonObj = eval(value.data);
        var access_token = jsonObj.access_token;
        if (access_token) {
          _t.arcgisToken = access_token;
        }
      })
    }
  },
  watch: {
    arcgisToken () {
      this.monitTimer()
    }
  },
  destroyed () {
    clearTimeout(this.timer)
  }
}
</script>
<style>
/* @import "@emergency/common-map/lib/common-map.css"; */
/* 去掉地图聚焦边框 */
.esri-popup__inline-actions-container {
  display: none;
}
.esri-view-surface--inset-outline:focus::after {
  outline: none !important;
}
</style>
<style scoped>
</style>


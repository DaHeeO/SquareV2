<template>
  <div>
    <p id="centerAddr">{{ address }}</p>
    <div id="map" style="width: 100vw; height: 100vh"></div>
  </div>
</template>

<script>
export default {
  name: "currentMap",
  data() {
    return {
      latitude: 33.450701,
      longitude: 126.570667,
      address: "",
      geocoder: null, // Declare geocoder as a property
    };
  },
  mounted() {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(this.latitude, this.longitude),
      level: 7,
    };

    const map = new kakao.maps.Map(container, options);
    this.geocoder = new kakao.maps.services.Geocoder(); // Initialize geocoder

    map.setCenter(new kakao.maps.LatLng(this.latitude, this.longitude));
    this.searchAddrFromCoords(map.getCenter(), this.displayCenterInfo);

    map.setDraggable(false);

    window.addEventListener("message", (event) => {
      const data = event.data;
      if (data.type === "SET_COORDINATES") {
        const { latitude, longitude } = data.payload;
        this.latitude = latitude;
        this.longitude = longitude;

        map.setCenter(new kakao.maps.LatLng(latitude, longitude));
        this.searchAddrFromCoords(map.getCenter(), this.displayCenterInfo);
      }
    });
  },
  
  methods: {
    searchAddrFromCoords(coords, callback) {
      this.geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
    },
    searchDetailAddrFromCoords(coords, callback) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    },
    displayCenterInfo(result, status) {
      if (status === kakao.maps.services.Status.OK) {
        for (var i = 0; i < result.length; i++) {
          if (result[i].region_type === "H") {
            this.address = result[i].address_name;
            console.log("address", this.address); // Use `this.address` instead of `address`
            break;
          }
        }
      }
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
</style>

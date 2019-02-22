<template>
  <div class="list">
    <forecast-box
      v-for="hourly_forecast in forecast"
      :key="hourly_forecast.id"
      :forecast="hourly_forecast"
    ></forecast-box>
  </div>
</template>

<script>
import axios from 'axios';
import ForecastBox from './ForecastBox.vue'

export default {
  name: 'forecast-list',
  data () {
    return {
      error: false,
      city_id: '6695624',
      forecast:  '',
    }
  },
  components: {
    ForecastBox,
  },
  mounted() {
    axios
    .get('http://api.openweathermap.org/data/2.5/forecast', {
      params: {
        units: 'metric',
        id: this.city_id,
        appid: process.env.API_KEY
      }
    })
    .then(response => (this.forecast = response.data.list ))
    .catch(error => (this.error = true))
  },
}
</script>

<style lang="scss" scoped>
@import '../../static/scss/_helpers';

.list {
  overflow-y: scroll;
  scroll-snap-type: y mandatory;
  height: 60vh;
}

</style>
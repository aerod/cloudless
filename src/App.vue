<template>
  <div id="app" class="weather">
    <message-box class="weather__todayBox"></message-box>
    <forecast-list class="weather__forecastList"></forecast-list>
  </div>
</template>

<script>
import MessageBox from './components/MessageBox.vue';
import ForecastList from './components/ForecastList.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: ''
    }
  },
  components: {
    MessageBox,
    ForecastList,
  }
}
</script>

<style lang="scss" scoped>
  @import '../static/scss/_helpers';


  .weather {
    background-color: var(--lightest);
    width: 90%;
    max-width: 700px;
    margin: 2rem auto;
    border-radius: 1rem;
    box-shadow: 0 10px 15px -12px var(--primary-dark);
    overflow: hidden;

    &__todayBox {
      width: 100%;
    }

    &__forecastList {
      width: 100%;
    }
  }
</style>

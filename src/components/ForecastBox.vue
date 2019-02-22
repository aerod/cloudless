<template>
  <div class="box"
    @click="createMessage($event)"
  >
    <div>
      <p class="box__date">{{nameDate}}</p>
      <p class="box__time">{{nameTime}}</p>
    </div>
    <i class="box__icon wi"
      :title="forecast.weather[0].main"
      :aria-label="forecast.weather[0].main"
      :class="weatherState.className"
    ></i>
    <p class="box__temperature">{{forecast.main.temp}}&deg;C</p>
  </div>
</template>

<script>
export default {
  name: 'forecast-box',
  props: {
    forecast: Object
  },
  computed: {
    nameDate: function() {
      const forecastDate = new Date(this.forecast.dt_txt);
      return this.isToday(forecastDate) ? 'Today' : forecastDate.toLocaleDateString('en-US', { weekday: 'long' })
    },
    nameTime: function() {
      const rx_time = /([0-9]{2}):([0-9]{2})/;
      let hours = rx_time.exec(this.forecast.dt_txt)[1];
      let minutes = rx_time.exec(this.forecast.dt_txt)[2];
      const ampm = hours >= 12 ? 'PM' : 'AM';

      hours = hours % 12;
      hours = hours ? hours : 12;

      return `${hours}:${minutes} ${ampm}`
    },
    weatherState: function() {
      const code = this.forecast.weather[0].id
      const weatherState = {}
      switch(true) {
        case (code == 800):
          weatherState.className = 'wi-day-sunny';
          weatherState.message = 'Take a sunglasses - I think the sun is trying to come out 🕶️';
          break;
        case (code == 781):
          weatherState.className = 'wi-tornado';
          weatherState.message = 'Stay at home! It is too dangerous! 🌪️';
          break;
        case (code >= 200 && code < 300):
          weatherState.className = 'wi-lightning';
          weatherState.message = 'Be carefull! They are predicting thunderstorms. 🌩️';
          break;
        case (code >= 300 && code < 600):
          weatherState.className = 'wi-rain';
          weatherState.message = 'Do not forget your umbrella ☂️, it will be a rainy day';
          break;
        case (code >= 600 && code < 700):
          weatherState.className = 'wi-snow';
          weatherState.message = '🎶 Do you want to build a snowman? 🎶  It will be a frozen day';
          break;
        case (code >= 741 && code <= 771):
          weatherState.className = 'wi-fog';
          weatherState.message = 'They are predicting fog';
          break;
        default:
          weatherState.className = 'wi-cloud';
          weatherState.message = 'Only you can chase the clouds away, my sunshine 🌞';
          break;
      }
      return weatherState
    }
  },
  methods: {
    createMessage(e) {
      const temperature = (this.forecast.main.temp > 5) ? 'hot outside! 🔥' : 'a bit chilly out there';
      const message = `Hi Darling 😍  ${this.nameDate} at ${this.nameTime} will be ${temperature}. ${this.weatherState.message}. XO XO ❤️ `
      navigator.clipboard.writeText(message)
      .then(function() {
        console.log('Copied! I didnt have time to make toast message :(');
      }, function(err) {
        console.error('Ops. I can explain...', err);
      });

    },
    isToday(date) {
      const todayDate = new Date();
      return todayDate.setHours(0,0,0,0) == date.setHours(0,0,0,0)
    },
  },

}
</script>

<style lang="scss" scoped>
@import '../../static/scss/_helpers';

.box {
  position: relative;
  height: 4rem;
  scroll-snap-align: start;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: var(--darkest);

  &:nth-child(even) {
    background-color: var(--primary-light);
  }

  &__date {
    font-family: $font-secondary;
    font-size: 1rem;
    text-transform: lowercase;
    min-width: 10ch;
  }

  &__time {
    opacity: .5;
    font-size: .8rem;
    line-height: 1.8;
  }

  &__icon {
    color: var(--primary);
    font-size: 1.5rem;
  }

  &__temperature {
    min-width: 8ch;
    text-align: right;
  }
}
</style>
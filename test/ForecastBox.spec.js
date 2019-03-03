import { mount } from '@vue/test-utils';
import ForecastBox from '../src/components/ForecastBox.vue';

describe('Test for ForecastBox', () => {

  const forecastDemo = {
    dt: 1551625200,
    main:{
      temp:8.14,
      temp_min:7.97,
      temp_max:8.14,
      pressure:1006.21,
      sea_level:1006.21,
      grnd_level:994.17,
      humidity:83,
      temp_kf:0.17,
    },
    weather:[{
      id:500,
      main:"Rain",
      description:"light rain",
      icon:"10d"
    }],
    clouds:{
      all:92
    },
    wind:{
      speed:7.51,
      deg:245
    },
    rain:{
      "3h":0.25
    },
    snow:{},
    sys:{
      pod:"d"
    },
    dt_txt:"2019-03-03 15:00:00"
  };

  it('check the weather state', () => {
    const forecastWrapper = mount(ForecastBox, {
      propsData: {
        forecast: forecastDemo
      }
    });
    const weatherRain = forecastWrapper.find('.wi-rain');
    expect(weatherRain.exists()).toBe(true);
  })

  it('check the time', () => {
    const forecastWrapper = mount(ForecastBox, {
      propsData: {
        forecast: forecastDemo
      }
    });
    const weatherTime = forecastWrapper.find('.box__time');
    expect(weatherTime.text()).toBe('3:00 PM');
  })
})

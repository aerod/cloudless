<template>
  <div class="message">
    <div>
      <h2 class="message__headline">We know you care</h2>
      <h3 class="message__text">Share the weather forecast for <span class="message__city">{{city}}</span> with your loved ones. Just tap the day and enjoy ready message.
        You're welcome 🖖
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'message-box',
  data () {
    return {
      city: 'Warsaw',
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../static/scss/_helpers';

.message {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: var(--primary-dark);

  &__headline{
    font-family: $font-primary;
    font-size: 1.8rem;
    line-height: 1.3;
    margin-bottom: 1rem;
    color: var(--lightest);
    letter-spacing: 1px;
  }

  &__text {
    font-family: $font-secondary;
    white-space: pre-line;
    font-size: 1.2rem;
    line-height: 1.6;
    color: var(--lightest);
  }

  &__city {
    color: var(--primary);
    letter-spacing: 2px;
  }
}

</style>
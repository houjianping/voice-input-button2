<!-- from https://codepen.io/aurer/pen/jEGbA -->
<template>
  <div class="loader" title="loading…">
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="15px" height="15px" viewBox="0 0 20 20" style="enable-background:new 0 0 50 50;" xml:space="preserve">
        <rect x="5" y="3" width="4" height="15" :fill="color">
            <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="12" y="3" width="4" height="15" :fill="color">
            <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.2s" dur="0.6s" repeatCount="indefinite" />
        </rect>
        <rect x="19" y="3" width="4" height="15" :fill="color">
            <animate attributeName="opacity" attributeType="XML" values="1; .2; 1" begin="0.4s" dur="0.6s" repeatCount="indefinite" />
        </rect>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'loading',
  props: {
    color: {
      type: String,
      default: '#333'
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader{
    width: 20px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

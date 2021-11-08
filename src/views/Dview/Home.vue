<template>
<div class="home">
  <quick-view/>
  <chart/>
</div>

</template>

<script>
import QuickView from '../../components/QuickView.vue'
import Chart from '../../components/Chart.vue'
export default {
  name:'home',
  components: {QuickView, Chart}
}
</script>

<style>

/* .home{
  display: flex;
} */

</style>
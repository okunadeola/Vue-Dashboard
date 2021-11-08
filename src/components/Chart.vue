<template>
  <div id='chart'>
    <canvas id="planet-chart"></canvas>
  </div>
</template>


<script>
import Chart from 'chart.js'
import {planetChartData} from '../dummyData.js'

export default {
  name:"chart",
  data(){
    return{
      planetChartData: planetChartData
    }
  },

  mounted() {
    const ctx = document.getElementById('planet-chart');
    new Chart(ctx, this.planetChartData);
  }
}

</script>

<style scoped>
  #chart{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 500px;
    padding: 50px;
    margin: 20px;
  }
  #planet-chart{
    flex: 1;
  }
</style>
<template>
      <div class="featured">
      <div class="featuredItem">
        <span class="featuredTitle">Revanue</span>
        <div class="featuredMoneyContainer">
          <span class="featuredMoney">$2,415</span>
          <span class="featuredMoneyRate">
            -11.4 <ArrowDownward class="featuredIcon negative" />
          </span>
        </div>
        <span class="featuredSub">Compared to last month</span>
      </div>
      <div class="featuredItem">
        <span class="featuredTitle">Sales</span>
        <div class="featuredMoneyContainer">
          <span class="featuredMoney">$4,415</span>
          <span class="featuredMoneyRate">
            -1.4 <ArrowDownward class="featuredIcon negative" />
          </span>
        </div>
        <span class="featuredSub">Compared to last month</span>
      </div>
      <div class="featuredItem">
        <span class="featuredTitle">Cost</span>
        <div class="featuredMoneyContainer">
          <span class="featuredMoney">$2,225</span>
          <span class="featuredMoneyRate">
            +2.4 <ArrowUpward class="featuredIcon" />
          </span>
        </div>
        <span class="featuredSub">Compared to last month</span>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .featured {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.featuredItem {
  flex: 1;
  margin: 0px 20px;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
}

.featuredTitle{
    font-size: 20px;
}

.featuredMoneyContainer{
    margin: 10px 0px;
    display: flex;
    align-items: center;
}

.featuredMoney{
    font-size: 30px;
    font-weight: 600;
}

.featuredMoneyRate{
    display: flex;
    align-items: center;
    margin-left: 20px;
}

.featuredIcon{
    font-size: 14px;
    margin-left: 5px;
    color: green;
}

.featuredIcon.negative{
    color: red;
}

.featuredSub{
    font-size: 15px;
    color: gray;
}
</style>
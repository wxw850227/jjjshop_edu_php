<template>
  <div class="mt30">
    <div>
      <div class="Echarts">
        <div id="TransactionChart"></div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

let myChart = null;

export default {


  data() {
    return {
      activeName: 'order',
      dataList: null,
      option: {
        title: {},
        grid: {
          left: '3%',
          right: '6%',
          bottom: '6%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis'
        },
        yAxis: {}
      }
    };
  },
    inject: ['datastatistic'],
    created() {
      this.dataList=this.datastatistic
      console.log('datalist',this.dataList,);
    },
  mounted() {
    this.myEcharts();
    
  },

  methods: {
    myEcharts() {
      myChart = echarts.init(document.getElementById('TransactionChart'));
        this.createOption();
       console.log('tb',this.mychart);
    },

    createOption() {
      if (!this.loading) {
        let names = [];
        let xAxis = this.dataList.days;
        let series2 = [];
        this.dataList.data.forEach(item => {
          series2.push(item.total_num);
        });
        if (this.activeName == 'order') {
          names = ['成交额', '成交量'];
        } else if (this.activeName == 'refund') {
          names = ['退单额', '退单量'];
        }
        this.option.xAxis = {
          type: 'category',
          boundaryGap: false,
          data: xAxis
        };
        this.option.color = ["#5E73E3", "#31C0D0"];
        this.option.legend = {
          data: [{
            name: names[0],
            color: '#ccc'
          }, {
            name: names[1]
          }]
        };
        this.option.series = [{
          name: names[1],
          type: 'line',
          data: series2,
          lineStyle: {
            color: '#31C0D0'
          }
        }];
        myChart.setOption(this.option);
        myChart.resize();
      }
    }
  }
};
</script>

<style>
.Echarts {
  box-sizing: border-box;
}

.Echarts>div {
  width: 100%;
  height: 400px;
  box-sizing: border-box;
}
</style>

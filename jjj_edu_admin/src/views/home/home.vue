<template>
	<!--
    	作者：luoyiming
    	时间：2019-10-24
    	描述：后台系统首页
    -->
	<div class="home" v-loading="loading">
		<div class="operation-wrap" style="background-color: #FFFFFF;">
			<el-row :gutter="20">
				<el-col :span="6" class="d-c-c">
					<div class="grid-content purple">
						<div class="info">
							<p class="cards">营业额</p>
							<h3>{{topData.order_money}}</h3>
						</div>
						<div style="width: 90px;height: 90px;margin-left: 35px;"> <img src="../../../static/imgs/home01.png"></div>
					</div>
				</el-col>
				<el-col :span="6" class="d-c-c">
					<div class="grid-content yellow">
						<div class="info">
							<p class="cards">订单数量</p>
							<h3>{{topData.order_count}}</h3>
						</div>
						<div class="img"><img src="/static/imgs/home02.png"></div>
					</div>
				</el-col>
				<el-col :span="6" class="d-c-c">
					<div class="grid-content orderred">
						<div class="info">
							<p class="cards">用户总量</p>
							<h3>{{topData.user_count}}</h3>
						</div>
						<div class="img"><img src="/static/imgs/home03.png"></div>

					</div>
				</el-col>
				<el-col :span="6" class="d-c-c">
					<div class="grid-content blue">
						<div class="info">
							<p class="cards">课程总量</p>
							<h3>{{topData.course_count}}</h3>
						</div>
						<div class="img"><img src="/static/imgs/home04.png"></div>
					</div>
				</el-col>
			</el-row>
		</div>

		<div class="home-index">
			<!--main-index-->
			<div class="flex-1">
				<div class="main-index">
					<div class="common-form mt16" style="font-size: 18px;">
						今日概况
					</div>
					<el-row class="border-b-l">
						<el-col :span="6">
							<div class="grid-content">
								<div class="info t-c">
									<p class="des">销售额(元)</p>
									<h4>{{today_data.order_total_price.tday}}</h4>
									<p class="yesterday">昨日：{{today_data.order_total_price.ytd}}</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">
								<div class="info">
									<p class="des">支付订单数</p>
									<h4>{{today_data.order_total.tday}}</h4>
									<p class="yesterday">昨日：{{today_data.order_total.ytd}}</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">
								<div class="info">
									<p class="des">新增用户数</p>
									<h4>{{today_data.new_user_total.tday}}</h4>
									<p class="yesterday">昨日：{{today_data.new_user_total.ytd}}</p>
								</div>
							</div>
						</el-col>
						<el-col :span="6">
							<div class="grid-content">
								<div class="info">
									<p class="des">新增课程</p>
									<h4>{{today_data.new_course_total.tday}}</h4>
									<p class="yesterday">昨日：{{today_data.new_course_total.ytd}}</p>
								</div>
							</div>
						</el-col>
					</el-row>
					<div>
						<div class="matters-wrap" style="width: 100%;">
							<Transaction v-if="!loading"></Transaction>
						</div>
					</div>
				</div>
			</div>
			<div class="matters-wrap">
				<Ranking v-if="!loading"></Ranking>
			</div>

		</div>
	</div>
</template>

<script>
  import IndexApi from '@/api/index.js';
  import Transaction from '@/views/home/part/Transaction.vue';
  import Ranking from '@/views/home/part/Ranking.vue';
  export default {
    components: {
      Transaction,
      Ranking,
    },
    data() {
      return {
        /*是否加载完成*/
        loading: true,
        /*统计信息*/
        topData: [],
        today_data: {
        order_total_price: {},
        order_total: {},
        new_course_total: {},
        new_user_total: {},
        },
          rankData: {
          courseRank: [],
          paperRank: []
        },
          dataRank: {
          courseRank: [],  
          paperRank: []  
          },
          statistics:{
            data:[],
            days:[],
          }
      };
    },
      provide: function() {
      return {
        dataRank: this.rankData,
        datastatistic: this.statistics,
      }
    },
    mounted() {
      console.log(this.statistics);
      this.dataRank.courseRank = this.rankData.courseRank;
      this.dataRank.paperRank = this.rankData.paperRank;
      console.log(this.rankData);
      /*获取数据*/
      this.getData();
    },
    methods: {
      /*获取数据*/
      getData() {
        let self = this;
        self.loading = true;
        IndexApi.getCount(true).then(data => {
          self.loading = false;
          self.topData = data.data.data.top_data;
          Object.assign(self.statistics, data.data.data.statistics);
          self.today_data = data.data.data.today_data;
          Object.assign(self.rankData, data.data.data.rank_data);
          console.log('Updated rankData:', self.rankData);
        }).catch(error => {

				});
			},
		}
	};
</script>

<style lang="scss" scoped>
	.home{
		min-width: 1200px;
	}
	.grid-content{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background-size: 100% 100%;
		border-radius: 10px;
		height: 140px;
		padding:0 30px;
		box-sizing: border-box;
		h3 {
			font-size: 36px;
			line-height: 40px;
		}
		&.blue {
			background: url('/static/imgs/bg04.png') center/cover;
		}
		&.yellow {
			background: url('/static/imgs/bg02.png') center/cover;
		}
		&.purple {
			background: url('/static/imgs/bg01.png') center/cover;
		}
		&.orderred {
			background: url('/static/imgs/bg03.png') center/cover;
		}
		.info{
			font-size: 14px;
			color: #FFFFFF;
			h3{
				font-size: 40px;
				line-height: 40px;
				color: #FFFFFF;
				text-align: left;
				margin-bottom: 20px;
			}
			h4{
				font-size: 20px;
				line-height: 40px;
				color: #333333;
				text-align: center;
				margin-bottom: 20px;
			}
		}
	}
	.operation-wrap {
		width: 100%;
		height: 180px;
		border-radius: 10px;
		-webkit-box-pack: center;
		-ms-flex-pack: center;
		justify-content: center;
		padding: 0 20px;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-ms-flex-direction: column;
		flex-direction: column;
		overflow: hidden;
		background-size: 100% 100%;
		color: #ffffff;
		margin-bottom: 23px;
		margin-top: 18px;
	}
	.operation-wrap .grid-content .svg-icon {
		color: rgba(255, 255, 255, .3);
		font-size: 300%;
	}

	.grid-content .info .cards {
		width: 100px;
		height: 70px;
		font-size: 18px;
		font-family: Source Han Sans CN;
		font-weight: 400;
		color: #FFFFFF;
		padding-top: 24px;
		white-space: nowrap;
	}
	.home-index {
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: horizontal;
		-webkit-box-direction: normal;
		-ms-flex-direction: row;
		flex-direction: row;
		-webkit-box-pack: justify;
		-ms-flex-pack: justify;
		justify-content: space-between;
		min-width: 1000px;
		overflow-x: auto;
	}

	.main-index {
		flex: 1;
		margin: 20px;
	}

	.main-index .grid-content {
		height: 120px;
	}

	.main-index .grid-content .pic {
		margin-right: 10px;
	}

	.main-index .grid-content h3 {
		font-size: 20px;
		font-weight: normal;
	}

	.main-index .grid-content .yesterday {
		color: #ccc;
	}

	.main-index .grid-content .svg-icon {
		color: #3a8ee6;
	}

	.matters-wrap {
		padding-bottom: 15px;
		padding-right: 25px;
		width: 30%;
	}

	.matters .box {
		width: 100%;
	}

	.icon {
		color: #ed5565;
		width: 22px;
		height: 30px;
		float: right;
		font-size: large;
	}

	.matters-wrap .matters {
		display: -ms-flexbox;
		display: flex;
		-webkit-box-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		// height: 120px;
		margin-bottom: 30px;
	}

	.matters-wrap .matters .title {
		font-size: 16px;
		color: #333333;
		display: inline-block;
		height: 20px;
		line-height: 0;
		padding: 11px;
		text-align: center;
		margin-bottom: 20px;
		font-weight: 600;
	}

	.matters-wrap .matters ul {
		color: #999999;
	}

	.matters-wrap .matters ul span {
		padding-right: 6px;
		color: #3a8ee6;
	}

	.border-b {
		display: flex;
		flex-direction: column;
	}

	.border-b-l {
		flex-direction: initial;
	}

	.matters_item {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.matters_item li {
		width: 72px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-right: 16px;
	}

	.grid-content .img img {
		width: 90px;
		height: 90px;
		margin-left: 50px;

	}

	.grid-content .info .des {
		font-size: 16px;
		margin-bottom: 6px;
		color: #333333;
	}


	.grid-content .info .yesterday {
		font-size: 13px;
		text-align: center;
	}

	.matters_box {
		width: 90%;
		border-top: 1px solid #d9d9d9;
		padding-top: 20px;
	}

	.matters-wrap .matters_item li .fb {
		font-size: 16px;
		color: #5d75e3;
	}
</style>
 <!-- 讲师关注列表 -->
 <template>
	<view>
		<view class="pt24 lecturer" v-if="listData && listData.length > 0">
			<template v-for="(v,idx) in listData" :key="idx">
				<view class="item"  @click="gotoPage(`/pages/knowledge/lecturer/detail?lecturer_id=${v.lecturer_id}`)">
					<view class="l">
						<image class="img" :src="v.lecturer.image && v.lecturer.image.file_path" mode=""></image>
					</view>
					<view class="r">
						<view class="t">
							<view class="header">
								<view class="title">{{ v.lecturer.name }}</view>
								<view class="btn" @click.stop="clickFav(v,idx)">已关注</view>
							</view>
							<view class="scoreList">
								<image class="score" v-for="score in v.lecturer.star" :key="score" src="/static/image/score.png" mode=""></image>
							</view>
						</view>
						<view class="b">
							<view class="labelList">
								<view class="label" v-for="label in v.lecturer.label" :key="label">
									{{ label }}
								</view>
							</view>
						</view>
					</view>
				</view>
			</template> 
		</view>
		<empty v-if="listData.length == 0 && !loading"></empty> 
		<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
	</view> 
</template>

<script>
	import empty from '@/components/empty.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components:{
			empty,
			uniLoadMore
		},
		data() {
			return {
				loading: false,
				page: 1,
				list_rows: 10,
				listData: [],
				last_page: 1,
				no_more: false,
			}
		},
		computed: {
			/*加载中状态*/
			loadingType() {
				if (this.loading) {
					return 1;
				} else {
					if (this.listData.length != 0 && this.no_more) {
						return 2;
					} else {
						return 0;
					}
				}
			}
		},
		onShow() {},
		onLoad() {
			this.fetchData();
		},
		onReachBottom() {
			let self = this;
			if (self.page < self.last_page) {
				self.page++;
				self.getData();
			}
			self.no_more = true;
		},
		methods: {
			fetchData(){
				this.page = 1;
				this.category_id = 0;
				this.search = "";
				this.listData = [];
				this.getData();
			},
			getData() {
				let self = this;
                self._get('lecturer.Favorite/list', {
                    page: self.page || 1,
					list_rows: self.list_rows,
					category_id: self.category_id,
					search: self.search,
                }, res => {
					self.listData = self.listData.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
					if (res.data.list.last_page <= 1) {
						self.no_more = true;
					}
					self.loading = false;
					uni.hideLoading();
				})
			},
			clickFav(v){
				let self = this;
				if(!v.lecturer_id){
					return
				}
				self._post(
					'lecturer.Favorite/fav ', {
						lecturer_id: v.lecturer_id
					},
					function(res) {
						self.fetchData();
					}
				);
			},
		}
	}
</script>

<style lang="scss" scoped>
.lecturer{
    .item{
        display: flex;
        gap: 32rpx;
        background: #fff;
        height: 222rpx;
        padding: 24rpx 23rpx;
        box-sizing: border-box;
        border-bottom: 1px solid #EEEEEE;
        &:last-child{
            border-bottom: none;
        }
        .l{
            .img{
                width: 172rpx;
                height: 172rpx;
                border-radius: 50%;
            }
        }
        .r{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
			flex: 1;
            .title{
                font-size: 26rpx;
                color: #111111;
            }
			.header{
				display: flex;
				justify-content: space-between;
				align-items: center;
				.btn{
					width: 111rpx;
					height: 47rpx;
					line-height: 47rpx;
					border-radius: 24px;
					text-align: center;
					font-size: 20rpx;
					color: #fff;
					background: linear-gradient(45deg, #F2473F, #F26E2F);
					border: 1rpx solid #EEEEEE;
					&.active{
						border: 1rpx solid #EEEEEE;
						color: #999999;
						background: #fff;
					}
				}
			}
            .scoreList{
                display: flex;
                align-items: center;
                gap: 6rpx;
                margin-top: 15rpx;
                .score{
                    width: 20rpx;
                    height: 20rpx;
                }
            }
            .labelList{
                display: flex;
                align-items: center;
                gap: 11rpx;
                .label{
                    background: rgba($color: #F89C31, $alpha: 0.15);
                    font-size: 22rpx;
                    padding: 8rpx 22rpx;
                    color: #F2473F;
                    border-radius: 30rpx;
                }
            }
        }
    }
}
</style>

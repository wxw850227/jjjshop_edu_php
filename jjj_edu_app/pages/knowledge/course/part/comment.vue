<template>
    <view class="commentWrap">
        <!-- <view class="header">
            <view class="l">
                <view class="score">5分</view>
                <view class="txt">知识评分</view>
            </view>
            <view class="r">
                我要评价
            </view>
        </view> -->
        <view class="list" v-if="listData && listData.length > 0">
            <view class="item" v-for="v in listData" :key="v">
                <view class="user">
                    <view class="avatar">
                        <image class="img" :src="v.users && v.users.avatarUrl || '/static/default.png'" mode="aspectFill"></image>
                        <view class="txt">{{ v.users && v.users.nickName }}</view>
                    </view>
                    <view class="time">{{ v.create_time }}</view>
                </view>
                <view class="desc">
                    <view class="conTxt">{{ v.content }}</view>
                    <view class="imgList">
                        <image class="img" v-for="v in v.image" :key="v" :src="v.file_path"></image>
                    </view>
                </view>
            </view>
        </view>
        <template v-else>
            <empty type="comment" height="600rpx"></empty>
        </template>
    </view>
</template>
<script>
    import empty from '@/components/empty.vue';
	export default {
        components: {
            empty
        },
		data() {
			return {
				list_rows: 10,
				page: 1,
				loading: false,
				listData: [],
				last_page: 1,
				no_more: false,
                points: 0,
			};
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
			/*获取数据*/
			getData(course_id) {
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
                self._get('course.Comment/list', {
                    page: self.page || 1,
					list_rows: self.list_rows,
                    course_id: course_id,
                }, res => {
					self.listData = self.listData.concat(res.data.list.data);
					self.last_page = res.data.list.last_page;
                    self.points = res.data.points;
					if (res.data.list.last_page <= 1) {
						self.no_more = true;
					}
					self.loading = false;
					uni.hideLoading();
				})
			},

		}
	};
</script>

<style lang="scss" scoped>
.commentWrap{
    padding: 0 20rpx;
    /* .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 146rpx;
        .l{
            display: flex;
            align-items: center;
            gap: 12rpx;
        }
        .score{
            font-size: 40rpx;
            color: #F2473F;
        }
        .txt{
            font-size: 26rpx;
            color: #999;
        }
        .r{
            width: 148rpx;
            height: 54rpx;
            line-height: 54rpx;
            font-size: 26rpx;
            color: #fff;
            background: linear-gradient(45deg, #F2473F, #F26E2F);
            border-radius: 50rpx;
            text-align: center;
        }
    } */
    .list{
        .item{
            .user{
                display: flex;
                justify-content: space-between;
                align-items: center;
                .avatar{
                    display: flex;
                    align-items: center;
                    gap: 14rpx;
                    .img{
                        width: 69rpx;
                        height: 69rpx;
                        border-radius: 50%;
                    }
                    .txt{
                        font-size: 24rpx;
                        color: #999999;
                    }
                }
                .time{
                    font-size: 24rpx;
                    color: #999;
                }
            }
            .desc{
                .conTxt{
                    margin: 20rpx 0;
                    color: #999999;
                    font-size: 24rpx;
                }
                .imgList{
                    display: flex;
                    gap: 25rpx;
                    flex-wrap: wrap;
                    .img{
                        width: 146rpx;
                        height: 146rpx;
                        border-radius: 12rpx;
                    }
                }
            }
        }
    }
}
</style>

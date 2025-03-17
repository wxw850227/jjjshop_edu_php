 <!-- 讲师列表 -->
 <template>
	<view>
		<view class="top-box">
			<!-- 顶部搜索 -->
			<view class="top-search">
				<view class="search-box">
					<text class="icon iconfont icon-sousuo"></text> 
					<input type="text" class="flex-1 search-input" v-model="search" placeholder="请输入..." />
					<view class="search-btn" @click="searchFunc">搜索</view>
				</view>
			</view>
			<!-- 顶部分类 -->
			<view class="top-nav">
				<view class="top-nav-item" :class="{active:category_id == 0}" @click="changeCat(-1)">全部
				</view>
				<view v-for="(item,index) in categoryList" :key="index" class="top-nav-item" :class="{active:category_id == item.category_id}" @click="changeCat(item)">
					{{ item.name }}
				</view>
			</view>
		</view>
		<view class="pt24 lecturer">
            <view class="item" v-for="v in listData" :key="v" @click="gotoPage('/pages/knowledge/lecturer/detail?lecturer_id='+v.lecturer_id)">
                <view class="l">
                    <image class="img" :src="v.image && v.image.file_path" mode="aspectFill"></image>
                </view>
                <view class="r">
                    <view class="t">
						<view class="header">
							<view class="title">{{ v.name }}</view>
							<view class="btn active" v-if="v.isFav == 1" @click.stop="clickFav(v)">已关注</view>
							<view class="btn" v-else-if="v.isFav == 0" @click.stop="clickFav(v)">+关注</view>
						</view>
                        <view class="scoreList">
                            <image class="score" v-for="score in v.star" :key="score" src="/static/image/score.png" mode="widthFix"></image> 
                        </view>
                    </view>
                    <view class="b">
                        <view class="labelList">
                            <view class="label" v-for="label in v.label" :key="label">
                                {{ label }}
                            </view>
                        </view>
                    </view>
                </view>
            </view>
			<empty v-if="listData.length == 0 && !loading"></empty> 
			<uni-load-more v-else :loadingType="loadingType"></uni-load-more>
		</view>
	</view>
</template>

<script>
	import empty from '@/components/empty.vue';
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		components: {
			uniLoadMore,
			empty,
		},
		data() {
			return {
				categoryList: [],
				category_id: 0,
				loading: false,
				page: 1,
				list_rows: 10,
				listData: [],
				last_page: 1,
				no_more: false,
				search: "",
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
			this.getCategory();
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
			getCategory(){
				let self = this;
				uni.showLoading({
					title: '加载中'
				});
                self._get('lecturer.Category/list', {}, res => {
					const { data:{ list }} = res;
					self.categoryList = list;
					self.fetchData();
				})
			},
			fetchData(){
				this.page = 1;
				this.category_id = 0;
				this.search = "";
				this.getData();
			},
			getData() {
				let self = this;
                self._get('lecturer.Lecturer/list', {
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
			gotoDetail(v){
				this.gotoPage(`/pages/eduadmin/detail?course_id=${v.course_id}`)
			},
			searchFunc(){
				this.listData = [];
				this.page = 1;
				this.getData();
			},
			changeCat(v){
				if(v == -1){
					this.category_id = 0;
				}else{
					this.category_id = v.category_id;
				}
				this.listData = [];
				this.page = 1;
				this.getData();
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
						v.isFav = v.isFav == 1 ? 0 : 1;
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

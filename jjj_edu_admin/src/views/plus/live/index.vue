<template>
  <div class="common-seach-wrap">
    <!--直播房间-->
    <room v-if="activeName == 'room'"></room>
    <!--礼物设置-->
    <gift v-if="activeName == 'gift'"></gift>
    <!--直播设置-->
    <settings v-if="activeName == 'settings'"></settings>
    <!--直播订单-->
    <order v-if="activeName == 'order'"></order>
    <!--充值设置-->
    <plan v-if="activeName == 'plan'"></plan>
    <!--充值记录-->
    <log v-if="activeName == 'log'"></log>
  </div>
</template>
<script>
import { reactive, toRefs, defineComponent } from "vue";
import { useUserStore } from "@/store";
import room from "./room/index.vue";
import gift from "./gift/index.vue";
import settings from "./setting/index.vue";
import order from "./order/list.vue";
import plan from "./plan/setting.vue";
import log from "./plan/log.vue";
export default defineComponent({
  components: {
    room,
    gift,
    settings,
    order,
    plan,
    log,
  },
  setup() {
    const { bus_emit, bus_off, bus_on } = useUserStore();
    const state = reactive({
      bus_emit,
      bus_off,
      bus_on,
      /*是否加载完成*/
      loading: true,
      form: {},
      /*参数*/
      param: {},
      /*当前选中*/
      activeName: "",
      /*切换数组原始数据*/
      sourceList: [
        {
          key: "room",
          value: "直播房间",
          path: "/plus/live/room/index",
        },
        {
          key: "gift",
          value: "礼物设置",
          path: "/plus/live/gift/index",
        },
        {
          key: "settings",
          value: "直播设置",
          path: "/plus/live/setting/index",
        },
        {
          key: "order",
          value: "直播订单",
          path: "/plus/live/order/list",
        },
        {
          key: "plan",
          value: "充值设置",
          path: "/plus/live/plan/setting",
        },
        {
          key: "log",
          value: "充值记录",
          path: "/plus/live/plan/log",
        },
      ],
      /*权限筛选后的数据*/
      tabList: [],
    });
    return {
      ...toRefs(state),
    };
  },
  created() {
    this.tabList = this.authFilter();

    if (this.tabList.length > 0) {
      this.activeName = this.tabList[0].key;
    }

    if (this.$route.query.type != null) {
      this.activeName = this.$route.query.type;
    }

    /*监听传插件的值*/
    this.bus_on("activeValue", (res) => {
      this.activeName = res;
    });

    //发送类别切换
    let params = {
      active: this.activeName,
      list: this.tabList,
      tab_type: "live",
    };
    this.bus_emit("tabData", params);
  },
  beforeUnmount() {
    //发送类别切换
    this.bus_emit("tabData", { active: null, tab_type: "live", list: [] });
    this.bus_off("activeValue");
  },
  methods: {
    /*权限过滤*/
    authFilter() {
      let list = [];
      for (let i = 0; i < this.sourceList.length; i++) {
        let item = this.sourceList[i];
        if (this.$filter.isAuth(item.path)) {
          list.push(item);
        }
      }
      return list;
    },
  },
});
</script>

<style></style>

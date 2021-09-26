<template>
  <view class="content">
    <vanRow custom-class="row" v-for="(button, i) in buttonConfig" :key="i">
      <van-button type="info" @click="handler(button.action)">{{
        button.text
      }}</van-button>
    </vanRow>
  </view>
</template>

<script>
import vanRow from 'src/wxcomponents/vant/row';
import vanCol from 'src/wxcomponents/vant/col';
import vanButton from 'src/wxcomponents/vant/button';

export default {
  components: { vanRow, vanCol, vanButton },
  data() {
    return {};
  },
  computed: {
    buttonConfig() {
      return [
        {
          text: 'reject Promise',
          action: 'reject',
        },
        {
          text: '点击js报错',
          action: 'jsError',
        },
        {
          text: '请求报错',
          action: 'requestError',
        },
        {
          text: '跳转不存在的页面',
          action: 'notFound',
        },
        {
          text: '下载报错',
          action: 'downloadError',
        },
      ];
    },
  },
  onLoad() {},
  methods: {
    handler(action) {
      switch (action) {
        case 'reject':
          return Promise.reject('promise reject');
        case 'jsError':
          throw new Error('js error');
        case 'requestError':
          return wx.request({
            url: 'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
            method: 'GET',
            success(res){},
            error(error){
              throw error
            }
          });
        case 'notFound':
          return wx.redirectTo({
            url: 'test?id=1',
          });
        case 'downloadError':
          return wx.downloadFile({
            url: 'https://camo.githubusercontent.com/b93f8712a9212688d94dc45545437f911d36c8616c4d844f3d907546db5352ec/68747470733a2f2f692e6c6f6c692e6e65742f323032312f30372f32382f4576507764344e6a5648337442664f2e6a7067',
            success(res){},
            error(error){
              throw error
            }
          });
      }
    },
  },
};
</script>

<style lang="less">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .row {
    margin-bottom: 10px;
  }
}
</style>

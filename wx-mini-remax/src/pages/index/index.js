import React from 'react';
import { View } from 'remax/wechat';
import Row from '@vant/weapp/lib/row';
import Button from '@vant/weapp/lib/button';
import styles from './index.css';

const buttonConfig = [
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

export default () => {
  const handler = (action) => {
    switch (action) {
      case 'reject':
        return Promise.reject('promise reject');
      case 'jsError':
        throw new Error('js error');
      case 'requestError':
        return wx.request({
          url:
            'https://developers.weixin.qq.com/miniprogram/dev/api/network/request/wx.request.html',
          method: 'GET',
        });
      case 'notFound':
        return wx.redirectTo({
          url: 'test?id=1',
        });
      case 'downloadError': {
        return wx.downloadFile({
          url:
            'https://camo.githubusercontent.com/b93f8712a9212688d94dc45545437f911d36c8616c4d844f3d907546db5352ec/68747470733a2f2f692e6c6f6c692e6e65742f323032312f30372f32382f4576507764344e6a5648337442664f2e6a7067',
          success(res) {
            console.log(res);
          },
        });
      }
    }
  };

  return (
    <View className={styles.app}>
      {buttonConfig.map((button, i) => (
        <Row custom-class={styles.row} key={i}>
          <Button type="info" bindclick={() => handler(button.action)}>
            {button.text}
          </Button>
        </Row>
      ))}
    </View>
  );
};

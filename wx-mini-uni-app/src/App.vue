<script>
export default {
  onLaunch: function () {
    console.log('App Launch');
  },
  onShow: function () {
    console.log('App Show');
  },
  onHide: function () {
    console.log('App Hide');
  },
  onunhandledrejection(options) {
    console.log('onunhandledrejection', options);
  },
};
</script>

<style>
/*每个页面公共css */
</style>

import { Token } from './utils/token.js'

App({
  onLaunch(){
    let token = new Token
    // token.verifyOpenID()
  },

  isLoadAll(that) {
    that.data.loadedPhoto++
    if (that.data.loadedPhoto == that.data.photoCount) {
      that.setData({
        loadingHidden: true
      })
    }
  }
})
/**
   * let innerAudioContext = InnerAudio()
   * innerAudioContext.create()
   * // 切换音频 src: 音频地址 ；puaseTime: 暂停时间 （可选参数）时间单位: s
   * innerAudioContext.toggle(src, puaseTime) 
   * // 切换音频 actionTIme: 开始时间 ; puaseTime: 暂停时间 （可选参数） 时间单位: s
   * innerAudioContext.playSection(actionTIme, puaseTime) 
   */
// @ts-nocheck
export function InnerAudio() {
    class AudioManage {
      constructor() {
        this.InnerAudioContext = wx.createInnerAudioContext()
        this._playing_ = false
        this.puseTime = 0
        this.callBack = undefined
      }
      // 初始化配置
      create(config = {}) {
        // 监听音频 播放开始 操作的事件
        this.InnerAudioContext.onPlay(() => {
          console.log('开始播放---');
          if (!this._playing_) this._playing_ = true
          if (typeof config.onPlay === 'function') config.onPlay(this.InnerAudioContext)
        })
        // 监听音频 可以播放 操作的事件
        this.InnerAudioContext.onCanplay(() => {
          console.log('onCanplay---');
          if (!this._playing_) this.play()
          if (typeof config.onCanplay === 'function') config.onCanplay(this.InnerAudioContext)
        })
        // 监听音频 播放完毕 操作的事件
        this.InnerAudioContext.onEnded(() => {
          console.log('onEnded---');
          if (this._playing_) this._playing_ = false
          this.actionCallback()
          if (typeof config.onEnded === 'function') config.onEnded(this.InnerAudioContext)
        })
        // 监听音频 停止 操作的事件
        this.InnerAudioContext.onStop(() => {
          console.log('onStop---');
          if (this._playing_) this._playing_ = false
          if (typeof config.onStop === 'function') config.onStop(this.InnerAudioContext)
        })
        // 监听音频 暂停 操作的事件
        this.InnerAudioContext.onPause(() => {
          console.log('onPause---');
          if (this._playing_) this._playing_ = false
          if (typeof config.onPause === 'function') config.onPause(this.InnerAudioContext)
        })
        // 监听音频 进行跳转 操作的事件
        this.InnerAudioContext.onSeeking(() => {
          console.log('onSeeking---');
          if (typeof config.onSeeking === 'function') config.onSeeking(this.InnerAudioContext)
        })
        // 监听音频 完成跳转 操作的事件
        this.InnerAudioContext.onSeeked(() => {
          console.log('onSeeked---');
          if (!this._playing_) this.play()
          if (typeof config.onSeeked === 'function') config.onSeeked(this.InnerAudioContext)
        })
        // 监听音频 播放进度更新 事件
        this.InnerAudioContext.onTimeUpdate(() => {
          if (this.puseTime > 0) {
            if (this.InnerAudioContext.currentTime >= this.puseTime) {
              this.puseTime = 0
              this.pause()
              // this.stop()
              this.actionCallback()
            }
          }
          if (typeof config.onTimeUpdate === 'function') config.onTimeUpdate(this.InnerAudioContext)
        })
        // 监听音频 播放错误 事件
        this.InnerAudioContext.onError((err) => {
          console.log(err);
          wx.showToast({
            title: '播放失败，请稍后再试吧',
            icon: 'none',
            duration: 3000
          })
          if (typeof config.onError === 'function') config.onPlay(this.InnerAudioContext)
        })
        console.log('音频管理初始化完成');
      }
      // 执行 callBack 方法 并将其销毁
      actionCallback() {
        if (typeof this.callBack === 'function') this.callBack(this.InnerAudioContext)
        this.callBack = undefined
      }
      // 音频切换
      toggle(src, puseTime = 0, callBack = undefined) {
        this.puseTime = puseTime
        this.callBack = () => {
          const timer = setTimeout(() => {
            clearTimeout(timer)
            if (typeof callBack === 'function') callBack()
          }, 150);
        }
        if (!src) return console.log('----音频为空----');
        if (this.InnerAudioContext.src === src) {
          this.play()
        } else {
          if (this._playing_) this.stop()
          this.InnerAudioContext.src = src
        }
      }
      // 播放片段
      playSection(actionTime, puseTime, callBack = undefined) {
        if (!this._playing_) this.play()
        this.puseTime = puseTime
        this.callBack = () => {
          const timer = setTimeout(() => {
            clearTimeout(timer)
            if (typeof callBack === 'function') callBack()
          }, 150);
        }
        this.seek(actionTime)
      }
      // 音频播放
      play() {
        this.InnerAudioContext.play()
      }
      // 音频暂停
      pause() {
        this.InnerAudioContext.pause()
      }
      // 音频时间跳转 - 跳转的时间，单位 s。精确到小数点后 3 位
      seek(Time) {
        this.InnerAudioContext.seek(Time)
      }
      // 音频停止
      stop() {
        this.InnerAudioContext.stop()
      }
      // 销毁 音频播放实例
      destroy() {
        this.InnerAudioContext.stop()
        this.InnerAudioContext.offCanplay()
        this.InnerAudioContext.offStop()
        this.InnerAudioContext.offEnded()
        this.InnerAudioContext.offError()
        this.InnerAudioContext.offPlay()
        this.InnerAudioContext.offPause()
        this.InnerAudioContext.offSeeked()
        this.InnerAudioContext.offSeeking()
        this.InnerAudioContext.offTimeUpdate()
        this.InnerAudioContext.destroy()
      }
    }
    return new AudioManage()
  }

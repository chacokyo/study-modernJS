function throttle(f, ms) {
  let isThrottled = false // 쓰로틀 상태
  let savedArgs, savedThis // 마지막 호출 저장

  function wrapper(...args) {
    if (isThrottled) {
      // 쓰로틀 중이면 마지막 호출 저장
      savedArgs = args
      savedThis = this
      return
    }

    // 첫 호출은 즉시 실행
    f.apply(this, args)
    isThrottled = true

    setTimeout(() => {
      isThrottled = false
      // 마지막 호출이 남아있으면 실행
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }

  return wrapper
}

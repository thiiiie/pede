;(function () {
  let CDN_URL = 'https://cdn.widde.io'
  if (window.location.href.includes('disable-widde')) return
  if (window.______widdeLoadded) return
  window.______widdeLoadded = true

  let runned = false
  const hasLVItem = !!window.LS && window.LS.ready && window.LS.ready.then

  // TimeoutFeedVideos(0)
  if (hasLVItem)
    window.LS.ready.then(function () {
      run()
    })
  else {
    Timeout(1500)
    DocumentLoad()
  }

  function Timeout(time) {
    setTimeout(() => {
      run()
    }, time)
  }

  function TimeoutFeedVideos(time) {
    try {
      if (window.location.href.includes('video-commerce'))
        setTimeout(() => {
          run()
        }, time)
      if (window.location.href.includes('carousel'))
        setTimeout(() => {
          run()
        }, time)
    } catch (error) {}
  }

  async function run() {
    if (runned) return
    await waitBody()
    if (document.body) {
      runned = true
      setTimeout(init, 0)
    }
  }
  function init() {
    const script = document.createElement('script')
    script.type = 'module'
    script.src = `${CDN_URL}/${'assets/main.m1a4b1pu1xf.js'}`
    document.body.appendChild(script)
  }

  function waitBody() {
    return new Promise(r => {
      if (document.body) {
        r()
      } else {
        setTimeout(() => {
          waitBody().then(r)
        }, 100)
      }
    })
  }
  function DocumentLoad() {
    if (document.readyState === 'complete') {
      run()
    }
    function bodyLoad() {
      let attempts = 0
      const maxAttempts = 50

      function checkBody() {
        if (document.body) {
          run()
          window.removeEventListener('load', bodyLoad)
        } else if (attempts < maxAttempts) {
          attempts++
          setTimeout(checkBody, 100)
        } else {
          console.warn('widde: body not created')
          window.removeEventListener('load', bodyLoad)
        }
      }
      checkBody()
    }
    function listenerLoad() {
      run()
      document.removeEventListener('load', listenerLoad)
    }

    function listerner(event) {
      if (event.target.readyState === 'complete') {
        run()
        document.removeEventListener('readystatechange', listerner)
      }
    }
    document.addEventListener('readystatechange', listerner)
    window.addEventListener('load', listenerLoad)
    window.addEventListener('load', bodyLoad)
  }
})()

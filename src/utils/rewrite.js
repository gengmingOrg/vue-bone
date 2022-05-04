export default {
  get: (url) => {
    let urlPre = ''
    if (window.osConfig.baseUrl) {
      urlPre = window.osConfig.baseUrl
    }

    if (url.indexOf('/api/') === 0) {
      urlPre = urlPre + url.substring(4)
    } else {
      urlPre = urlPre + url
    }

    return urlPre
  }
}

function Preloading(e, n, t, a) {
  return this.loadDoneQueue = [], this.imgLoad = 0, this.img = t || [], this.hasLoad = {}, this.max = this.img.length || 0, this.pre = e, this.ele = n, this.exNum = a, this.srcNum = 0, this.isEnd = !1, this
}
Preloading.prototype.createImg = function (e) {
  var n = this,
    t = n.img.shift()
  if (!t) return n.loadDoneQueue.push("Empty"), void n.check()
  if (t = t.indexOf("://") > -1 ? t : this.pre + t, n.imgLoad++, n.hasLoad[t]) return n.loadDoneQueue.push("hasLoadSrc"), n.check(), void(n.hasLoad[t] = !0)
  var a = new Image
  a.src = t, a.setAttribute("crossOrigin", "anonymous"), a.onload = function () {
    n.loadDoneQueue.push(a), n.check()
  }, a.onerror = function () {
    n.loadDoneQueue.push(a), n.check()
  }
}, Preloading.prototype.preonLoad = function (e) {
  var n = this
  n.loadDoneQueue.push("preonLoad"), n.hasLoad[e.src] = !0, n.check(!0), n.exNum, n.srcNum++
}, Preloading.prototype.check = function (e) {
  var n = this
  if (!n.isEnd) {
    var t = n.exNum || n.srcNum,
      a = n.max + t,
      o = n.loadDoneQueue.length,
      r = parseInt(o / a * 100)
    r = r > 100 ? 100 : r, $(n.ele).html(r + "%"), n.loadingCallback && n.loadingCallback(r), e || (n.imgLoad >= n.max ? o >= a && (n.isEnd = !0, n.doneCallback && n.doneCallback()) : n.createImg())
  }
}, Preloading.prototype.loading = function (e) {
  return this.loadingCallback = e, this
}, Preloading.prototype.run = function () {
  var e = this
  if (!e.isEnd) return e.img && e.img.length ? e.createImg() : ($(e.ele).html(parseInt(100) + "%"), e.loadingCallback && e.loadingCallback(100), e.isEnd = !0, e.doneCallback && e.doneCallback()), e
}, Preloading.prototype.done = function (e) {
  return this.doneCallback = e, this
}
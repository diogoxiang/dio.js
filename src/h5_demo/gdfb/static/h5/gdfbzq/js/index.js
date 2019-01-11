function randomNum(e, t) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * e + 1, 10)
    case 2:
      return parseInt(Math.random() * (t - e + 1) + e, 10)
    default:
      return 0
  }
}

function sel(e) {
  e.on("scroll.elasticity", function (e) {
    e.preventDefault()
  }).on("touchmove.elasticity", function (e) {
    e.preventDefault()
  })
}

function shEle(e, t, n, o) {
  n = n || "", o = o || n, e && $("." + e).attr("class", e + " animated fadeIn " + n), t && ($("." + t).attr("class", t + " animated fadeOut " + o), setTimeout(function () {
    $("." + t).attr("class", t + " hide " + o)
  }, 500))
}

function hideShare() {
  $(".share").hide()
}

function showShare() {
  $(".share").show()
}

function play() {
  $(".ploading").addClass("hide"), debug ? ($(".p2").fadeIn(), swp(), p1()) : ($(".p2").fadeIn(), swp(), p1())
}

function swp() {
  mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: !1,
    parallax: !0,
    autoplay: !1,
    on: {
      slideChangeTransitionEnd: function () {
        $(".slideT,.p4txt").hide(), $(".swiper-button-prev").show(), $(".slide" + (this.activeIndex + 1) + "t").show(), 3 === this.activeIndex && ($(".p4txt").show(), $(".swiper-button-prev").hide())
      }
    }
  })
}

function init() {
  map = new AMap.Map("map", {
    resizeEnable: !0
  }), map.plugin(["AMap.Geolocation", "AMap.Geocoder"], function () {
    geocoder = new AMap.Geocoder({
      city: ""
    }), geolocation = new AMap.Geolocation({
      enableHighAccuracy: !0,
      timeout: 1e4,
      buttonPosition: "RB"
    }), map.addControl(geolocation), geolocation.getCurrentPosition(), AMap.event.addListener(geolocation, "complete", onComplete), AMap.event.addListener(geolocation, "error", onError)
  }), AMap.service("AMap.PlaceSearch", function () {
    placeSearch = new AMap.PlaceSearch({
      pageSize: 5,
      pageIndex: 1,
      city: ""
    })
  }), AMap.plugin(["AMap.Autocomplete"], function () {
    var e = new AMap.Autocomplete({
      city: "",
      input: "tipinput"
    })
    AMap.event.addListener(e, "select", function (e) {
      etxt = e.poi.district, endAdd = [e.poi.location.lng, e.poi.location.lat], getPosAddr(endAdd, "ecity", "tipinput")
    })
    var t = new AMap.Autocomplete({
      city: "",
      input: "stipinput"
    })
    AMap.event.addListener(t, "select", function (e) {
      stxt = e.poi.district, startAdd = [e.poi.location.lng, e.poi.location.lat], getPosAddr(startAdd, "scity", "stipinput")
    })
  })
}

function onComplete(e) {
  var t = ["定位成功"]
  t.push("经度：" + e.position.getLng()), t.push("纬度：" + e.position.getLat()), address = [e.position.getLng(), e.position.getLat()], startAdd = address, posFail = !1, geocoder.getAddress(address, function (e, t) {
    if ("complete" == e) {
      var n = t.regeocode.addressComponent
      city.scity = n.province + n.city, $(".startpos").val(n.city)
    } else posFail = !0, console.log("失败：", e, t)
  })
}

function getPosAddr(e, t, n, o) {
  geocoder.getAddress(e, function (e, a) {
    if ("complete" == e) {
      var i = a.regeocode.addressComponent
      city[t] = i.province + i.city, $("#" + n).val(i.city || i.province), o && calc()
    } else o && ($(".popInner2txt").html("亲，请输入<br/>正确的当前城市名字哦！"), showPopInner2()), console.log("失败：", e, a)
  })
}

function getPlacePos(e, t, n) {
  placeSearch.search(e, function (e, o) {
    if ("complete" == e) {
      var a = o.poiList.pois
      a.length > 0 ? "scity" === t ? (startAdd = [a[0].location.lng, a[1].location.lat], city[t] = a[0].name, $("#" + n).val(city[t]), getPosAddr(startAdd, t, n, !0)) : (endAdd = [a[0].location.lng, a[1].location.lat], city[t] = a[0].name, $("#" + n).val(city[t]), getPosAddr(endAdd, t, n, !0)) : ($(".popInner2txt").html("亲，请输入<br/>正确的当前城市名字哦！"), showPopInner2())
    } else $(".popInner2txt").html("亲，请输入<br/>正确的当前城市名字哦！"), showPopInner2(), console.log("失败：", e, o)
  })
}

function onError(e) {
  posFail = !0, console.log("定位失败：", e)
}

function calc() {
  $("input").blur()
  var e = $("#stipinput").val(),
    t = $("#tipinput").val()
  return $(".upMask").fadeIn(), e.length < 2 ? ($(".popInner2txt").html("亲，请输入<br/>正确的当前城市名字哦！"), void showPopInner2()) : t.length < 2 ? ($(".popInner2txt").html("亲，请输入<br/>正确的家乡城市名字哦！"), void showPopInner2()) : startAdd.length < 2 || !city || !city.scity ? void(e.length > 1 && getPlacePos(e, "scity", "stipinput")) : endAdd.length < 2 || !city || !city.ecity ? void(t.length > 1 && getPlacePos(t, "ecity", "tipinput")) : void chk()
}

function chk() {
  $(".upMask").fadeIn(), $.ajax({
    url: "lgbnzjAjax",
    type: "POST",
    data: {
      context: $("#name").val()
    },
    success: function (e, t) {
      $(".upMask").fadeOut()
      var n = JSON.parse(e)
      if (n.code && 200 == n.code) {
        var o = new AMap.LngLat(startAdd[0], startAdd[1]),
          a = new AMap.LngLat(endAdd[0], endAdd[1]),
          i = []
        i.push(o), i.push(a)
        var p = Math.round(AMap.GeometryUtil.distanceOfLine(i))
        distantPos = change(p), p5()
      } else $(".popInner2txt").html(n.errmsg), showPopInner2()
    },
    error: function () {
      $(".upMask").fadeOut(), $(".popInner2txt").html("提交失败，请重试."), showPopInner2()
    }
  })
}

function change(e) {
  return e && e > 1e3 ? parseInt(e / 1e3) + "公里" : e + "米"
}

function p1() {
  setTimeout(function () {
    scrollele = new BScroll(document.getElementById("pop"), {
      scrollY: !0,
      probeType: 3,
      click: !0,
      disableTouch: !1,
      bounce: !1,
      useTransition: !1
    })
  }, 20)
}

function showPopInner2() {
  $(".upMask").fadeOut(), $(".popInner").hide(), $(".popInner2").show()
}

function hidePopInner2() {
  $(".popInner2").hide(), $(".popInner").show()
}

function showPop() {
  $(".pop").show()
}

function mapPos() {
  $(".posAbs").remove()
  var e = ""
  shanPos.map(function (t, n) {
    e += '<div id="pos_' + n + '" class="posAbs pos_abs flex_row_ccenter" style="left:' + t.x / 100 + "rem;top:" + t.y / 100 + 'rem;">' + t.name + "</div>"
  }), $(e).insertBefore($(".posTxt"))
}

function setRndPos() {
  var e = randomNum(0, shanPos.length - 1)
  $(".cur").removeClass("cur"), $(".posAbs").eq(e).addClass("cur")
}

function randCity() {
  timer && clearInterval(timer), curtime = (new Date).getTime(), timer = setInterval(setRndPos, 60)
}

function p5() {
  $(".pop,.p2,.upMask").fadeOut(), $(".p5").show(), getPic(), randCity(), canvasSet()
}

function getPic() {
  city && city.scity && city.ecity && city.scity === city.ecity ? (pic.bkg = link + "/" + (10 + randomNum(1, 2)) + ".jpg" + type, pic.t = link + "/t" + (10 + randomNum(1, 4)) + ".png" + type) : (pic.bkg = link + "/" + randomNum(1, 4) + ".jpg" + type, pic.t = link + "/t" + randomNum(1, 5) + ".png" + type)
}

function canvasSet() {
  var e = $("#name").val() || "匿名"
  if (!e.length) return void alert("请输入您的名字")
  var t = 2 * document.documentElement.clientWidth / 750,
    n = $(".ewm img").attr("src"),
    o = 1.6 * t,
    a = 100 * o,
    i = document.getElementById("canvas"),
    p = i.getContext("2d"),
    r = 625 * o,
    c = 995 * o
  i.width = r, i.height = c
  var s = new Image
  s.src = pic.bkg, s.width = r, s.height = c, s.onload = function () {
    p.drawImage(s, 0, 0, r, c), p.font = 30 * o + "px Microsoft YaHei bolder", p.fillStyle = "#fffcb7", p.textAlign = "right", p.textBaseline = "top", p.fillText(e + " 现在 " + $("#stipinput").val(), 600 * o, 80 * o), p.fillText("离家乡 " + $("#tipinput").val(), 600 * o, 118 * o), p.font = 40 * o + "px Microsoft YaHei bolder", p.fillStyle = "#55b9ff", p.fillText(distantPos, 600 * o, 160 * o)
    var t = new Image
    t.src = pic.t, t.width = 441 * o, t.height = 609 * o, t.onload = function (e) {
      p.textBaseline = "top"
      var r = 50 * o,
        c = 441 * o,
        s = 609 * o
      p.drawImage(t, -r, 0, c, s)
      var l = new Image
      l.src = n, l.width = a, l.height = a, p.rect(10 * o, 858 * o, a + 20 * o, a + 20 * o), p.fillStyle = "#ffffff", p.fill(), l.onload = function () {
        p.textBaseline = "top", p.drawImage(l, 20 * o, 868 * o, a, a)
        var e = i.toDataURL("image/png", 1)
        i.style.display = "none", $("#pset").attr("src", e).fadeIn(), (new Date).getTime() - curtime > 3e3 ? ($(".p5").fadeOut(), $(".p6").fadeIn(), clearInterval(timer)) : setTimeout(function () {
          $(".p5").fadeOut(), $(".p6").fadeIn(), clearInterval(timer)
        }, 3e3 - ((new Date).getTime() - curtime))
      }
    }
  }
}

function getQueryVariable(e) {
  for (var t = window.location.search.substring(1), n = t.split("&"), o = 0; o < n.length; o++) {
    var a = n[o].split("=")
    if (a[0] == e) return a[1]
  }
  return !1
}
$(function () {
  new QRCode(document.getElementById("ewm"), {
    text: document.URL,
    width: 300,
    height: 300,
    colorDark: "#6d6e61",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  })
})
var u = navigator.userAgent,
  isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1,
  voicebg = document.getElementById("song")
document.addEventListener("WeixinJSBridgeReady", function () {
  voicebg.play(), voicebg.volume = .85
}, !1), $("#music").click(function () {
  "on" == $(this).attr("class") ? ($(this).attr("class", "off"), document.getElementById("song").pause()) : ($(this).attr("class", "on"), document.getElementById("song").play())
}), sel($("body"))
var txt3Num = randomNum(1, 5e5)
$(".txt3Num").text(txt3Num)
var curShow = null,
  type = "?t=2000",
  link = $(".link").val()
top.preload = new Preloading(link + "/", ".loadingTxt", ["loading.gif" + type, "bkg.jpg" + type, "cabctp.png" + type, "cjlbtn.png" + type, "down.png" + type, "fhbtn.png" + type, "gdnyewm.png" + type, "gznxewm.png" + type, "gzwmbtn.png" + type, "kscjbtn.png" + type, "musicoff.png" + type, "musicon.png" + type, "p1bkg.jpg" + type, "p1txt1.png" + type, "p1txt2.png" + type, "p1txt3.png" + type, "p2bkg.jpg" + type, "p2txt1.png" + type, "p2txt2.png" + type, "p2txt3.png" + type, "p3bkg.jpg" + type, "p3txt1.png" + type, "p3txt2.png" + type, "p3txt3.png" + type, "p4bkg.jpg" + type, "p4popbkg.png" + type, "p4txt.png" + type, "p5bkg.jpg" + type, "share.jpg" + type, "12.jpg" + type, "t1.png" + type, "t2.png" + type, "t3.png" + type, "t4.png" + type, "t5.png" + type, "t11.png" + type, "t12.png" + type, "t13.png" + type, "t14.png" + type], 0).loading(function (e) {}).done(play).run()
var debug = 0,
  scrollele, mySwiper, address = [],
  startAdd = [],
  endAdd = [],
  stxt = "",
  etxt = "",
  distantPos = "0米",
  city = {
    scity: null,
    ecity: null
  },
  pic = {
    bkg: null,
    t: null
  },
  map, geolocation, posFail = !1,
  placeSearch, geocoder, scrollele, shanPos = [{
    x: 508,
    y: 725.1,
    name: "广州"
  }, {
    x: 503,
    y: 640.1,
    name: "长沙"
  }, {
    x: 595,
    y: 669.1,
    name: "福州"
  }, {
    x: 603,
    y: 603.1,
    name: "杭州"
  }, {
    x: 508,
    y: 534.1,
    name: "郑州"
  }, {
    x: 409,
    y: 625.1,
    name: "重庆"
  }, {
    x: 521,
    y: 603.1,
    name: "武汉"
  }, {
    x: 376,
    y: 594.1,
    name: "成都"
  }, {
    x: 378,
    y: 511.1,
    name: "兰州"
  }, {
    x: 192,
    y: 595.1,
    name: "拉萨"
  }, {
    x: 349,
    y: 689.1,
    name: "昆明"
  }, {
    x: 413,
    y: 666.1,
    name: "贵阳"
  }, {
    x: 433,
    y: 732.1,
    name: "南宁"
  }, {
    x: 465,
    y: 779.1,
    name: "海口"
  }, {
    x: 585,
    y: 566.1,
    name: "南京"
  }, {
    x: 556,
    y: 577.1,
    name: "合肥"
  }, {
    x: 441,
    y: 549.1,
    name: "西安"
  }, {
    x: 34,
    y: 500.1,
    name: "西宁"
  }, {
    x: 198,
    y: 363.1,
    name: "乌鲁木齐"
  }, {
    x: 414,
    y: 473.1,
    name: "银川"
  }, {
    x: 494,
    y: 489.1,
    name: "太原"
  }, {
    x: 556,
    y: 506.1,
    name: "济南"
  }, {
    x: 518,
    y: 475.1,
    name: "石家庄"
  }, {
    x: 539,
    y: 440.1,
    name: "北京"
  }, {
    x: 551,
    y: 458.1,
    name: "天津"
  }, {
    x: 619,
    y: 413.1,
    name: "沈阳"
  }, {
    x: 639,
    y: 376.1,
    name: "长春"
  }, {
    x: 638,
    y: 340.1,
    name: "哈尔滨"
  }, {
    x: 478,
    y: 424.1,
    name: "呼和浩特"
  }, {
    x: 528,
    y: 737.1,
    name: "香港"
  }, {
    x: 505,
    y: 746.1,
    name: "澳门"
  }, {
    x: 613,
    y: 589.1,
    name: "上海"
  }, {
    x: 624,
    y: 685.1,
    name: "台北"
  }]
mapPos()
var timer = null,
  curtime = 0,
  urlType = getQueryVariable("ctype") || "gdfb"
$("." + urlType).show()
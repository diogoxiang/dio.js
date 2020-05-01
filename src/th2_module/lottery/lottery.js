/**
 *  done
 *  @author diogoxiang@qq.com
 *  @time   2020-3-17 11:6:41
 *  主要用于 显示 活动已结束， 活动未开始
 */
require([
        "vue",
        "common",
        "extend",
        "apiData",
        "dialog",
        "wx",
        "mixins",
        "vDialog",
        "vue-marquee"
    ],
    function (Vue, app, ext, api, dialog, wx, mixins, vDialog) {
        let WIN = window,
            DOC = document;
        const HEIGTH = WIN.innerHeight > 0 ? WIN.innerHeight : DOC.documentElement.clientHeight;

        let num = 0,
            lotteryTimes = 1 //不刷新页面累计抽奖次数;
        let time = 4; //大转盘动画时间
        let circle = 4 * 360; //转动圈数
        var Degrees = 0; //保存上一个奖品随机的角度
        let degrees = ""; //奖品对应奖盘的随机角度
        let animationGet = ''; //大转盘动画样式
        let temp = []; //奖品列表转换成id数组


        var that, vm;

        ext.wxIntercept((barData, wxLogin) => {
            vm = new Vue({
                el: "#app",
                mixins: [mixins],
                components: {
                    vDialog
                },
                data: {
                    time: 0,
                    scrollWin: [],
                    timeText: 1,
                    turntableFlag: false, //禁止点击屏幕开关，点击抽奖true中奖结果弹窗出来false
                    animateFlag: true, //防止切换白屏动画
                    trophyLimit: false, //中奖上限弹窗
                    pointlessFlag: false, //积分不足弹窗
                    prizePopupFlag: false, //中奖弹窗
                    actionTime: 1, //活动状态，1进行中，2已结束
                    lotteryArr: [{
                            prizeName: "奖品001",
                            logoUrl: "http://placehold.it/200x200?text=200x200-1"
                        },
                        {
                            prizeName: "奖品002",
                            logoUrl: "http://placehold.it/200x200?text=200x200-1"
                        },
                        {
                            prizeName: "奖品003",
                            logoUrl: "http://placehold.it/200x200?text=200x200-1"
                        },
                        {
                            prizeName: "奖品004",
                            logoUrl: "http://placehold.it/200x200?text=200x200-1"
                        },
                        {
                            prizeName: "奖品005",
                            logoUrl: "http://placehold.it/200x200?text=200x200-1"
                        },
                        {
                            prizeName: "奖品006",
                            logoUrl: "http://placehold.it/200x200?text=200x200-1"
                        }

                    ], //奖品列表
                    lotteryPoint: '', //抽奖积分
                    prizeIndex: '', //中奖下标
                    prizeType: '', //中奖类型
                    prizeName: '', //奖品
                    ext: '', //小游戏地址
                    winId: '', //奖品id
                    screenH: HEIGTH,
                    process: 0, // 整体的进度
                    curIndex: "", // 当前的页码
                    showJoin: false,
                    lng: "",
                    lat: "",
                    sendVal: false,
                    dialogConfig: {
                        type: 1, // 类型 1 活动规则
                        title: "活动规则",
                        imgtype: '',
                        content: "", // 支持html 的格式
                        btntext: "我知道了"
                    },
                    callbackfun: "",
                    gtime: app.getValue("type") // 活动是开始还是结束  1:未开始 2:已结束  3: 维护中
                },
                created() {
                    // console.log(this);
                    let lng, lat;


                },
                mounted() {
                    that = this;
                    vm = this;


                    setTimeout(() => {
                        vm.scrollWin = [
                            "恭喜001中10骄子币",
                            "恭喜001中20骄子币",
                            "恭喜001中30骄子币",
                            "恭喜001中40骄子币"
                        ]

                    }, 2000);

                },
                methods: {

                    gamestart() {
                        // doDrwaLottery()
                        turntable(3)
                    },
                    goToLink(url) {
                        app.linkTo(url)
                    }

                },
                computed: {

                }

            })
        }, 2);


        //头部滚动
        function scroll(arr) {
            if ($.isArray(arr) && arr.length > 0) {
                var Winlist = arr.map(function (item, index) {
                    if (!item['phone']) {
                        let obj = "未知";
                        return "恭喜" + "<span class='redColor'>" + obj + "</span>" + "获得" + "<span class='redColor'>" + item["prizeName"] + "</span>";
                    } else {
                        var phone = item['phone'].substring(0, 3) + "****" + item['phone'].substring(7, 11);
                        return "恭喜" + "<span class='redColor'>" + phone + "</span>" + "获得" + "<span class='redColor'>" + item["prizeName"] + "</span>";
                    }
                });
                vm.scrollWin = Winlist;
            } else if (arr == 1) {
                vm.scrollWin = ['活动已结束'];
            } else {
                vm.scrollWin = ['暂无中奖数据'];
            }
        }

        /* ...........................大转盘抽奖........................................ */
        let turntable = (key) => {
            degrees = 60 * (key - 1); //每个奖品停在在10度到50度之间（一个奖品60度）
            console.log(degrees)
            if (lotteryTimes == 1) {
                num = circle - degrees;
                console.log("diyisi" + num)
                lotteryTimes += 1;
            } else {
                num = num + circle - degrees + Degrees;
                console.log(num);
            }
            Degrees = degrees;
            animationGet = {
                'transition': 'All ' + time + 's cubic-bezier(0.25, 0.1, 0.1, 1)',
                '-webkit-transition': 'All ' + time + 's cubic-bezier(0.25, 0.1, 0.1, 1)',
                '-moz-transition': ' All ' + time + 's cubic-bezier(0.25, 0.1, 0.1, 1)',
                '-o-transition': 'All ' + time + 's cubic-bezier(0.25, 0.1, 0.1, 1)',
                'transform': 'rotate(' + num + 'deg)',
                '-webkit-transform': 'rotate(' + num + 'deg)',
                '-moz-transform': 'rotate(' + num + 'deg)',
                '-o-transform': 'rotate(' + num + 'deg)',
                '-ms-transform': 'rotate(' + num + 'deg)'
            };
            $('.prize-plate').css(animationGet);
        }
        /* ********************************************************************* */


    });
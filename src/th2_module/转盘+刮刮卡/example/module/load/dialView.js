/**
 * Created by lam on 2016/8/1.
 */

define(['dial'], function (dial) {

    var indexView = SYST.View({
        name: '__ indexView __',
        events: {

        },
        init: function () {
            //转盘转动
            /*dial({'dom':'#pointer'});
            setTimeout(function(){
                dial({'dom':'#pointer','status':'end','end':'90'});
            },2000);*/

            //扇形转动
            dial({'dom':'#pointer','type':'sector','left':'-90','right':'90'});
            setTimeout(function(){
                dial({'dom':'#pointer','type':'sector','status':'end','end':'45'});
            },2000);
        }


    });

    return {};

});
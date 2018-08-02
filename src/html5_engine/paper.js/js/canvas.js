var viewWidth = view._viewSize.width;
var viewHeight = view._viewSize.height;
var viewWidth2 = viewWidth / 2;
var viewHeight2 = viewHeight / 2;
var windowWidth = viewWidth;
var windowHeight = viewHeight;
var windowMin = Math.min(windowWidth, windowHeight);
var windowMax = Math.max(windowWidth, windowHeight);
var maxCircleRadius = 140;
var pinRadius = 5;
var windowSize = new Size(windowWidth - 1, windowHeight - 1);
var centerPoint = new Point(viewWidth2, viewHeight2);
var rotateFactor = 200;
var status = 1;
var circleRadius = maxCircleRadius;
var hintLineRotated = 0;
var perfection = 1;
var drawed = null;
var simplified = null;
var intersections = [];
var center = new Shape.Circle(centerPoint, pinRadius);
center.fillColor = '#fdefa6';
var hintCircle = new Path.Circle(centerPoint, circleRadius);
hintCircle.strokeColor = '#fdefa6';
hintCircle.strokeWidth = 3;
var hintRadiusLine = new Path.Line(centerPoint, new Point(viewWidth2 - circleRadius,
    viewHeight2));
hintRadiusLine.strokeColor = '#fdefa6';
hintRadiusLine.rotate(120, centerPoint);
var hintLongLine = new Path.Line(centerPoint, new Point(viewWidth2 - windowMax, viewHeight2));
hintLongLine.rotate(120, centerPoint);
var text = document.getElementById('text');
var des = document.getElementById('des');
var score = document.getElementById('score');
var result = document.getElementById('result');
var info = document.getElementById('info');
var page2 = document.getElementsByClassName('page2')[0];
var page3 = document.getElementsByClassName('page3')[0];
window.init = function () {
    perfection = 1;
    circleRadius =
        maxCircleRadius;
    status = 1;
    hintLineRotated = 0;
    drawed && drawed.remove();
    drawed = null;
    intersections.forEach(function (x) {
        x.remove();
    });
    intersections = [];
    hintCircle.remove();
    hintCircle = new Path.Circle(centerPoint, circleRadius);
    hintCircle.strokeColor = '#fdefa6';
    hintRadiusLine.remove();
    hintRadiusLine = new Path.Line(centerPoint, new Point(viewWidth2 - circleRadius, viewHeight2));
    hintRadiusLine.strokeColor = '#fdefa6';
    hintRadiusLine.rotate(120, centerPoint);
    hintLongLine.remove();
    hintLongLine = new Path.Line(centerPoint, new Point(viewWidth2 - windowMax, viewHeight2));
    hintLongLine.rotate(120,centerPoint);
    simplified && simplified.remove();
    simplified = null;
}

function onFrame(event) {
    if (event.delta > 0.2) {
        event.delta = 0.2;
    } else if (status === 1) {
        if (hintCircle.visible) {
            opacity = hintCircle.opacity - 2 * event.delta;
            if (opacity < 0) {
                opacity = 0;
                hintCircle.visible = false;
            }
            hintCircle.opacity = opacity;
        }
    } else if (status === 2) {
        if (!hintCircle.visible) {
            hintCircle.visible = true;
        }
        if (hintCircle.opacity < 1) {
            opacity = hintCircle.opacity + 2 * event.delta;
            if (opacity > 1) {
                opacity = 1;
            }
            hintCircle.opacity = opacity;
        } else {
            if (hintLineRotated < 359.9) {
                rotation = event.delta * rotateFactor;
                hintLineRotated += rotation;
                if (hintLineRotated > 360) {
                    rotation = 360 - hintLineRotated + rotation;
                    hintLineRotated = 360;
                }
                 
                hintRadiusLine.rotate(rotation,new Point(viewWidth2, viewHeight2));
                hintLongLine.rotate(rotation,new Point(viewWidth2, viewHeight2));
                var intersectionsDraw = hintLongLine.getIntersections(drawed);
                var intersectionsCircle = hintLongLine.getIntersections(hintCircle);
                var inter1 = centerPoint;
                if (intersectionsDraw.length) {
                    inter1 = intersectionsDraw[0].point;
                }
                var inter2 = inter1;
                if (intersectionsCircle.length) {
                    inter2 = intersectionsCircle[0].point;
                }
                if (!simplified) {
                    simplified = new Path();
                    simplified.visible = false;
                }
                simplified.add(inter1);
                var intersectionLine = new Path.Line(inter1, inter2);
                intersections.push(intersectionLine);
                intersectionLine.strokeWidth = 2;
                intersectionLine.strokeColor = '#b9812c'; //中间填充的黄色斜线 
                var distance = inter1.getDistance(inter2);
                perfection -= distance / circleRadius * rotation / 360;
                if (perfection < 0) {
                    perfection = 0;
                }
                text.style.display = 'none';
                des.style.display = 'none';
                result.style.display = 'block';
                score.innerHTML = (perfection * 100).toFixed(2);
            } else {
                if (!simplified.visible) {
                    simplified.closed = true;
                    simplified.smooth();
                    simplified.strokeColor = '#fdefa6'; //最终画出的黑线 
                    simplified.strokeWidth = 2;
                    simplified.opacity = 0;
                    simplified.visible = true;
                } else if (simplified.opacity < 0.8) {
                    opacity = simplified.opacity + event.delta;
                    if (opacity > 1) {
                        opacity = 1;
                    }
                    simplified.opacity = opacity;
                    drawed.opacity = 1 - opacity;
                } else {
                    var resultScore = parseInt(perfection * 100);
                    var resultText = '';
                    if (resultScore < 80) {
                        resultText = '才艺惊人，不愧是画坛新秀！';
                    } else if (resultScore < 85) {
                        resultText = '很有感觉，极具绘画天赋！';
                    } else if (resultScore < 90) {
                        resultText = '画画小能手，原来你在这里！';
                    } else if (resultScore < 95) {
                        resultText = '传说中的灵魂画手原来是你！';
                    } else {
                        resultText = '我就是完美!完美就是我!';
                    }
                    text.innerHTML = resultTexttext.style.display = 'block';
                    var base64 = "";
                    var canvas1 = document.getElementById("canvas1");
                    base64 = canvas1.toDataURL("image/png", 1);
                    var img = new Image();
                    img.id = 'tempImg'
                    img.src = base64;
                    img.style.position = "absolute";
                    img.style.zIndex = 2;
                    img.style.display = 'none';
                    document.body.appendChild(img);
                    if (resultScore < 80) {
                        setTimeout(function () {
                            $('.page2').fadeOut();
                            $('.page3').fadeIn();
                        }, 1000);
                        setTimeout(addImg, 1500, 1)
                    } else {
                        if (Math.random() >= 0.3) {
                            console.log(Math.random());
                            setTimeout(function () {
                                $('.page2').fadeOut();
                                $('.page4').fadeIn();
                            }, 1000);
                            setTimeout(addImg, 1500, 2)
                        } else {
                            setTimeout(function () {
                                $('.page2').fadeOut();
                                $('.page3').fadeIn();
                            }, 1000);
                            setTimeout(addImg, 1500, 1)
                        }
                    }
                    status = 4;
                }
            }
        }
    }
}

function onMouseDown(event) {
    if (status === 1) {
        if (!drawed) {
            drawed = new Path({
                segments: [event.point],
                strokeColor: '#fdefa6',
            });
            drawed.strokeWidth = 5;
        }
    } else if (status === 3) {
        status = 4;
    }
}

function onMouseDrag(event) {
    if (status === 1) {
        drawed.add(event.point);
    }
}

function onMouseUp(event) {
    if (status === 1) {
        if (drawed) {
            status = 2;
        }
    }
}
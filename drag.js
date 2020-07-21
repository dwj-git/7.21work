function drag(selector) {

    this.ele = document.querySelector(selector);

    this.x = true;

    this.y = true;

    this.side = {

        x1: "",

        x2: "",

        y1: "",

        y2: ""



    }

}

drag.prototype = {

    move(callback) {

        var that = this;

        this.ele.onmousedown = function(ev0) {

            var cx = ev0.clientX;

            var cy = ev0.clientY;

            var ox = that.ele.offsetLeft;

            var oy = that.ele.offsetTop;

            var downx = cx - ox;

            var downy = cy - oy;

            document.onmousemove = function(ev1) {

                moveX = ev1.clientX;

                moveY = ev1.clientY;

                var x = moveX - downx;

                var y = moveY - downy;

                if (that.side.x1 !== "") {

                    if (x < that.side.x1) {

                        x = that.side.x1;

                    }

                }

                if (that.side.x2 !== "") {

                    if (x > that.side.x2) {

                        x = that.side.x2;

                    }

                }

                if (that.side.y1 !== "") {

                    if (y < that.side.y1) {

                        y = that.side.y1;

                    }

                }

                if (that.side.y2 !== "") {

                    if (y > that.side.y2) {

                        y = that.side.y2;

                    }

                }

                if (that.x) {

                    that.ele.style.left = x + "px";

                }

                if (that.y) {

                    that.ele.style.top = y + "px"

                }



                ev1.preventDefault();

            }

            document.onmouseup = function() {

                document.onmousemove = null;

                if (callback) {

                    callback.call(that.ele);

                }



            }

        }

    }



}
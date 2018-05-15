var empty = [0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0,
    0, 0, 0, 0
]; //全局变量，存储数字

/**@description: 开始新游戏*/
function resetGame() {
    resetAllClass();
    get_random_two();
    //键盘监听事件
    document.onkeydown = function(event) {
        var e = event || window.event;
        var keyCode = e.keyCode || e.which;
        switch (keyCode) {
            case 37:
                // alert("left");
                leftPressed();
                break;
            case 38:
                // alert("up");
                // return false;
                if (e.preventDefault()) e.preventDefault();
                upPressed();

                break;
            case 39:
                // alert("right");
                rightPressed();
                break;
            case 40:
                // alert("down");
                if (e.preventDefault()) e.preventDefault();
                downPressed();
                break;
        }
    };

}

// document.getElementsByClassName("ok").onclick = function() {
//     // var node = document.getElementsByClassName("game-message");
//     // node.innerHTML = "hello";
//     // // node.style.display = "none";
//     // // node.style.zIndex = "-1";
//     alert("click sucess");

// };
/**
 * @description:按下ok按钮触发
 */
function okclick() {
    // document.getElementsByClassName("game-message")[0].innerHTML = "Success";
    document.getElementsByClassName("game-info")[0].style.display = "none";

}

function restart() {
    document.getElementsByClassName("game-info")[0].style.display = "none";
    resetGame();
}

/**@description 在没有文本的地方随机出现一个2 */
function get_random_one() {
    var arr = [];
    var fill = 0;
    var pass = false;
    //获得一个没有数字的序号集合
    for (var i = 0; i < empty.length; i++) {
        if (empty[i] == 0) {
            arr.push(i);
        } else {
            fill++;
            if (empty[i] == 2048) {
                pass = true;
            }
        }

    }
    var max = arr.length;
    var index = Math.floor(Math.random() * max);
    empty[arr[index]] = 2;
    updatePanel();
    // return arr[index];
    //游戏失败
    if (fill == 16) {
        alert("Failed");
        // document.getElementsByClassName("cell")[0].className = "cell opacity";
        // document.getElementsByClassName("header")[0].className = "heander opacity";
        // document.getElementsByClassName("above-cell")[0].className = "above opacity";
        // document
        // document.getElementsByClassName("game-message")[0].innerHTML = "Failed!";
        // document.getElementsByClassName("game-info")[0].style.display = "inline";
    }
    //游戏成功
    if (pass) {
        alert("Success!");
        // document.getElementsByClassName("game-message")[0].innerHTML = "Success!";
        // document.getElementsByClassName("game-info")[0].style.display = "block";

    }
}

/**@description 随机生成两个2 */
function get_random_two() {
    var arr = [];
    var num = []; //随机数序列
    for (var i = 1; i <= 15; i++) {
        arr.push(i);
    }
    arr.sort(function() {
        return 0.5 - Math.random();
    });
    var index = Math.floor(Math.random() * 16);
    num.push(arr[index]);
    num.push(arr[(index + 1) % 15]);
    // return num;
    var list = document.getElementsByClassName("cell-grid");
    for (var i = 0; i < num.length; i++) {
        var item = num[i];
        empty[item] = 2;
    }
    updatePanel();
    // alert(empty.toString());
}

//清除节点样式，重置为原始样式
function resetClass(node) {
    node.className = "cell-grid";
}

/**@description 重置格子，分数，empty数组*/
function resetAllClass() {
    document.getElementById("score").value = 0; //重置分数
    //重置empty数组
    for (var i = 0; i < empty.length; i++) {
        empty[i] = 0;
    }
    //重置格子
    // var list = document.getElementsByClassName("cell-grid");
    // console.log(list.length);
    // for (var i = 0; i < list.length; i++) {
    //     list[i].className = "cell-grid";
    //     list[i].innerHTML = "";
    // }
    updatePanel();
}

/**@description 更新面板 */
function updatePanel() {
    var list = document.getElementsByClassName("cell-grid");

    for (var i = 0; i < list.length; i++) {
        list[i].className = changeClass(empty[i]);
        if (empty[i] == 0) {
            list[i].innerHTML = "";
        } else {

            list[i].innerHTML = empty[i];

        }
    }


}

/**@description 根据数字返回className */
function changeClass(num) {
    var finalName;
    switch (num) {
        case 2:
            finalName = "cell-grid two";
            break;
        case 4:
            finalName = "cell-grid four";
            break;
        case 8:
            finalName = "cell-grid eight";
            break;
        case 16:
            finalName = "cell-grid onesix";
            break;
        case 32:
            finalName = "cell-grid threetwo";
            break;
        case 64:
            finalName = "cell-grid sixfour";
            break;
        case 128:
            finalName = "cell-grid onetwoeight";
            break;
        case 256:
            finalName = "cell-grid twofivesix";
            break;
        case 512:
            finalName = "cell-grid fiveonetwo";
            break;
        case 1024:
            finalName = "cell-grid onezerotwofour";
            break;
        case 2048:
            finalName = "cell-grid twozerofoureight";
            break;
        default:
            finalName = "cell-grid";
            break;
    }
    return finalName;
}

//增加class，变换样式
function addClass(node, class_name) {
    node.className = "cell-grid" + " " + class_name;
}




//方向向左-被按下时
function leftPressed() {
    for (var i = 0; i < empty.length; i++) {
        if (i % 4 == 0) {
            for (var j = 0; j < 3; j++) {
                leftmove(i, 4);
                updatePanel();
                leftCombineSame(i, 4);
                updatePanel();
            }
        }
    }
    // alert(empty.toString());
    //生成随机数
    get_random_one();

}

/**@description 向左移动 */
function leftmove(start, len) {
    for (var i = start; i < start + len; i++) {
        if (empty[i] == 0) {
            // document.write("i=" + i + "<br>");
            for (var t = i + 1; t < start + len; t++) {
                if (empty[t] != 0) {
                    // document.write("t=" + t + "<br>");
                    empty[i] = empty[t];
                    empty[t] = 0;
                    break;
                }
            }
        }
    }
}

/**@description 向左合并相同的数字 */
function leftCombineSame(start, len) {
    for (var i = start; i < start + len - 1; i++) {
        var t = i + 1;
        if (empty[i] == empty[t]) {
            empty[i] *= 2;
            empty[t] = 0;
        }
    }
    // document.write(empty.toString());
}


/**@description 方向向上-被按下时*/
function upPressed() {
    for (var i = 0; i < 3; i++) {
        upmove();
        updatePanel();
        upCombine();
        updatePanel();
    }
    //生成随机数
    get_random_one();
}

/**@description 向上移动*/
function upmove() {
    for (var i = 0; i < 4; i++) {
        for (var j = i; j <= i + 12; j += 4) {
            if (empty[j] == 0) {
                for (var k = j + 4; k <= i + 12; k += 4) {
                    if (empty[k] != 0) {
                        empty[j] = empty[k];
                        empty[k] = 0;
                        break;
                    }
                }
            }
        }
    }
}

/**@description 向上合并*/
function upCombine() {
    for (var i = 0; i < 4; i++) {
        for (var j = i; j < i + 12; j += 4) {
            var t = j + 4;
            if (empty[j] == empty[t]) {
                empty[j] *= 2;
                empty[t] = 0;
            }
        }

    }
}

/**@description 方向向右-被按下时*/
function rightPressed() {
    for (var i = 0; i < empty.length; i++) {
        if ((i + 1) % 4 == 0) {
            for (var j = 0; j < 3; j++) {
                rightmove(i, 4);
                rightCombineSame(i, 4);
            }
        }
    }
    get_random_one();
}

/**@description 向右移*/
function rightmove(start, len) {
    for (var i = start; i >= start - len + 1; i--) {
        if (empty[i] == 0) {
            // document.write("i=" + i + "<br>");
            for (var t = i - 1; t >= start - len + 1; t--) {
                if (empty[t] != 0) {
                    // document.write("t=" + t + "<br>");
                    empty[i] = empty[t];
                    empty[t] = 0;
                    break;
                }
            }
        }
    }
}

/**@description 向右合并相同的数字 */
function rightCombineSame(start, len) {

    for (var i = start; i > start - len + 1; i--) {
        var t = i - 1;
        if (empty[i] == empty[t]) {
            empty[i] *= 2;
            empty[t] = 0;
        }
    }
}

//方向向下-被按下时
function downPressed() {
    for (var i = 0; i < 3; i++) {
        downMove();
        updatePanel();
        downCombine();
        updatePanel();
    }
    get_random_one();

}

/**@description 向下移动*/
function downMove() {
    for (var i = 12; i < 16; i++) {
        for (var j = i; j > i - 12; j -= 4) {
            if (empty[j] == 0) {
                for (var k = j - 4; k >= i - 12; k -= 4) {
                    if (empty[k] != 0) {
                        empty[j] = empty[k];
                        empty[k] = 0;
                        break;
                    }
                }
            }
        }
    }
}

/**@description 向下合并*/
function downCombine() {
    for (var i = 12; i < 16; i++) {
        for (var j = i; j > i - 12; j -= 4) {
            var t = j - 4;
            if (empty[j] == empty[t]) {
                empty[j] *= 2;
                empty[t] = 0;
            }
        }
    }

}
/**
 *添加事件
 * obj:事件对象
 * event：事件
 * fn：事件执行动作
 */

function addEvent(obj,event,fn){
	if(obj.addEventListener){
		obj.addEventListener(event,fn);
	}else{
		obj.attachEvent(event,fn);
	}
}


/**
 * 获取滚动条距离顶部和左侧的距离，兼容IE6+,Firefox,Chrome等
 */
function scroll(){
    // 判断是否有window.pageXOffset  IE9+,firefox,Chrome等
    if (window.pageXOffset){
        return {
            top: pageYOffset,
            left: pageXOffset
        };
    }
    // 再判断是否有声明DTD			IE678,firefox,Chrome等
    else if(document.compatMode == 'BackCompat'){
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
    // 默认使用documentElement
    else{
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }
}
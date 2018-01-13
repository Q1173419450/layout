/*下方跟随*/
var nav = document.getElementsByClassName('nav')[0];
var line = nav.children[0];
var lies = nav.children[1].children;
//console.info(lies);

//触碰事件
	line.current = 0 ;
for(var i=0;i<lies.length;i++){
	console.info(lies[i].children[1])
	addEvent(lies[i],'mouseover',function(){
		this.getElementsByTagName('span')[0].style.display = 'block';
		animation(line,this.offsetLeft);
	});
	addEvent(lies[i],'mouseout',function(){
		this.getElementsByTagName('span')[0].style.display = 'none';
		/*animation(line,line.current);*/
	});
}
	
function animation(obj, target){
        clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var dis = (target - obj.offsetLeft) / 10;
            dis = dis>0?Math.ceil(dis):Math.floor(dis);
            obj.style.left = obj.offsetLeft + dis + 'px';
            if (obj.offsetLeft == target){
                clearInterval(obj.timer);
            }
        }, 20);
    }

/*轮播*/
var imageArray = ['img/phone/1.jpg','img/phone/2.jpg','img/phone/3.jpg','img/phone/4.jpg','img/phone/5.jpg','img/phone/6.jpg','img/phone/7.jpg','img/phone/8.jpg'];
var div = document.getElementsByClassName('carousel')[0];
carousel(div, imageArray, true, true);

/*carousel(document.getElementsByClassName('carousel')[1], [
        'img//p1.jpg',
        'img/p2.jpg',
        'img/p3.jpg',
        'img/p4.jpg',
        'img/p5.jpg',
        'img/p6.jpg',
        'img/p7.jpg',
        'img/p8.jpg'
    ], true, true);*/
   
/*放大镜*/
/*触碰切换图片*/
var pronfoSmall = document.getElementsByClassName('pronfo-small')[0];
var lies = pronfoSmall.children[0].children;
var middle = document.getElementsByClassName('pronfo-middle')[0];
var big = document.getElementsByClassName('pronfo-big')[0];
var bigImg = big.children[0];

function TouchPic(btn,bg,big){
	var obg1 = middle;
	var obg2 = bigImg;
	for(var i=0;i<lies.length;i++){
		addEvent(lies[btn],'mouseover',function(){
			obg1.style.backgroundImage = bg;
			obg2.setAttribute('src',big);
		});
	}
}
TouchPic('0','url(img/phone/middle1.jpg)','img/phone/big1.jpg');
TouchPic('1','url(img/phone/middle2.jpg)','img/phone/big2.jpg');
TouchPic('2','url(img/phone/middle3.jpg)','img/phone/big3.jpg');
TouchPic('3','url(img/phone/middle4.jpg)','img/phone/big4.jpg');
TouchPic('4','url(img/phone/middle5.jpg)','img/phone/big5.jpg');



/*放大镜*/
//获取中图
var middle = document.getElementsByClassName('pronfo-middle')[0];
//获取黄色移动框
var imgShot = document.getElementsByClassName('img-shot')[0];
//获取大图
var big = document.getElementsByClassName('pronfo-big')[0];
var bigImg = big.children[0];
//获取box
var box = document.getElementsByClassName('pronfo-top-pic')[0];
console.info(box)
//鼠标到达小图时，显示黄色框，并移动
addEvent(middle,'mousemove',function(ev){
	e = ev || window.event;
	//console.info(e.clientX + ',' + middle.offsetLeft + ','+ box.offsetLeft)
	var x = e.clientX - box.offsetLeft - imgShot.offsetWidth/2;
	//console.info(x);
	console.info(e.clientY + ',' + middle.offsetTop + ','+ box.offsetTop +',' + box.offsetTop)
	var y = e.clientY + scroll().top - box.offsetTop - imgShot.offsetHeight/2;
	console.info(y)
	//设置黄色框的边界
	if(x< 0 ){
		x = 0;
	}else if(x > box.offsetWidth - imgShot.offsetWidth){
		x = box.offsetWidth - imgShot.offsetWidth;
	}
	if(y<0){
		y = 0;
	}else if(y >box.offsetHeight - imgShot.offsetHeight){
		y = box.offsetHeight - imgShot.offsetHeight;
	}
	
	//确定具体移动位置
	imgShot.style.left = x + 'px';
	imgShot.style.top = y + 'px';
	
	//大图
	percentX = x/box.offsetWidth;
	percentY = y/box.offsetHeight;
	console.info(percentX)
	console.info(percentY);
	left = percentX * bigImg.offsetWidth;
	height = percentY * bigImg.offsetHeight;
	
	if (left > bigImg.offsetWidth - big.offsetWidth){
        left = bigImg.offsetWidth - big.offsetWidth;
    }
	/*if(height > bigImg.offsetHeight - big.offsetHeight){
   	    height = bigImg.offsetHeight - big.offsetHeight;
    }*/
	bigImg.style.left = -left + 'px';
	bigImg.style.top = -height + 'px';
});

addEvent(middle,'mouseenter',function(){
	imgShot.style.display = 'block';
	big.style.display = 'block';
});
addEvent(middle,'mouseleave',function(){
	imgShot.style.display = 'none';
	big.style.display = 'none';
});

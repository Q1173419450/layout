/*点击登录--模态框*/
var signBtn = document.getElementsByClassName('sign-btn')[0];
var signBg = document.getElementsByClassName('sign-bg')[0];
var signInput = document.getElementsByClassName('sign-input')[0];
var signClose = document.getElementsByClassName('icon-guanbi')[0];

//登录按钮
addEvent(signBtn,'click',function(ev){
	//事件兼容
	var e = ev || window.event;
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
	signBg.style.display = 'block';
	signInput.style.display = 'block';
	
});

//关闭按钮
addEvent(signClose,'click',function(ev){
	var e = ev || window.event;
	if(e.stopPropagation){
		e.stopPropagation();
	}else{
		e.cancelBubble = true;
	}
	signBg.style.display = 'none';
	signInput.style.display = 'none';
});

/*结算固定栏*/
var settlement = document.getElementsByClassName('settle-fixed')[0];
var shop = document.getElementsByClassName('shop-specs-can');
var s = shop[shop.length-1];
//滚轮事件
window.onscroll = function(){
	//console.info(scroll().top+','+document.documentElement.clientHeight+','+s.offsetTop+','+s.offsetHeight);
	if(scroll().top+document.documentElement.clientHeight-100 > s.offsetTop+s.offsetHeight){
		settlement.className = 'settlement';
	}else{
		settlement.className = 'settle-fixed';
	}
}

/*全选*/
//获取勾选标签
var choiceAlls = document.getElementsByClassName('choice-all');
/*console.info(choiceAlls);*/
var shopChoices = document.getElementsByClassName('shop-choice');
//console.info(shopChoices);
var choiceSpecials = document.getElementsByClassName('shop-special-choice');
//console.info(choiceSpecials);

var isClick = false;
for(var i=0;i<choiceAlls.length;i++){
	addEvent(choiceAlls[i],'click',function(){
		isClick = !isClick;
	//全选
	for(var i=0; i<choiceAlls.length;i++){
		if(isClick){
			choiceAlls[i].style.backgroundPositionY = '-36px';
		}else{
			choiceAlls[i].style.backgroundPositionY = '-20px';
		}
	}
	for(var j=0;j<shopChoices.length;j++){
		if(isClick){
			shopChoices[j].style.backgroundPositionY = '-36px';
		}else{
			shopChoices[j].style.backgroundPositionY = '-20px';
		}
	}
		
	for(var z=0;z<choiceSpecials.length;z++){
		if(isClick){
			choiceSpecials[z].style.backgroundPositionY = '-36px';
		}else{
			choiceSpecials[z].style.backgroundPositionY = '-20px';
		}
	}
	});
}

//单个商品选择
for(var j=0; j<choiceSpecials.length;j++){
	addEvent(choiceSpecials[j],'click',function(){
		isClick = !isClick;
			if(isClick){
				this.style.backgroundPositionY = '-36px';
			}else{
				this.style.backgroundPositionY = '-20px';
			}
	});
}
//商店选择
for(var z=0;z<shopChoices.length;z++){
	addEvent(shopChoices[z],'click',function(){
		isClick = !isClick;
		if(isClick){
			this.style.backgroundPositionY = '-36px';
            choiceSpecials.style.backgroundPositionY = '-36px';
		}else{
			this.style.backgroundPositionY = '-20px';
            choiceSpecials.style.backgroundPositionY = '-20px';
		}
	});
}

/*规格操作*/
var shopSpecsCan = document.getElementsByClassName('shop-specs-can');
/*var shopSpecialBorder = document.getElementsByClassName('shop-special-border');
var shopSimilar = document.getElementsByClassName('shop-similar');*/

//onmouseover事件
//遍历每个商品
for(var i=0;i<shopSpecsCan.length;i++){
	addEvent(shopSpecsCan[i],'mouseover',function(){
			this.getElementsByClassName('shop-special-border')[0].style.display = 'block';
			this.getElementsByClassName('shop-similar')[0].style.display = 'block';
	});
	addEvent(shopSpecsCan[i],'mouseout',function(){
		this.getElementsByClassName('shop-special-border')[0].style.display = 'none';
		this.getElementsByClassName('shop-similar')[0].style.display = 'none';
	});
}

/*加加，减减*/
var numBorder = document.getElementsByClassName('num-border')[0];
//console.info(numBorder);
//减减按钮
var numReduce = document.getElementsByClassName('num-reduce')[0];
//console.info(numReduce)
//输出按钮
var numInput = document.getElementsByClassName('num-input')[0];
var valInp = numInput.value;
//console.info(valInp);
//console.info(numInput);
//加加按钮
var numAdd = document.getElementsByClassName('num-add')[0];
//console.info(numAdd);
//单价（元）
var shopSpecialCompute = document.getElementsByClassName('shop-special-compute')[0];
var compute = shopSpecialCompute.children[1];
console.info(compute);
//input的change事件
addEvent(numInput,'change',function (ev) {
	e = ev || window.event;
	if(isNaN(this.value)){
		this.value = 1;
	}else if(this.value%1){
		this.value = Math.round(this.value);
	}else if(this.value<1){
		this.value = 1;
	}else{
        this.value = parseInt(this.value);
        compute.innerHTML = this.value * 406 + '.00';
	}
	if(this.value>99){
		this.value = 99;
		alert('最多购买99件');
	}
    if(numInput.value > 1){
        numReduce.style.cursor = 'pointer';
        numReduce.style.backgroundPositionY = '0';
    }
});
//加加的点击事件
addEvent(numAdd,'click',function(){
	//不能超过99
	if(numInput.value >= 99){
        numInput.value = 99;
		alert('不能再加了!');
	}else{
        //点击一次加加实现valInp数字加一
		numInput.value = parseFloat(numInput.value)+1;
        compute.innerHTML = numInput.value * 406 + '.00';
	}
	//放在加一的后面
    if(numInput.value > 1){
        numReduce.style.cursor = 'pointer';
        numReduce.style.backgroundPositionY = '0';
    }
	//获取到conpute的值 * valInp
});

//判断input.value是否大于1，若大于则可以按下
/*if(numInput.value > 1){
    numReduce.style.cursor = 'pointer';
    numReduce.style.backgroundPositionY = '0';
}*/
//减减的点击事件
addEvent(numReduce,'click',function () {
	if(numInput.value<=1){
    	numInput.value = 1;
        numReduce.style.cursor = 'no-drop';
        numReduce.style.backgroundPositionY = '-24px';
    	alert('不能再减了');
	}else{
    	numInput.value = parseFloat(numInput.value)-1;
        compute.innerHTML = numInput.value * 406 + '.00';
	}
});
//点击一次数字实现valInp数字减一
//当低于1时，还是一


	

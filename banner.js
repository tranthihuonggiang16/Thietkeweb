
const banner = document.querySelector(".banner");
const bannerMain = document.querySelector(".banner-main");
const bannerItems = document.querySelectorAll(".banner-item");
const nextBtn = document.querySelector(".banner-next");
const preBtn = document.querySelector(".banner-pre");
let bannerItemWidth = bannerItems[0].offsetWidth;
let bannerLength = bannerItems.length;
let positionX = 0;
let index = 0;
console.log("bannerItemWidth", bannerItemWidth);

function dot() {
    var s="";
    s+='<li class="banner-dot-item active" data-index="0"></li>';
    for(i=1;i<bannerLength;i++) {
        s+='<li class="banner-dot-item" data-index="'+i+'"></li>';
    } 
    document.getElementById("list").innerHTML=s;
}

window.onload = function() {
    dot();
    const dotItems = document.querySelectorAll(".banner-dot-item");

    [...dotItems].forEach((item) =>
        item.addEventListener("click", function(e) {
            [...dotItems].forEach(el=>el.classList.remove("active"));
            e.target.classList.add("active");
            const bannerIndex= parseInt(e.target.dataset.index);
            index=bannerIndex;
            positionX=-index*bannerItemWidth;
            bannerMain.style = 'transform: translateX('+positionX+'px)';
            
        })
    );

    function autoColorClick(){
        handleChangeslide(1);
        active_dot();
    }
    setInterval(autoColorClick,10000);

    function active_dot() {
        [...dotItems].forEach(el=>el.classList.remove("active"));
        dotItems[index].classList.add("active");
    }

    nextBtn.addEventListener("click", function () { 
        handleChangeslide(1);
        active_dot();
    });

    preBtn.addEventListener("click", function () { 
        handleChangeslide(-1);
        active_dot();
    });

    function handleChangeslide (direction) {
        if (direction==1) {
            index++;
            if (index >= bannerLength) {
                index=0;
                positionX = 0;    
            } else positionX = positionX - bannerItemWidth;    
            bannerMain.style = 'transform: translateX('+positionX+'px)';
        } else if (direction == -1) {
            index--;
            if (index < 0) {
                index=bannerLength-1;
                positionX = -((bannerLength-1)*bannerItemWidth);    
            } else positionX = positionX + bannerItemWidth;    
            bannerMain.style = 'transform: translateX('+positionX+'px)';
        }
    }
}


window.addEventListener("resize", function() {
    bannerItemWidth = bannerItems[0].offsetWidth;
    bannerLength = bannerItems.length;
    positionX=-index*bannerItemWidth;
    bannerMain.style = 'transform: translateX('+positionX+'px)';
})
(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	tinyslider();

	


	var sitePlusMinus = function() {

		var value,
    		quantity = document.getElementsByClassName('quantity-container');

		function createBindings(quantityContainer) {
	      var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
	      var increase = quantityContainer.getElementsByClassName('increase')[0];
	      var decrease = quantityContainer.getElementsByClassName('decrease')[0];
	      increase.addEventListener('click', function (e) { increaseValue(e, quantityAmount); });
	      decrease.addEventListener('click', function (e) { decreaseValue(e, quantityAmount); });
	    }

	    function init() {
	        for (var i = 0; i < quantity.length; i++ ) {
						createBindings(quantity[i]);
	        }
	    };

	    function increaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        console.log(quantityAmount, quantityAmount.value);

	        value = isNaN(value) ? 0 : value;
	        value++;
	        quantityAmount.value = value;
	    }

	    function decreaseValue(event, quantityAmount) {
	        value = parseInt(quantityAmount.value, 10);

	        value = isNaN(value) ? 0 : value;
	        if (value > 0) value--;

	        quantityAmount.value = value;
	    }
	    
	    init();
		
	};
	sitePlusMinus();

});

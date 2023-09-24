
// 바디, 헤드 색 태그 코드
//head


//body
var Body = {
    //char_color
    setColor: function(color){
        document.querySelector('body').style.color = color;
		//$('a').css('color',color);
    },//jquery 사용해봄

    //background color
    setBackgroundColor: function(color){
        document.querySelector('body').style.backgroundColor = color;
    }

    /*background image
    setBackgroundImage: function(image)*/
}

function nightDaySystem(self){
    const date = new Date();
    const hour = date.getHours;
	
	if(self.value === 'adaptive_mode'){
	    if((8<hour)&&(hour<19)){
	        Body.setBackgroundColor('none');
	        Body.setColor('none');
			self.value = 'None';
	    }
	    else
	    {
	        Body.setBackgroundColor('black');
	        Body.setColor('white');
			self.value = 'None';

	    }
	}
	else{
		Body.setBackgroundColor(inherit);
		Body.setColor(inherit);
		self.value = 'adaptive_mode';
	}
	//손볼 필요 있음
}

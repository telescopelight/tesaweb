//링크 보여주기

function Showlinks(){
   /* 하이퍼 링크 나열 
   	document.write('<li><a href="/telescopelight/photo/index.html">telescopic Photoes</a></li>');
    document.write('<li><a href="/telescopelight/record/index.html">telescopic Records</a></li>');
    document.write('<li><a href="/telescopelight/art/index.html">telescopic Artsworks</a></li>');
    document.write('<li><a href="/telescopelight/schedule/index.html">Scheduler</a></li>');
    document.write('<li><a href="/telescopelight/codenote/index.html">Code notes</a></li>');*/
	
	// 아이콘식, 배열에 대해 신경써야함
	document.write('<p><a href="/telescopelight/photo/index.html"><image src="/telescopelight/icon/photo.png"width="50"><br>Photo</image></a></p>'); 
	document.write('<p><a href="/telescopelight/record/index.html"><image src="/telescopelight/icon/record.png" width="50"><br>record</Image></a></p>');
	document.write('<p><a href="/telescopelight/art/index.html"><image src="/telescopelight/icon/art.png" width="50"><br>Art</image></a></p>');
	document.write('<p><a href="/telescopelight/schedule/index.html"><image src="/telescopelight/icon/schedule.png" width="50"><br>Schedule</image></a></p>');
	document.write('<p><a href="/telescopelight/codenote/index.html"><image src="/telescopelight/icon/note.png" width="50"><br>Codenote</image></a></p>');
}
 
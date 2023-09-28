//링크 보여주기

function Showlinks(){
   /* 하이퍼 링크 나열 
   	document.write('<span><span><a href="/telescopelight/photo/index.html">telescopic Photoes</a></span>');
    document.write('<span><a href="/telescopelight/record/index.html">telescopic Records</a></span>');
    document.write('<span><a href="/telescopelight/art/index.html">telescopic Artsworks</a></span>');
    document.write('<span><a href="/telescopelight/schedule/index.html">Scheduler</a></span>');
    document.write('<span><a href="/telescopelight/codenote/index.html">Code notes</a></span></span>');*/
	
	// 아이콘식, 배열에 대해 신경써야함
	document.write('<span class="baselink"><a href="/telescopelight/photo/index.html"><image src="/telescopelight/icon/photo.png"width="50"></image><br>Photo</a></span>'); 
	document.write('<span class="baselink"><a href="/telescopelight/record/index.html"><image src="/telescopelight/icon/record.png" width="50"></image><br>record</a></span>');
	document.write('<span class="baselink"><a href="/telescopelight/art/index.html"><image src="/telescopelight/icon/art.png" width="50"></image><br>Art</a></span>');
	document.write('<span class="baselink"><a href="/telescopelight/schedule/index.html"><image src="/telescopelight/icon/schedule.png" width="50"></image><br>Schedule</a></span>');
	document.write('<span class="baselink"><a href="/telescopelight/codenote/index.html"><image src="/telescopelight/icon/note.png" width="50"></image><br>Codenote</a></span>');
}
 
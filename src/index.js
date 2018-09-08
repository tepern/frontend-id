import './styles.sass';

const title = 'Test';

import $ from "jquery"

$(document).ready(function(){
	$('#frame_open').click(function(){
		$('#frame').css('display','block');
	});
	$('#frame_close').click(function(){
		$('#frame').css('display','none');	
	});
});
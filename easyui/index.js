function logout() {
	$.messager.confirm('My Title', 'Are you confirm this?', function(r) {
		if(r) {
			alert('confirmed: ' + r);
		}
	});
}

function addTab(title, url) {
	if($('#tt').tabs('exists', title)) {
		$('#tt').tabs('select', title);
	} else {
		var content = '<iframe scrolling="auto" frameborder="0"  src="' + url + '" style="width:100%;height:100%;"></iframe>';
		$('#tt').tabs('add', {
			title: title,
			content: content,
			closable: true
		});
		$('#tt .tabs li').mouseenter(function() {
			$(this).children().css('color', '#eee');
		});
		$('#tt .tabs li').mouseleave(function() {
			$(this).children().css('color', '#eee');
		});
		$('.tabs .tabs-first').click(function() {
			$('.easyui-accordion p>span').attr('class', 'users-unClick');
		})
	}
}
$('.easyui-accordion>div p').mouseenter(function() {
	$(this).children().addClass('users-Hover');
})
$('.easyui-accordion>div p').mouseleave(function() {
	$(this).children().removeClass('users-Hover');
})

$('.easyui-accordion>div p').click(function() {
	$('p').children().attr('class', 'users-unClick');
	$(this).children().attr('class', 'users-Click');
	$('p').css('background-color', 'transparent').css('color', '#333');
	$(this).css('background-color', 'rgba(249, 223, 223,1)').css('color', 'rgb(191, 42, 37)');
})
$("#tt").tabs({
	fit: true,
	onSelect: function(title, index) {
		$('.easyui-accordion p').each(function() {
			if(title == $(this).text()) {
				$('.easyui-accordion p>span').attr('class', 'users-unClick');
				$(this).children().attr('class', 'users-Click');
				$('p').css('background-color', 'transparent').css('color', '#333');
				$(this).css('background-color', 'rgba(249, 223, 223,1)').css('color', 'rgb(191, 42, 37)');
			}
			if(title == '首页') {
				$('.easyui-accordion p>span').attr('class', 'users-unClick');
				$('p').css('background-color', 'transparent').css('color', '#333');
			}
		})
	}
});
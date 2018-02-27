$(function () {
    $('.easyui-accordion>div p').mouseenter(function () {
        $(this).children().addClass('users-Hover');
    })
    $('.easyui-accordion>div p').mouseleave(function () {
        $(this).children().removeClass('users-Hover');
    })

    $('.easyui-accordion>div p').click(function () {
        $('p').children().attr('class', 'users-unClick');
        $(this).children().attr('class', 'users-Click');
        $('p').css('background-color', 'transparent').css('color', '#ccc');
        $(this).css('background-color', 'rgba(38, 75, 102,1)').css('color', '#fff');
    })
    $(".usersTable").tabs({
        fit: true,
        onSelect: function (title, index) {
            $('.easyui-accordion p').each(function () {
                if (title == $.trim($(this).text())) {
                    $('.easyui-accordion p>span').attr('class', 'users-unClick');
                    $(this).children().attr('class', 'users-Click');
                    $('p').css('background-color', 'transparent').css('color', '#ccc');
                    $(this).css('background-color', 'rgba(38, 75, 102,1)').css('color', '#fff');
                }
                if (title == '首页') {
                    $('.easyui-accordion p>span').attr('class', 'users-unClick');
                    $('p').css('background-color', 'transparent').css('color', '#ccc');
                }
            })
        }
    });
})

function addTab(title, url) {
    if ($('.usersTable').tabs('exists', title)) {
        $('.usersTable').tabs('select', title);
    } else {
        var content = '<iframe scrolling="auto" frameborder="0"  src="' + url +
            '" style="width:100%;height:100%;"></iframe>';
        $('.usersTable').tabs('add', {
            title: title,
            content: content,
            closable: true
        });
        $('.usersTable .tabs li').mouseenter(function () {
            $(this).children().css('color', '#eee');
        });
        $('.usersTable .tabs li').mouseleave(function () {
            $(this).children().css('color', '#eee');
        });
        $('.tabs .tabs-first').click(function () {
            $('.easyui-accordion p>span').attr('class', 'users-unClick');
        })
    }
}

function logout() {
    $.messager.confirm('My Title', 'Are you confirm this?', function (r) {
        if (r) {
            alert('confirmed: ' + r);
        }
    });
}
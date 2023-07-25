// navbar rwd list
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}
// footer_list rwd
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// 彈出式登入
function customizeWindowEvent() {
    var popup_window = document.getElementById("window-container");

    popup_window.style.display = "flex";

    window.onclick = function close(e) {
        if (e.target == popup_window) {
            popup_window.style.display = "none";
        }
    };
}

$(".message a").click(function () {
    $("form").animate({ height: "toggle", opacity: "toggle" }, "fast");
});

// 關閉彈出式登入
function closeForm() {
    document.getElementById("window-container").style.display = "none";
}

// gotop
let requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

document.addEventListener('DOMContentLoaded', function () {
    const goTopButton = document.querySelector('[data-action="gotop"]');
    const windowViewPortHeight = 0; // 一滾動就出現gotop
    let isRequestingAnimationFrame = false;

    if (!goTopButton) {
        return;
    }

    goTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', function () {
        if (!isRequestingAnimationFrame) {
            requestAnimationFrame(filterGoTopButtonVisibility);
            isRequestingAnimationFrame = true;
        }
    });

    function filterGoTopButtonVisibility(timestamp) {
        let windowPageYOffset = window.pageYOffset || document.documentElement.scrollTop;
        if (windowPageYOffset > windowViewPortHeight) {
            goTopButton.classList.add('show');
            isRequestingAnimationFrame = false;
        } else {
            goTopButton.classList.remove('show');
            requestAnimationFrame(filterGoTopButtonVisibility);
        }
    }
})

// 表單-電話限制
function formatPhoneNumber(input) {
    var phoneNumber = input.value.replace(/\D/g, ''); // 移除非數字的文字
    var formattedPhoneNumber = '';

    if (phoneNumber.length > 0) {
        formattedPhoneNumber = phoneNumber.slice(0, 4); // 取前4個數字
        if (phoneNumber.length > 4) {
            formattedPhoneNumber += '-' + phoneNumber.slice(4, 7); // 添加-字和接下来的3個數字
            if (phoneNumber.length > 7) {
                formattedPhoneNumber += '-' + phoneNumber.slice(7, 10); // 添加-字和接下来的3個數字
            }
        }
    }

    input.value = formattedPhoneNumber;
}


$('.both').find('input, textarea').on('keyup blur focus', function (e) {
    var $this = $(this),
        label = $this.prev('label');

    if (e.type === 'keyup') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
        if ($this.val() === '') {
            label.removeClass('active highlight');
        } else {
            label.removeClass('highlight');
        }
    } else if (e.type === 'focus') {
        if ($this.val() === '') {
            label.removeClass('highlight');
        } else if ($this.val() !== '') {
            label.addClass('highlight');
        }
    }
});

$('.tab a').on('click', function (e) {
    $('.getInTouch_form').hide();
    e.preventDefault();

    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');

    target = $(this).attr('href');

    $('.tab-content > div').not(target).hide();

    $(target).fadeIn(600);

});


function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.display === 'none') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

function adjustSectionDisplay(sectionId, displayValue) {
    var section = document.getElementById(sectionId);
    section.style.display = displayValue;
}

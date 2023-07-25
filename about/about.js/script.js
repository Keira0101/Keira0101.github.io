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

// about bg
// $(window).scroll(function (e) {
//     parallax();
// });

// function parallax() {
//     var scrolled = $(window).scrollTop();
//     $('.about_banner').css('top', -(scrolled * 0.15) + 'px');
// }

// 花藝師團隊左右切換
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true
});


// 左右切換RWD
// $(document).ready(function() {
//     // 初始化Slick Slider
//     function initSlider() {
//         var windowWidth = $(window).width();

//         if (windowWidth < 1110) {
//             $('.slider-nav').slick({
//                 slidesToShow: 2,
//                 slidesToScroll: 1,
//                 dots: false,
//                 focusOnSelect: true
//             });
//         } else {
//             $('.slider-nav').slick({
//                 slidesToShow: 3,
//                 slidesToScroll: 1,
//                 dots: false,
//                 focusOnSelect: true
//             });
//         }
//     }

//     // 初始化页面加载时的Slider
//     initSlider();

//     // 监听窗口大小变化，根据条件重新初始化Slider
//     $(window).resize(function() {
//         initSlider();
//     });
// });


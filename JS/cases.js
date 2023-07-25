$('.responsive').slick({

  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [{
      breakpoint: 1512,
      settings: {
          slidesToShow: 4,
          slidesToScroll: 1,

      }

  }, {
      breakpoint: 800,
      settings: {
          slidesToShow: 3,
          slidesToScroll: 1,

          infinite: true,

      }


  }, {
      breakpoint: 600,
      settings: {
          slidesToShow: 2,
          slidesToScroll: 1,

          infinite: true,
          
      }
  }, {
      breakpoint: 480,
      settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

          infinite: true,
      }
  }]
});



const slider = $('.slider').slick('getSlick');
const slideList = slider.$slides;
console.log('slideList', slideList)

let textList = [
    'Dreams of Herbs 香草夢境 \n｜ 白玫瑰、棉花、鈴蘭 ｜\n尺寸: 28cm \n新北林先生: 很滿意成品，與網路上沒有色差，太太收到禮物也超喜歡，感謝店員協助，服務超讚的！',
    'Butterfly Kisses 蝴蝶之吻\n｜ 玫瑰、滿天星、銀菊 ｜\n 尺寸: 30cm \n台北王先生: 花朵顏色鮮艷，質感也很好，包裝非常精致，送給女朋友，她好開心，給你們一個讚！',
    'Sweet Serenity 甜蜜寧靜\n｜ 粉玫瑰、白雛菊、松葉 ｜\n 尺寸: 25cm \n高雄陳先生: 感謝你們按照我特別的要求制作了一束獨特的永生花束，收到時真的驚喜又感動！',
    'Oath of the Rose 瑰麗誓約\n｜ 粉、紅玫瑰、金魚草 ｜\n 尺寸: 35cm \n台南江小姐: 收到訂製永生花束，花朵保持得非常好，而且包裝精美，感謝你們的用心和貼心服務！',
    'Garden of Dreams 夢幻花園\n｜ 玫瑰、棉花、鈴蘭 ｜\n 尺寸: 28cm \n嘉義張小姐: 訂購的永生花束準時送到了，配送員還特別親切地確認地址，非常感謝你們的準時配送！',
    'Rose Garden 玫瑰花園\n｜ 粉玫瑰、白牡丹、滿天星 ｜\n 尺寸: 30cm \n台中李先生: 你們家的永生花束真的很漂亮，大家都在問我是在哪里訂購的，我會推薦你們的！',
]


let firstSlide = $('[data-slick-index="0"]');
firstSlide.find('p').text(textList[0]);


$('.slider').on('afterChange', function (event, slick, currentSlide) {
  let currentElement = slick.$slides.eq(currentSlide);
  let currentText = textList[currentSlide];
  currentElement.find('p').text(currentText);

});


$('.slider').on('beforeChange', function (event, { slideCount: count }, currentSlide, nextSlide) {
  let selectors = `[data-slick-index="${nextSlide}"]`
  $('.slick-now', this).removeClass('slick-now',this);
  $(selectors, this).addClass('slick-now'); 


  let currentSelectors = `[data-slick-index="${currentSlide}"]`

  $(currentSelectors, this).find('p').text('')


});

$('[data-slick-index="0"]').addClass('slick-now'); 






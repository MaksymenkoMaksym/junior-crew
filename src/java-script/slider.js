import $ from "jquery";
import "slick-carousel";

const ANIMATION_TIMING = 500;
const $carouselEl = $('#carousel');
const $reviewsEl = $('[data-reviews]');
const $carouselRangeEl = $('[data-slider-range]');

function renderCarouselRange(_, slick) {
    $carouselRangeEl.text(`${slick.currentSlide + 1}/${slick.slideCount}`);
}

$carouselEl.on('init', renderCarouselRange);
$carouselEl.slick({
    centerMode: true,
    arrows: false,
    centerPadding: '0px',
    infinity:true,
    slidesToShow: 3,
    slidesToScroll:3,
    focusOnSelect: true,
    draggable: false,
    autoplay: false,
    asNavFor:'.comments',
    speed: ANIMATION_TIMING,
    responsive: [
        {
        breakpoint: 767.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }
    ]
});

$carouselEl.on('afterChange', renderCarouselRange);
$carouselEl.on('beforeChange', (e, slick, currSlide, nextSlide) => {
    if (currSlide === nextSlide) return;

    $reviewsEl.addClass('reviews--animation');

    $(`[data-slide]`).each((_, slideEl) => {
        const $slideEl = $(slideEl);
        const currentSlide = $slideEl.attr('data-slide');
            
        $slideEl.toggleClass('slider-carousel__text--active', +currentSlide === nextSlide);
        setTimeout(() => {
            $reviewsEl.removeClass('reviews--animation');
        }, ANIMATION_TIMING);
    });
});

$('.comments').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    infinity:true,
    asNavFor:'.carousel',
  });
  

const BODY_SELECTOR = 'body';

// slider selector block

const SLIDER_SELECTOR = '.slider';
const SLIDER_BTN_SELECTOR = '.slider-block__item-button';
const SLIDER_ITEM_SELECTOR = '.slider-item';
const SLIDER_SUBTITLE_SELECTOR = '.slider-block__item-subtitle';
const SLIDER_VISIBILITY_CLASS = 'slider-block__visibile';

//discount slider selector block 

const DISCOUNT_SLIDER_SELECTOR = '.discount__slider';

//examples slider selector block

const EXAMPLES_SLIDER_SELECTOR = '.examples__slider';

//modal selector block

const CALCULATE_CROSS_SELECTOR = '.calculate__close';
const CALCULATE_BLOCK_SELECTOR = '.calculate';
const CALCULATE_BLOCK_VISIBILITY_CLASS = 'calculate-visible';
const CALCULATE_OVERFLOW_OFF_CLASS = 'overflow-off';
const CALCULATE_BUTTON_SELECTOR = '.calculate__button';
const CALCULATE_LINK_SELECTOR = '.calculate-btn';
const CALCULATE_INFO_SELECTOR = '.calculate__info';





//slider init function

function sliderInit() {
    $(SLIDER_SELECTOR).slick({
        slidesToShow: 6,
        autoplay: true,
        responsive: [{
                breakpoint: 1920,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
};

//dicount slider init function

function discountSliderInit() {
    $(DISCOUNT_SLIDER_SELECTOR).slick({
        slidesToShow: 1,
        autoplay: true,
        dots: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                arrows: false
            }
        }]
    });
};

//dicount slider init function

function examplesSliderInit() {
    $(EXAMPLES_SLIDER_SELECTOR).slick({
        slidesToShow: 2,
        centerPadding: '30rem',
        centerMode: true,
        autoplay: true,
        dots: true,
        responsive: [{
                breakpoint: 1920,
                settings: {
                    centerMode: true,
                    slidesToShow: 1,
                    variableWidth: true
                }
            },
            {
                breakpoint: 1300,
                settings: {
                    centerMode: true,
                    centerPadding: '10rem',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    centerPadding: '5rem',
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '5rem',
                    centerMode: false,
                    slidesToShow: 1,
                    arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                    centerPadding: '5rem',
                    centerMode: false,
                    arrows: false,
                    slidesToShow: 1
                }
            }
        ]
    });
};

//slider hover func 

function sliderHoverInit() {
    $(SLIDER_ITEM_SELECTOR).mouseover(
        function () {
            $(this).find(SLIDER_SUBTITLE_SELECTOR).addClass(SLIDER_VISIBILITY_CLASS);
            $(this).find(SLIDER_BTN_SELECTOR).addClass(SLIDER_VISIBILITY_CLASS);
        }
    );

    $(SLIDER_ITEM_SELECTOR).mouseout(
        function () {
            $(this).find(SLIDER_SUBTITLE_SELECTOR).removeClass(SLIDER_VISIBILITY_CLASS);
            $(this).find(SLIDER_BTN_SELECTOR).removeClass(SLIDER_VISIBILITY_CLASS);
        }
    );
};

//modal block

function calculateInit() {
    $(CALCULATE_CROSS_SELECTOR).click(function () {
        $(CALCULATE_BLOCK_SELECTOR).toggleClass(CALCULATE_BLOCK_VISIBILITY_CLASS);
        $(BODY_SELECTOR).toggleClass(CALCULATE_OVERFLOW_OFF_CLASS);
    });

    $(CALCULATE_BUTTON_SELECTOR).click(function () {
        $(CALCULATE_BLOCK_SELECTOR).toggleClass(CALCULATE_BLOCK_VISIBILITY_CLASS);
        $(BODY_SELECTOR).toggleClass(CALCULATE_OVERFLOW_OFF_CLASS);
    });

    $(CALCULATE_LINK_SELECTOR).click(function () {
        $(CALCULATE_BLOCK_SELECTOR).toggleClass(CALCULATE_BLOCK_VISIBILITY_CLASS);
        $(BODY_SELECTOR).toggleClass(CALCULATE_OVERFLOW_OFF_CLASS);
    });

    $(CALCULATE_BLOCK_SELECTOR).mouseup(function (e) {
        var div = $(CALCULATE_INFO_SELECTOR);
        if (!div.is(e.target) &&
            div.has(e.target).length === 0) {
            $(CALCULATE_BLOCK_SELECTOR).removeClass(CALCULATE_BLOCK_VISIBILITY_CLASS);
            $(BODY_SELECTOR).removeClass(CALCULATE_OVERFLOW_OFF_CLASS);
        }
    });
};

//document ready

$(document).ready(function () {
    sliderInit();
    sliderHoverInit();
    discountSliderInit();
    examplesSliderInit();
    calculateInit();
});
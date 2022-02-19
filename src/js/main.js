let headerBTN = $('.header__btn');
let overlay = $('.overlay');
let close = $ ('.popup__close');
let popupformbtn = $('.popup__form-btn');
let heroBtn = $('.hero__btn');
let tpBTN = $('.training-programs__btn');
let dBTN = $('.diploma__btn');
let subscribeBTN = $('.subscribe__btn');
let adventBTN = $('.advent__btn');
let quesBTN = $(".question__btn");

headerBTN.on('click', function () {
        overlay.fadeIn('slow');
});

close.on('click', function () {
   overlay.fadeOut('slow');
});

popupformbtn.on('click', function (e) {
    e.preventDefault();
    overlay.fadeOut('slow');
});

overlay.on('click',function (e) {
    if (e.target.className === 'overlay'){
        overlay.fadeOut('slow');
    }

});

heroBtn.on('click', function () {
    overlay.fadeIn('slow');
});

tpBTN.on('click',function () {
    overlay.fadeIn('slow');
});
dBTN.on('click',function () {
    overlay.fadeIn('slow');
});
subscribeBTN.on('click',function () {
    overlay.fadeIn('slow');
});
adventBTN.on('click',function () {
    overlay.fadeIn('slow');
});
quesBTN.on('click',function () {
    overlay.fadeIn("slow");
});

let ul = $('.review__list');
 ul.on('click', 'li:not(.review__item_active)', function() {
    $(this)
        .addClass('review__item_active').siblings().removeClass('review__item_active')
        .closest('div.review__tabs').find('div.review__tabs-content').removeClass('review__tabs-content_active').eq($(this).index()).addClass('review__tabs-content_active');
});

let owl = $('.owl-carousel');
owl.owlCarousel({
    items:3,
    margin:30,
    dotsContainer: '#dots',
    loop:true,
    boolean:false,
});
$('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
$('.owl-prev').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
});

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});






var map;

DG.then(function () {
    map = DG.map('map', {
        center: [42.878968, 74.595092],
        zoom: 18

    });
    var myIcon = DG.icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/cursors-gestures/100/cursor_10-512.png',
        iconRetinaUrl: 'my-icon@2x.png',
        iconSize: [100, 61],

    });

    DG.marker([50.505, 30.57], {icon: myIcon}).addTo(map);

    DG.marker([42.878968, 74.595092],{icon:myIcon}).addTo(map).bindPopup('Нажми!').bindLabel('Я статическая подсказка!', { static: false });;
});
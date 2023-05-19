const sliderDot = document.getElementsByClassName('slider__dot');

function slider(slide) {
    const sliderItem = document.getElementsByClassName('slider__item');
    const activeItemIndex = Array.from(sliderItem).findIndex(item => item.classList.contains('slider__item_active'));
    const activeDotIndex = Array.from(sliderDot).findIndex(dot => dot.classList.contains('slider__dot_active'));

    sliderItem[activeItemIndex].classList.remove('slider__item_active');
    sliderDot[activeDotIndex].classList.remove('slider__dot_active');

    sliderItem[slide].classList.add('slider__item_active');
    sliderDot[slide].classList.add('slider__dot_active');
}

for (let i = 0; i < sliderDot.length; i++) {
    sliderDot[i].onclick = () => {
        slider(i);
    };
}

document.getElementsByClassName('slider__arrow_next').item(0).onclick = () => {
    const sliderItem = document.getElementsByClassName('slider__item');
    const activeItemIndex = Array.from(sliderItem).findIndex(item => item.classList.contains('slider__item_active'));
    const nextIndex = (activeItemIndex + 1) % sliderItem.length;

    slider(nextIndex);
};

document.getElementsByClassName('slider__arrow_prev').item(0).onclick = () => {
    const sliderItem = document.getElementsByClassName('slider__item');
    const activeItemIndex = Array.from(sliderItem).findIndex(item => item.classList.contains('slider__item_active'));
    const prevIndex = (activeItemIndex - 1 + sliderItem.length) % sliderItem.length;

    slider(prevIndex);
};

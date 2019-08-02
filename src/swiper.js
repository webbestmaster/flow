// @flow

type SwiperOptionsType = {|
    +direction?: 'horizontal' | 'vertical',
    +slidesPerView?: 'auto' | number,
    +freeMode?: boolean,
    +loop?: boolean,
    +watchOverflow?: boolean,
    +roundLengths?: boolean,
    +scrollbar?: {|
        // eslint-disable-next-line id-length
        +el: string,
        +hide?: boolean,
    |},
    +pagination?: {|
        // eslint-disable-next-line id-length
        +el: string,
        +clickable?: boolean,
    |},
    +mousewheel?: boolean,
    +autoplay?: {|
        +delay?: number,
    |},
    +on?: {
        +slideChange?: (() => void) | null,
        +slideChangeTransitionEnd?: (() => void) | null,
    },
|};

declare class Swiper {
    constructor(node: HTMLElement, options: SwiperOptionsType): Swiper,
    destroy(deleteInstance?: boolean, cleanStyles: ?boolean): mixed, // default deleteInstance = true, cleanStyles = true
    slideTo(index: number, speed: number, runCallbacks: () => void): mixed,
    activeIndex: number,
}

declare module 'swiper' {
    declare export default typeof Swiper;
}

declare module 'swiper/dist/js/swiper.min' {
    declare export default typeof Swiper;
}

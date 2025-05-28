export const getSliderSettings = (width) => {
    let slides = 1
    if(width < 500) slides = 1
    else if(width < 600) slides = 2
    else if(width < 700) slides = 3
    else if(width < 1000) slides = 3
    else slides = 4
    let settings = {
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: slides,
        
    };
    return settings
    }
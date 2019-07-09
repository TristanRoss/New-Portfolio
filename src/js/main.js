let welcomeText = document.getElementById("welcome");

anime({
    targets: welcomeText,
    translateY: [
        {value: -50, duration: 0, delay: 200},
        {value: 0, duration: 1000}
    ],
    // easing: 'easeInOutSine',
    // direction: 'reverse'
    // rotate: {
    //     // value: '1turn',
    //     easing: 'easeInOutSine'
    // }
});

let linkedin = document.getElementById("linkedin");

anime({
    targets: linkedin,
    translateY: [
        {value: 0, duration: 0, delay: 100},
        {value: 80, duration: 2000},
        {value: 0, duration: 2000, delay: 2100}

    ],
    translateX: [
        {value: 100, duration: 2000, delay: 2100},
        {value: 0, duration: 2000, delay: 2100},
        {value: 0, duration: 2000}
        
    ],
    easing: 'linear',
    loop: true
});

let github = document.getElementById("github");

anime({
    targets: github,
    translateY: [
        {value: 0, duration: 0, delay: 4100},
        {value: 80, duration: 2000},
        {value: 0, duration: 2000, delay: 2100}
    ],
    translateX: [
        {value: -100, duration: 2000, delay: 2100},
        {value: 0, duration: 2000, delay: 2100}
    ],
    easing: 'linear',
    loop: true
});

let welcomeText = document.getElementById("welcome");

anime({
    targets: welcomeText,
    opacity: 0,
    duration: 8000,
    easing: 'easeInExpo',
    direction: 'reverse'
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


let projOneGit = document.getElementById("projOneGit");

anime({
    targets: projOneGit,
    translateX: [
        {value: 70, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projOneLive = document.getElementById("projOneLive");

anime({
    targets: projOneLive,
    translateX: [
        {value: 130, duration: 0, delay: 200},
        {value: 70, duration: 1000},
        {value: 130, duration: 1000},
        {value: 130, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projTwoGit = document.getElementById("projTwoGit");

anime({
    targets: projTwoGit,
    translateX: [
        {value: -70, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projTwoLive = document.getElementById("projTwoLive");

anime({
    targets: projTwoLive,
    translateX: [
        {value: -118, duration: 0, delay: 200},
        {value: -70, duration: 1000},
        {value: -118, duration: 1000},
        {value: -118, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projThreeGit = document.getElementById("projThreeGit");

anime({
    targets: projThreeGit,
    translateX: [
        {value: 70, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projThreeLive = document.getElementById("projThreeLive");

anime({
    targets: projThreeLive,
    translateX: [
        {value: 130, duration: 0, delay: 200},
        {value: 70, duration: 1000},
        {value: 130, duration: 1000},
        {value: 130, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});




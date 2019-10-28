
let welcomeText = document.getElementById("welcome")
anime({
    targets: welcomeText,
    opacity: [1, 0, 1],
    duration: 4000,
    easing: 'easeInOutSine',
    direction: 'reverse',
    loop: true
});



// anime({
//     targets: welcomeText,
//     translateY: [
//         {value: 0, duration: 0, delay: 2500},
//         {value: 33, duration: 500},
//         {value: 0, duration: 500}
//     ],
//     easing: 'linear',
//     loop: true
// });

let linkedin = document.getElementById("linkedin");

anime({
    targets: linkedin,
    translateY: [
        {value: 0, duration: 0, delay: 2100},
        {value: 80, duration: 2000},
        {value: 0, duration: 2000, delay: 4100}

    ],
    translateX: [
        {value: 100, duration: 2000, delay: 4100},
        {value: 0, duration: 2000, delay: 4100},
        {value: 0, duration: 2000}
        
    ],
    easing: 'linear',
    loop: true
});

let github = document.getElementById("github");

anime({
    targets: github,
    translateY: [
        {value: 0, duration: 0, delay: 6100},
        {value: 80, duration: 2000},
        {value: 0, duration: 2000, delay: 4100}
    ],
    translateX: [
        {value: -100, duration: 2000, delay: 4100},
        {value: 0, duration: 2000, delay: 4100}
    ],
    easing: 'linear',
    loop: true
});

let codeWithUs = document.getElementById("codeWithUs");

anime({
    targets: codeWithUs,
    translateX: [
        {value: 50, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projOneGit = document.getElementById("projOneGit");

anime({
    targets: projOneGit,
    translateX: [
        {value: 50, duration: 1000, delay: 200},
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
        {value: 110, duration: 0, delay: 200},
        {value: 50, duration: 1000},
        {value: 110, duration: 1000},
        {value: 110, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projTwoGit = document.getElementById("projTwoGit");

anime({
    targets: projTwoGit,
    translateX: [
        {value: 110, duration: 0, delay: 200},
        {value: 50, duration: 1000},
        {value: 110, duration: 1000},
        {value: 110, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});


let projTwoLive = document.getElementById("projTwoLive");

anime({
    targets: projTwoLive,
    translateX: [
        {value: 50, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projThreeGit = document.getElementById("projThreeGit");

anime({
    targets: projThreeGit,
    translateX: [
        {value: -110, duration: 0, delay: 200},
        {value: -50, duration: 1000},
        {value: -110, duration: 1000},
        {value: -110, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});

let projThreeLive = document.getElementById("projThreeLive");

anime({
    targets: projThreeLive,
    translateX: [
        {value: -50, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});



let projFourLive = document.getElementById("projFourLive");

anime({
    targets: projFourLive,
    translateX: [
        {value: -50, duration: 1000, delay: 200},
        {value: 0, duration: 1000},
        {value: 0, duration: 1000}
    ],
    easing: 'linear',
    loop: true
});




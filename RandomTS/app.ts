/// <reference path="Random.ts"/>

window.onload = () => {
    var rnd = new Random(1);

    for (var i = 0; i < 10000; i++) {
        var temp = rnd.getInteger();
    }

    var seed = rnd.getSeed();

    if (seed === 399268537) {
        alert('The implementation is correct')
    } else {
        alert('Something is wrong! Expected: 399268537, actual: ' + seed);
    }
};
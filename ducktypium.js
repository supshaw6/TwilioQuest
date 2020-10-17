class Ducktypium {
    constructor(color) {
        // throw error if color is not a primary color
        if (!((color === 'red') || (color === 'blue') || (color === 'yellow'))) {
            throw new Error("Color can only be red, blue, or yellow.");
        } else {
            this.color = color;
        }
        this.calibrationSequence = [];
    }

    refract(color) {
        if (!((color === 'red') || (color === 'blue') || (color === 'yellow'))) {
            throw new Error("Color can only be red, blue, or yellow.");
        }

        // primary colors
        if (this.color === color) {
            return(color);
        } else if ((this.color === 'red' && color === 'blue') || (this.color === 'blue' && color === 'red')) {
            return('purple');
        } else if ((this.color === 'red' && color === 'yellow') || (this.color === 'yellow' && color === 'red')) {
            return('orange');
        } else if ((this.color === 'yellow' && color === 'blue') || (this.color === 'blue' && color === 'yellow')) {
            return('green');
        }
    }

    calibrate(array) {
        this.calibrationSequence = array.sort((a, b) => a - b);
        this.calibrationSequence = array.map(item => item*3);
    }

};

/*
const dt = new Ducktypium('red');

console.log(dt.color); // prints 'red'

console.log(dt.refract('blue')); // prints 'purple'
console.log(dt.refract('red')); // prints 'red'

dt.calibrate([3, 5, 1]);

console.log(dt.calibrationSequence); // prints [3, 9, 15]
*/
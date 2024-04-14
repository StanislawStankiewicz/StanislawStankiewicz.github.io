class StepFunction {
    static getCircles(num) {
        let circles = [];
        for (let i = 1; i <= num; i++) {
            circles.push(this._getCircle(i));
        }
        return circles;
    }
    static _getCircle(i) {
        i = i * 2 - 1;
        let radius = 1 / i;
        let period = i;
        let phase = 0;
        return new Circle(radius, period, phase);
    }
}

class Sawtooth {
    static getCircles(num) {
        let circles = [];
        for (let i = 1; i <= num; i++) {
            circles.push(this._getCircle(i));
        }
        return circles;
    }
    static _getCircle(i) {
        let radius = -(1 / (i));
        let period = i;
        let phase = 0;
        return new Circle(radius, period, phase);
    }
}

class x {
    static getCircles(num) {
        let circles = [];
        for (let i = 1; i <= num; i++) {
            circles.push(this._getCircle(i));
        }
        return circles;
    }
    static _getCircle(i) {
        let radius = 2 * (i % 2 == 0 ? -1 : 1) / i;
        let period = i;
        let phase = 0;
        return new Circle(radius, period, phase);
    }
}
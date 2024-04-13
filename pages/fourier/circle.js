class Circle {
    constructor(radius, period, phase = 0){
        // 2*sin(3*x + pi) = Circle(2, 3, 1)
        this.radius = radius * 75;
        this.period = period;
        this.phase = phase * Math.PI;
    }
    toString(){
        let radius = this.radius / 75;
        let period = this.period;
        let phase = this.phase / Math.PI;
        let str = '';
        if (radius == -1) {
            str += '-';
        } else if (radius != 1) {
            let strRadius;
            if (Number.isInteger(1 / radius)) {
                let sign = radius < 0 ? '-' : '';
                strRadius = sign + '(1 / ' + (1 / Math.abs(radius)) + ')';
                str += strRadius;
            } else {
                strRadius = radius;
                str += strRadius;
            }
        }
        let strPeriod;
        if (period == 1) {
            strPeriod = '';
        } else if (period == -1) {
            strPeriod = '-';
        } else {
            strPeriod = period;
        }

        str += 'sin(' + strPeriod + 'x';
        if (phase != 0) {
            let sign = phase < 0 ? '-' : '+';
            let strPhase = Math.abs(phase) == 1 ? '' : Math.abs(phase);
            str += ' ' + sign + ' ' + strPhase + 'π';
        }
        str += ')';
        return str;
    }
}
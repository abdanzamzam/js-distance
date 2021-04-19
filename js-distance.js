class JsDistance {
    constructor(
        originLatitude, originLongitude,
        destinationLatitude, destinationLongitude
    ) {
        this.originLatitude = originLatitude;
        this.originLongitude = originLongitude;
        this.destinationLatitude = destinationLatitude;
        this.destinationLongitude = destinationLongitude;
        this.Theta = originLongitude - destinationLongitude;
        this.miles = 0;
        this.kilometre = 0;
    }

    count() {
        let dist = Math.sin(Converter.degreeToRadians(this.originLatitude)) *
            Math.sin(Converter.degreeToRadians(this.destinationLatitude)) +
            Math.cos(Converter.degreeToRadians(this.originLatitude)) *
            Math.cos(Converter.degreeToRadians(this.destinationLatitude)) *
            Math.cos(Converter.degreeToRadians(this.Theta))

        dist = Math.acos(dist);
        dist = Converter.radiansToDegrees(dist);

        // in miles
        this.miles = dist * 60 * 1.1515;
        return this;
    }

    toKilometre() {
        this.kilometre = this.miles * 1.609344;
        return this.kilometre;
    }

    toMiles() {
        return this.miles;
    }
}

class Converter {
    static degreeToRadians(degree) {
        return degree * (Math.PI / 180.0);
    }

    static radiansToDegrees(radian) {
        return radian * (180.0 / Math.PI);
    }
}

module.exports = JsDistance

var Drive = (function () {
    function Drive(id, maxPower) {
        this.actualPower = 0;
        this.id = id;
        this.maxPower = maxPower;
    }
    Drive.prototype.increasePower = function (increment) {
        if (this.actualPower < this.maxPower && increment <= this.maxPower) {
            this.actualPower += increment;
        }
        else if (this.actualPower < this.maxPower && increment > this.maxPower) {
            alert("Ha hagut un increment de " + (this.actualPower - this.maxPower) + ". El propulsor ha arribat a la seva Pot\u00E8ncia M\u00E0xima de " + this.maxPower);
            this.actualPower = this.maxPower;
        }
        else {
            alert("No es pot accelerar m\u00E9s el propulsor! La seva Pot\u00E8ncia M\u00E0xima \u00E9s: " + this.maxPower);
        }
    };
    Drive.prototype.decreasePower = function (decrement) {
        if (this.actualPower > 0 && decrement <= this.actualPower) {
            this.actualPower -= decrement;
        }
        else if (this.actualPower > 0 && decrement > this.actualPower) {
            alert("Hi ha hagut un decremnt de " + this.actualPower + ". El propulsor ja est\u00E0 a Pot\u00E8ncia 0.");
            this.actualPower = 0;
        }
        else {
            alert("El propulsor ja est\u00E0 a Pot\u00E8ncia 0.");
        }
    };
    return Drive;
}());
//# sourceMappingURL=drive.js.map
var Drive = (function () {
    function Drive(id, maxPower) {
        this.actualPower = 0;
        this.id = id;
        this.maxPower = maxPower;
    }
    Drive.prototype.increasePower = function (increment) {
        if (this.actualPower < this.maxPower) {
            this.actualPower += increment;
        }
        else {
            alert("No es pot accelerar m\u00E9s el propulsor! La seva Pot\u00E8ncia M\u00E0xima \u00E9s: " + this.maxPower);
        }
    };
    Drive.prototype.decreasePower = function (decrement) {
        if (this.actualPower > 0) {
            this.actualPower -= decrement;
        }
        else {
            alert("El propulsor ja est\u00E0 a Pot\u00E8ncia 0.");
        }
    };
    return Drive;
}());
//# sourceMappingURL=drive.js.map
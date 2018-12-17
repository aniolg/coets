var Drive = (function () {
    function Drive(id, maxPower) {
        this.actualPower = 0;
        this.id = id;
        this.maxPower = maxPower;
    }
    Drive.prototype.increasePower = function (increment) {
        this.actualPower += increment;
        if (this.actualPower > this.maxPower) {
            this.actualPower = this.maxPower;
            alert("El propulsor ja no pot incrementar m\u00E9s la seva pot\u00E8ncia. Ha arribat a la seva Pot\u00E8ncia M\u00E0xima de " + this.maxPower);
        }
    };
    Drive.prototype.decreasePower = function (decrement) {
        this.actualPower -= decrement;
        if (this.actualPower < 0) {
            this.actualPower = 0;
            alert("El propulsor est\u00E0 a Pot\u00E8ncia 0. Ja no pot disminuir m\u00E9s.");
        }
    };
    return Drive;
}());
//# sourceMappingURL=drive.js.map
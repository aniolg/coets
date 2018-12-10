var Drive = /** @class */ (function () {
    function Drive(id, maxPower) {
        this.actualPower = 0;
        this.id = id;
        this.maxPower = maxPower;
    }
    Drive.prototype.increasePower = function () {
        if (this.actualPower < this.maxPower) {
            this.actualPower += 10;
        }
        else {
            alert("No es pot accelerar m\u00E9s el propulsor! La seva Pot\u00E8ncia M\u00E0xima \u00E9s: " + this.maxPower);
        }
    };
    Drive.prototype.decreasePower = function () {
        if (this.actualPower > 0) {
            this.actualPower -= 10;
        }
        else {
            alert("El propulsor ja est\u00E0 a Pot\u00E8ncia 0.");
        }
    };
    return Drive;
}());

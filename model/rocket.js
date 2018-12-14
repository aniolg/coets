var Rocket = (function () {
    function Rocket(id) {
        this.drives = [];
        this.id = id;
        this.idChecker(id);
        this.checkedId = this.idChecker(id);
        this.numDrives = 0;
    }
    Rocket.prototype.idChecker = function (idIn) {
        if (idIn.length >= 8) {
            return idIn;
        }
        else {
            throw new Error("La ID del coet " + idIn + " és massa curta! (introdueixi una ID de mínim 8 caràcters)");
        }
    };
    Rocket.prototype.addDrive = function (idDrive, maxPowerDrive) {
        this.drives.push(new Drive(idDrive, maxPowerDrive));
        ++this.numDrives;
    };
    Rocket.prototype.accelerate = function (increment) {
        for (var i = 0; i < this.drives.length; i++) {
            if (this.drives[i].actualPower < this.drives[i].maxPower) {
                this.drives[i].increasePower(increment);
                i = this.drives.length;
            }
        }
    };
    Rocket.prototype.slowDown = function (decrement) {
        for (var i = this.drives.length - 1; i >= 0; i--) {
            if (this.drives[i].actualPower > 0) {
                this.drives[i].decreasePower(decrement);
                i = -1;
            }
        }
    };
    Rocket.prototype.getActualVelocity = function () {
        var actualVelocity = 0;
        for (var i = 0; i < this.drives.length; i++) {
            actualVelocity += this.drives[i].actualPower;
        }
        return actualVelocity;
    };
    return Rocket;
}());
//# sourceMappingURL=rocket.js.map
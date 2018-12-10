
class Rocket {
    id: string;
    checkedId: string;
    numDrives: number;
    drives: Drive[] = [];
    actualVelocity = 0;

    constructor(id: string) {
        this.id = id;
        this.idChecker(id);
        this.checkedId = this.idChecker(id);
        this.numDrives = 0;

    }

    idChecker(idIn: string) {
        var e;
        if (idIn.length >= 8) {
            return idIn;
        } else {

                throw e = new Error("La ID del coet " + idIn + " és massa curta! (introdueixi una ID de mínim 8 caràcters)");
                
                return e;
        }
    }

    addDrive(idDrive, maxPowerDrive) {
        this.drives.push(new Drive(idDrive, maxPowerDrive));
        ++this.numDrives;
    }

    accelerate() {
        for (var i = 0; i < this.drives.length; i++) {
            if (this.drives[i].actualPower < this.drives[i].maxPower) {
                this.drives[i].increasePower();
                i = this.drives.length;
            }
        }
    }

    slowDown() {
        for (var i = this.drives.length - 1; i >= 0; i--) {
            if (this.drives[i].actualPower > 0) {
                this.drives[i].decreasePower();
                i = -1;
            }
        }
    }

    getActualVelocity() {
    this.actualVelocity = 0;
        for (var i = 0; i < this.drives.length; i++) {
            this.actualVelocity += this.drives[i].actualPower;
        }
        return this.actualVelocity;
    }


}

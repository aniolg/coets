
class Rocket {
    id: string;
    checkedId: string;
    numDrives: number;
    drives: Drive[] = [];

    constructor(id: string) {
        this.id = id;
        this.idChecker(id);
        this.checkedId = this.idChecker(id);
        this.numDrives = 0;

    }

    idChecker(idIn: string) {
        if (idIn.length >= 8) {
            return idIn;
        } else {
            throw new Error("La ID del coet " + idIn + " és massa curta! (introdueixi una ID de mínim 8 caràcters)");
        }
    }

    addDrive(idDrive:string, maxPowerDrive:number) {
        this.drives.push(new Drive(idDrive, maxPowerDrive));
        ++this.numDrives;
    }

    accelerate(increment:number) {
        for (var i = 0; i < this.drives.length; i++) {
            if (this.drives[i].actualPower < this.drives[i].maxPower) {
                this.drives[i].increasePower(increment);

                i = this.drives.length;
            }
        }
    }

    slowDown(decrement:number) {
        for (var i = this.drives.length - 1; i >= 0; i--) {
            if (this.drives[i].actualPower > 0) {
                this.drives[i].decreasePower(decrement);
                i = -1;
            }
        }
    }

    getActualVelocity() {
        let actualVelocity = 0;

        for (var i = 0; i < this.drives.length; i++) {
            actualVelocity += this.drives[i].actualPower;
        }

        return actualVelocity;
    }
}
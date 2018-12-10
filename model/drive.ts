
class Drive {
    id: string;
    actualPower = 0;
    maxPower: number;

    constructor(id: string, maxPower: number) {
        this.id = id;
        this.maxPower = maxPower;
    }

    increasePower() {
        if (this.actualPower < this.maxPower) {
            this.actualPower += 10;
        } else {
            alert(`No es pot accelerar més el propulsor! La seva Potència Màxima és: ${this.maxPower}`);
        }
    }

    decreasePower() {
        if (this.actualPower > 0) {
            this.actualPower -= 10;
        } else {
            alert(`El propulsor ja està a Potència 0.`);
        }
    }

}


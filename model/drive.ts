
class Drive {
    id: string;
    actualPower = 0;
    maxPower: number;

    constructor(id: string, maxPower: number) {
        this.id = id;
        this.maxPower = maxPower;
    }

    increasePower(increment:number) {
        if (this.actualPower < this.maxPower) {
            this.actualPower += increment;
        } else {
            alert(`No es pot accelerar més el propulsor! La seva Potència Màxima és: ${this.maxPower}`);
        }
    }

    decreasePower(decrement:number) {
        if (this.actualPower > 0) {
            this.actualPower -= decrement;
        } else {
            alert(`El propulsor ja està a Potència 0.`);
        }
    }

}

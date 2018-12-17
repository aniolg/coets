
class Drive {
    id: string;
    actualPower = 0;
    maxPower: number;

    constructor(id: string, maxPower: number) {
        this.id = id;
        this.maxPower = maxPower;
    }

    increasePower(increment:number) {
        if (this.actualPower < this.maxPower && increment <= this.maxPower) {
            this.actualPower += increment;
        } else {
            alert(`No es pot accelerar més el propulsor! La seva Potència Màxima és: ${this.maxPower}`);
        }
    }

    decreasePower(decrement:number) {
        if (this.actualPower > 0 && decrement <= this.actualPower) {
            this.actualPower -= decrement;
        } else if (this.actualPower > 0 && decrement > this.actualPower){
            this.actualPower = 0;
        }else {
            alert(`El propulsor ja està a Potència 0.`);
        }
    }

}

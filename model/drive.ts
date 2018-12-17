
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
        } else if(this.actualPower < this.maxPower && increment > this.maxPower){
            alert(`Ha hagut un increment de ${this.actualPower - this.maxPower}. El propulsor ha arribat a la seva Potència Màxima de ${this.maxPower}`);
            this.actualPower = this.maxPower;
        } else {
            alert(`No es pot accelerar més el propulsor! La seva Potència Màxima és: ${this.maxPower}`);
        }
    }

    decreasePower(decrement:number) {
        if (this.actualPower > 0 && decrement <= this.actualPower) {
            this.actualPower -= decrement;
        } else if (this.actualPower > 0 && decrement > this.actualPower){
            alert(`Hi ha hagut un decremnt de ${this.actualPower}. El propulsor ja està a Potència 0.`);
            this.actualPower = 0;
        }else {
            alert(`El propulsor ja està a Potència 0.`);
        }
    }

}

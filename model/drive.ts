
class Drive {
    id: string;
    actualPower = 0;
    maxPower: number;

    constructor(id: string, maxPower: number) {
        this.id = id;
        this.maxPower = maxPower;
    }

    increasePower(increment:number) { 
        this.actualPower += increment;
        if (this.actualPower > this.maxPower) {
           this.actualPower = this.maxPower;
           alert(`El propulsor ja no pot incrementar més la seva potència. Ha arribat a la seva Potència Màxima de ${this.maxPower}`);
        }
    }

    decreasePower(decrement:number) {
        this.actualPower -= decrement;
        if (this.actualPower < 0){
            this.actualPower = 0;
            alert(`El propulsor està a Potència 0. Ja no pot disminuir més.`);
        }
    }

}

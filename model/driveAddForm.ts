class DriveAddForm {
    num: number;
    posActual:number;
    content:string;
    powerSelected = 10;

    constructor(num:number, posActual:number, content:string) {
        this.num = num;
        this.posActual = posActual;
        this.content = content;
    }

}

var rockets = [];
rockets[0] = new Rocket("32WESSDS");
rockets[0].addDrive("P1_" + rockets[0].id, 10);
rockets[0].addDrive("P2_" + rockets[0].id, 30);
rockets[0].addDrive("P3_" + rockets[0].id, 80);
rockets[1] = new Rocket("LDSFJA32");
rockets[1].addDrive("P1_" + rockets[1].id, 30);
rockets[1].addDrive("P2_" + rockets[1].id, 40);
rockets[1].addDrive("P3_" + rockets[1].id, 50);
rockets[1].addDrive("P4_" + rockets[1].id, 50);
rockets[1].addDrive("P5_" + rockets[1].id, 30);
rockets[1].addDrive("P6_" + rockets[1].id, 10);

let arrayFormsDrive = [];


function newRocket() {
    let newIdRocket = document.getElementById("id_rocket").value;
    rockets.push(new Rocket(newIdRocket));
    //for
    for (var i = 0; i < arrayFormsDrive.length; i++) {
        let maxPowerDrive = document.querySelector(`input[name="potencia${i}"]:checked`).value;
        rockets[rockets.length - 1].addDrive("P" + i + "_" + rockets[rockets.length - 1].id, maxPowerDrive);
    }
    
}


function accelerateRocket() {
    let optionSelected = document.getElementById("rocket_select").value;
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].id == optionSelected) {
            rockets[i].accelerate();
            loadContent();
        }
    }
}


function slowDownRocket() {
    let optionSelected = document.getElementById("rocket_select").value;
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].id == optionSelected) {
            rockets[i].slowDown();
            loadContent();
        }
    }
}


function generateInputsDriveForm(numberForm: number, changeContent: boolean) {
    let inputsForm = "";

    for (var i = 10; i <= 100; i += 10) {
        if (changeContent === true && arrayFormsDrive[numberForm].powerSelected == i) {
            inputsForm += `
            <label class="btn btn-outline-primary active">
            <input type="radio" name="potencia${numberForm}" value="${i}" autocomplete="off" checked>${i}
            </label>
            `;
        } else if (changeContent === false && i == 10) {
            inputsForm += `
            <label class="btn btn-outline-primary active">
            <input type="radio" name="potencia${numberForm}" value="${i}" autocomplete="off" checked>${i}
            </label>
            `;
        } else {
            inputsForm += `
            <label class="btn btn-outline-primary">
            <input type="radio" name="potencia${numberForm}" value="${i}" autocomplete="off">${i}
            </label>
            `;
        }
    }

    return inputsForm;
}


function generateContentFormDrive(numberForm: number, changeContent: boolean) {
    let headerForm = `
    <H6>Propulsor ${numberForm}</H6>
    <div class="btn-group btn-group-toggle from_drive" data-toggle="buttons">
    <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">Potència Màxima</span>
    </div>`;

    let footerForm = `
    </div>
    <a id="delete_drive" onclick="deleteFormDrive(${numberForm})"><i class="fas fa-times-circle"></i></a>
    </div>
    `;

    return headerForm + generateInputsDriveForm(numberForm, changeContent) + footerForm;
}


function newDriveAddFrom() {
    arrayFormsDrive.push(new DriveAddForm(arrayFormsDrive.length, generateContentFormDrive(arrayFormsDrive.length, false)));

    loadFormsDrive();
}


function deleteFormDrive(idForm: number) {

    for (var i = 0; i < arrayFormsDrive.length; i++) {
        let powerSelected = document.querySelector("input[name=potencia" + i + "]:checked").value;
        arrayFormsDrive[i].powerSelected = powerSelected;
    }

    arrayFormsDrive.splice(idForm, 1);

    for (var i = 0; i < arrayFormsDrive.length; i++) {
        arrayFormsDrive[i].num = i;
        arrayFormsDrive[i].content = generateContentFormDrive(i, true);
    }
    loadFormsDrive();

}




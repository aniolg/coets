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
var arrayFormsDrive = [];
function newRocket() {
    var newIdRocket = document.getElementById("id_rocket").value;
    rockets[rockets.length] = new Rocket(newIdRocket);
    var document, querySelector;
    ('input[name="potencia1"]:checked').value;
    rockets[rockets.length - 1].addDrive();
}
function accelerateRocket() {
    var optionSelected = document.getElementById("rocket_select").value;
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].id == optionSelected) {
            rockets[i].accelerate();
            loadContent();
        }
    }
}
function slowDownRocket() {
    var optionSelected = document.getElementById("rocket_select").value;
    for (var i = 0; i < rockets.length; i++) {
        if (rockets[i].id == optionSelected) {
            rockets[i].slowDown();
            loadContent();
        }
    }
}
function generateInputsDriveForm(numberForm, changeContent) {
    var inputsForm = "";
    for (var i = 10; i <= 100; i += 10) {
        if (changeContent === true && arrayFormsDrive[numberForm].powerSelected == i) {
            inputsForm += "\n            <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\" checked>" + i + "\n            </label>\n            ";
        }
        else if (changeContent === false && i == 10) {
            inputsForm += "\n            <label class=\"btn btn-outline-primary active\">\n            <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\" checked>" + i + "\n            </label>\n            ";
        }
        else {
            inputsForm += "\n            <label class=\"btn btn-outline-primary\">\n            <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\">" + i + "\n            </label>\n            ";
        }
    }
    return inputsForm;
}
function generateContentFormDrive(numberForm, changeContent) {
    var headerForm = "\n    <H6>Propulsor " + numberForm + "</H6>\n    <div class=\"btn-group btn-group-toggle from_drive\" data-toggle=\"buttons\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pot\u00E8ncia M\u00E0xima</span>\n    </div>";
    var footerForm = "\n    </div>\n    <a id=\"delete_drive\" onclick=\"deleteFormDrive(" + numberForm + ")\"><i class=\"fas fa-times-circle\"></i></a>\n    </div>\n    ";
    return headerForm + generateInputsDriveForm(numberForm, changeContent) + footerForm;
}
function numerationContentFormDrive() {
    if (arrayFormsDrive[arrayFormsDrive.length - 1]) { }
}
function newDriveAddFrom() {
    arrayFormsDrive.push(new DriveAddForm(arrayFormsDrive.length, generateContentFormDrive(arrayFormsDrive.length, false)));
    loadFormsDrive();
}
function deleteFormDrive(idForm) {
    for (var i = 0; i < arrayFormsDrive.length; i++) {
        var powerSelected = document.querySelector("input[name=potencia" + i + "]:checked").value;
        arrayFormsDrive[i].powerSelected = powerSelected;
    }
    arrayFormsDrive.splice(idForm, 1);
    for (var i = 0; i < arrayFormsDrive.length; i++) {
        arrayFormsDrive[i].num = i;
        arrayFormsDrive[i].content = generateContentFormDrive(i, true);
    }
    loadFormsDrive();
}
//# sourceMappingURL=input.js.map
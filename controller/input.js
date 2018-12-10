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
    //for
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
function generateContentFormDrive(numberForm) {
    var headerForm = "\n    <H6>Propulsor " + numberForm + "</H6>\n    <div class=\"btn-group btn-group-toggle from_drive\" data-toggle=\"buttons\">\n    <div class=\"input-group-prepend\">\n        <span class=\"input-group-text\" id=\"basic-addon1\">Pot\u00E8ncia M\u00E0xima</span>\n    </div>\n    <label class=\"btn btn-outline-primary active\">\n        <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"10\" autocomplete=\"off\" checked>10\n    </label>\n    ";
    var inputsForm = "";
    for (var i = 20; i <= 100; i += 10) {
        inputsForm += "\n        <label class=\"btn btn-outline-primary\">\n        <input type=\"radio\" name=\"potencia" + numberForm + "\" value=\"" + i + "\" autocomplete=\"off\">" + i + "\n        </label>\n        ";
    }
    var footerForm = "\n    </div>\n    <a id=\"delete_drive\" onclick=\"deleteFormDrive(" + numberForm + ")\"><i class=\"fas fa-times-circle\"></i></a>\n    </div>\n    ";
    return headerForm + inputsForm + footerForm;
}
function newDriveAddFrom() {
    arrayFormsDrive.push(new DriveAddForm(arrayFormsDrive.length, arrayFormsDrive.length, generateContentFormDrive(arrayFormsDrive.length)));
    loadFormsDrive();
}
function deleteFormDrive(idForm) {
}

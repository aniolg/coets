function powerIcon(driveI) {
    if (driveI.actualPower == driveI.maxPower) {
        return "fa-battery-full";
    }
    else if (driveI.actualPower == 0) {
        return "fa-battery-empty";
    }
    else {
        return "fa-battery-half";
    }
}
function listDrives(rocketI) {
    var drivesList = "";
    for (var j = 0; j < rocketI.drives.length; j++) {
        drivesList += "\n        <p class=\"badge badge-secondary\">\n        <i class=\"fas " + powerIcon(rocketI.drives[j]) + " \"></i>\n        Pact: " + rocketI.drives[j].actualPower + " (Pmax:" + rocketI.drives[j].maxPower + ")</p>\n        ";
    }
    return drivesList;
}
function contentRocketList() {
    var rocketsList = "";
    for (var i = 0; i < rockets.length; i++) {
        rocketsList +=
            "<li class=\"list-group-item\">\n                <p><i class=\"fas fa-space-shuttle fa-rotate-270\"></i> \n                El coet " + rockets[i].id + " te " + rockets[i].numDrives + " propulsors:</p>\n                " + listDrives(rockets[i]) + "\n                <span class=\"badge badge-pill badge-primary\">\n                <i class=\"fas fa-stopwatch\"></i>\n                Velocitat: " + rockets[i].getActualVelocity() + "\n                </span></li>";
    }
    return rocketsList;
}
function loadContent() {
    var divRockets = document.getElementById("div_coets");
    var rocketNodeList = document.createElement("ul");
    rocketNodeList.id = "rocket_list";
    rocketNodeList.className = "list-group";
    rocketNodeList.innerHTML = contentRocketList();
    if (divRockets.hasChildNodes()) {
        var contentDiv = document.getElementById("rocket_list");
        divRockets.replaceChild(rocketNodeList, contentDiv);
    }
    else {
        divRockets.appendChild(rocketNodeList);
    }
}
function addRocketOptions() {
    var rocketSelect = document.getElementById("rocket_select");
    while (rocketSelect.firstChild) {
        rocketSelect.removeChild(rocketSelect.firstChild);
    }
    for (var i = 0; i < rockets.length; i++) {
        var rocketNodeOption = document.createElement("option");
        rocketNodeOption.value = rockets[i].id;
        rocketNodeOption.innerHTML = rockets[i].id;
        rocketSelect.appendChild(rocketNodeOption);
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
function loadFormsDrive() {
    var listFormsDrive = document.getElementById("list_forms_drives");
    while (listFormsDrive.firstChild) {
        listFormsDrive.removeChild(listFormsDrive.firstChild);
    }
    for (var i = 0; i < arrayFormsDrive.length; i++) {
        var nodeLi = document.createElement("li");
        nodeLi.id = "form_drive_" + arrayFormsDrive[i].num;
        nodeLi.className = "group_drive_cross";
        nodeLi.innerHTML = arrayFormsDrive[i].content;
        listFormsDrive.appendChild(nodeLi);
    }
}
function addRocket() {
    newRocket();
    $('#new_rockets_modal').modal('hide');
    arrayFormsDrive = [];
    newDriveAddFrom();
    loadFormsDrive();
    addRocketOptions();
    loadContent();
}
//# sourceMappingURL=controller.js.map
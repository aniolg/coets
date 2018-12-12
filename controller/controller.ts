
/*
//Accelerar 3 cops
for (var i = 0; i < 3; i++) {
    rockets[0].accelerate();
    rockets[1].accelerate();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
//alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);

//Frena 5 cops
for (var i = 0; i < 5; i++) {
    rockets[0].slowDown();
    rockets[1].slowDown();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
//alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);

//Accelerar 15 cops
for (var i = 0; i < 15; i++) {
    rockets[0].accelerate();
    rockets[1].accelerate();
}
rockets[0].getActualVelocity();
rockets[1].getActualVelocity();
//alert (`Velocitat coet ${rockets[0].id}: ${rockets[0].actualVelocity} || Velocitat coet ${rockets[1].id}: ${rockets[1].actualVelocity}`);

*/


function powerIcon(driveI) {
    if (driveI.actualPower == driveI.maxPower) {
        return "fa-battery-full";
    } else if (driveI.actualPower == 0) {
        return "fa-battery-empty";
    } else {
        return "fa-battery-half";
    }
}


function listDrives(rocketI) {
    var drivesList: string = "";

    for (var j = 0; j < rocketI.drives.length; j++) {

        drivesList += `
        <p class="badge badge-secondary">
        <i class="fas ${powerIcon(rocketI.drives[j])} "></i>
        Pact: ${rocketI.drives[j].actualPower} (Pmax:${rocketI.drives[j].maxPower})</p>
        `;
    }

    return drivesList;
}



function contentRocketList() {
    var rocketsList: string = "";

    for (var i = 0; i < rockets.length; i++) {
        rocketsList +=
            `<li class="list-group-item">
                <p><i class="fas fa-space-shuttle fa-rotate-270"></i> 
                El coet ${rockets[i].id} te ${rockets[i].numDrives} propulsors:</p>
                ${listDrives(rockets[i])}
                <span class="badge badge-pill badge-primary">
                <i class="fas fa-stopwatch"></i>
                Velocitat: ${rockets[i].getActualVelocity()}
                </span></li>`;
    }

    return rocketsList;
}



function loadContent() {
    var divRockets = document.getElementById("div_coets");
    var rocketNodeList = document.createElement("ul");
    rocketNodeList.id = "rocket_list";
    rocketNodeList.className = "list-group";
    rocketNodeList.innerHTML = contentRocketList();

    if (divRockets.hasChildNodes()){
        var contentDiv = document.getElementById("rocket_list");
        divRockets.replaceChild(rocketNodeList,contentDiv);

    }else{
        divRockets.appendChild(rocketNodeList);
    }
    

   

}

function addRocketOptions() {
    let rocketSelect = document.getElementById("rocket_select");
    
    while (rocketSelect.firstChild) {
        rocketSelect.removeChild(rocketSelect.firstChild);
    }

    for (var i = 0; i < rockets.length; i++) {
            let rocketNodeOption = document.createElement("option");
            rocketNodeOption.value = rockets[i].id;
            rocketNodeOption.innerHTML = rockets[i].id;
            rocketSelect.appendChild(rocketNodeOption);
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


function addRocket(){
    newRocket();

    $('#new_rockets_modal').modal('hide');

    arrayFormsDrive = [];
    newDriveAddFrom();
    loadFormsDrive();

    addRocketOptions();
    loadContent();
}





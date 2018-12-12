
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
    for (var i = 0; i < rockets.length; i++) {
            var rocketNodeOption = document.createElement("option");
            rocketNodeOption.value = rockets[i].id;
            rocketNodeOption.innerHTML = rockets[i].id;
            document.getElementById("rocket_select").appendChild(rocketNodeOption);
    }
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

    while (arrayFormsDrive.firstChild) {
        arrayFormsDrive.removeChild(arrayFormsDrive.firstChild);
    }

    loadFormsDrive();
    addRocketOptions();
    loadContent();

}





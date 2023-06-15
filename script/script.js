if(localStorage.getItem("completionHistory") == null){
    const completionHistory = {};
    localStorage.setItem("completionHistory",JSON.stringify(completionHistory));
}

function getCompletionStatus(title){
    let completionHistory = JSON.parse(localStorage.getItem("completionHistory"));
    if(completionHistory[title] == null)completionHistory[title] = "incomplete";
    localStorage.setItem("completionHistory",JSON.stringify(completionHistory));
    return completionHistory[title];
}

function setCompletionStatus(title,status){
    let completionHistory = JSON.parse(localStorage.getItem("completionHistory"));
    completionHistory[title] = status;
    localStorage.setItem("completionHistory",JSON.stringify(completionHistory));
}










const blocks = [
    ["Welcome to ServiceNow",
    "An introduction into ServiceNow",
    "https://www.google.com",
    ["Basic Navigation","Forms","Reporting"],
    "3 hrs",
    true],

    ["Placeholder",
    "This is a place holder",
    "https://www.google.com",
    ["Shiloh was here","jhdhfhfhf"],
    "0 hrs",
    true]

];

function displayBlocks(){
    let html = "";
    let ind = 0;
    for(i of blocks){

        let buttonStr = `<button>Complete</button>`

        if(getCompletionStatus(i[0]) == "incomplete") buttonStr = `<button style='background:var(--light-transp-blue)'>Incomplete</button>`;

        html += `
            <div class='roadBlock' onclick='popup(${ind})'>
                <p class='required'>Required</p>

                <div class="content">
                    <h3>${i[0]}</h3>
                    <p>${i[1]}</p>
                    ${buttonStr}
                </div>
            </div>
        `
        if(ind != blocks.length-1){
            html += "<div class='separator'></div>";
        }

        ind++;
        
    }

    document.getElementById("blocks").innerHTML = html;
}

displayBlocks();

function popup(block){

    let steps = "";

    for(i of blocks[block][3]){
        steps += `<ul><li>${i}</li></ul>`;
    }


    let checkbox = `
    <div style="display:flex;align-items:center">
        <div class="checkBox" onclick='toggleCompletionStatus(${block})'>
            <div></div>
        </div>
        <p style="font-weight:600;color:var(--lighter-font-color)">Complete</p>
    </div>
    `;

    if(getCompletionStatus(blocks[block][0]) == "incomplete"){
        checkbox = `
        <div style="display:flex;align-items:center">
            <div class="checkBox" onclick='toggleCompletionStatus(${block})'>
                <div style="background:var(--light-transp-blue)"></div>
            </div>
            <p style="font-weight:600;color:var(--lighter-font-color)">Incomplete</p>
        </div>
        `;
    }

    html = `
        <h2>${blocks[block][0]}</h2>
        <p style='color:var(--lighter-font-color)'>${blocks[block][1]}</p>
        <a href='${blocks[block][2]}'>Open in ServiceNow</a>
        
        <br><br>

        <p style='font-weight:600'>What you should expect to learn at this step:</p>
        ${steps}

        <br><br>

        ${checkbox}
    `;

    document.getElementById("popup").innerHTML = html;


    document.getElementById("popup").style["opacity"] = 1;
    document.getElementById("popupBackdrop").style["opacity"] = 1;
    document.getElementById("popupBackdrop").style["pointer-events"] = "all";
    document.getElementById("popup").style["pointer-events"] = "all";
}

function hidePopup(){
    document.getElementById("popup").style["opacity"] = 0;
    document.getElementById("popupBackdrop").style["opacity"] = 0;
    document.getElementById("popupBackdrop").style["pointer-events"] = "none";
    document.getElementById("popup").style["pointer-events"] = "none";
}

function toggleCompletionStatus(block){
    if(getCompletionStatus(blocks[block][0]) == "complete"){
        setCompletionStatus(blocks[block][0],"incomplete");
    }
    else setCompletionStatus(blocks[block][0],"complete");

    popup(block);
}
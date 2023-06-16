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
    ["Day in the Life of a Business Process Analyst",
    "Learn about the day in the life of a Business Process Analyst.",
    "https://nowlearning.servicenow.com/lxp?id=learning_course_prev&course_id=4a64adf2c3a6a1d0cfdf34ee05013122",
    ["The work routine of a Business Process Analyst"],
    "3 min",
    false],

    ["Welcome to journey Level 1: Associate Business Analyst",
    "Watch this video",
    "https://nowlearning.servicenow.com/lxp?id=learning_course_prev&course_id=993abc1797fde990e4fb72de2153afcf",
    ["Not specified"],
    "4 min",
    true],
    
    ["Welcome to ServiceNow",
    "New to ServiceNow? This course is for you!",
    "https://nowlearning.servicenow.com/lxp?id=learning_course_prev&course_id=023708df1bc0119cf95e99b8bd4bcb76",
    ["Basic Navigation","Forms","Reporting"],
    "3 hrs",
    true],

    ["Create a ServiceNow Community Profile",
    "Join the ServiceNow Community to connect to other people in similar roles or interests.",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=f7e4dc081b16619013f9a6c1b24bcb0b",
    ["ServiceNow Community"],
    "5 min",
    false],

    ["Get Ready to RiseUp with ServiceNow",
    "Read the blog \"Get Ready to RiseUp with ServiceNow!\" to learn more about how the RiseUp with ServiceNow is a program designed to skill up one million people by 2024.",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=35cb54041b56619013f9a6c1b24bcbde",
    ["The \"RiseUp with ServiceNow\" program"],
    "5 min",
    false],

    ["Learn About Community",
    "Learn how to use Community and review Frequently Asked Questions",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=9f9cd8441b56619013f9a6c1b24bcb50",
    ["How to use the Community page", "How to review Frequently Asked Questions"],
    "10 min",
    false],

    ["Industry Skills for a Business Process Analyst",
    "Industry skills for a Business Process Analyst",
    "https://nowlearning.servicenow.com/lxp?id=learning_course_prev&course_id=c02c0b3a97b92990a916b4be2153af7d",
    ["The industry skills expected if a Business Process Analyst"],
    "1 min",
    true],

    ["ITIL® 4 Foundation: An Introduction to ITIL 4",
    "ITIL 4 Foundation is essential for understanding and implementing IT Service Management, especially in the context of ServiceNow's ITSM framework.",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=20dc24211b1ae1d013f9a6c1b24bcb4d",
    ["Basic understanding of ITIL 4"],
    "30 min",
    false],

    ["Associate Level: Register for and Attend a ServiceNow Event",
    "ServiceNow has in person or online events. Register for an upcoming event or listen to an on demand event.",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=6302f4801bd6619013f9a6c1b24bcb6a",
    ["How to register for or listen to a ServiceNow event"],
    "1 hr",
    false],

    ["Foundational ServiceNow courses for a Business Process Analyst",
    "This course includes a brief introduction to the next few ServiceNow courses in the Business Process Analyst journey.",
    "https://nowlearning.servicenow.com/lxp?id=learning_course_prev&course_id=ed4c2a7a9731a590524eb3cf9153af38",
    ["The upcoming content in the Business Process Analyst course"],
    "20 mins",
    true],

    ["ServiceNow Administration Fundamentals",
    "Fundamentals of adminstration on ServiceNow",
    "https://nowlearning.servicenow.com/lxp?id=learning_course&course_id=8ff9a4a51be7cd50998555fa234bcba5&achievement_id=78c9e8611be7cd50998555fa234bcb93",
    ["Not specified"],
    "N/A",
    true],

    ["Connect with Others in RiseUp",
    "Learn about the RiseUp with ServiceNow Forum and how you can connect with others on their career journey!",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=6a0568c81b56619013f9a6c1b24bcb2a",
    ["The RiseUp with ServiceNow Forum"],
    "5 mins",
    false],

    ["IT Service Management (ITSM) Fundamentals",
    "Fundamentals of ITSM on ServiceNow",
    "https://nowlearning.servicenow.com/lxp?id=learning_course&course_id=4d708b391befc990998555fa234bcb6e&achievement_id=f7effa351befc990998555fa234bcbc0",
    ["Not Specified"],
    "N/A",
    true],

    ["Subscribe to the IT Service Management Product Hub",
    "Subscribe to the IT Service Management Product Hub.",
    "https://nowlearning.servicenow.com/lxp?id=learning_content_prev&course_id=e365c90c1b1a619013f9a6c1b24bcb1d",
    ["Not Specified"],
    "5 mins",
    false],

];


function isReady(id){
    let ready = true;
    for(let i = 0; i < id; i++){
        console.log(blocks[i][0])
        if(getCompletionStatus(blocks[i][0]) != "complete" && blocks[i][5]){
            ready = false;
            break;
        }
    }

    return ready;
}


function displayBlocks(){
    let html = "";
    let ind = 0;
    for(i of blocks){

        let buttonStr = `<button style='color:var(--bg-light-blue)'>Complete</button>`
        let style = "background:var(--bg-light-blue);box-shadow:none;padding:10px;border:2px solid var(--light-transp-blue)";

        if(getCompletionStatus(i[0]) == "incomplete"){
            buttonStr = `<button style='background:var(--light-transp-blue)'>Incomplete</button>`;
            style = "background:rgb(22,27,34)";
        }

        if(!isReady(ind)){
            style = 'pointer-events:none; opacity:.5';
        }


        let required = "<p class='required' style='color:var(--dark-transp-blue)'>Not Required</p>"
        if(i[5]){
            required = "<p class='required'>Required</p>";
        }

        html += `
            <div class='roadBlock' style='${style}' onclick='popup(${ind})'>
                ${required}

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

        <p style='font-weight:600;text-align:left'>What you should expect to learn at this step:</p>
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

    displayBlocks();
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
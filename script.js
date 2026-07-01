const requestForm =
document.getElementById("requestForm");

if(requestForm){

    requestForm.addEventListener(
        "submit",
        function(e){

            e.preventDefault();

            document.getElementById(
                "requestSuccess"
            ).style.display = "block";

            requestForm.reset();
        }
    );
}
function sendAI(){

    const input =
    document.getElementById("aiInput");

    const chat =
    document.getElementById("chatArea");

    if(!input || !chat) return;

    const msg =
    input.value.toLowerCase();

    if(msg === "") return;

    chat.innerHTML +=
    `<div class="user-message">
    > ${msg}
    </div>`;

    let reply =
    "Command not recognized.";

    if(msg.includes("who")){

        reply =
        "Vaibhav is an AI & ML student and web developer.";

    }

    else if(msg.includes("skill")){

        reply =
        "Skills: Web Development, Python, AI & ML, C/C++.";

    }

    else if(msg.includes("project")){

        reply =
        "Projects include Cafe Management, AI Assistant and Portfolio System.";

    }

    else if(msg.includes("hire")){

        reply =
        "Open the Hire page to recruit Vaibhav.";

    }

    else if(msg.includes("contact")){

        reply =
        "Use the Contact Terminal to communicate.";

    }

    setTimeout(() => {

        chat.innerHTML +=
        `<div class="bot-message">
        > ${reply}
        </div>`;

        chat.scrollTop =
        chat.scrollHeight;

    },500);

    input.value = "";
}
function openProject(title, desc){

    const modal =
    document.getElementById(
    "projectModal");

    document.getElementById(
    "projectTitle"
    ).innerText = title;

    document.getElementById(
    "projectDesc"
    ).innerText = desc;

    modal.style.display =
    "flex";
}

function closeProject(){

    document.getElementById(
    "projectModal"
    ).style.display =
    "none";
}
emailjs.init("YOUR_PUBLIC_KEY");

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
    "submit",

    function(e){

        e.preventDefault();

        emailjs.sendForm(
            "YOUR_SERVICE_ID",
            "YOUR_TEMPLATE_ID",
            this
        )

        .then(() => {

            document.getElementById(
            "terminalSuccess"
            ).style.display = "block";

            contactForm.reset();

        })

        .catch(() => {

            alert(
            "Transmission Failed."
            );

        });

    });
}
emailjs.init("IYFn-_NlI-ZorN4_0");

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener(
    "submit",

    function(e){

        e.preventDefault();

        emailjs.sendForm(
            "service_rzswv6h",
            "template_7hg0n7h",
            this
        )

        .then(() => {

            document.getElementById(
            "terminalSuccess"
            ).style.display = "block";

            contactForm.reset();

        })

        .catch((error) => {

            console.log(error);

            alert("Transmission Failed.");

        });

    });

}

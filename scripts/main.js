const dropdown = document.getElementById("dropdown");
const setBox = document.getElementById("setBox");

function toggleSetInput(){
    setBox.style.display =
        dropdown.value === "Set-Associative Mapping" ? "block" : "none";
}

function runSimulation(){
    let mappingTechnique = dropdown.value;

    if(mappingTechnique === "Direct Mapping"){
        directMapping();
    }else if(mappingTechnique === "Associative Mapping"){
        associativeMapping();
    }else if(mappingTechnique === "Set-Associative Mapping"){
        setAssociativeMapping();
    }
}

dropdown.addEventListener("change", toggleSetInput);
toggleSetInput();
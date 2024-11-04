
let isBinaryToText = true;

function switchMode() {
    isBinaryToText = !isBinaryToText;
    document.getElementById("switchButton").textContent = isBinaryToText ? 
        "Switch to Text to Binary" : "Switch to Binary to Text";
    document.getElementById("input").placeholder = isBinaryToText ? 
        "Enter binary here..." : "Enter text here...";
}

function convert() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    
    if (isBinaryToText) {
        // Convert binary to text
        try {
            output.value = binaryToText(input);
        } catch (error) {
            output.value = "Invalid binary input!";
        }
    } else {
        // Convert text to binary
        output.value = textToBinary(input);
    }
}

function binaryToText(binary) {
    return binary.split(" ").map(bin => String.fromCharCode(parseInt(bin, 2))).join("");
}

function textToBinary(text) {
    return text.split("").map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(" ");
}

function copyText() {
    const output = document.getElementById("output");
    output.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
}

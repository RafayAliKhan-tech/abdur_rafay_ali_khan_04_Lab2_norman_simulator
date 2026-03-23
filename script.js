let currentStage = 1;
let uiType = "good"; // 'good' or 'bad'
let typedValue = "";
let targetDose = "";
const doseBank = ["15.5", "22.5", "40.0", "55.2"];

function initStage() {
    document.querySelectorAll('.stage-link').forEach(el => el.classList.remove('active'));
    document.getElementById(`s${currentStage}`).classList.add('active');

    const ctrlArea = document.getElementById('interaction-ctrls');
    ctrlArea.innerHTML = "";
    document.getElementById('feedback-icon').innerText = "";

    switch(currentStage) {
        case 1:
            setStep("Stage 1: Form Goal", "Deliver the correct medication dose to the patient as prescribed.");
            createBtn("Proceed to Intent", () => {
                targetDose = doseBank[Math.floor(Math.random() * doseBank.length)];
                document.getElementById('target-value').innerText = targetDose;
                document.getElementById('target-note').style.display = "block";
                next();
            });
            break;

        case 2:
            setStep("Stage 2: Form Intention", "Identify the exact numeric value required based on the prescription.");
            doseBank.forEach(d => {
                createBtn(d + " ml/hr", () => {
                    if(d === targetDose) next();
                    else alert("This does not match the prescription!");
                });
            });
            break;

        case 3:
            setStep("Stage 3: Specify Action", "Choose the interface design to specify your interaction sequence.");
            createBtn("Good Design (Minimal)", () => { uiType = "good"; next(); });
            createBtn("Bad Design (Complex)", () => { uiType = "bad"; next(); });
            break;

        case 4:
            setStep("Stage 4: Execute Action", `Input exactly ${targetDose} ml/hr. Press ENTER to confirm.`);
            renderKeypad();
            break;

        case 5:
            setStep("Stage 5: Perceive State", `Review the LCD screen. Current value is "${typedValue}".`);
            createBtn("Confirm & Proceed", () => next());
            createBtn("Mistake - Retype", () => { currentStage = 4; typedValue = ""; document.getElementById('lcd-value').innerText = "00.0"; initStage(); });
            break;

        case 6:
            setStep("Stage 6: Interpret State", uiType === 'good' ? "System feedback indicates accuracy." : "Interpret the value manually (No system help).");
            setTimeout(() => {
                if(uiType === 'good') {
                    const ok = typedValue === targetDose;
                    const icon = document.getElementById('feedback-icon');
                    icon.innerText = ok ? "✅" : "❌";
                    icon.style.color = ok ? "var(--emerald-500)" : "var(--rose-500)";
                }
                createBtn("Final Evaluation", () => next());
            }, 600);
            break;

        case 7:
            const success = typedValue === targetDose;
            setStep("Stage 7: Evaluation", success ? "SUCCESS: Goal Achieved." : "FAILURE: Dose Mismatch.");
            document.getElementById('step-desc').style.color = success ? "var(--emerald-500)" : "var(--rose-500)";
            document.getElementById('pump-status').innerText = success ? "INFUSING" : "ALARM";
            createBtn("Restart Simulation", () => location.reload());
            break;
    }
}

function setStep(t, d) {
    document.getElementById('step-title').innerText = t;
    document.getElementById('step-desc').innerText = d;
}

function createBtn(label, cb) {
    const btn = document.createElement('button');
    btn.className = "primary-btn";
    btn.innerText = label;
    btn.onclick = cb;
    document.getElementById('interaction-ctrls').appendChild(btn);
}

function next() { currentStage++; initStage(); }

function renderKeypad() {
    const grid = document.getElementById('keypad-grid');
    grid.innerHTML = "";
    
    if (uiType === "good") {
        grid.className = "keypad-grid good-ui-grid";
        let keys = [...new Set((targetDose + ".").split(""))].concat(["X", "Enter"]);
        keys.forEach(k => createKey(k, grid));
    } else {
        grid.className = "keypad-grid bad-ui-grid";
        // 16-key messy industrial layout
        let keys = ["F1", "F2", "SET", "MODE", "7", "8", "9", "ESC", "4", "5", "6", "DEL", "1", "2", "3", "ENT", "0", ".", "SHIFT", "ALT"];
        keys.forEach(k => createKey(k, grid));
    }
}

function createKey(k, grid) {
    const btn = document.createElement('button');
    btn.innerText = k;
    if (!isNaN(k) || k === ".") btn.className = "number";
    if (k === "X" || k === "DEL" || k === "ESC") btn.style.backgroundColor = "#991b1b";
    if (k === "Enter" || k === "ENT") btn.style.backgroundColor = "#166534";

    btn.onclick = () => {
        if (k === "Enter" || k === "ENT") next();
        else if (["X", "DEL", "ESC"].includes(k)) { typedValue = ""; document.getElementById('lcd-value').innerText = "00.0"; }
        else if (!isNaN(k) || k === ".") {
            if (typedValue === "00.0") typedValue = "";
            typedValue += k;
            document.getElementById('lcd-value').innerText = typedValue;
        } else alert("Invalid Command: Key locked in current mode.");
    };
    grid.appendChild(btn);
}

initStage();
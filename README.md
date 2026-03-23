# HCI Simulation: Syringe Pump Control System

### *A Practical Study of Norman’s 7 Stages of Action*

---

## Project Overview

This project is an interactive **web-based simulation of a Medical Syringe Pump**, designed to demonstrate key **Human-Computer Interaction (HCI)** principles defined by Don Norman.

The simulation guides the user step-by-step through the **7 Stages of Action**, highlighting how interface design can either reduce or increase:

* The **Gulf of Execution**
* The **Gulf of Evaluation**

---

## Tech Stack

* **HTML5** – Semantic structure for the medical dashboard
* **CSS3** – Modern UI with a Slate & Indigo professional theme
* **JavaScript (ES6+)** – Dynamic logic for stage progression and keypad generation

---

## The 7 Stages Flow

The application follows a structured progression through Norman’s Action Cycle:

### 1️⃣ Form Goal

The user is assigned a clinical objective
*(e.g., Deliver 50.5 ml/hr)*

### 2️⃣ Form Intention

The user selects the correct dosage from given options

### 3️⃣ Specify Action

The system highlights required inputs based on design:

* **Good Design:** Only necessary digits
* **Bad Design:** All digits (0–9) and extra inputs

### 4️⃣ Execute Action

* **Good Design:** Minimal keypad (0–9, ".", Enter)
* **Bad Design:** Complex keypad with unnecessary keys
  *(ENT, DEL, F1, SHIFT, etc.)*

### 5️⃣ Perceive State

The user observes the entered value on the LCD display

### 6️⃣ Interpret State

* **Good Design:** Immediate feedback (✅ / ❌)
* **Bad Design:** No feedback provided

### 7️⃣ Evaluate Outcome

Final result is displayed:

* ✅ **Success:** Goal achieved
* ❌ **Failure:** Goal not achieved

---

## 💡 Key HCI Concepts Demonstrated

### 🔴 1. Gulf of Execution

The **Bad Design** creates difficulty in performing actions due to:

* Confusing buttons
* Unnecessary complexity

The **Good Design** reduces this gap by:

* Providing clear and minimal controls

---

### 🔵 2. Gulf of Evaluation

The **Bad Design** provides no feedback, leaving users uncertain.

The **Good Design** improves usability by:

* Showing clear visual feedback (✅ / ❌)
* Helping users understand system state instantly

---

### ⚠️ 3. Slips vs. Mistakes

This simulation demonstrates:

* **Slips:**
  Incorrect input due to confusing interface *(execution error)*

* **Mistakes:**
  Wrong decision during planning *(e.g., selecting wrong dosage)*

---

## 🖥 How to Run

1. Download or clone the repository
2. Ensure all files are in the same folder:

   * `index.html`
   * `style.css`
   * `script.js`
3. Open **index.html** in any modern browser:

   * Chrome
   * Firefox
   * Edge

---

## 👨‍💻 Developed By

**Abdur Rafay Ali Khan**

---

## 📚 Subject

**Human-Computer Interaction (HCI)**

---

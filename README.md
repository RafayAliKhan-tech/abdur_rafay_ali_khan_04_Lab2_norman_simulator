HCI Simulation: Syringe Pump Control System
A Practical Study of Norman’s 7 Stages of Action
📌 Project Overview
This project is an interactive web-based simulation of a Medical Syringe Pump, designed to demonstrate the Human-Computer Interaction (HCI) principles defined by Don Norman. The simulation guides the user through the 7 Stages of Action, highlighting how interface design can either bridge or widen the Gulf of Execution and the Gulf of Evaluation.

🛠 Tech Stack
HTML5: Semantic structure for the medical dashboard.

CSS3: Modern UI with a Slate & Indigo professional theme.

JavaScript (ES6+): Dynamic logic for stage progression and keypad generation.

🚀 The 7 Stages Flow
The application follows a linear progression through the action cycle:

Form Goal: The user is assigned a specific clinical objective (e.g., Deliver 50.5 ml/hr).

Form Intention: The user confirms the specific dosage required from a list of options.

Specify Action: The user chooses between a Good Design or a Bad Design interface.

Execute Action: * Good Design: Provides a minimal keypad containing only the digits needed for the dose.

Bad Design: Presents a complex, industrial-style 20-key grid with confusing labels (ENT, DEL, F1, SHIFT).

Perceive State: The user observes the value typed on the LCD screen.

Interpret State: * Good Design: Provides immediate visual feedback (✅ or ❌).

Bad Design: Provides no feedback, forcing the user to verify the numbers manually.

Evaluate Outcome: The system determines if the original goal was met (Success/Failure).

💡 Key HCI Concepts Demonstrated
1. The Gulf of Execution
The "Bad Design" illustrates a wide Gulf of Execution. By using non-standard labels and an overwhelming number of unnecessary buttons, the system makes it difficult for the user to figure out how to input the dose. The "Good Design" minimizes this by providing only the necessary affordances.

2. The Gulf of Evaluation
In the "Bad Design," the user is left wondering if they performed the task correctly because the system gives no feedback. In the "Good Design," the use of clear icons (✅/❌) helps the user immediately perceive and interpret the system state.

3. Slips vs. Mistakes
The simulation allows users to experience:

Slips: Mistyping a number due to a cluttered keypad (Execution level).

Mistakes: Choosing the wrong dosage in Stage 2 (Planning level).

🖥 How to Run
Clone or download the project files (index.html, style.css, and script.js).

Ensure all three files are in the same folder.

Open index.html in any modern web browser (Chrome, Firefox, Edge).

Developed by: Abdur Rafay Ali Khan

Course: CS-XII (Computer Science)

Topic: Human-Computer Interaction (HCI)

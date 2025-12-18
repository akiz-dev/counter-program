# Count Program

This is a simple program created with HTML, CSS, and JavaScript, where the user can input a starting number, an ending number, and a step value for a counter. The program will display the numbers within that range, either incrementing or decrementing based on the step value.

## Functionality

- The user inputs:
  - **Starting Number**: The point where the count begins.
  - **Ending Number**: The point where the count ends.
  - **Step**: The amount by which the counter should increase or decrease with each iteration.

- The counter will:
  - **Increment** if the starting number is smaller than the ending number.
  - **Decrement** if the starting number is larger than the ending number.
  - If the step value is 0, the counter will automatically use a step value of 1.

- The numbers are displayed in the format: `number 👟` (with the sneaker emoji).
- The program also includes a reset feature, allowing the user to clear all fields and the count history.

## Technologies

- **HTML5**: Page structure and input form.
- **CSS3**: Styles for the user interface.
- **JavaScript**: Counting logic and interactivity.

## How to Use

1. Open the `index.html` file in your browser.
2. Enter the desired values in the fields:
   - **Starting Number**: Enter the starting value for the counter.
   - **Ending Number**: Enter the ending value for the counter.
   - **Step**: Enter the step value for incrementing or decrementing the counter.
3. Click the **"Count"** button to start counting.
4. If you want to clear the fields and reset the program, click the **"Reset"** button.

## Example Usage

1. Set the starting number to **1**, the ending number to **10**, and the step to **2**.
2. The program will display the sequence of numbers: 1 👟, 3 👟, 5 👟, 7 👟, 9 👟.

## File Structure

├── index.html # Main HTML file
├── css/
│ └── style.css # CSS stylesheet
├── js/
│ └── script.js # JavaScript logic
└── README.md # This file


## How to Run Locally

1. Clone or download this repository.
2. Navigate to the directory where the project is located.
3. Open the `index.html` file in your browser to start using the program.

## Notes

- If the **step** value is **0**, the program will show an alert and automatically use **1** as the step value.
- The program does not accept negative values or letters in the input fields.

## License

This project is open-source and can be used under the [MIT License](https://opensource.org/licenses/MIT).
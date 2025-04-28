// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    const heading = document.getElementById('main-heading');
    const intro = document.getElementById('intro');
    const button = document.getElementById('magicButton');
    const dynamicDiv = document.getElementById('dynamicDiv');

    // Change text content dynamically
    heading.textContent = "Let's Learn JavaScript Together!";

    // Modify CSS styles via JavaScript
    intro.style.color = "blue";
    intro.style.fontSize = "20px";

    // Add/Remove an element when a button is clicked
    button.addEventListener('click', function() {
        if (!document.getElementById('newParagraph')) {
            const newPara = document.createElement('p');
            newPara.id = 'newParagraph';
            newPara.textContent = "🎉 You clicked the button! Here's a new paragraph!";
            dynamicDiv.appendChild(newPara);
        } else {
            const existingPara = document.getElementById('newParagraph');
            dynamicDiv.removeChild(existingPara);
        }
    });
});

const textInput = document.getElementById("text-input");
const charCount = document.getElementById("char-count");

const maxLength = 50;

//Event listener for input in the textarea
textInput.addEventListener("input", () => {
  let text = textInput.value;

  if (text.length > maxLength) {
    text = text.slice(0, maxLength);
    textInput.value = text;
  }

  const currentLength = text.length;

  //update the character count
  charCount.textContent = `Character Count: ${currentLength}/${maxLength}`;

  //change the color of the character count based on the length
  if (currentLength < maxLength) {
    charCount.style.color = "black";
  } else {
    charCount.style.color = "red";
  }
});

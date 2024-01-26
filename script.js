const userInput = document.getElementById("userInput");
const generateBtn = document.querySelector(".generateBtn");
const qrImage = document.querySelector(".qrImage");
const errorMsg = document.querySelector(".errorMsg");

async function generateQR(inputValue) {
  try {
    if (!inputValue) {
      throw new Error("Please enter a valid input");
    } else {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`
      );
      const qrURL = response.url;
      console.log(qrURL);
      qrImage.src = qrURL;
    }
  } catch (e) {
    errorMsg.innerHTML = e.message;
    errorMsg.setAttribute("class", "showError");
  }
}

generateBtn.addEventListener("click", () => {
  const inputValue = userInput.value;
  generateQR(inputValue);
  userInput.value = "";
});

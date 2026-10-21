const button = document.querySelector("#demo-button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
    result.textContent =
        "Success! JavaScript is working on my live website.";

    button.textContent = "Test passed ✓";
});
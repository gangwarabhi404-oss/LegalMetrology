const scanButton = document.getElementById("scanButton");
const uploadButton = document.getElementById("uploadButton");

const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");


// Scan Button

scanButton.addEventListener("click", function () {

    alert("Scanner will start here.");

});


// Image Preview

imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (file) {

        imagePreview.src = URL.createObjectURL(file);

        imagePreview.style.display = "block";

    }

});


// Upload Button

uploadButton.addEventListener("click", function () {

    if (imageInput.files.length > 0) {

        alert("Image uploaded successfully.");

    } else {

        alert("Please select an image first.");

    }

});
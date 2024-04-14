document.addEventListener("DOMContentLoaded", function() {
  const tryButton = document.getElementById("try");
  
  tryButton.addEventListener("click", function() {
      const imageInput = document.getElementById("imageInput");
      imageInput.click();
  });

  document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      body: formData
    })
    .then(response => response.blob())
    .then(result => {
      const imageUrl = URL.createObjectURL(result);
      const resultImage = document.getElementById('resultImage');
      resultImage.src = imageUrl;
    })
    .catch(error => console.error('Error:', error));
  });
});

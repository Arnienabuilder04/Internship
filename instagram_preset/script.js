const imageUpload = document.getElementById('imageUpload');
const titleInput = document.getElementById('titleInput');
const textInput = document.getElementById('textInput');
const previewImage = document.getElementById('previewImage');
const previewTitle = document.getElementById('previewTitle');
const previewText = document.getElementById('previewText');
const layoutButtons = document.querySelectorAll('.layout-options button');
const preview = document.getElementById('preview');
const exportBtn = document.getElementById('exportBtn');

// Handle image upload
imageUpload.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file) {
    previewImage.src = URL.createObjectURL(file);
  }
});

// Handle text inputs
titleInput.addEventListener('input', () => {
  previewTitle.textContent = titleInput.value;
});
textInput.addEventListener('input', () => {
  previewText.textContent = textInput.value;
});

// Handle layout switching
layoutButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    preview.className = `layout ${btn.dataset.layout}`;
  });
});

// Export to JPEG
exportBtn.addEventListener('click', () => {
  html2canvas(preview).then(canvas => {
    const link = document.createElement('a');
    link.download = 'layout.jpeg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
  });
});

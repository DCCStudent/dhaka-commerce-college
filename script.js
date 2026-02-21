function uploadPDF() {
    const fileInput = document.getElementById("pdfFile");
    const viewer = document.getElementById("pdfViewer");

    if (fileInput.files.length === 0) {
        alert("Please select a PDF file");
        return;
    }

    const file = fileInput.files[0];
    const fileURL = URL.createObjectURL(file);
    viewer.src = fileURL;
}
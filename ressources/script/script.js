function includeHTML(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Erreur lors de linclusion :', error));
}

// Inclure l'en-tête et le pied de page
document.addEventListener("DOMContentLoaded", () => {
    includeHTML('header.html', 'header');
    includeHTML('footer.html', 'footer');
});
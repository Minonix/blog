function copyToClipboard(text) {
  // Crée un élément textarea temporaire
  var textarea = document.createElement('textarea');
  // Place le texte dans cet élément
  textarea.value = text;
  // Ajoute l'élément au DOM
  document.body.appendChild(textarea);
  // Sélectionne tout le texte dans l'élément
  textarea.select();
  // Copie le texte sélectionné dans le presse-papiers
  document.execCommand('copy');
  // Supprime l'élément textarea temporaire
  document.body.removeChild(textarea);
  // Affiche une alerte ou une confirmation pour informer l'utilisateur
  alert('Texte copié dans le presse-papiers : ' + text);
}


document.addEventListener('DOMContentLoaded', function() {
  // Sélectionnez tous les liens <a> avec un attribut href commençant par #
  const nav = document.getElementById("nav");
  const links = nav.querySelectorAll('a[href^="#"]');
  
  // Parcourez chaque lien et ajoutez un gestionnaire d'événements clic
  links.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault(); // Empêcher le comportement par défaut du lien
          const targetId = this.getAttribute('href'); // Récupérer l'ID de la cible à partir de l'attribut href
          const targetElement = document.querySelector(targetId); // Sélectionner l'élément cible

          // Défilement doux vers l'élément cible
          targetElement.scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});


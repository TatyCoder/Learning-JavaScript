export class Modal {
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    this.contentTemplateEl = document.getElementById(contentId);
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  show() {
    if ('content' in document.createElement('template')) {
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true
      );
      // Now using 'this':
      this.modalElement = modalElements.querySelector('.modal');
      this.backdropElement = modalElements.querySelector('.backdrop');
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      // Now using 'this':
      this.modalElement.appendChild(contentElement);

      // Now using 'this':
      document.body.insertAdjacentElement('afterbegin', this.modalElement);
      document.body.insertAdjacentElement('afterbegin', this.backdropElement);
    } else {
      // fallback code
      alert(this.fallbackText);
    }
  }

  hide() {
    // To check if I have a modal element before I try to remove it: 
    if (this.modalElement) {
      // To remove the modal:
      document.body.removeChild(this.modalElement); // In more modern browsers use this.modalElement.remove()
      // To remove the backdrop:
      document.body.removeChild(this.backdropElement);
      // Use 'null' to tell Javascript that these properties are cleared and that the references to the DOM elements are no longer needed:
      this.modalElement = null;
      this.backdropElement = null;
    }
  }
}

/* Notes: to hide the modal, I need to remove the backdrop and the modal element from the DOM. 
To remove these elements I will store modalElement and backdropElement in a property (using 
'this') not in a constant. So that they're not just constants that are available in the show 
method but properties of the entire Modal class, so that I can not just use them in the 
show method but in all methods of this class.
*/
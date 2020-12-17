// This is a Javascript file responsible for displaying a modal and rendering content // 

export class Modal {
// In this constructor I want to be able to get the information, which content should be shown:
  constructor(contentId, fallbackText) {
    this.fallbackText = fallbackText;
    // This property will give me access to the template element in the DOM that has this ID:
    this.contentTemplateEl = document.getElementById(contentId);  // I use the argument contentId here so that this is really dynamic.
    // To get the modal itself, so the backdrop and the container:
    this.modalTemplateEl = document.getElementById('modal-template');
  }

  show() {
    // To check if the template is available by checking if the content property is available in document.createElement:
    if ('content' in document.createElement('template')) {
    /* document.createElement creates a new DOM element and I create a template element. 
    On Internet Explorer this will fail. With the 'in' keyword, I can check if the object  
    on the right and every DOM element, has this property 'content'. */ 
    // To use the content of a template and create a node based on it:
      const modalElements = document.importNode(
        this.modalTemplateEl.content,
        true  // Pass in 'true' to make a deep clone.
      );
      // To get access to the modal:
      const modalElement = modalElements.querySelector('.modal');
      // To get access to the backdrop:
      const backdropElement = modalElements.querySelector('.backdrop');
      // To get access to the actual content I want to display:
      const contentElement = document.importNode(
        this.contentTemplateEl.content,
        true
      );

      // To add it to the page:
      modalElement.appendChild(contentElement);

      /* To add the modal element and the backdrop element into the DOM.
      'afterbegin' to add it inside of the body but right at the beginning of the body: */
      document.body.insertAdjacentElement('afterbegin', modalElement);
      document.body.insertAdjacentElement('afterbegin', backdropElement);
    } else {
      // fallback code
      // To show something to the user in case the template is not supported:
      alert(this.fallbackText);
    }
  }

  hide() {}
}

export class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

/* Notes: I can add the special keyword 'export' that makes it clear that I'm exporting 
this class so it should be available outside of this file, because by default, as soon  
as I switch to modules, I will have locked files: their content will not be globally 
available, every file will get its own scope instead.
Exporting it is one part but that still doesn't make it globally available, I use it 
by importing it somewhere. To import something exported, I use the 'import' command.
*/
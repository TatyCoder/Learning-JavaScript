class Tooltip {}

class ProjectItem {
  constructor(id, updateProjectListsFunction) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton() {}

  // To switch from 'active' to 'finished' or viceversa:
  connectSwitchButton() {
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type');
    // The last button is this button which switches the project from box A to box B or viceversa.
    switchBtn.addEventListener('click', this.updateProjectListsHandler);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject() {
    console.log(this);
  }

  switchProject(projectId) {
    // On way to do it is by removing an item with splice, for that I need
    // to find the 'index' of the project in the projects array:
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);  
    // I want to return true if it's the item I'm looking for.
    // this.projects.splice(projectIndex, 1);

    // Another way: 
    this.switchHandler(this.projects.find(p => p.id === projectId));
    // With filter for the ID not being equal because if they're equal, this is the item we want to remove, 
    // so then in filter we want to return false so that this item is dropped from this newly created array:
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );
  }
}

App.init();

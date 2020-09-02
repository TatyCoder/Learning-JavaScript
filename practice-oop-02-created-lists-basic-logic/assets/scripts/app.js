class Tooltip {}

class ProjectItem {}

class ProjectList {
  constructor(type) {  // type for choosing between 'active' or 'finished' projects (id).
    const prjItems = document.querySelectorAll(`#${type}-projects li`);  
    // CSS selector for all list items with these IDs (type is dynamic).
    console.log(prjItems);
  }
}

class App {
  static init() {  // A static method because I'll call it just once with App.init();
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
  }
}

App.init();
import { ProjectList } from './App/ProjectList.js';

/* To define a global variable, if I need to share some global data without export/import.
globalThis it's an alternative to 'this' which points at some globally available object, 
this is available both in browser side Javascript and Node.js side Javascript, the window 
object is not available in both. globalThis can be used to store data and in ProjectList 
then also to read data:
*/
globalThis.DEFAULT_VALUE = 'MAX';

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

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();

/* Notes: with Javascript's way of sharing data across files, when I define a global 
variable, it would invisibly automatically be added to the window object which acted 
as a global object that spans across the entire app. 
With modules, they have their own scope, something defined in a module is not shared 
with others unless I export/import it.
globalThis in modules replaces 'this' as the pointer at the window object because 'this' 
inside of modules is not defined, because they run in strict mode and there 'this' doesn't 
point at window.
*/
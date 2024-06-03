import API from './API.js';

// Another way to export
export async function loadData() {
  app.store.menu = await API.fetchMenu();
}

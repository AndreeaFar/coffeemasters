import Store from './services/Store.js';
import API from './services/API.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

// Make the Store global
window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
  loadData();

  // Initialize the router
  app.router.init();
});

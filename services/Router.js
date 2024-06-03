const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((a) => {
      a.addEventListener('click', (event) => {
        // Stop the browser for making a new navigation
        event.preventDefault();
        const url = event.target.getAttribute('href');
        Router.go(url);
      });
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }
    let pageElement = null;

    switch (route) {
      case '/':
        break;

      case '/order':
        break;
    }
  },
};

export default Router;

const routes = {
  '/' : home,
  '/countries' : countries,
  '/country' : country
};

const rootDiv = document.getElementById('root');  
rootDiv.innerHTML = routes[window.location.pathname];  
const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,

    
    window.location.origin + pathname 
  )
  rootDiv.innerHTML = routes[pathname]
}

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname]
}
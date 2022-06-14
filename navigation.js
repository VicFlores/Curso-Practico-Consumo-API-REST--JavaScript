window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
  if (location.hash.startsWith('#trends')) {
    console.log('TRENDS!!');
  } else if (location.hash.startsWith('#search=')) {
    console.log('Search!!');
  } else if (location.hash.startsWith('#movie=')) {
    console.log('Movie!!');
  } else if (location.hash.startsWith('#category=')) {
    console.log('Categories!!');
  } else {
    console.log('Home!!');
  }
}

document.addEventListener("click", toggle);

function toggle(click) {
  const element = click.target;
  if (element.classList.contains('cls-3')) {
    element.classList.remove('cls-3');
    element.classList.add('cls-1');
  } else if (element.classList.contains('cls-1')) {
    element.classList.remove('cls-1');
    element.classList.add('cls-3');
  }
}
const icons = document.querySelectorAll("svg.icon");

icons.forEach(icon => {
  const url = icon.querySelector("use").getAttribute("xlink:href"); // might wanna look for href also
  fetch(url)
    .then(response => response.text())
    .then(data => {
      /* This is probably a bit layout-thrashy. Someone smarter than me could probably fix that up. */

      // Replace the <svg><use></svg> with inline SVG
      const newEl = document.createElement("span");
      newEl.innerHTML = data;
      icon.parentNode.replaceChild(newEl, icon);

      // Remove the <span>s
      const parent = newEl.parentNode;
      while (newEl.firstChild) parent.insertBefore(newEl.firstChild, newEl);
      parent.removeChild(newEl);
    });
});

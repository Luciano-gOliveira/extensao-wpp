const interval = setInterval(() => {
  const header = document.querySelector(
    ".x78zum5.x1okw0bk.x6s0dn4.xh8yej3.x14wi4xw.xexx8yu.x4uap5.x18d9i69.xkhd6sd"
  );
  if (header) {
    clearInterval(interval);

    const button = document.createElement("button");
    button.innerHTML = "AZ";
    button.classList.add("configButtonAz");
    header.appendChild(button);
  }
}, 1000);
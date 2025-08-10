function toggleMode() {
  const html =
    document.documentElement /* vai procurar um elemento no documento */
  /*if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } tudo isso pode ser feito assim*/
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "cara sorrindo com camisa preta, jaqueta preta e óculos escucor e fundo azul"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "cara sorrindo com camisa preta e fundo amarelo")
  }
}

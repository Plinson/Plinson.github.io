const links = document.querySelectorAll(".instagit");

links.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const result = confirm("Redirect to another webpage");
    if (result === true) {
      window.location.href = event.target.href;
    }
  });
});
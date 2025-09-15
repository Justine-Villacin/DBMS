function showSection(sectionId, el) {
    document.querySelectorAll('.content-section').forEach(sec => {
      sec.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');

    document.querySelectorAll('.sidebar a').forEach(link => {
      link.classList.remove('active');
    });
    el.classList.add('active');
  }

  function logOut() {
    alert("You have logged out!");
    // window.location.href = "login.html";
  }

  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("collapsed");
  }
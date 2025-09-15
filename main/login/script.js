    // Toggle student/professor
    const studentBtn = document.getElementById("studentBtn");
    const profBtn = document.getElementById("profBtn");

    studentBtn.addEventListener("click", () => {
      studentBtn.classList.add("active");
      profBtn.classList.remove("active");
    });

    profBtn.addEventListener("click", () => {
      profBtn.classList.add("active");
      studentBtn.classList.remove("active");
    });

    // Show/Hide Password
    const togglePassword = document.getElementById("togglePassword");
    const passwordInput = document.getElementById("password");

    togglePassword.addEventListener("click", () => {
      const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
      passwordInput.setAttribute("type", type);
    });

    // Login button action
    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if (email === "" || password === "") {
        alert("Please enter email and password.");
        return;
      }

      // ✅ Redirect to front page (replace with your actual file)
      window.location.href = "../dashboard/index.html";
    });

    // Forgot password modal
    const forgotPasswordLink = document.getElementById("forgotPasswordLink");
    const forgotModal = document.getElementById("forgotModal");
    const closeModal = document.getElementById("closeModal");
    const resetBtn = document.getElementById("resetBtn");

    // Open modal
    forgotPasswordLink.addEventListener("click", (e) => {
      e.preventDefault();
      forgotModal.style.display = "flex";
    });

    // Close modal
    closeModal.addEventListener("click", () => {
      forgotModal.style.display = "none";
      document.getElementById("resetEmail").value = "";
    });

    // Reset button
    resetBtn.addEventListener("click", () => {
      const resetEmail = document.getElementById("resetEmail").value.trim();

      if (resetEmail === "") {
        alert("Please enter your email.");
        return;
      }

      alert("A reset link has been sent to " + resetEmail);
      forgotModal.style.display = "none";
      document.getElementById("resetEmail").value = "";
    });

    // Close modal if clicking outside content
    window.addEventListener("click", (e) => {
      if (e.target === forgotModal) {
        forgotModal.style.display = "none";
        document.getElementById("resetEmail").value = "";
      }
    });
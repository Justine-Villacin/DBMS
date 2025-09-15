  // Toggle student/professor
    const studentBtn = document.getElementById("studentBtn");
    const professorBtn = document.getElementById("professorBtn");

    studentBtn.addEventListener("click", () => {
      studentBtn.classList.add("active");
      professorBtn.classList.remove("active");
    });

    professorBtn.addEventListener("click", () => {
      professorBtn.classList.add("active");
      studentBtn.classList.remove("active");
    });

    // Show/Hide Password
    function togglePassword(id) {
      const input = document.getElementById(id);
      if (input.type === "password") {
        input.type = "text";
      } else {
        input.type = "password";
      }
    }

    // Signup validation
    document.getElementById("signupBtn").addEventListener("click", () => {
      const firstName = document.getElementById("firstName").value;
      const lastName = document.getElementById("lastName").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const policy = document.getElementById("policy").checked;

      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
      }

      if (!policy) {
        alert("You must agree with the privacy and policy.");
        return;
      }

      alert("Account created successfully!");
      window.location.href = "../login/index.html"; // Redirect after signup
    });
const openLogin = document.getElementById("openLogin");
    const loginOverlay = document.getElementById("loginOverlay");
    const registerOverlay = document.getElementById("registerOverlay");
    const forgotOverlay = document.getElementById("forgotOverlay");

    const showRegister = document.getElementById("showRegister");
    const showLogin = document.getElementById("showLogin");
    const forgotPassword = document.getElementById("forgotPassword");
    const backToLogin = document.getElementById("backToLogin");

    // Open login modal
    openLogin.addEventListener("click", () => {
      loginOverlay.style.display = "flex";
    });

    // Switch to Register
    showRegister.addEventListener("click", () => {
      loginOverlay.style.display = "none";
      registerOverlay.style.display = "flex";
    });

    // Switch back to Login
    showLogin.addEventListener("click", () => {
      registerOverlay.style.display = "none";
      loginOverlay.style.display = "flex";
    });

    // Switch to Forgot Password
    forgotPassword.addEventListener("click", () => {
      loginOverlay.style.display = "none";
      forgotOverlay.style.display = "flex";
    });

    // Back to Login from Forgot Password
    backToLogin.addEventListener("click", () => {
      forgotOverlay.style.display = "none";
      loginOverlay.style.display = "flex";
    });

    // Close modals on outside click
    document.addEventListener("click", (e) => {
      if (e.target === loginOverlay) loginOverlay.style.display = "none";
      if (e.target === registerOverlay) registerOverlay.style.display = "none";
      if (e.target === forgotOverlay) forgotOverlay.style.display = "none";
    });

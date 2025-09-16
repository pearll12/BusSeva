import React, { useState } from "react";

const styles = `
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
  font-family: 'Inter', sans-serif;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #2563eb 100%);
  padding: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

body::before {
  content: '';
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;
  box-shadow: inset 0 0 150px rgba(0,0,0,0.4);
  z-index: 100;
}

.login-container {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 24px;
  box-shadow: 0 32px 64px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.2);
  width: 100%;
max-width: 600px;  /* card won’t exceed 600px */
min-width: 400px;  /* optional: avoid too tiny card on medium screens */    /* optional: avoid too small cards on tiny screens */
  min-height: 420px;
  display: flex;
  flex-direction: column;
  z-index: 1;
  transform: translateY(50px);
  opacity: 0;
  margin: auto;
  animation: slideInUp 1s ease forwards 0.3s;
  transition: transform 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes slideInUp { to { transform: translateY(0); opacity: 1; } }

.login-container:hover {
  transform: scale(1.01);
  box-shadow: 0 40px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(255,255,255,0.3);
}

.login-header {
  padding: 24px 20px 16px;
  text-align: center;
  background: linear-gradient(135deg, rgba(79,70,229,0.1) 0%, rgba(124,58,237,0.1) 100%);
}

.bus-icon { font-size: 32px; margin-bottom: 16px; color: #4f46e5; }
.logo { font-size: 36px; font-weight: 800; color: #4f46e5; margin-bottom: 8px; letter-spacing: -1px; }
.welcome-text { color: #64748b; font-size: 16px; font-weight: 500; margin-bottom: 4px; }
.subtitle { color: #94a3b8; font-size: 14px; }

.login-form {
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  padding: 0 32px 24px;
}

.form-group { margin-bottom: 16px; position: relative; opacity: 0; transform: translateX(-20px); animation: slideInLeft 0.6s ease forwards; }
.form-group:nth-child(1) { animation-delay: 0.5s; }
.form-group:nth-child(2) { animation-delay: 0.7s; }

@keyframes slideInLeft { to { opacity: 1; transform: translateX(0); } }

.form-label { display: block; margin-bottom: 8px; font-weight: 600; color: #374151; font-size: 14px; transition: all 0.3s ease; }

.input-wrapper { position: relative; }

.form-input {
  width: 100%;
  padding: 14px 18px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  background: #ffffff;
  transition: all 0.3s ease;
  outline: none;
  color: #1e293b;
}

.form-input:focus { border-color: #4f46e5; box-shadow: 0 0 0 3px rgba(79,70,229,0.1); }

.toggle-password {
  position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
  cursor: pointer; color: #94a3b8; font-size: 18px; background: transparent; border: none;
}

.toggle-password:hover { color: #4f46e5; }

.login-btn {
  width: 100%; padding: 16px;
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  color: white; border: none; border-radius: 14px; font-size: 16px; font-weight: 700;
  cursor: pointer; transition: all 0.3s ease; position: relative; overflow: hidden; margin-bottom: 16px;
  text-transform: uppercase; letter-spacing: 1px; opacity: 0; transform: translateY(20px); animation: slideInUp 0.6s ease forwards 0.9s;
}

.login-btn:hover { transform: translateY(-2px); box-shadow: 0 16px 32px rgba(79,70,229,0.3); }

.forgot-password { text-align: center; margin-top: auto; opacity: 100; animation: fadeIn 0.6s ease forwards 1.1s; }

.forgot-password a { color: #4f46e5; text-decoration: none; font-weight: 600; font-size: 14px; }
.forgot-password a:hover { text-decoration: underline; }

.loading {
  background: linear-gradient(45deg, #94a3b8, #64748b) !important;
  cursor: not-allowed !important; transform: none !important;
}
.loading::after {
  content: '';
  position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
  width: 20px; height: 20px; border: 2px solid transparent; border-top: 2px solid white; border-radius: 50%;
  animation: spin 1s linear infinite;
}
@keyframes spin { to { transform: translate(-50%, -50%) rotate(360deg); } }

.success { background: linear-gradient(135deg, #10b981 0%, #059669 100%) !important; animation: successPulse 0.6s ease; }
@keyframes successPulse { 0%,100%{ transform:scale(1); }50%{ transform:scale(1.02); } }

@media (max-width: 480px) {
  .login-container { border-radius: 20px; min-height: 400px; }
  .login-header { padding: 24px 16px 16px; }
  .login-form { padding: 0 16px 24px; }
  .logo { font-size: 28px; }
}
`;
function showNotification(message, type = "info") {
  const notification = document.createElement("div");
  notification.style.cssText = `
      position: fixed; top: 20px; right: 20px; padding: 12px 20px;
      background: ${type === "success" ? "#10b981" : type === "error" ? "#ef4444" : "#4f46e5"};
      color: white; border-radius: 10px; font-weight: 600; z-index: 10000;
      transform: translateX(400px); transition: transform 0.3s ease;
      box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  `;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => { notification.style.transform = "translateX(0)"; }, 100);
  setTimeout(() => { notification.style.transform = "translateX(400px)"; setTimeout(() => notification.remove(), 300); }, 3000);
}

const SignInForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => setPasswordType(prev => prev === "password" ? "text" : "password");

  const handleFormSubmit = async (e) => {
  e.preventDefault();
  
  const btn = e.target.querySelector("#loginBtn");
  const email = e.target.querySelector("#email").value;
  const password = e.target.querySelector("#password").value;

  if (email && password) {
    btn.classList.add("loading");
    btn.innerHTML = "";

    try {
      const res = await fetch("/api/login", {  // Use relative URL thanks to proxy
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const contentType = res.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        const data = await res.json();

        if (res.ok) {
          btn.classList.remove("loading");
          btn.classList.add("success");
          btn.innerHTML = "Welcome Aboard! 🎉";
          showNotification("Login successful! Welcome to BusSeva!", "success");

          setTimeout(() => {
            btn.classList.remove("success");
            btn.innerHTML = "Sign In";
            // Optionally redirect to another page here, e.g.:
            // window.location.href = "/dashboard";
          }, 2000);
        } else {
          throw new Error(data.message || "Login failed");
        }
      } else {
        const text = await res.text();
        throw new Error(`Unexpected server response: ${text}`);
      }
    } catch (error) {
      btn.classList.remove("loading");
      btn.innerHTML = "Sign In";
      showNotification(error.message, "error");
    }
  }
};

  const handleInputAnimation = e => {
    const input = e.target;
    const label = input.closest(".form-group").querySelector(".form-label");
    if (input.value.length > 0) {
      input.style.borderColor = "#4f46e5";
      label.style.color = "#4f46e5";
    } else {
      input.style.borderColor = "#e2e8f0";
      label.style.color = "#374151";
    }
  };

  return (
    <>
      <style>{styles}</style>
      <div className="login-container">
        <div className="login-header">
          <div className="bus-icon">🚌</div>
          <div className="logo">BusSeva</div>
          <div className="welcome-text">Welcome back!</div>
          <div className="subtitle">Sign in to continue your journey</div>
        </div>

        <form className="login-form" onSubmit={handleFormSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">Email Address</label>
            <div className="input-wrapper">
              <input type="email" id="email" className="form-input" placeholder="Enter your email" required onInput={handleInputAnimation} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">Password</label>
            <div className="input-wrapper">
              <input type={passwordType} id="password" className="form-input" placeholder="Enter your password" required onInput={handleInputAnimation} />
              <button type="button" className="toggle-password" onClick={togglePassword}>
                {passwordType === "password" ? "👁" : "🙈"}
              </button>
            </div>
          </div>

          <button type="submit" className="login-btn" id="loginBtn">Sign In</button>

          <div className="forgot-password">
            <a href="#" onClick={e => { e.preventDefault(); showNotification("Redirecting to password recovery...", "info"); }}>
              Forgot your password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
};

function Login() {
  return <SignInForm />;
}

export default Login;
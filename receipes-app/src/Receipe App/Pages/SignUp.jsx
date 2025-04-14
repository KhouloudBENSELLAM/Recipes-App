import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
  // États pour stocker les valeurs des champs du formulaire, les erreurs et le message de succès
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState(""); // État pour gérer les erreurs
  const [success, setSuccess] = useState(""); // Message de succès

  const navigate = useNavigate();
  // Validation basique de l'email avec une expression régulière
  const validateEmail = (email) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
  };

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêcher le comportement par défaut (rechargement de la page)

    // Réinitialiser les erreurs et les messages de succès
    setError("");
    setSuccess("");

    // Vérification des champs du formulaire
    if (!email || !password) {
      setError("Tous les champs sont obligatoires.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Veuillez entrer un email valide.");
      return;
    }

    // Exemple de vérification des identifiants avec des données simulées (remplacez par une vérification réelle)
    const mockUser = {
      email: "test@example.com",
      password: "password123",
    };

    // Vérification si les informations d'identification correspondent
    if (email === mockUser.email && password === mockUser.password) {
      setSuccess("Inscription réussie ! Bienvenue.");
      setTimeout(() => {
        navigate("/dashboard"); 
      }, 1500);
    } else {
      setError("Identifiants incorrects. Veuillez réessayer.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-image">
        <img
          src="./pictures/DALL·E 2025-01-28 18.08.38 - A modern and creative logo for a website named 'TastyThreads' focused on food recipes. The design should integrate a fork and thread motif to symboliz.webp"
          alt="Bannière d'inscription"
        />
      </div>

      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          {/* Champ Email */}
          <input
            type="email"
            placeholder="Entrez votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />

          {/* Champ Mot de Passe */}
          <input
            type="password"
            placeholder="Entrez votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />

          <div className="form-options">
            {/* Case à cocher "Se souvenir de moi" */}
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />
              Se souvenir de moi
            </label>

            {/* Lien "Mot de passe oublié ?" */}
            <a href="/mot-de-passe-oublie" className="forgot-password-link">
              Mot de passe oublié ?
            </a>
          </div>

          {/* Affichage des erreurs si présentes */}
          {error && <div className="error-message" style={{'color':'red'}}>{error}</div>}

          {/* Affichage du message de succès */}
          {success && <div className="success-message" style={{'color':'green'}}>{success}</div>}

          {/* Bouton de soumission */}
          <input type="submit" value="S'inscrire" className="submit-btn" />

          <h5>
            Vous n'avez pas un compte ? <a href="/connexion">S'inscrire</a>
          </h5>

          <hr />

          <h2>Ou connectez-vous avec</h2>

          <div className="social-login-buttons">
            {/* Bouton de connexion avec Google */}
            <button type="button" className="google-btn">
              <a href="/auth/google">
                <img src="./google-icon-path.png" alt="Google" />
                Compte Google
              </a>
            </button>

            {/* Bouton de connexion avec Facebook */}
            <button type="button" className="facebook-btn">
              <a href="/auth/facebook">
                <img src="./facebook-icon-path.png" alt="Facebook" />
                Compte Facebook
              </a>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
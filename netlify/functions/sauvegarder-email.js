// Fichier : netlify/functions/sauvegarder-email.js

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

// La fonction qui sera exécutée par Netlify
exports.handler = async function(event) {
  // On récupère les données envoyées par le questionnaire
  // Note : j'ai ajouté les autres données au cas où vous voudriez les utiliser dans l'e-mail
  const { email, score, profile, description } = JSON.parse(event.body);

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ message: "L'adresse e-mail est manquante" }) };
  }

  // On récupère les clés secrètes depuis les variables d'environnement de Netlify
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  // Initialisation des clients
  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend = new Resend(resendApiKey);

  try {
    // Tâche 1 : Sauvegarder l'e-mail dans Supabase
    await supabase.from('prospects').insert([{ email: email }]);
    
    // Tâche 2 : Envoyer l'e-mail de résultats avec Resend
    await resend.emails.send({
      from: 'contact@votre-domaine-verifie.com', // <-- REMPLACEZ PAR VOTRE ADRESSE E-MAIL VÉRIFIÉE SUR RESEND
      to: email,
      subject: 'Vos résultats au questionnaire Assurance-Vie Aeternia',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Bonjour !</h2>
          <p>Merci d'avoir participé à notre questionnaire sur l'assurance-vie.</p>
          <h3>Voici votre résultat :</h3>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px;">
            <p><strong>Score :</strong> ${score} / 18</p>
            <p><strong>Profil :</strong> ${profile}</p>
            <p><strong>Analyse :</strong> ${description}</p>
          </div>
          <p>N'hésitez pas à prendre rendez-vous avec un de nos experts pour discuter de votre stratégie.</p>
          <br>
          <p>L'équipe Aeternia</p>
        </div>
      `,
    });

    // Tout s'est bien passé, on renvoie une réponse de succès
    return { statusCode: 200, body: JSON.stringify({ message: "E-mail sauvegardé et envoyé avec succès !" }) };

  } catch (error) {
    // En cas d'erreur
    return { statusCode: 500, body: JSON.stringify({ message: error.message }) };
  }
};
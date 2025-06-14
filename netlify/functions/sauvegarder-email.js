// Fichier : netlify/functions/sauvegarder-email.js

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

exports.handler = async function(event) {
  // On récupère les données envoyées par le questionnaire
  const { email, score, profile, description } = JSON.parse(event.body);

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ message: "L'adresse e-mail est manquante" }) };
  }

  // On lit les clés secrètes depuis les variables d'environnement
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  // Initialisation des clients Supabase et Resend
  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend = new Resend(resendApiKey);

  try {
    // Tâche 1 : Sauvegarder l'e-mail dans la base de données Supabase
    await supabase.from('prospects').insert([{ email: email }]);
    
    // Tâche 2 : Envoyer l'e-mail de confirmation avec Resend
    await resend.emails.send({
      from: 'romain.dagnano@aeterniapatrimoine.fr', // Votre adresse vérifiée
      to: email,
      subject: 'Vos résultats au questionnaire Assurance-Vie Aeternia',
      html: `
        <div style="font-family: sans-serif; line-height: 1.6;">
          <h2>Bonjour !</h2>
          <p>Merci d'avoir participé à notre questionnaire sur l'assurance-vie.</p>
          <h3>Voici votre résultat :</h3>
          <div style="background-color: #f4f4f4; padding: 15px; border-radius: 8px; color: #111;">
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

    // Si tout a réussi, on renvoie une réponse de succès
    return { statusCode: 200, body: JSON.stringify({ message: "Succès !" }) };

  } catch (error) {
    // En cas d'erreur avec Supabase ou Resend, on la log et on renvoie une erreur
    console.error(error);
    return { statusCode: 500, body: JSON.stringify({ message: error.message }) };
  }
};
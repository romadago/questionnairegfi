// Fichier : netlify/functions/sauvegarder-email.js

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

exports.handler = async function(event) {
  const { email, score, profile, description } = JSON.parse(event.body);

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ message: "L'adresse e-mail est manquante" }) };
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  const supabase = createClient(supabaseUrl, supabaseKey);
  const resend = new Resend(resendApiKey);

  try {
    // --- Tâche 1 : Sauvegarder l'e-mail dans Supabase ---
    const { error: supabaseError } = await supabase
      .from('prospects')
      .insert([{ email: email }]);

    // NOUVEAU : On vérifie s'il y a une erreur retournée par Supabase
    if (supabaseError) {
      throw new Error(`Erreur Supabase: ${supabaseError.message}`);
    }
    
    // --- Tâche 2 : Envoyer l'e-mail de confirmation avec Resend ---
    const { error: resendError } = await resend.emails.send({
      from: 'romain.dagnano@aeterniapatrimoine.fr',
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
    
    // NOUVEAU : On vérifie s'il y a une erreur retournée par Resend
    if (resendError) {
      throw new Error(`Erreur Resend: ${resendError.message}`);
    }

    // Si tout a réussi, on renvoie une réponse de succès
    return { statusCode: 200, body: JSON.stringify({ message: "Succès !" }) };

  } catch (error) {
    // Si une erreur a été "jetée" (throw), on la capture ici
    console.error("Erreur détaillée de la fonction:", error);
    return { statusCode: 500, body: JSON.stringify({ message: error.message }) };
  }
};
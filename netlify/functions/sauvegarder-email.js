// Fichier : netlify/functions/sauvegarder-email.js

exports.handler = async function(event) {
  
  // On affiche spécifiquement les variables qui nous intéressent
  console.log("Vérification des variables d'environnement :");
  console.log("SUPABASE_URL:", process.env.SUPABASE_URL);
  console.log("SUPABASE_KEY:", process.env.SUPABASE_KEY);
  console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY);

  // On renvoie un message de succès pour ce test
  // pour voir si la fonction elle-même s'exécute sans crasher.
  return {
    statusCode: 200,
    body: JSON.stringify({ 
      message: "Test de débogage réussi. Vérifiez les logs de la fonction sur Netlify.",
      supabaseUrlTrouve: process.env.SUPABASE_URL ? "Oui" : "Non",
      supabaseKeyTrouve: process.env.SUPABASE_KEY ? "Oui" : "Non",
      resendKeyTrouve: process.env.RESEND_API_KEY ? "Oui" : "Non",
    }),
  };
};
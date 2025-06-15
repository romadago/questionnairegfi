// Fichier : src/configurations/types.ts

// --- DÉFINITION DES STRUCTURES DE DONNÉES ---

// Décrit la forme d'une seule option de réponse dans une question
export interface Option {
  label: string;
  value: string;
  points: number;
}

// Décrit la forme d'une seule question complète
export interface Question {
  question: string; // Le texte de la question
  options: Option[]; // Un tableau contenant les options de réponse
}

// Décrit la forme d'un seul niveau de résultat possible
export interface Result {
  min: number; // Le score minimum pour obtenir ce résultat
  max: number; // Le score maximum pour obtenir ce résultat
  label: string; // Ex: "Débutant", "Intermédiaire"
  imageSrc: string; // Le chemin vers l'image du résultat
  description: string; // Le texte descriptif du résultat
}

// Décrit la structure complète de la configuration pour un questionnaire
export interface QuestionnaireConfig {
  id: string; // Un identifiant unique (ex: "assurance-vie")
  titre: string; // Le titre principal affiché sur le questionnaire
  stockageId: string; // L'identifiant pour la base de données
  questions: Question[]; // Le tableau de toutes les questions
  results: Result[]; // Le tableau de tous les résultats possibles
}

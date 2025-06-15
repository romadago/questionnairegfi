// Fichier : src/configurations/assurance-vie.ts

import { QuestionnaireConfig } from './types.js'; // On importe la structure depuis types.ts

// --- DONNÉES ORIGINALES DU QUESTIONNAIRE ---
// Ces données sont extraites de votre fichier QuestionnaireAssuranceVie.tsx original.

const questions = [
  {
    question: "Peut-on retirer de l’argent d’un contrat d’assurance vie avant 8 ans ?",
    options: [
      { label: "A. Oui, mais cela entraîne toujours des pénalités importantes", value: "A", points: 0 },
      { label: "B. Oui, c’est possible, mais la fiscalité est moins avantageuse", value: "B", points: 1 },
      { label: "C. Non, il faut attendre 8 ans obligatoirement", value: "C", points: 0 },
    ],
  },
  {
    question: "Quel est le type de support garanti en capital dans un contrat d’assurance vie ?",
    options: [
      { label: "A. Le fonds en euros", value: "A", points: 1 },
      { label: "B. Les unités de compte", value: "B", points: 0 },
      { label: "C. Les actions cotées", value: "C", points: 0 },
    ],
  },
  {
    question: "Peut-on avoir plusieurs contrats d’assurance vie ?",
    options: [
      { label: "A. Non, la loi interdit de détenir plus d’un contrat", value: "A", points: 0 },
      { label: "B. Oui, mais seulement auprès du même assureur", value: "B", points: 0 },
      { label: "C. Oui, il est possible d’en avoir plusieurs chez différents assureurs", value: "C", points: 1 },
    ],
  },
    {
    question: "Qui peut modifier la clause bénéficiaire dans un contrat d’assurance vie ?",
    options: [
      { label: "A. Le bénéficiaire uniquement", value: "A", points: 0 },
      { label: "B. L’assuré uniquement", value: "B", points: 2 },
      { label: "C. L’assureur, selon les performances du contrat", value: "C", points: 0 },
    ],
  },
  {
    question: "Après combien de temps votre assurance vie devient-elle plus avantageuse fiscalement ?",
    options: [
      { label: "A. Dès le lendemain de l’ouverture", value: "A", points: 0 },
      { label: "B. Après 8 ans de détention", value: "B", points: 1 },
      { label: "C. Jamais", value: "C", points: 0 },
    ],
  },
  {
    question: "Dans un contrat d’assurance vie, que représentent les « unités de compte » ?",
    options: [
      { label: "A. Des produits garantis par l’État", value: "A", points: 0 },
      { label: "B. Des supports d’investissement à capital non garanti (ex : actions, OPCVM, SCPI…)", value: "B", points: 2 },
      { label: "C. Une forme de devise propre à l’assurance", value: "C", points: 0 },
    ],
  },
  {
    question: "Peut-on modifier la clause bénéficiaire d’un contrat d’assurance vie ?",
    options: [
      { label: "A. Oui, à tout moment, tant qu’il n’y a pas eu d’acceptation du bénéficiaire", value: "A", points: 2 },
      { label: "B. Non, elle est irrévocable dès la signature du contrat", value: "B", points: 0 },
      { label: "C. Oui, mais uniquement avec l’accord de l’assureur", value: "C", points: 0 },
    ],
  },
  {
    question: "Quel est le plafond d’exonération (par bénéficiaire) sur les primes versées avant 70 ans ?",
    options: [
      { label: "A. 30 000 €", value: "A", points: 0 },
      { label: "B. 152 500 €", value: "B", points: 3 },
      { label: "C. 500 000 €", value: "C", points: 0 },
    ],
  },
  {
    question: "Quel est l’intérêt d’un rachat programmé ?",
    options: [
      { label: "A. Garantir un capital à terme", value: "A", points: 0 },
      { label: "B. Obtenir des revenus réguliers tout en gardant son épargne investie", value: "B", points: 2 },
      { label: "C. Transformer l’assurance vie en rente", value: "C", points: 0 },
    ],
  },
  {
    question: "Dans quel cas les sommes d’un contrat d’assurance vie peuvent-elles réintégrer la succession ?",
    options: [
      { label: "A. Si le bénéficiaire est mineur", value: "A", points: 0 },
      { label: "B. Si les primes versées sont manifestement exagérées au regard du patrimoine du souscripteur", value: "B", points: 3 },
      { label: "C. Si le contrat est ouvert depuis moins de 2 ans", value: "C", points: 0 },
    ],
  },
];

const results = [
  {
    min: 0,
    max: 6,
    label: "Débutant",
    imageSrc: "/debutant.jpg",
    description: "Félicitations, vous avez posé la première brique ! On sent le potentiel, mais pour l'instant, on dirait qu'il manque quelques pages à la notice de montage. La bonne nouvelle ? Nous sommes d'excellents pédagogues. Fini le jargon, nous transformons le charabia financier en plan d'action limpide. Prêt(e) à assembler la suite ? Prenons rendez-vous pour construire des bases en béton armé.",
  },
  {
    min: 7,
    max: 13,
    label: "Intermédiaire",
    imageSrc: "/intermediaire.jpg",
    description: "Excellent ! Vos murs sont solides et le plan est bon. Vous avez une très bonne vision de l'ensemble, mais avant de poser le toit, il faut s'assurer que tout est parfaitement aligné. Vous êtes si proche du but. Ne laissez pas les détails techniques ou les subtilités fiscales freiner votre élan. Discutons-en pour aller jusqu'au bout et mettre votre patrimoine à l'abri des intempéries.",
  },
  {
    min: 14,
    max: 18,
    label: "Avancé",
    imageSrc: "/avance.jpg",
    description: "Impressionnant ! Vous n'êtes plus un simple visiteur, vous êtes l'architecte. Vous avez les plans, la vision... et probablement des questions très pointues. Notre rôle ? Être votre maître d'œuvre. Nous apportons les outils, l'expertise et la structure pour que votre stratégie prenne vie, optimisée et sans faille. Mettons votre plan en action. Prenez rendez-vous pour bâtir la forteresse.",
  },
];

// --- L'OBJET DE CONFIGURATION COMPLET ---
// On exporte un seul objet qui regroupe toutes les données pour ce questionnaire.

export const configAssuranceVie: QuestionnaireConfig = {
  id: 'assurance-vie',
  titre: 'Connaissez-vous vraiment bien l’assurance-vie ?',
  stockageId: 'reponses_assurance_vie_TEST', // Vise la table de test
  questions: questions,
  results: results,
};

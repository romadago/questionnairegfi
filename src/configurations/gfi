// Fichier : src/configurations/GFI.ts

import { QuestionnaireConfig } from './types.js';

// --- DÉFINITION DES DONNÉES POUR LE QUESTIONNAIRE GFI ---

const questions = [
  {
    question: "Qu’est-ce qu’un groupement forestier ?",
    options: [
      { label: "A. Un fonds d’investissement immobilier classique", value: "A", points: 0 },
      { label: "B. Une société qui gère des forêts pour le compte de ses associés", value: "B", points: 1 },
      { label: "C. Une coopérative agricole", value: "C", points: 0 },
    ],
  },
  {
    question: "Quel est l’objectif principal d’un investissement dans un groupement forestier ?",
    options: [
      { label: "A. Réaliser des plus-values immobilières rapides", value: "A", points: 0 },
      { label: "B. Conserver et valoriser un patrimoine forestier sur le long terme", value: "B", points: 1 },
      { label: "C. Obtenir des revenus locatifs réguliers", value: "C", points: 0 },
    ],
  },
  {
    question: "Les parts de groupements forestiers sont-elles facilement revendables ?",
    options: [
      { label: "A. Oui, elles sont cotées en Bourse", value: "A", points: 0 },
      { label: "B. Non, c’est un placement peu liquide avec une durée d’investissement longue", value: "B", points: 2 },
      { label: "C. Oui, elles se vendent comme des actions ordinaires", value: "C", points: 0 },
    ],
  },
  {
    question: "Quelle est la durée d’investissement recommandée pour un groupement forestier ?",
    options: [
      { label: "A. 2 à 3 ans", value: "A", points: 0 },
      { label: "B. 5 à 7 ans", value: "B", points: 0 },
      { label: "C. Supérieure à 8 ans", value: "C", points: 2 },
    ],
  },
  {
    question: "Quel avantage fiscal peut être associé à un investissement dans un groupement forestier ?",
    options: [
      { label: "A. Exonération totale d’impôt sur le revenu", value: "A", points: 0 },
      { label: "B. Réduction d’impôt sur le revenu de 18%", value: "B", points: 3 },
      { label: "C. Aucun avantage fiscal", value: "C", points: 0 },
    ],
  },
  {
    question: "Qui est responsable de la gestion et de l’exploitation des forêts dans un groupement forestier ?",
    options: [
      { label: "A. Chaque associé individuellement", value: "A", points: 0 },
      { label: "B. Le conseil d’administration ou le gérant du groupement", value: "B", points: 1 },
      { label: "C. L’État français", value: "C", points: 0 },
    ],
  },
  {
    question: "Quel type de revenu un investisseur peut-il espérer d’un groupement forestier ?",
    options: [
      { label: "A. Des loyers réguliers versés chaque trimestre", value: "A", points: 0 },
      { label: "B. Des revenus issus de la vente du bois et/ou la valorisation du patrimoine", value: "B", points: 2 },
      { label: "C. Des dividendes garantis à 5 %", value: "C", points: 0 },
    ],
  },
  {
    question: "Quel risque spécifique est associé à un investissement en forêt ?",
    options: [
      { label: "A. Le gel des loyers", value: "A", points: 0 },
      { label: "B. Les catastrophes naturelles (incendies, tempêtes, parasites)", value: "B", points: 2 },
      { label: "C. La nationalisation par l’État", value: "C", points: 0 },
    ],
  },
];

const results = [
  {
    min: 0,
    max: 5,
    label: "Débutant",
    imageSrc: "/debutant.jpg",
    description: "Tu découvres encore le fonctionnement des groupements forestiers. Tu as saisi quelques bases, mais les notions de fiscalité, de liquidité ou de gestion restent à explorer. Un accompagnement ou une présentation pourrait t’aider à mieux comprendre les enjeux.",
  },
  {
    min: 6,
    max: 10,
    label: "Intermédiaire",
    imageSrc: "/intermediaire.jpg",
    description: "Tu as une bonne vision d’ensemble du placement forestier. Tu connais son objectif patrimonial et les risques associés, mais certains aspects techniques comme les avantages fiscaux ou la durée d’investissement méritent d’être consolidés.",
  },
  {
    min: 11,
    max: 14,
    label: "Avancé",
    imageSrc: "/avance.jpg",
    description: "Tu maîtrises les principes clés des groupements forestiers : fiscalité, durée, revenus, gestion, transmission… Bravo ! Tu es prêt à utiliser ce placement dans une stratégie patrimoniale long terme ou à conseiller des clients avec précision.",
  },
];

// --- L'OBJET DE CONFIGURATION FINAL ---

export const configGFI: QuestionnaireConfig = {
  id: 'gfi',
  titre: 'L’investissement en groupement forestier vous est-il familier ?',
  stockageId: 'reponses_gfi_TEST',
  questions: questions,
  results: results,
};

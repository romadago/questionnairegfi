import { useState } from "react";
import logoAeternia from './logo-aeternia.svg'; 

// --- DONNÉES DU QUESTIONNAIRE ---
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

// --- COMPOSANT REACT ---

export default function QuestionnaireAssuranceVie() {
  
  // --- STATE MANAGEMENT ---
  
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [email, setEmail] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);

  // --- HANDLERS (Logique des actions avec les types ajoutés) ---

  const handleStartQuiz = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setQuizStarted(true);
    }
  };
  
  const handleChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[current] = value;
    setAnswers(newAnswers);
  };

  const handleNext = () => setCurrent((c) => c + 1);
  const handlePrev = () => setCurrent((c) => c - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setAnswers(Array(questions.length).fill(null));
    setSubmitted(false);
    setCurrent(0);
    setEmail("");
    setQuizStarted(false);
  };

  const handleSendPdf = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/.netlify/functions/sauvegarder-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email }),
      });
      if (!response.ok) {
        throw new Error("La réponse du serveur n'est pas OK");
      }
      alert(`Merci ! Vos résultats vous seront envoyés à l'adresse : ${email}`);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde de l'e-mail:", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  // --- CALCULS ---

  const totalPoints = answers.reduce((sum, answer, idx) => {
    if (answer === null) return sum;
    const question = questions[idx];
    if (!question) return sum;
    const option = question.options.find((opt) => opt.value === answer);
    return sum + (option ? option.points : 0);
  }, 0);

  const result = results.find(r => totalPoints >= r.min && totalPoints <= r.max);
  
  const progressPercentage = ((current + 1) / questions.length) * 100;

  // --- JSX (Rendu visuel) ---

  return (
    <div className="min-h-screen w-full bg-fond-sombre text-white flex flex-col items-center justify-center p-4 sm:p-6">
      
      <img 
        src={logoAeternia} 
        alt="Logo Aeternia" 
        className="w-24 h-24 mb-6 object-contain"
      />

      <div className="bg-bloc-sombre p-6 sm:p-10 rounded-2xl shadow-2xl w-full max-w-3xl">
        
        {!quizStarted ? (
          // --- VUE D'ACCUEIL ---
          <div className="text-center animate-fade-in">
            <h1 className="text-3xl font-bold mb-4 text-center text-cyan-vif">
              Connaissez-vous vraiment bien l’assurance-vie ?
            </h1>
            <p className="text-gray-300 mb-8 max-w-lg mx-auto">
              Répondez à nos 10 questions pour évaluer vos connaissances et recevez votre résultat personnalisé par e-mail.
            </p>
            <form onSubmit={handleStartQuiz} className="max-w-sm mx-auto">
              <label htmlFor="email-start" className="font-semibold text-gray-200 mb-2 block">Entrez votre e-mail pour commencer</label>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  id="email-start"
                  placeholder="votre.email@exemple.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-fond-sombre border border-gray-600 focus:ring-2 focus:ring-cyan-vif focus:outline-none transition"
                  required
                />
              </div>
              <button type="submit" className="w-full mt-4 px-8 py-3 rounded-lg font-semibold bg-cyan-vif text-fond-sombre hover:bg-opacity-80 transition-opacity">
                Commencer le questionnaire
              </button>
            </form>
          </div>

        ) : !submitted ? (
          // --- VUE DU QUESTIONNAIRE ---
          <form onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold mb-8 text-center text-cyan-vif">
              Connaissez-vous vraiment bien l’assurance-vie ?
            </h1>
            <div className="mb-8">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-sm text-gray-300">
                  <span>Question {current + 1}/{questions.length}</span>
                  <span>Progression</span>
                </div>
                <div className="w-full bg-fond-sombre rounded-full h-2">
                  <div className="bg-cyan-vif h-2 rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }}></div>
                </div>
              </div>
              <p className="text-xl font-semibold mb-6 text-gray-200">{questions[current].question}</p>
              <div className="space-y-4">
                {questions[current].options.map((opt) => (
                  <label
                    key={opt.value}
                    className={`block cursor-pointer p-4 rounded-xl transition-all duration-200 ${answers[current] === opt.value ? 'bg-cyan-vif text-fond-sombre font-bold ring-2 ring-white' : 'bg-fond-sombre hover:bg-bloc-sombre border border-cyan-vif/50 text-gray-200'}`}
                  >
                    <input type="radio" name={`q${current}`} value={opt.value} checked={answers[current] === opt.value} onChange={() => handleChange(opt.value)} className="hidden" required />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-10">
              <button type="button" className="px-6 py-2 rounded-lg font-semibold border-2 border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" onClick={handlePrev} disabled={current === 0}>Précédent</button>
              {current < questions.length - 1 ? (
                <button type="button" className="px-6 py-2 rounded-lg font-semibold bg-cyan-vif text-fond-sombre hover:bg-opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleNext} disabled={answers[current] === null}>Suivant</button>
              ) : (
                <button type="submit" className="px-6 py-2 rounded-lg font-semibold bg-cyan-vif text-fond-sombre hover:bg-opacity-80 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed" disabled={answers[current] === null}>Voir mon résultat</button>
              )}
            </div>
          </form>

        ) : (
          // --- VUE DES RÉSULTATS ---
          <div className="text-center animate-fade-in">
            <img src={result?.imageSrc} alt={result?.label} className="w-48 h-48 mx-auto mb-6 object-contain"/>
            <h2 className="text-2xl font-semibold mb-4 text-cyan-vif">Votre Résultat</h2>
            <div className="text-5xl font-bold mb-2 text-white">{totalPoints} / 18</div>
            <div className="text-3xl font-semibold mb-4 text-cyan-vif">{result?.label}</div>
            <p className="mb-8 text-gray-300 max-w-md mx-auto">{result?.description}</p>
            
            <div className="mt-8 border-t border-cyan-vif/20 pt-8 max-w-sm mx-auto">
              <p className="text-gray-300 mb-4">Un récapitulatif va être envoyé à <strong>{email}</strong>.</p>
              <button
                onClick={handleSendPdf}
                className="w-full px-4 py-3 rounded-lg font-semibold bg-gray-600 text-white hover:bg-gray-500 transition-colors"
              >
                Recevoir mes résultats en PDF
              </button>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                className="w-full sm:w-auto px-8 py-3 rounded-lg font-semibold border-2 border-cyan-vif text-cyan-vif hover:bg-cyan-vif hover:text-fond-sombre transition-colors"
                onClick={handleReset}
              >
                Recommencer
              </button>
              <a
                href="https://doodle.com/bp/romaindagnano/rdv-decouverte-aeternia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-8 py-3 rounded-lg font-semibold bg-cyan-vif text-fond-sombre hover:bg-opacity-80 transition-opacity"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
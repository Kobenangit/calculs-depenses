// Dépenses journalières (number[], en FCFA)
const depenses = [1500, 2500, 0, 4000, 1000, 2500, 3000];
const SEUIL = 2000; // number, FCFA

// Retourne le total des dépenses (number, FCFA)
function calculerTotal(montants) {
  return montants.reduce((somme, m) => somme + m, 0);
}

// Retourne la moyenne par jour (number, FCFA) ; 0 si le tableau est vide
function calculerMoyenne(montants) {
  if (montants.length === 0) return 0;
  return calculerTotal(montants) / montants.length;
}

// Retourne les dépenses strictement supérieures au seuil (number[], FCFA)
function depensesAuDessus(montants, seuil) {
  return montants.filter((m) => m > seuil);
}

// Retourne la plus grande dépense (number, FCFA) ; 0 si le tableau est vide
function plusGrandeDepense(montants) {
  if (montants.length === 0) return 0;
  return Math.max(...montants);
}

// Retourne une copie triée par ordre croissant (number[], FCFA), sans modifier l'original
function copieTriee(montants) {
  return [...montants].sort((a, b) => a - b);
}

// Tableau initial avant tri
console.log(`Tableau initial (avant tri) : [${depenses.join(", ")}]`);

const total = calculerTotal(depenses);          // number, FCFA
const moyenne = calculerMoyenne(depenses);      // number, FCFA/jour
const eleves = depensesAuDessus(depenses, SEUIL); // number[], FCFA
const maximum = plusGrandeDepense(depenses);    // number, FCFA
const triee = copieTriee(depenses);             // number[], FCFA

// Rapport
console.log(`
===== Rapport des dépenses =====
Total              : ${total} FCFA
Moyenne par jour   : ${moyenne.toFixed(2)} FCFA
Dépenses > ${SEUIL}  : [${eleves.join(", ")}] FCFA
Maximum            : ${maximum} FCFA
Copie triée (asc.) : [${triee.join(", ")}] FCFA
================================`);

// Tableau initial après tri : doit être inchangé
console.log(`Tableau initial (après tri) : [${depenses.join(", ")}]`);
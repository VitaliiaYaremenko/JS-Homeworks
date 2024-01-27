const createCandidate = function (name, skills) {
  return {
    name,
    skills,
  };
};

// _____________________________________________________
const requirements = [];
const addRequirement = function (requirement) {
  requirements.push(requirement);
  return requirements;
};

addRequirement('JavaScript');
addRequirement('React');
addRequirement('CSS');
addRequirement('HTML');

const candidate1 = createCandidate('Nikita', 'CSS, HTML, JavaScript');
const candidate2 = createCandidate('Anna', 'CSS, HTML, JavaScript, React');
const candidate3 = createCandidate('Alex', 'HTML, CSS');

const listСandidates = [candidate1, candidate2, candidate3];
// _____________________________________________________
const conductInterview = function (candidate, requirements) {
  for (const requirement of requirements) {
    if (!candidate.skills.includes(requirement)) {
      return false;
    }
  }
  return true;
};
// _____________________________________________________
const evaluateCandidate = function (candidate) {
  const score = candidate.skills.length * 20;
  return score > 100 ? 100 : score;
};

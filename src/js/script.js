const skillsRequirements = ['HTML', 'CSS', 'SCSS', 'Java Script', 'React', 'Angular'];

const skillCandidate1 = ['HTML', 'CSS', 'Java Script'];
const skillCandidate2 = ['HTML', 'CSS', 'SCSS', 'Java Script', 'React'];
const skillCandidate3 = ['HTML', 'CSS', 'SCSS', 'Java Script', 'React', 'Angular', 'Node.JS'];
// _______________________________________________________________

const createСandidate = function (name = 'Write name candidate', skills = []) {
  return {
    name,
    skills,
  };
};

const candidate1 = createСandidate('Nick', skillCandidate1);
const candidate2 = createСandidate('Mary', skillCandidate2);
const candidate3 = createСandidate('Alex', skillCandidate3);

const candidatesItem = [candidate1, candidate2, candidate3];

// _______________________________________________________________

const addRequirement = function (skill, newRequirement) {
  newRequirement.push(skill);
};
addRequirement('Node.JS', skillsRequirements);

// _______________________________________________________________

const conductInterview = function (candidate, requirements) {
  let result = false;

  for (let i = 0; i < requirements.length; i += 1) {
    if (requirements[i] !== candidate.skills[i]) return result;
  }
  result = true;
  return result;
};

console.log(conductInterview(candidate1, skillsRequirements));
console.log(conductInterview(candidate2, skillsRequirements));
console.log(conductInterview(candidate3, skillsRequirements));
// _______________________________________________________________

const evaluationFunction = function (candidate, requirement) {
  let score = 0;

  for (let i = 0; i < requirement.length; i += 1) {
    if (requirement[i] === candidate.skills[i]) {
      score = 100;
    } else {
      const differenceScore = (requirement.length - candidate.skills.length) * 10;
      score = 100 - differenceScore;
    }
  }
  return score;
};
console.log(evaluationFunction(candidate1, skillsRequirements));
console.log(evaluationFunction(candidate2, skillsRequirements));
console.log(evaluationFunction(candidate3, skillsRequirements));
// _______________________________________________________________

const scheduleInterview = function (candidates, requirements, scoreFun) {
  const result = [];

  for (let i = 0; i < candidates.length; i += 1) {
    scoreFun(candidates[i], requirements);
    result.push({
      score: scoreFun(candidates[i], requirements),
      candidate: candidates[i],
    });
  }
  return result;
};
console.log(scheduleInterview(candidatesItem, skillsRequirements, evaluationFunction));

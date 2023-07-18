const  stylelintConfigRecommended = require("stylelint-config-recommended");
const stylelintStylisticConfig = require("stylelint-stylistic/config");
const {rules : rulesForStylelint14} = require("./vendor/stylelint-config-recommended@9.0.0.js");

// Merge the rules of stylelint-config-recommended with those of stylelint-stylistic
const rulesForStylelint15 = Object.assign({},
  stylelintConfigRecommended.rules,
  stylelintStylisticConfig.rules
);

// Drop the `stylistic/` prefix to help the comparison
const rulesForStylelint15WithRenamedStylisticRules = Object.fromEntries(
  Object.entries(rulesForStylelint15)
    .map(rule => [rule[0].replace('stylistic/',''), rule[1]])
)

const {detailedDiff} = require('deep-object-diff');

console.log(JSON.stringify(detailedDiff(rulesForStylelint14, rulesForStylelint15WithRenamedStylisticRules), null, 2));

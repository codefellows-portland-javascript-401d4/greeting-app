{
   "settings": {
     "ecmascript": 5
  },
  "ecmaFeatures": {
    "modules": true
  },
  "env": {
    "browser": true,
    "jquery": true,
    "node": true
  },
  "rules": {
    "semi": [2, "always"],
    "strict": 0,
    "indent": [2, 2],
    "eqeqeq": 1,
    "quotes": [1, "single"],
    "no-multi-spaces": [1, {
      "exceptions": {
        "VariableDeclarator": true,
        "FunctionExpression": true
      }
    }],
    "key-spacing": [0, {"align": "value"}],
    "no-underscore-dangle": 0
  }
  "globals": {
    "describe": false,
    "it": false,
    "beforeEach": false,
    "afterEach": false,
    "before": false,
    "after": false
  },
  {
  "rules": {
    "indent": ["error", 4],
    "quotes": ["error", "single"],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"],
    "no-console": "off" 
  },
  "env": {
    "es6": true,
    "node": true,
    "mocha": true,
    "chai": true
  },
  "extends": "eslint:recommended"
  },
}
module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "eventhub": {
      "type": "confirm",
      "message": "Add a global eventhub for global events that any component can listen to?"
    },
    "filters": {
      "type": "confirm",
      "message": "Do you want to include boilerplate for commonly used filters?"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router for routing capabilities?"
    },
    "store": {
      "type": "confirm",
      "message": "Install vuex for managing state?"
    },
    "axios": {
      "type": "confirm",
      "message": "Install axios for doing ajax requests to APIs?"
    },
    "axios_baseURL": {
      "when": "axios",
      "type": "input",
      "message": "Enter the base url for the api",
      "default": "/api/"
    },
    "unit": {
      "type": "confirm",
      "message": "Setup unit tests with Karma + Mocha?"
    },
    "e2e": {
      "type": "confirm",
      "message": "Setup e2e tests with Nightwatch?"
    }
  },
  "filters": {
    "config/test.env.js": "unit || e2e",
    "test/unit/**/*": "unit",
    "build/webpack.test.conf.js": "unit",
    "test/e2e/**/*": "e2e",
    "src/filters/*(exampleFilter|index)*": "!filters",
    "src/filters/*(text|number|index)*": "filters",
    "src/router/**/*": "router",
    "src/pages/**/*": "router",
    "src/store/**/*": "store"
  },
  // "skipInterpolation": "glob pattern",
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack and https://github.com/faylite/vue-webpack-template"
};

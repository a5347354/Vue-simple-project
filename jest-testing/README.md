# jest-testing

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Testing
##### Install jest and @vue/test-utils
```
npm install --save-dev jest @vue/test-utils
```

#### 在package.json，json格式當中加入
```
"jest": {
    "moduleFileExtensions": [
      "js",
      "vue"
    ],
    "transform": {
      ".*\\.(vue)$": "<rootDir>/node_modules/jest-vue"
    },
    "moduleNameMapper": {
      "@/(.*)$": "<rootDir>/src/$1"
    }
}
```

#### 並修改package.json中的"script"加入
```
"test": "jest"
```
變成這樣
```
 "scripts": {
    "serve": "vue-cli-service serve",
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint",
    "test": "jest"
  },
```

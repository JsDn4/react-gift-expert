# GiftExpertApp

Este es mi repositorio de react + ts.

Inicialización de testings con jest, enzyme, typescript y react.
### Pasos para testing
```
npm install --save-dev jest @types/jest ts-jest
npx ts-jest config:init
npm install --save-dev ts-node
npm install -D @testing-library/dom @testing-library/jest-dom @testing-library/react @testing-library/user-event

```

### Agregar al package.json
```
"scripts": {
    ...
    "test": "cross-env NODE_ENV=test jest tests/"
}
```
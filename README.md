# remove-accents-diacritics

> Remove all accents and diacritics in a string and replace them with the same letter without the diacritic

## Install

```js
$ npm install remove-accents-diacritics 
```

```js
$ yarn add remove-accents-diacritics 
```

## Usage

```js
const removeAccents = require('remove-accents-diacritics');
// import removeAccents from 'remove-accents-diacritics';

const string = "cafetière";

const wordWithNoDiacritics = removeAccents.remove(string);
```




## About this module

You can find more information about the code of this module here: http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript

## License

Apache 2.0 © [Fede Guzmán](fedeguzman.com)

/*

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/


import test from 'ava';
import removeAccents from './index';

test('guzmán', t => {
    const n = removeAccents.remove('guzmán');
    t.is(n, "guzman");
})

test('à la carte', t => {
    const n = removeAccents.remove('à la carte');
    t.is(n, "a la carte");
})

test('cafetière', t => {
    const n = removeAccents.remove('cafetière');
    t.is(n, "cafetiere");
})

test('garçonnière', t => {
    const n = removeAccents.remove('garçonnière');
    t.is(n, "garconniere");
})

test('galapeño', t => {
    const n = removeAccents.remove('galapeno');
    t.is(n, "galapeno");
})

test('langue d\'oïl', t => {
    const n = removeAccents.remove('langue d\'oïl');
    t.is(n, "langue d\'oil");
})

test('smörgåsbord', t => {
    const n = removeAccents.remove('smörgåsbord');
    t.is(n, "smorgasbord");
})

test('smörgåstårta', t => {
    const n = removeAccents.remove('smörgåstårta');
    t.is(n, "smorgastarta");
})
test('spermatozoön', t => {
    const n = removeAccents.remove('spermatozoön');
    t.is(n, "spermatozoon");
})
test('tête-à-tête', t => {
    const n = removeAccents.remove('tête-à-tête');
    t.is(n, "tete-a-tete");
})
test('zoölogy', t => {
    const n = removeAccents.remove('zoölogy');
    t.is(n, "zoology");
})
test('áéíóú', t => {
    const n = removeAccents.remove('áéíóú');
    t.is(n, "aeiou");
})

test('Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz', t => {
    const n = removeAccents.remove('Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz');
    t.is(n, "Rindfleischetikettierungsuberwachungsaufgabenubertragungsgesetz");
})
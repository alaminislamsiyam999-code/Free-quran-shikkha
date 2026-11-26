import { register, start } from './core/router.js';
import { renderHome } from './pages/home.js';
import { pending } from './pages/pending.js';
import { renderAlphabet } from './pages/alphabet.js';

register('/', 'কোরআন শিক্ষা', renderHome);
register('/alphabet', 'আরবি বর্ণমালা', renderAlphabet);
register('/quran', 'কোরআন শরিফ', pending('কোরআন শরিফ'));
register('/progress', 'শিক্ষার অগ্রগতি', pending('শিক্ষার অগ্রগতি'));

start(document.getElementById('app'), document.getElementById('page-title'));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js');
}

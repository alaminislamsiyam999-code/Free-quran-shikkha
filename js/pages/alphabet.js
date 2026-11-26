import { speak, hasArabicVoice } from '../core/audio.js';

let letters = null;

async function loadLetters() {
  if (!letters) {
    const res = await fetch('data/alphabet/letters.json');
    letters = await res.json();
  }
  return letters;
}

export async function renderAlphabet(el) {
  el.innerHTML = '<p class="muted">লোড হচ্ছে...</p>';
  const list = await loadLetters();

  el.innerHTML = `
    ${hasArabicVoice() ? '' : '<p class="notice">এই ফোনে আরবি ভয়েস পাওয়া যায়নি। শব্দ শোনা নাও যেতে পারে। Settings → Text-to-speech থেকে Arabic ভয়েস যোগ করুন।</p>'}
    <section class="letter-grid">
      ${list.map((l) => `<button class="letter-tile" data-id="${l.id}">${l.letter}</button>`).join('')}
    </section>
    <section id="letter-detail"></section>
  `;

  const detail = el.querySelector('#letter-detail');

  function showLetter(letter) {
    const words = letter.words.length
      ? letter.words
          .map((w, i) => `<button class="word-btn" data-index="${i}">
              <span class="word-ar">${w.ar}</span>
              <small>${w.meaning}</small>
            </button>`)
          .join('')
      : '<span class="badge">Content Pending</span>';

    detail.innerHTML = `
      <div class="card letter-card">
        <div class="big-letter">${letter.letter}</div>
        <h2>${letter.name_ar} (${letter.name_en})</h2>
        <button class="btn" data-speak="letter">হরফটি শুনুন</button>
        <div class="word-list">${words}</div>
      </div>`;

    detail.onclick = (e) => {
      if (e.target.closest('[data-speak="letter"]')) {
        speak(letter.letter);
        return;
      }
      const wordBtn = e.target.closest('.word-btn');
      if (wordBtn) {
        speak(letter.words[Number(wordBtn.dataset.index)].ar);
      }
    };
  }

  el.querySelectorAll('.letter-tile').forEach((tile) => {
    tile.addEventListener('click', () => {
      const letter = list.find((l) => String(l.id) === tile.dataset.id);
      speak(letter.letter);
      showLetter(letter);
    });
  });
              }

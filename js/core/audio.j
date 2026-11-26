const synth = window.speechSynthesis || null;
let arabicVoice = null;

function pickVoice() {
  if (!synth) return;
  const voices = synth.getVoices();
  arabicVoice = voices.find((v) => v.lang && v.lang.startsWith('ar')) || null;
}

if (synth) {
  pickVoice();
  synth.onvoiceschanged = pickVoice;
}

export function hasArabicVoice() {
  return !!arabicVoice;
}

export function speak(text) {
  if (!synth) return false;
  synth.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ar-SA';
  u.rate = 0.8;
  if (arabicVoice) u.voice = arabicVoice;
  synth.speak(u);
  return true;
}

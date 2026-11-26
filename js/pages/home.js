export function renderHome(el) {
  el.innerHTML = `
    <section class="card hero">
      <h2>স্বাগতম</h2>
      <p>আরবি বর্ণমালা থেকে শুরু করে ধাপে ধাপে শুদ্ধভাবে কোরআন শিখুন।</p>
    </section>
    <section class="grid">
      <a class="tile" href="#/alphabet">আরবি বর্ণমালা</a>
      <a class="tile" href="#/quran">কোরআন শরিফ</a>
      <a class="tile" href="#/progress">শিক্ষার অগ্রগতি</a>
    </section>
  `;
}

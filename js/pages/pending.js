export function pending(title) {
  return (el) => {
    el.innerHTML = `
      <section class="card">
        <span class="badge">Content Pending</span>
        <h2>${title}</h2>
        <p>এই অংশের যাচাইকৃত কনটেন্ট এখনো যুক্ত হয়নি। যোগ হলে এখানে পাঠ দেখা যাবে।</p>
      </section>
    `;
  };
}

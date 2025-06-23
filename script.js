const gallery = document.getElementById('gallery');

// Generate 100 photo entries dynamically
for (let i = 1; i <= 100; i++) {
  const card = document.createElement('div');
  card.className = 'photo-card';

  // Format caption as "Photo 1", "Photo 2", etc.
  const caption = `Photo ${i}`;

  card.innerHTML = `
    <img src="images/photo${i}.jpg" alt="${caption}">
    <div class="photo-caption">${caption}</div>
  `;

  gallery.appendChild(card);
}

/* ------------------------------------------
   UI FUNCTIONS - pure, no network, no firebase
--------------------------------------------- */

export function renderHeader(user) {
    if (!user) return "Not logged in";
    return `Welcome, ${user.email}`;
}

export function isFormVisible(user) {
    return user !== null;
}

export function renderShowList(shows) {
    if (shows.length === 0) return "<p>No shows found</p>";
    return shows.map((show) => {
        const avg = show.reviews?.length > 0
            ? (show.reviews.reduce((sum, r) => sum + r.rating, 0) / show.reviews.length).toFixed(1)
            : null;
        const ratingHtml = avg
            ? `<span class="show-card__rating">★ ${avg}</span>`
            : `<span class="show-card__rating show-card__rating--none">No reviews</span>`;
        return `
        <div class="show-card" data-id="${show.id}">
          <img class="show-card__img" src="${show.imageUrl}" alt="${show.title}">
          <div class="show-card__info">
            <p class="show-card__title">${show.title}</p>
            ${ratingHtml}
          </div>
        </div>`;
    }).join("");
}

export function renderError(error) {
    if (!error) return "";
    return `<p class="error">Error: ${error}</p>`;
}

export function renderReviewCount(count) {
    if (count === 0) return "No reviews yet";
    if (count === 1) return "1 review";
    return `${count} reviews`;
}

export function renderStars(rating) {
    const rounded = Math.round(rating);
    return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

export function renderReviewCard(review) {
    const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
    const initial = review.author ? review.author.charAt(0).toUpperCase() : "?";
    const date = new Date(review.createdAt).toLocaleDateString("en-GB", {
        day: "numeric", month: "short", year: "numeric"
    });
    return `
    <div class="review-card">
      <div class="review-card__header">
        <div class="review-avatar">${initial}</div>
        <div class="review-card__meta">
          <span class="review-author">${review.author}</span>
          <span class="review-stars">${stars}</span>
        </div>
        <span class="review-date">${date}</span>
      </div>
      ${review.title ? `<p class="review-title">${review.title}</p>` : ""}
      <p class="review-comment">${review.comment}</p>
    </div>
  `;
}
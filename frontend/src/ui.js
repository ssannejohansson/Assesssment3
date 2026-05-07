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
    return shows.map((show) => `
    <div class="show-card" data-id="${show.id}">
      <p>${show.title}</p>
    </div>
  `).join("");
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
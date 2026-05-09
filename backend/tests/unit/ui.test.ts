import { describe, it, expect } from "vitest";

/* ------------------------------------------
  FAKE COMPONENT PATTERN
--------------------------------------------- */

// Mirrors the "logged in / logged out" header logic
function renderHeader(user: { name: string } | null): string {
  if (!user) return "Not logged in";
  return `Welcome, ${user.name}`;
}

// Mirrors whether the "Add Show" form should be visible
function isFormVisible(user: { name: string } | null): boolean {
  return user !== null;
}

// Mirrors the show list render logic
function renderShowList(shows: { title: string }[]): string {
  if (shows.length === 0) return "No shows found";
  return shows.map((s) => s.title).join(", ");
}

// Mirrors an error banner render
function renderError(error: string | null): string {
  if (!error) return "";
  return `Error: ${error}`;
}

// Mirrors the review count label
function renderReviewCount(count: number): string {
  if (count === 0) return "No reviews yet";
  if (count === 1) return "1 review";
  return `${count} reviews`;
}

// Mirrors the star rating display logic
function renderStars(rating: number): string {
  const rounded = Math.round(rating);
  return "★".repeat(rounded) + "☆".repeat(5 - rounded);
}

// Mirrors the review card render logic
function renderReviewCard(review: { author: string; rating: number; comment: string; title?: string; createdAt: string }): string {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  return `${review.author} ${stars} ${review.comment}`;
}

/* ------------------------------------------
  TESTS
--------------------------------------------- */
describe("renderHeader", () => {
  it("shows 'Not logged in' when there is no user", () => {
    expect(renderHeader(null)).toBe("Not logged in");
  });

  it("shows the user's name when logged in", () => {
    expect(renderHeader({ name: "Alice" })).toBe("Welcome, Alice");
  });
});

describe("isFormVisible", () => {
  it("hides the form when not logged in", () => {
    expect(isFormVisible(null)).toBe(false);
  });

  it("shows the form when logged in", () => {
    expect(isFormVisible({ name: "Alice" })).toBe(true);
  });
});

describe("renderShowList", () => {
  it("shows a list of shows when data is provided", () => {
    const result = renderShowList([
      { title: "The Bear" },
      { title: "Severance" },
    ]);
    expect(result).toContain("The Bear");
    expect(result).toContain("Severance");
  });

  it("shows an empty message when there are no shows", () => {
    expect(renderShowList([])).toBe("No shows found");
  });
});

describe("renderError", () => {
  it("returns empty string when there is no error", () => {
    expect(renderError(null)).toBe("");
  });

  it("shows the error message when one is provided", () => {
    expect(renderError("Network failure")).toBe("Error: Network failure");
  });
});

describe("renderReviewCount", () => {
  it("shows singular label for 1 review", () => {
    expect(renderReviewCount(1)).toBe("1 review");
  });

  it("shows plural label for multiple reviews", () => {
    expect(renderReviewCount(5)).toBe("5 reviews");
  });
});

describe("renderStars", () => {
  it("returns all filled stars for a rating of 5", () => {
    expect(renderStars(5)).toBe("★★★★★");
  });

  it("returns all empty stars for a rating of 0", () => {
    expect(renderStars(0)).toBe("☆☆☆☆☆");
  });

  it("returns mixed stars for a mid-range rating", () => {
    expect(renderStars(3)).toBe("★★★☆☆");
  });
});

describe("renderReviewCard", () => {
  it("includes the author name in the output", () => {
    const result = renderReviewCard({ author: "Alice", rating: 4, comment: "Great show!", createdAt: new Date().toISOString() });
    expect(result).toContain("Alice");
  });

  it("includes the comment in the output", () => {
    const result = renderReviewCard({ author: "Bob", rating: 3, comment: "Pretty good", createdAt: new Date().toISOString() });
    expect(result).toContain("Pretty good");
  });

  it("shows the correct number of filled stars for the rating", () => {
    const result = renderReviewCard({ author: "Carol", rating: 2, comment: "Okay", createdAt: new Date().toISOString() });
    expect(result).toContain("★★☆☆☆");
  });
});

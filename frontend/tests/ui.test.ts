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

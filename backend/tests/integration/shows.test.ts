import { describe, it, expect, beforeAll, afterAll, vi } from "vitest";
import http from "node:http";
import { app } from "../../src/app.js";

/* ------------------------------------------
  MOCK FIREBASE ADMIN
--------------------------------------------- */
vi.mock("../../src/config/firebase.js", () => ({
  auth: {
    // Simulate a valid token by resolving with a fake user
    verifyIdToken: vi.fn(async (token: string) => {
      if (token === "valid-test-token") {
        return { uid: "user-123", email: "test@example.com" };
      }
      throw new Error("invalid token");
    }),
  },
}));

/* ------------------------------------------
  TEST SERVER SETUP
--------------------------------------------- */
let server: http.Server;
let baseUrl: string;

// Start the server on a random port before all tests
beforeAll(async () => {
  server = http.createServer(app);
  await new Promise<void>((resolve) => server.listen(0, resolve));
  const addr = server.address() as { port: number };
  baseUrl = `http://localhost:${addr.port}`;
});

// Shut down cleanly after all tests
afterAll(async () => {
  await new Promise<void>((resolve) => server.close(() => resolve()));
});

/* ------------------------------------------
  HELPER — makes HTTP requests without fetch
--------------------------------------------- */
function request(
  method: string,
  path: string,
  options: { token?: string; body?: object } = {},
): Promise<{ status: number; body: any }> {
  return new Promise((resolve, reject) => {
    const bodyString = options.body ? JSON.stringify(options.body) : undefined;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };

    if (options.token) {
      headers["Authorization"] = `Bearer ${options.token}`;
    }

    const req = http.request(
      `${baseUrl}${path}`,
      { method, headers },
      (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          resolve({
            status: res.statusCode ?? 0,
            body: JSON.parse(data),
          });
        });
      },
    );

    req.on("error", reject);

    if (bodyString) req.write(bodyString);
    req.end();
  });
}

/* ------------------------------------------
  TESTS — PUBLIC ROUTES
--------------------------------------------- */
describe("GET /shows", () => {
  it("returns 200 and an array of shows", async () => {
    const res = await request("GET", "/shows");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("GET /shows/:id", () => {
  it("returns 200 and the correct show for a known id", async () => {
    const res = await request("GET", "/shows/1");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("title");
  });

  it("returns 404 for an unknown id", async () => {
    const res = await request("GET", "/shows/9999");
    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty("error");
  });
});

describe("GET /shows/profile", () => {
  it("returns 401 when no token is provided", async () => {
    const res = await request("GET", "/shows/profile");
    expect(res.status).toBe(401);
    expect(res.body).toHaveProperty("error");
  });

  it("returns user data when a valid token is provided", async () => {
    const res = await request("GET", "/shows/profile", {
      token: "valid-test-token",
    });
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({
      uid: "user-123",
      email: "test@example.com",
    });
  });
});

/* ------------------------------------------
  TESTS — PROTECTED ROUTES (401 checks)
--------------------------------------------- */
describe("POST /shows — authentication", () => {
  it("returns 401 when no token is provided", async () => {
    const res = await request("POST", "/shows", {
      body: { title: "Severance", genre: "Sci-Fi" },
    });
    expect(res.status).toBe(401);
  });

it("returns 201 and the new show when a valid token is provided", async () => {
    const res = await request("POST", "/shows", {
      token: "valid-test-token",
      body: {
        title: "Succession",
        description: "A media dynasty's dysfunctional family fights for control.",
        genre: "Drama",
        year: 2018,
        imageUrl: "https://image.tmdb.org/t/p/w500/7HW47XbkNQ5fiwQFYGWdw9gs144.jpg",
      },
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("title", "Succession");
  });
});

describe("POST /shows/:id/reviews — authentication", () => {
  it("returns 401 when no token is provided", async () => {
    const res = await request("POST", "/shows/1/reviews", {
      body: { rating: 5, comment: "Amazing!" },
    });
    expect(res.status).toBe(401);
  });

  it("returns 201 and the new review when a valid token is provided", async () => {
    const res = await request("POST", "/shows/1/reviews", {
      token: "valid-test-token",
      body: { rating: 5, comment: "Amazing!" },
    });
    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("comment", "Amazing!");
  });
});

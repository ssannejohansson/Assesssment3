import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { firebaseConfig } from "./firebase-config.js";
import { renderHeader, isFormVisible, renderShowList, renderError, renderReviewCount } from "./ui.js";

/* ----------------------
FIREBASE SETUP 
---------------------- */

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

/* ----------------------
CONSTANTS 
---------------------- */

const API = "http://localhost:3000";

/* ----------------------
DOM ELEMENTS 
---------------------- */

const viewLogin = document.getElementById("login-view");
const viewHome = document.getElementById("home-view");
const viewDetail = document.getElementById("view-detail");
const navbar = document.getElementById("navbar");
const navUser = document.getElementById("nav-user");
const loginError = document.getElementById("login-error");
const showList = document.getElementById("show-list");
const showError = document.getElementById("show-error");
const addShowSection = document.getElementById("add-show-section");
const addReviewSection = document.getElementById("add-review-section");

/* ----------------------
SHOW / HIDE VIEWS 
---------------------- */

const showView = (view) => {
    viewLogin.classList.add("hidden");
    viewHome.classList.add("hidden");
    viewDetail.classList.add("hidden");

    view.classList.remove("hidden");
};

/* ----------------------
AUTH STATE 
---------------------- */

onAuthStateChanged(auth, async (user) => {
    navUser.textContent = renderHeader(user);

    if (user) {
        navbar.classList.remove("hidden");
        addShowSection.classList.toggle("hidden", !isFormVisible(user));
        addReviewSection.classList.toggle("hidden", !isFormVisible(user));
        showView(viewHome);
        await loadShows();
    } else {
        navbar.classList.add("hidden");
        showView(viewLogin);
    }
});

/* ----------------------
LOGIN
---------------------- */

document.getElementById("login-btn").addEventListener("click", async () => {
    // Grab values from input fields.
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        // Firebase signs the user in
        await signInWithEmailAndPassword(auth, email, password);
        loginError.classList.add("hidden");
    } catch (err) {
        // Show error message if login fails
        loginError.textContent = renderError(err.message);
        loginError.classList.remove("hidden");
    }
});

/* ----------------------
LOGOUT
---------------------- */

document.getElementById("logout-btn").addEventListener("click", async () => {
    await signOut(auth);
});

/* ----------------------
LOAD SHOWS 
---------------------- */

const loadShows = async () => {
    try {
        // GET /shows is public - no token needed
        const res = await fetch(`${API}/shows`, {
            credentials: "include",
        });
        
        const data = await res.json();

        // Render the show cards into the DOM
        showList.innerHTML = renderShowList(data);

        // attach click to each card after rendering
        document.querySelectorAll(".show-card").forEach((card) => {
            card.addEventListener("click", () => loadShowDetail(card.dataset.id));
        });
        
    } catch (err) {
        // Show error message if fetch fails
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
};

/* ----------------------
ADD SHOW
---------------------- */

document.getElementById("add-show-btn").addEventListener("click", async () => {
    // Grab the current firebase user and their token
    const user = auth.currentUser;
    const token = await user.getIdToken();

    const title = document.getElementById("show-title").value;

    try {
        // POST /shows is protected, send bearer token in header
        await fetch(`${API}/shows`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // required for protected routes.
            },
            body: JSON.stringify({ title }),
        });

        // Clear the input and reload the list
        document.getElementById("show-title").value = "";
        await loadShows();
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
});

/* ----------------------
LOAD SHOW DETAIL
---------------------- */

const loadShowDetail = async (id) => {
    try {
        // GET /shows/:id is public, no token needed
        const res = await fetch (`${API}/shows/${id}`, {
            credentials: "include",
        });
        const show = await res.json();

        // Populate the detail view with show data
        document.getElementById("detail-title").textContent = show.title;
        document.getElementById("detail-review-count").textContent = renderReviewCount(show.reviews?.length ?? 0);
        document.getElementById("review-list").innerHTML = show.reviews
        ?.map((r) => `<p>${r.body}</p>`)
        .join("") ?? "";

        // Store the ID on the review button so addReview knows which show
        document.getElementById("add-review-btn".dataset.id = id);

        showView(viewDetail);
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden"); 
    }
};

/* ----------------------
BACK BUTTON
---------------------- */

document.getElementById("back-btn").addEventListener("click", () => {
    // Go back to home without reloading
    showView(viewHome);
});

/* ----------------------
ADD REVIEW
---------------------- */

document.getElementById("add-review-btn").addEventListener("click", async () => {
    // Grab the show ID stored on the button
    const id = document.getElementById("add-review-btn").dataset.id;
    const body = document.getElementById("review.body").value;

    // Grab the current firebase user and their token
    const user = auth.currentUser;
    const token = await user.getIdToken();

    try {
        // POST /shows/:id/reviews is protected, send bearer token
        await fetch (`{API}/shows/${id}/reviews`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ body }),
        });

        // Clear the textarea and reload the detail view
        document.getElementById("review-body").value = "";
        await loadShowDetail(id);
    } catch (err) {
        showError.textContent = renderError(err.message);
        showError.classList.remove("hidden");
    }
});
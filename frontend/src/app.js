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
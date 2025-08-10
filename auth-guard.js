import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA1cS4bIOxNAQuDFsyRq6mGzz9xeKqKFiY",
  authDomain: "brainhustle-92a40.firebaseapp.com",
  projectId: "brainhustle-92a40",
  storageBucket: "brainhustle-92a40.firebasestorage.app",
  messagingSenderId: "547592914180",
  appId: "1:547592914180:web:be4969f6a657c2b6c9bc51",
  measurementId: "G-3M5PKR5S27"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const PUBLIC_PATHS = [
  "/",
  "/about.html",
  "/upgrade.html",
  "/robots.txt",
  "/sitemap.xml",
  "/login.html"
];

const path = location.pathname;
if (!PUBLIC_PATHS.includes(path)) {
  onAuthStateChanged(auth, (user) => {
    if (!user) location.href = "/login.html";
  });
}

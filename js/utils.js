export default function markCurrentPage() {
  const currentPage = location.pathname.split("/").pop() || "index.html";
  const links = document.querySelectorAll(".nav-list a");

  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.setAttribute("aria-current", "page");
    }
  });
}
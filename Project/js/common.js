if (!sessionStorage.getItem("currentUser")) {
  location.href = "/index.html";
}

$(document).ready(function () {
  $("body").on("click", "#btnSignOut", function () {
    sessionStorage.removeItem("currentUser");
    location.href = "/index.html";
  });
});

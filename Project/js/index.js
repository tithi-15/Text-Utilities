if (sessionStorage.getItem("currentUser")) {
  location.href = "/dashboard.html";
}

$(document).ready(function () {
  $("body").on("click", "#btnSubmit", function () {
    if (
      $("#textEmail").val() != "admin@test.com" ||
      $("#textPassword").val() != "password"
    ) {
      alert("Enter correct email and password.");
      return false;
    } else {
      sessionStorage.setItem(
        "currentUser",
        JSON.stringify($("#textEmail").val())
      );
    }
  });
});

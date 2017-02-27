if (!localStorage.getItem("ps")) {
	var result = prompt("Password: ");

	if (result == "1188")
		localStorage.setItem("ps", "true");
	else
		document.location.href = "https://www.youtube.com/watch?v=cBYOyPdUIOE";
}
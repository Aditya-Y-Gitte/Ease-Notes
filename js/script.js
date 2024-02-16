const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");

function showNotes() {
	notesContainer.innerHTML = localStorage.getItem("notes") || "";
	attachDeleteEvent();
}
showNotes();

function updateStorage() {
	localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
	let inputBox = document.createElement("div");
	let img = document.createElement("img");
	inputBox.className = "input-box";
	inputBox.setAttribute("contenteditable", "true");
	img.src = "./images/delete.png";
	img.className = "delete-icon";
	inputBox.appendChild(img);
	notesContainer.appendChild(inputBox);
	attachDeleteEvent();
});

function attachDeleteEvent() {
	const deleteIcons = notesContainer.querySelectorAll(".delete-icon");
	deleteIcons.forEach((icon) => {
		icon.removeEventListener("click", handleNoteDelete); // Prevent multiple bindings
		icon.addEventListener("click", handleNoteDelete);
	});
}

function handleNoteDelete(e) {
	e.target.parentElement.remove();
	updateStorage();
}

notesContainer.addEventListener("keyup", (e) => {
	if (e.target.classList.contains("input-box")) {
		updateStorage();
	}
});

document.addEventListener("keydown", (e) => {
	if (
		e.key === "Enter" &&
		document.activeElement.classList.contains("input-box")
	) {
		e.preventDefault(); // Prevent default Enter behavior
		document.execCommand("insertHTML", false, "<br><br>"); // Deprecated, consider alternatives
	}
});

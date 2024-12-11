
const notesContainer = document.querySelector('.notes-container'); // Container for notes
const addNoteButton = document.querySelector('.btn'); // "+" button


function createNote() {

    const note = document.createElement('div');
    note.className = 'note';


    const editableContent = document.createElement('p');
    editableContent.className = 'input-box';
    editableContent.contentEditable = 'true';

    const deleteIcon = document.createElement('img');
    deleteIcon.src = 'images/trash-bin.png';
    deleteIcon.alt = 'Delete Note';
    deleteIcon.className = 'delete-icon';
    
    // Add event listener for deleting the note
    deleteIcon.addEventListener('click', () => {
        note.remove(); // Remove the note
    });

    // Append elements to the note container
    note.appendChild(editableContent);
    note.appendChild(deleteIcon);
    
    notesContainer.appendChild(note);
    
}

addNoteButton.addEventListener('click', createNote, );

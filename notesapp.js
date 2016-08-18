//###
/* 
* This is the main class of the application
*/
module.exports = function (Author){
  /*
  * Setting the constructor (Mway)
  */
	this.Author = Author;
	this.Text = [];
	this.Counter = 0;
	/*
	* And this Creates the notes
	*/
	this.create = function create(note_content){
		if(note_content === '' || arguments.length < 1){
			return "You cant leave the input string empty"
		}
		else if(parseInt(note_content)){
			return "Only string are accepted";
		}
		else{
			if(note_content.constructor === Array){
				var start = 0;
				while (start < note_content.length){
					this.Text[this.Counter] = note_content[start];
					start++
					this.Counter++;
				}
			}
			else{
				this.Text[this.Counter] = note_content;
				var gLine = this.Text.length + 1;
				this.Counter++
			}
			return "Congratulations "+this.Author+"! Your Text number Has been added";
		}
	}
	/*
	*List note now supported, you can now view all your notes at once
	*@param is null for a valid session
	*/
	this.listNotes = function listNotes(){
		var allNotesLength = this.Text.length;
		if(allNotesLength < 1){
			return "Yey!! No note has been created, Create One please";
		}
		else{
			var start = 0;
			var noteText = "";
			while (start < allNotesLength){
				var x = start + 1;
				noteText = `${noteText} 
				Note ID: ${x}
				${this.Text[start]}
				By Author  ${this.Author}`;
				start++;
			}
			return noteText;
		}
	}
	/*
	*Now you can make a precise search using the Note ID
	*@param note_id is the note ID
	*/
	this._get = function _get(note_id){
		if(parseInt(note_id) && note_id > 0 && arguments.length === 1){
			if(note_id > this.Text){
				return "The note does not exist";
			}
			else{
				var noteText = `
				Note ID: ${note_id}
				${this.Text[note_id+1]} 
				By Author ${this.Author}`;
				return noteText;
			}
			
		}
		else{
			return "The NoteId might be incorrect";
		}
	}
	/*
	*Now you can make a precise search using the Note ID
	*@param note_id is the note ID
	*/
	this._search = function _search(search_text){
		if(arguments.length > 0){
			if(search_text === '') return "Sorry! You search query cannot be empty";
			if(search_text.constructor === Number){
				return "Number is not a valid search string parameter";
			}
			else{
				var start = 0;
				var searchResult = "Showing search result for ["+search_text+"]";
				while (start < this.Counter){
					var note = this.Text[start];
					var splitNote = note.split(search_text);
					if(splitNote.length > 1){
						searchResult = `${searchResult}
						Note ID: ${parseInt(start+1)}
						${this.Text[start]} 
						By Author ${this.Author}`;
						start++;
					}
					else{
						
					}
					start++;
				}
				return searchResult;
			}
		}
		else{
			return "Sorry! You search query cannot be empty";
		}
	}
	/*
	*Now you can make a precise search using the Note ID
	*@param note_id is the note ID
	*/
	this._delete = function _delete(note_id){
		if(arguments.length === 1 && parseInt(note_id) && note_id > 0){
			var newList = [];
			var start = 0;
			var counts = 0;
			if(note_id > this.Counter) return 'The note does not exist';
			while (start < this.Counter){
				if(start === note_id-1){
				}
				else{
					newList[counts] = this.Text[start];
					counts++
				}
				start++;
			}
			return "Your Note ID"+note_id+" was removed.";
		}
		else{
			return "The NoteId might be incorrect";
		}
	}
	/*
	*Now you can make changes to the Note created
	*@param note_id is the note ID and newtext is the newtext
	*/
	this._edit = function _edit(note_id,newtext){
		if(arguments.length !== 2) return "all argument must be supplied in order note_id, newtext"
		if(!parseInt(note_id) || note_id === 0 || newtext === '') return 'One of the arguments is not in correct format';
		if(!(note_id <= this.Counter+1)) return 'The Text was not found';
			this.Text[note_id-1] = newtext;
			return "Text succesfully changed!";
	}
}
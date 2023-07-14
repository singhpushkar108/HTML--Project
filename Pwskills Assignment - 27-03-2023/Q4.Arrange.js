function logTitle(titles){
	
	titles.sort();
	console.log("Books:");
	titles.forEach( function(title){
		console.log(title);
	});
			

}


function arrange(books,func){
	var arr=[];
	arr=books.map(function(book){
		
			return book.title;
		
		});

	return func(arr);
}


var books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 }
];

arrange(books,logTitle);
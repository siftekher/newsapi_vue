

const vm = new Vue({
  el: '#app',

  data: {
    results: []
	
  },
  mounted() {

      axios.get("https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=API_KEY")
          .then(response => {
			  console.log(response.data.results.books);
			  this.results = response.data.results.books;
			  
			  })

 
  
  }
  
});
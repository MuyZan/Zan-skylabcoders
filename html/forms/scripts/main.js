document.getElementById("my-form").addEventListener("submit", function(event){
    event.preventDefault();

    var searching = document.getElementById("something").value;

    console.log(searching);
})
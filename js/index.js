$(document).ready(function(){

  var randomAuthor, randomNum ,randomQuote;

  function getQuote(){
  var ideas = [
        '"Bravery is being the only one who knows you are afraid"',
        '"To love for the sake of being loved is human, but to love for the sake of loving is angelic."',
        '"Strive not to be a success, but rather to be of value."',
        '"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference."',
        '"Life is what happens to you while you’re busy making other plans."',
        '"Life is 10% what happens to me and 90% of how I react to it."',
        '"Every child is an artist.  The problem is how to remain an artist once he grows up."',
        '"People often say that motivation doesn’t last. Well, neither does bathing.  That’s why we recommend it daily. –"'
          ];
  var author = ["Anonymous", "Anonymous", "Albert Einstein", "Robert Frost", "John Lennon", "Charles Swindoll", "Pablo Picasso", "Zig Ziglar" ];

  randomNum = Math.floor((Math.random()*ideas.length));
  randomQuote = ideas[randomNum];
  randomAuthor = author[randomNum];
  $(".quote").text(randomQuote);
  $(".author").text(randomAuthor);

  };

    $("#newQuote").on("click", function(){
    getQuote();

    });
    $('#tweet').on("click", function(){
    window.open("https://twitter.com/intent/tweet?text=" +randomQuote);
    });
});

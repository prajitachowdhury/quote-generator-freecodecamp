quotes = [
  "Only the paranoid survive.",
  "The people who are crazy enough to think they can change the world are the ones who do.",
  "All Birds find shelter during rain.   But Eagle avoids rain by flying above clouds.",
  "It’s hard to beat a person who never gives up.","To sell your soul is the easiest thing in the world. That's what everybody does every hour of his life. If I asked you to keep your soul - would you understand why that's much harder?","There is no happiness like that of being loved by your fellow-creatures, and feeling that your presence is an addition to their comfort."
];

authors = [
  ["~Andy Grove,", "Former CEO of Intel"],
  ["~Steve Jobs,", "Founder and Former CEO of Apple Inc."],
  [
    "~A.P.J. Abdul Kalam,",
    " Aerospace Scientist and Former President of India "
  ],
  ["~Babe Ruth,", "Baseball Legend"],["~Ayn Rand, ", "Fountainhead"],["Charlotte Bronte, ","Jane Eyre"]
];



var index = 0;
$(document).ready(function() {
  

  $("#text").text(quotes[index]);
  $("#author").html(authors[index][0] + "<br>" + authors[index][1]);
 

  $("#new-quote").click(function() {
    $("#text").animate({ opacity: 0 }, 500, function() {
      $(this).animate({ opacity: 1 }, 500);
      $("#text").text(quotes[index]);
    });
    $("#author").animate({ opacity: 0 }, 500, function() {
      $(this).animate({ opacity: 1 }, 500);
      $("#author").html(authors[index][0] + "<br>" + authors[index][1]);
    });
   
 //  index=Math.floor(Math.random() * 5) + 1;
   

if (index == 5) index = index - 4;
    else index += 1;
  });
});

function appearStart(){
   document.getElementById("top3").innerHTML="STARTING WITH:";


}


function disappearStart(){
   document.getElementById("top3").innerHTML=' Consequence:"YOUR WORLD" ';


}

function changeTextA(){
  document.getElementById("consequence").innerHTML=' Consequence:"With the life experiences and lessons, you are gradually not crazy about anything. However, pride is still one of your personal characters. Meanwhile, you know how to become low-key, which means you come up with an idea that it is not necessary to tell everyone your standpoints and you do not need to be praised due to your dream." ';
}
function changeTextB(){
  document.getElementById("consequence").innerHTML='Consequence:"It seems like you are unsatisfied with your real life and become addicted to staying away from your life. In addition, there is a wonderful idea about your future. But it is far away from your real life. So you choose to be rebel. Not because you are overconfident, but you are lost."'
}
function changeTextC(){
  document.getElementById("consequence").innerHTML='Consequence:"You strongly believe “what exist is reasonable.” You are always positive toward your life and try your best to be persistent, but you could comfortably face the occasion which is immutable. The ideas you come up with are infinite. You are struggling to become successful to achieve real happiness."'
}
function changeTextD(){
  document.getElementById("consequence").innerHTML='Consequence:"You are trying to live within your means. So, sometimes, it is possible for you to say or act something that is improper and you are sophisticated."'
}
function blank(){
  document.getElementById("consequence").innerHTML=' '
}
$(document).ready(function(){

	$("#background1").fadeIn(3000);



/* homepage animation */





  $("p1.answer11").click(function(){
     $(".question2").show();
     $("p1.answer12").hide();
  });

  $("p1.answer12").click(function(){
    $(".question3").show();
    $("p1.answer11").hide();
  });

  $("p1.answer21").click(function(){
    $(".question3").show();
    $("p1.answer22").hide();
  });
  $("p1.answer22").click(function(){
    $(".question4").show();
    $("p1.answer21").hide();
  });


  $("p1.answer31").click(function(){
    $(".question4").show();
    $("p1.answer32").hide();
  });
  $("p1.answer32").click(function(){
    $(".question5").show();
    $("p1.answer31").hide();
  });

  $("p1.answer41").click(function(){
    $(".question6").show();
    $("p1.answer42").hide();
  });

  $("p1.answer42").click(function(){
    $(".question5").show();
    $("p1.answer41").hide();
  });



  $("p1.answer51").click(function(){
    $(".question6").show();
    $("p1.answer52").hide();
  });
  $("p1.answer52").click(function(){
    $(".question7").show();
    $("p1.answer51").hide();
  });



  $("p1.answer61").click(function(){
    $(".question7").show();
    $("p1.answer62").hide();
  });

  $("p1.answer62").click(function(){
    $(".question8").show();
    $("p1.answer61").hide();
  });

  $("p1.answer71").click(function(){
    $(".question8").show();
    $("p1.answer72").hide();
  });
  $("p1.answer72").click(function(){
    $(".question9").show();
    $("p1.answer71").hide();
  });


  $("p1.answer81").click(function(){
    $(".question9").show();
    $("p1.answer82").hide();
  });
  $("p1.answer82").click(function(){
    $(".question10").show();
    $("p1.answer81").hide();
  });

  $("p1.answer91").click(function(){
    $(".question10").show();
    $("p1.answer92").hide();
  });
  $("p1.answer92").click(function(){
    $(".question11").show();
    $("p1.answer91").hide();
  });

  $("p1.answer101").click(function(){
    $(".question11").show();
    $("p1.answer102").hide();
  });

  $("p1.answer102").click(function(){
    $(".question12").show();
    $("p1.answer101").hide();
  });

  $("p1.answer111").click(function(){
    /*$('#consequence').change(function{
      $("this").css("width","480px");
      $("this").css("position","absolute");
      $("this").css("font-size","1.6em");
      $("this").css("top","1.9%");
      $("this").css("right","14.3%");

    });*/
    $("p1.answera").show();
    $("p1.answer112").hide();
  });




  $("p1.answer112").click(function(){
    $("p1.answerb").show();
    $("p1.answer111").hide();
  });

  $("p1.answer121").click(function(){
    $("p1.answerc").show();
    $("p1.answer122").hide();
  });

  $("p1.answer122").click(function(){
    $("p1.answerd").show();
    $("p1.answer121").hide();
  });

/*return button*/

$(".answera").click(function(){
  $("p1.answer12").show();
  $("p1.answer11").show();
  $(".answera").hide();

  $(".question2").hide();
  $(".question3").hide();
  $(".question4").hide();
  $(".question5").hide();
  $(".question6").hide();
  $(".question7").hide();
  $(".question8").hide();
  $(".question9").hide();
  $(".question10").hide();
  $(".question11").hide();
  $(".question12").hide();
});

$(".answerb").click(function(){
  $("p1.answer12").show();
  $("p1.answer11").show();
  $(".answerb").hide();

  $(".question2").hide();
  $(".question3").hide();
  $(".question4").hide();
  $(".question5").hide();
  $(".question6").hide();
  $(".question7").hide();
  $(".question8").hide();
  $(".question9").hide();
  $(".question10").hide();
  $(".question11").hide();
  $(".question12").hide();
});

$(".answerc").click(function(){
  $("p1.answer12").show();
  $("p1.answer11").show();
  $(".answerc").hide();

  $(".question2").hide();
  $(".question3").hide();
  $(".question4").hide();
  $(".question5").hide();
  $(".question6").hide();
  $(".question7").hide();
  $(".question8").hide();
  $(".question9").hide();
  $(".question10").hide();
  $(".question11").hide();
  $(".question12").hide();
});

$(".answerd").click(function(){
  $("p1.answer12").show();
  $("p1.answer11").show();
  $(".answerd").hide();

  $(".question2").hide();
  $(".question3").hide();
  $(".question4").hide();
  $(".question5").hide();
  $(".question6").hide();
  $(".question7").hide();
  $(".question8").hide();
  $(".question9").hide();
  $(".question10").hide();
  $(".question11").hide();
  $(".question12").hide();
});





/*

function appearRed(){

	 document.getElementsByClassName("btn1").value="IN";


}
function disappearRed(){

	 document.YesgetElementsByClassName("btn1").value=" ";


}


*/

$(".china").mouseover(function(){
    $(".sub").css("display","block");

});

$(".china").mouseout(function(){
    $(".sub").css("display","none");
});

$(".china").click(function(){
  $(".countryb").fadeToggle();
  $(".countryb.britain.change").fadeToggle();
  $("h3").fadeToggle();
  $("h4").fadeToggle();
  $("#bg2text").fadeToggle(100);
});




$(".countryb").mouseover(function(){
    $(".britain").css("display","block");
});

$(".countryb"). mouseout(function(){
    $(".britain").css("display","none");
});

$(".countryb").click(function(){
    $(".china.main").fadeToggle();

    $("h3").fadeToggle();
    $("h4").fadeToggle();
    $("#bg2text2").fadeToggle(500);
});

/*china vs british */


$(".studenttext.first").click(function(){
  $(".studenttext.second").fadeToggle();
  $(".studenttext.third").fadeToggle();
  $("#privatetext").slideToggle("slow");
});


$(".studenttext.second").click(function(){
  $(".studenttext.first").fadeToggle();
  $(".studenttext.third").fadeToggle();
  $("#contacttext").slideToggle("slow");

});


$(".studenttext.third").click(function(){
  $(".studenttext.first").fadeToggle();
  $(".studenttext.second").fadeToggle();
  $("#obtainingexptext").slideToggle("slow");
});
/*students looking*/

$(".teachertext.first").click(function(){
  $(".teachertext.second").fadeToggle();
  $(".teachertext.third").fadeToggle();
  $("#analysistext").slideToggle("slow");
});

$(".teachertext.second").click(function(){
  $(".teachertext.first").fadeToggle();
  $(".teachertext.third").fadeToggle();
  $("#questionnairetext").slideToggle("slow");
});

$(".teachertext.third").click(function(){
  $(".teachertext.first").fadeToggle();
  $(".teachertext.second").fadeToggle();
  $("#connectiontext").slideToggle("slow");
});

});




/*design a gallery */
var slideindex=1;
showGallery(slideindex);

function showproGallery(n){
  showGallery(slideindex=n);

}


function showGallery(n){
  var i;
  var big = document.getElementsByClassName("mySlides");
  var small= document.getElementsByClassName("demo");

  if (n > big.length){
    slideindex =1;
  }
  if (n< 1){
    slideindex= big.length;

  }

  for(i=0; i<big.length; i++){
    big[i].style.display="none";
  }

  for(i=0; i< small.length; i++){
    small[i].className= small[i].className.replace("opacityOff","");
  }

  big[slideindex-1].style.display = "block";
  small[slideindex-1].className += "opacityOff";

}



$(function(){
var first = false;
    
    var moveTitleUp = function(section){
        if(section == "#home"){
            $('#content').fadeOut(function(){
                $('#content').html("");
                $('#title img').animate({
                    "margin-top": "280px",
                    "width": "650px"
                }); 
                
                $('#title span').animate({
                    "font-size": "35px"
                });
                
                $('#background').animate({
                    "opacity": 1.0
                });
                
                $('#nav').animate({
                    "top": "570px"
                })
                
                $('.inner').animate({
                    height: "370px"
                });
            });
        } else if(section == "#donate"){
             $('#title img').animate({
                    "margin-top": "15px",
                    "width": "440px"
                });   

                $('#title span').animate({
                    "font-size": "25px"
                });

                $('#background').animate({
                    "opacity": .5
                });


                $('#content').fadeOut(function(){
                    $('#content').html($(section).html())
                    $('#content').fadeIn();
                    
                    $('.inner').animate({
                        "height": "500px"
                    });
                });

                $('#nav a').removeClass('current');
                $('#nav a[href="' + section + '"]').addClass("current");
                
                $('#nav').animate({
                    "top": "670px"
                })
                
        } else {
            /*
            if(section == "#artwork" && first != false){
                Galleria.loadTheme('js/classic/galleria.classic.min.js');
                Galleria.run('#galleria');    
        	    $("#galleria").galleria();
        	    first = true;
            }*/
                
            $('#title img').animate({
                "margin-top": "15px",
                "width": "440px"
            });   
            
            $('#title span').animate({
                "font-size": "25px"
            });
            
            $('#background').animate({
                "opacity": .5
            });
            
            
            $('#content').fadeOut(function(){
                $('#content').html($(section).html())
                $('#content').fadeIn();
            });
            
            $('#nav a').removeClass('current');
            $('#nav a[href="' + section + '"]').addClass("current");
            
            $('.inner').animate({
                height: "370px"
            });
            
            $('#nav').animate({
                "top": "570px"
            })
        }
    };
    
    // Bind an event to window.onhashchange that, when the hash changes, gets the
    // hash and adds the class "selected" to any matching nav link.
    
    $(window).hashchange( function(){
        var hash = location.hash;

        if(hash != ""){
            moveTitleUp(hash);
            // Set the page title based on the hash.
            document.title = 'Steel Town - ' + ( hash.replace( /^#/, '' ) || 'blank' );
        }
        else {
            // Set the page title based on the hash.
            document.title = 'Steel Town';
        }       
    })
    
    $(window).hashchange();
    

    
    $('#nav a').click(function(){
        var target = $(this).attr("href").split("#")[1]
        moveTitleUp(target);
        
        $('#nav a').removeClass('current')
        
        $(this).addClass("current");
        //return false;
    });
    
    $('a.fb').hover(function(){
        $(this).find('img').attr("src", "img/facebook_orange.png")
    }, function(){
        $(this).find('img').attr("src", "img/facebook.jpg")
    });
    
    $('a.twitter').hover(function(){
        $(this).find('img').attr("src", "img/twitter_orange.png")
    }, function(){
        $(this).find('img').attr("src", "img/twitter.jpg")
    });
    
    $('a.kick').hover(function(){
        $(this).find('img').attr("src", "img/kickstarter_orange.png")
    }, function(){
        $(this).find('img').attr("src", "img/kickstarter.jpg")
    });
    
    /*
    setInterval(function(){
      $('#flame').animate({
          "opacity": .3
      }, function(){
          $('#flame').animate({
                "opacity": .1
            })  
      })
    }, 2000)
    
    setInterval(function(){
    
    })
    */
});

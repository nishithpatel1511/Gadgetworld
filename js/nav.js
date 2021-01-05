clk = 0;
clk_search=0;

$(function () {

  //navbar

  $('#tg').click(function togglebtn() {
    clk++;
    $('#tg').toggleClass('fa-times');
    if (clk % 2 == 0) {
      $('div:not(#mySidepanel)').css("filter", "blur(0px)");
      document.body.style.backgroundColor = "white";
      //$('#mySidepanel').css({ 'width': 0 });
      $('#mySidepanel').toggleClass('opensidepanel');
      $('.closebtn').removeClass('closebtnopen');
      $('.nav-link').removeClass('nav-link-open');
      $('.brand').removeClass('brand-open');
      $('.closebtn').toggleClass('closebtnclose');
      $('.brand').toggleClass('brand-close');
      
    }
    else {
      $('#mySidepanel').toggleClass('opensidepanel');
      $('div:not(#mySidepanel)').css("filter", "blur(4px)");
      document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
      $('.closebtn').removeClass('closebtnclose');
      $('.nav-link').removeClass('nav-link-close');
      $('.brand').removeClass('brand-close');
      $('.closebtn').toggleClass('closebtnopen');
      $('.brand').toggleClass('brand-open');
    }
  });
  $('.closebtn').click(function () {
    clk++;
    $('#tg').toggleClass('fa-times');
    $('div:not(#mySidepanel)').css("filter", "blur(0px)");
    document.body.style.backgroundColor = "white";
    $('#mySidepanel').toggleClass('opensidepanel');
    $('.closebtn').removeClass('closebtnopen');
    $('.nav-link').removeClass('nav-link-open');
    $('.brand').removeClass('brand-open');
    $('.closebtn').toggleClass('closebtnclose');
    $('.brand').toggleClass('brand-close');
  });
  $(document).click(function (e) {
    if (($(e.target).closest('#mySidepanel').length == 0) & ($('#mySidepanel').width() == 250)) {
      if ($(e.target).closest('#tg').length != 0) {
        togglebtn();
      }
      else {
        clk++;
        $('#tg').toggleClass('fa-times');
        $('div:not(#mySidepanel)').css("filter", "blur(0px)");
        document.body.style.backgroundColor = "white";
        $('#mySidepanel').toggleClass('opensidepanel');
        $('.closebtn').removeClass('closebtnopen');
        $('.nav-link').removeClass('nav-link-open');
        $('.brand').removeClass('brand-open');
        $('.closebtn').toggleClass('closebtnclose');
        $('.brand').toggleClass('brand-close');
      }
    }
  });
  
  //searchbar

  $('#search-icon').click(function search() {
    clk_search++;
    if(clk_search%2!=0)
    {
      $('#search-bar').removeClass('d-none');
      $('#search-icon i').toggleClass('fa-times');
     }
     else
     {
       $('#search-bar').addClass('d-none');
       $('#search-icon i').toggleClass('fa-times');
     }
  });
  $(document).click(function(e){
    if($(e.target).closest('#search-bar').length == 0)
    {
      if(!$('#search-bar').hasClass('d-none'))
      {
        if($(e.target).closest('#search-icon').length != 0)
        {
          search();
        }
        else
        {
          clk_search++;  
          $('#search-bar').addClass('d-none');
          $('#search-icon i').toggleClass('fa-times');        
        }
      }
    }
  });

});
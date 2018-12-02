$(document).ready(function () {
  var randomUserApiUrl = 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob';
  function displayTheJSON(data) {
    console.log('I am right before the loop')
    var galleryHTML = ''
    $.each(data.results, (index, profile) => {
      console.log(profile)
      galleryHTML +='<div class="card"><div class="card-img-container">'
      galleryHTML += '<img class="card-img" src="'+(profile.picture.large).toString()+'"alt="profile picture"></div></div>'
      



    })
    $('#gallery').html(galleryHTML);
    
    

  } 
  $.getJSON(randomUserApiUrl, displayTheJSON)
  
  
  
  
  
  
  
  
  
    // $.ajax({
    //     url: 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob',
    //     dataType: 'json',
    //     success: function(data) {
    //       console.log(data);
    //     }
    //   });

}); //END READY
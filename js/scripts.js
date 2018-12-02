$(document).ready(function () {
  var randomUserApiUrl = 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob';
  function displayTheJSON(data) {
    var galleryHTML = ''
    $.each(data.results, (index, profile) => {
      galleryHTML +='<div class="card"><div class="card-img-container">'
      galleryHTML += '<img class="card-img" src="'+(profile.picture.large)+'"alt="profile picture"></div>'
      galleryHTML += '<div class="card-info-container"><h3 id="name" class="card-name cap">' + profile.name.first + ' ' + profile.name.last + '</h3>'
      galleryHTML += '<p class="card-text">' + profile.email + '</p>'
      galleryHTML += '<p class="card-text cap">' + profile.location.city + ', ' + profile.location.state + '</p></div></div>'
    })
    $('#gallery').html(galleryHTML);
  } 
  $.getJSON(randomUserApiUrl, displayTheJSON)
  console.log($('.card'))
  $('.card').on('click', function () {
    console.log('hithere')


  });
  
  
  
  
  
  
  
    // $.ajax({
    //     url: 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob',
    //     dataType: 'json',
    //     success: function(data) {
    //       console.log(data);
    //     }
    //   });

}); //END READY
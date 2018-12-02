$(document).ready(function () { //executes the below code once all the html is loaded
  var randomUserApiUrl = 'https://randomuser.me/api/?results=12&inc=name,picture,email,location,cell,dob'; //this url is where the JSON file will be retreived 
  function displayTheJSON(data) { // this function acts as the callback for the $.getJSON method and displays the information as HTML on the page
    var galleryHTML = '' //initializes the variable that will contain the html for all of the profile cards
    $.each(data.results, (index, profile) => { //loops though each object that was returned from the server and constructs a card in HTML
      galleryHTML +='<div class="card"><div class="card-img-container">' //container
      galleryHTML += '<img class="card-img" src="'+(profile.picture.large)+'"alt="profile picture"></div>' //picture
      galleryHTML += '<div class="card-info-container"><h3 id="name" class="card-name cap">' + profile.name.first + ' ' + profile.name.last + '</h3>' //first and last name
      galleryHTML += '<p class="card-text">' + profile.email + '</p>' //email
      galleryHTML += '<p class="card-text cap">' + profile.location.city + '</p></div></div>' //city and state
    })
    $('#gallery').html(galleryHTML); //once everything has been constructed this places the HTML inside the gallery tags
    $('.card').on('click', function (event) { //click handler that creates and displays a modal for the card that is clicked. The modal contains more inforamtion about the card's profile
      var clickedIndex = $(event.target).parents('.card').index(); //this variable holds the index value of whatever card is clicked. This will be used to target specific pieces of information later in the program
      var targetPhoto = ($(event.target).parents('.card').children('.card-img-container').children('.card-img').prop('src'));//selects the src attribute of whatever photo is clicked by the user
      var container = '<div class="modal-container">' //variable that holds the modal HTML
      container += '<div class="modal">' // modal div
      container += '<button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>' // creates the button that will be used to close the modal
      container+= '<img class="modal-img" src="' + targetPhoto+ '"alt="profile picture">' // adds photo to modal
      container+= '<h3 id="name" class="modal-name cap">' + data.results[clickedIndex].name.first + ' ' + data.results[clickedIndex].name.last + '</h3>' //places the name of the clicked profile using clickedIndex
      container += '<p class="modal-text">' + data.results[clickedIndex].email + '</p>' //adds the email to the modal
      container += '<p class="modal-text cap">' + data.results[clickedIndex].location.city + '</p><hr>' //adds the city to the modal
      container += '<p class="modal-text">' + data.results[clickedIndex].cell + '</p>' //adds the cell number to the modal
      container += '<p class="modal-text cap">' + data.results[clickedIndex].location.street + ', ' + data.results[clickedIndex].location.city + ', ' + data.results[clickedIndex].location.state + ' ' + data.results[clickedIndex].location.postcode + '</p>' //adds the full address to the modal
      container += '<p class="modal-text">Birthday: ' + data.results[clickedIndex].dob.date.substring(0,10) + '</p>' // adds the birthday to the modal. the api lists a time after the birthday so substring ensures that just the month, day, and year are displayed
      $('#gallery').after(container) //adds the modal html after the gallery element
      
      $('#modal-close-btn').on('click', function () { // click handler that will remove the modal when it is clicked
        $('.modal-container').remove();
      })
    });//end of click handler
  }//closes display the JSON 
  $.getJSON(randomUserApiUrl, displayTheJSON) //API call that takes the url as one argument and runs the displayTheJSON callback as the second arguement
}); //END READY
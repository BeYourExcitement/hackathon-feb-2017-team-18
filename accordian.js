
window.addEventListener("load", function() {
  
  // ********** encapsulate event in one variable for production ******************
  
  var isAccordianSectionActive = {
    section1: false,
    section2: false,
    section3: false
  }

  var accordianClickEventHandler = function(element) {
    element.addEventListener ("click", function() {
      
      var accordianSectionTag = element.nextElementSibling
      var accordianSectionId = accordianSectionTag.id

      // if accordianSectionHeaders[0] has class "accordian-section-active" set it without 'active'
      if (accordianSectionTag.className === "accordian-section-active")
      
      // changes class to 'active'
      accordianSectionTag.className = "accordian-section-active"
    })
  }


  var accordianSectionHeaders = document.getElementsByTagName("h3")

  for (var i = accordianSectionHeaders.length - 1; i >= 0; i--) {
    accordianClickEventHandler (accordianSectionHeaders[i])
  }




})
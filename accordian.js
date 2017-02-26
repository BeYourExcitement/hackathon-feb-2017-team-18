
window.addEventListener("load", function() {
  
  // ********** encapsulate event in one variable for production ******************
  
  
  var accordianSectionHeaders = document.getElementsByTagName("h3")

  var accordianClickEventHandler = function(element) {
    element.addEventListener ("click", function() {
      
      var accordianSectionTag = element.nextElementSibling
      // if accordianSectionHeaders[0] has class "accordian-section-active" set it without 'active'
      // if accordianSectionTag.className === "accordian-section-active"
      
      // changes class to 'active'
      accordianSectionTag.className = "accordian-section-active"
    })
  }

  for (var i = accordianSectionHeaders.length - 1; i >= 0; i--) {
    accordianClickEventHandler (accordianSectionHeaders[i])
  }

})
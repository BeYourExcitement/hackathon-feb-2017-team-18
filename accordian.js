
window.addEventListener("load", function() {
  
  // ********** encapsulate event in one variable for production ******************
  
  var currentAccordianActiveSection = ""

  var accordianClickEventHandler = function(element) {
    element.addEventListener ("click", function() {
      
      var accordianSectionTag = element.nextElementSibling
      
      if (currentAccordianActiveSection.length !== 0) {
        currentAccordianActiveSection.className = "accordian-section"
      }  
      // changes `section` tag class to 'accordian-section-active'
      accordianSectionTag.className = "accordian-section-active"
      currentAccordianActiveSection = accordianSectionTag
    })
  }

  var accordianSectionHeaders = document.getElementsByTagName("h3")

  for (var i = accordianSectionHeaders.length - 1; i >= 0; i--) {
    accordianClickEventHandler (accordianSectionHeaders[i])
  }
})
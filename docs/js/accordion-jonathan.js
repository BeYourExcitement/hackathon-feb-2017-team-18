
window.addEventListener("load", function() {

// Accordion by Jonathan Christian @BeYourExcitement - Project not finished

  var currentAccordionActiveSection = ""

  var accordionClickEventHandler = function(element) {
    element.addEventListener ("click", function() {
      
      var accordionSectionTag = element.nextElementSibling

      if (currentAccordionActiveSection.length === 0) {
        // changes the tag `section` class to 'accordion-section-active'
        accordionSectionTag.className = "accordion-section-active"
        currentAccordionActiveSection = accordionSectionTag
       } 

      if (currentAccordionActiveSection.length !== 0) {
        currentAccordionActiveSection.className = "accordion-section"
        accordionSectionTag.className = "accordion-section-active"
        currentAccordionActiveSection = accordionSectionTag
      }
    })
  }
  // Locates h3 tags in document
  var accordionSectionHeaders = document.getElementsByTagName("h3")

  // Adds click event to h3 tags within accordion section
  for (var i = accordionSectionHeaders.length - 1; i >= 0; i--) {
    // if (accordionSectionHeaders[i].className === "section-header") {then execute code below}
    accordionClickEventHandler (accordionSectionHeaders[i])
  }
})
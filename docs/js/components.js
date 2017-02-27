
window.addEventListener("load", function() {

// -------------------------------------------------
// Accordion by Jonathan Christian @BeYourExcitement
// -------------------------------------------------
  
  // refactoring
  // ------------------------
  // var accordionElement = document.getElementsByClassName ("accordion")
  // alert(accordionElement)
  // var accordionH3InnerHtml = accordionElement.getElementsByTagName ("h3")
  // alert(accordionH3InnerHtml)

  var currentActiveAccordionSection = ""

  var accordionClickEvent = function (element) {
    element.addEventListener ("click", function() {
      
      var accordionSectionTag = element.nextElementSibling

      if (currentActiveAccordionSection.length === 0) {
        // changes the tag `section` class to 'accordion-section-active'
        accordionSectionTag.className = "accordion-section-active"
        currentActiveAccordionSection = accordionSectionTag
       } 

      if (currentActiveAccordionSection.length !== 0) {
        currentActiveAccordionSection.className = "accordion-section"
        accordionSectionTag.className = "accordion-section-active"
        currentActiveAccordionSection = accordionSectionTag
      }
    })
  }
  // Collects h3 tags in document into array
  var accordionSectionHeaders = document.getElementsByTagName("h3")

  // Adds click event to h3 tags within accordion section
  for (var i = accordionSectionHeaders.length - 1; i >= 0; i--) {
    // if (accordionSectionHeaders[i].className === "section-header") {then execute code below}
    accordionClickEvent (accordionSectionHeaders[i])
  }

// -----------------------------------------------------------------------
// Carousel by Jonathan Christian @BeYourExcitement
// -----------------------------------------------------------------------

  var imageIds = {
   image1: "centerpiece-image1", 
   image2: "centerpiece-image2", 
   image3: "centerpiece-image3", 
   image4: "centerpiece-image4", 
   image5: "centerpiece-image5"
  }

  // a reference between thumbnail IDs and imageIds (centerpiece IDs)
  var currentlyClickedThumbnailId = "image3"

  var carouselThumbnailClickEvent = function (thumbnailElement) {
    var centerpieceImageElement = document.getElementById (imageIds[thumbnailElement.id])

    thumbnailElement.addEventListener ("click", function() {
      var deactivatecurrentActiveCenterpieceImageElement = document.getElementById (imageIds[currentlyClickedThumbnailId])

      // activates the clicked thumbnail as the centerpiece
      deactivatecurrentActiveCenterpieceImageElement.className = "centerpiece-image"
      
      // Locates and activates a centerpiece image
      centerpieceImageElement.className = "centerpiece-image-active"
      // changes currentlyClickedThumbnailId to the currently clicked thumbnail ID
      currentlyClickedThumbnailId = thumbnailElement.id
    })
  }

  // Collects thumbnail divs into array
  var thumbnailElementCollection = document.getElementsByClassName ("thumbnail")

  // Adds click event to thumbnails with a function
  for (var i = thumbnailElementCollection.length - 1; i >= 0; i--) {
    carouselThumbnailClickEvent (thumbnailElementCollection[i])
  }

})
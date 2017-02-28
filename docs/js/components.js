
window.addEventListener("load", function() {

// -------------------------------------------------
// Accordion by Jonathan Christian @BeYourExcitement
// -------------------------------------------------
// Refactor and fully utilize those objects and key/value pairs
  
  // keys = h3 innerHTML / values = h3 element
  var accordionH3Elements = {}
  // keys = section id / values = section element
  var accordionSectionElements = {}

  var currentActiveAccordionH3InnerHtml = ""
  var currentActiveAccordionSectionId = ""

  var accordionClickEvent = function (h3Element) {
    var accordionSectionElement = h3Element.nextElementSibling
    
    h3Element.addEventListener ("click", function() {
      if (currentActiveAccordionH3InnerHtml.length !== 0) {
        var currentActiveH3Element = accordionH3Elements[currentActiveAccordionH3InnerHtml]
        var currentActiveSectionElement = accordionSectionElements[currentActiveAccordionSectionId]

        // deactivates accordion h3 and section
        currentActiveH3Element.className = "section-header"
        currentActiveSectionElement.className = "accordion-section"
      }

      // activates H3 and Section elements in Accordion
      h3Element.className = "section-header-active"
      accordionSectionElement.className = "accordion-section-active"
      currentActiveAccordionH3InnerHtml = h3Element.innerHTML
      currentActiveAccordionSectionId = accordionSectionElement.id
    })
  }

  // Collects h3 tags in document into array
  var accordionH3Collection = document.getElementsByClassName ("section-header")

  // Adds click event to h3 tags and create key/value pair of h3.innerHTML/section.id
  for (var i = accordionH3Collection.length - 1; i >= 0; i--) {
    // set key/value pairs for accordion h3 Elements and accordion section Elements 
    accordionH3Elements[accordionH3Collection[i].innerHTML] = accordionH3Collection[i]
    accordionSectionElements[accordionH3Collection[i].nextElementSibling.id] = accordionH3Collection[i].nextElementSibling
    // Add click event to h3 elements
    accordionClickEvent (accordionH3Collection[i])
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

      // Deactivates the clicked thumbnail as the centerpiece
      deactivatecurrentActiveCenterpieceImageElement.className = "centerpiece-image"
      
      // Activates a centerpiece image
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
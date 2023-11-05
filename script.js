$("#banner_carousel")
  .on("initialized.owl.carousel changed.owl.carousel", function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $(".banner-counter").text(
      carousel.relative(carousel.current()) + 1 + "/" + carousel.items().length
    );
  })
  .owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    nav: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.63154 4.99341C5.75593 4.99344 5.87747 5.03058 5.98063 5.10008C6.08379 5.16957 6.16386 5.26827 6.21062 5.38353C6.25737 5.49879 6.26867 5.62538 6.24307 5.74711C6.21747 5.86883 6.15614 5.98014 6.06692 6.06681L2.96715 9.16659H18.5417C18.6245 9.16542 18.7067 9.18072 18.7836 9.2116C18.8605 9.24248 18.9304 9.28833 18.9894 9.34649C19.0484 9.40464 19.0952 9.47393 19.1272 9.55034C19.1591 9.62676 19.1756 9.70876 19.1756 9.79159C19.1756 9.87441 19.1591 9.95642 19.1272 10.0328C19.0952 10.1092 19.0484 10.1785 18.9894 10.2367C18.9304 10.2948 18.8605 10.3407 18.7836 10.3716C18.7067 10.4025 18.6245 10.4178 18.5417 10.4166H2.96715L6.06692 13.5164C6.12691 13.574 6.17479 13.6429 6.20778 13.7193C6.24077 13.7956 6.2582 13.8777 6.25905 13.9609C6.25989 14.044 6.24414 14.1265 6.21271 14.2035C6.18128 14.2805 6.1348 14.3504 6.076 14.4092C6.0172 14.468 5.94726 14.5145 5.87028 14.5459C5.79329 14.5774 5.71081 14.5931 5.62766 14.5923C5.54451 14.5914 5.46237 14.574 5.38604 14.541C5.30971 14.508 5.24073 14.4601 5.18314 14.4001L1.01647 10.2335C0.899303 10.1163 0.833485 9.95732 0.833485 9.79159C0.833485 9.62585 0.899303 9.46691 1.01647 9.34969L5.18314 5.18302C5.24139 5.12303 5.3111 5.07534 5.38812 5.04277C5.46514 5.0102 5.54792 4.99341 5.63154 4.99341Z" fill="#4A7BB4"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.3685 4.99341C14.2441 4.99344 14.1225 5.03058 14.0194 5.10008C13.9162 5.16957 13.8361 5.26827 13.7894 5.38353C13.7426 5.49879 13.7313 5.62538 13.7569 5.74711C13.7825 5.86883 13.8439 5.98014 13.9331 6.06681L17.0328 9.16659H1.4583C1.37548 9.16542 1.29326 9.18072 1.2164 9.2116C1.13955 9.24248 1.0696 9.28833 1.01061 9.34649C0.951634 9.40464 0.904799 9.47393 0.872831 9.55034C0.840864 9.62676 0.824402 9.70876 0.824402 9.79159C0.824402 9.87441 0.840864 9.95642 0.872831 10.0328C0.904799 10.1092 0.951634 10.1785 1.01061 10.2367C1.0696 10.2948 1.13955 10.3407 1.2164 10.3716C1.29326 10.4025 1.37548 10.4178 1.4583 10.4166H17.0328L13.9331 13.5164C13.8731 13.574 13.8252 13.6429 13.7922 13.7193C13.7592 13.7956 13.7418 13.8777 13.741 13.9609C13.7401 14.044 13.7559 14.1265 13.7873 14.2035C13.8187 14.2805 13.8652 14.3504 13.924 14.4092C13.9828 14.468 14.0527 14.5145 14.1297 14.5459C14.2067 14.5774 14.2892 14.5931 14.3723 14.5923C14.4555 14.5914 14.5376 14.574 14.614 14.541C14.6903 14.508 14.7593 14.4601 14.8169 14.4001L18.9835 10.2335C19.1007 10.1163 19.1665 9.95732 19.1665 9.79159C19.1665 9.62585 19.1007 9.46691 18.9835 9.34969L14.8169 5.18302C14.7586 5.12303 14.6889 5.07534 14.6119 5.04277C14.5349 5.0102 14.4521 4.99341 14.3685 4.99341Z" fill="#702D8D"/></svg>',
    ],
  });

// $("#destinations_carousel").owlCarousel({
//   items: 4,
//   loop: false,
//   margin: 16,
//   nav: true,
//   navText: [
//     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.63154 4.99341C5.75593 4.99344 5.87747 5.03058 5.98063 5.10008C6.08379 5.16957 6.16386 5.26827 6.21062 5.38353C6.25737 5.49879 6.26867 5.62538 6.24307 5.74711C6.21747 5.86883 6.15614 5.98014 6.06692 6.06681L2.96715 9.16659H18.5417C18.6245 9.16542 18.7067 9.18072 18.7836 9.2116C18.8605 9.24248 18.9304 9.28833 18.9894 9.34649C19.0484 9.40464 19.0952 9.47393 19.1272 9.55034C19.1591 9.62676 19.1756 9.70876 19.1756 9.79159C19.1756 9.87441 19.1591 9.95642 19.1272 10.0328C19.0952 10.1092 19.0484 10.1785 18.9894 10.2367C18.9304 10.2948 18.8605 10.3407 18.7836 10.3716C18.7067 10.4025 18.6245 10.4178 18.5417 10.4166H2.96715L6.06692 13.5164C6.12691 13.574 6.17479 13.6429 6.20778 13.7193C6.24077 13.7956 6.2582 13.8777 6.25905 13.9609C6.25989 14.044 6.24414 14.1265 6.21271 14.2035C6.18128 14.2805 6.1348 14.3504 6.076 14.4092C6.0172 14.468 5.94726 14.5145 5.87028 14.5459C5.79329 14.5774 5.71081 14.5931 5.62766 14.5923C5.54451 14.5914 5.46237 14.574 5.38604 14.541C5.30971 14.508 5.24073 14.4601 5.18314 14.4001L1.01647 10.2335C0.899303 10.1163 0.833485 9.95732 0.833485 9.79159C0.833485 9.62585 0.899303 9.46691 1.01647 9.34969L5.18314 5.18302C5.24139 5.12303 5.3111 5.07534 5.38812 5.04277C5.46514 5.0102 5.54792 4.99341 5.63154 4.99341Z" fill="#4A7BB4"/></svg>',
//     '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.3685 4.99341C14.2441 4.99344 14.1225 5.03058 14.0194 5.10008C13.9162 5.16957 13.8361 5.26827 13.7894 5.38353C13.7426 5.49879 13.7313 5.62538 13.7569 5.74711C13.7825 5.86883 13.8439 5.98014 13.9331 6.06681L17.0328 9.16659H1.4583C1.37548 9.16542 1.29326 9.18072 1.2164 9.2116C1.13955 9.24248 1.0696 9.28833 1.01061 9.34649C0.951634 9.40464 0.904799 9.47393 0.872831 9.55034C0.840864 9.62676 0.824402 9.70876 0.824402 9.79159C0.824402 9.87441 0.840864 9.95642 0.872831 10.0328C0.904799 10.1092 0.951634 10.1785 1.01061 10.2367C1.0696 10.2948 1.13955 10.3407 1.2164 10.3716C1.29326 10.4025 1.37548 10.4178 1.4583 10.4166H17.0328L13.9331 13.5164C13.8731 13.574 13.8252 13.6429 13.7922 13.7193C13.7592 13.7956 13.7418 13.8777 13.741 13.9609C13.7401 14.044 13.7559 14.1265 13.7873 14.2035C13.8187 14.2805 13.8652 14.3504 13.924 14.4092C13.9828 14.468 14.0527 14.5145 14.1297 14.5459C14.2067 14.5774 14.2892 14.5931 14.3723 14.5923C14.4555 14.5914 14.5376 14.574 14.614 14.541C14.6903 14.508 14.7593 14.4601 14.8169 14.4001L18.9835 10.2335C19.1007 10.1163 19.1665 9.95732 19.1665 9.79159C19.1665 9.62585 19.1007 9.46691 18.9835 9.34969L14.8169 5.18302C14.7586 5.12303 14.6889 5.07534 14.6119 5.04277C14.5349 5.0102 14.4521 4.99341 14.3685 4.99341Z" fill="#702D8D"/></svg>',
//   ],
// });

$(document).ready(function () {
  var owl = $("#destinations_carousel");
  owl.owlCarousel({
    items: 4,
    loop: false,
    margin: 16,
    nav: true,
    navText: [
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5.63154 4.99341C5.75593 4.99344 5.87747 5.03058 5.98063 5.10008C6.08379 5.16957 6.16386 5.26827 6.21062 5.38353C6.25737 5.49879 6.26867 5.62538 6.24307 5.74711C6.21747 5.86883 6.15614 5.98014 6.06692 6.06681L2.96715 9.16659H18.5417C18.6245 9.16542 18.7067 9.18072 18.7836 9.2116C18.8605 9.24248 18.9304 9.28833 18.9894 9.34649C19.0484 9.40464 19.0952 9.47393 19.1272 9.55034C19.1591 9.62676 19.1756 9.70876 19.1756 9.79159C19.1756 9.87441 19.1591 9.95642 19.1272 10.0328C19.0952 10.1092 19.0484 10.1785 18.9894 10.2367C18.9304 10.2948 18.8605 10.3407 18.7836 10.3716C18.7067 10.4025 18.6245 10.4178 18.5417 10.4166H2.96715L6.06692 13.5164C6.12691 13.574 6.17479 13.6429 6.20778 13.7193C6.24077 13.7956 6.2582 13.8777 6.25905 13.9609C6.25989 14.044 6.24414 14.1265 6.21271 14.2035C6.18128 14.2805 6.1348 14.3504 6.076 14.4092C6.0172 14.468 5.94726 14.5145 5.87028 14.5459C5.79329 14.5774 5.71081 14.5931 5.62766 14.5923C5.54451 14.5914 5.46237 14.574 5.38604 14.541C5.30971 14.508 5.24073 14.4601 5.18314 14.4001L1.01647 10.2335C0.899303 10.1163 0.833485 9.95732 0.833485 9.79159C0.833485 9.62585 0.899303 9.46691 1.01647 9.34969L5.18314 5.18302C5.24139 5.12303 5.3111 5.07534 5.38812 5.04277C5.46514 5.0102 5.54792 4.99341 5.63154 4.99341Z" fill="#4A7BB4"/></svg>',
      '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.3685 4.99341C14.2441 4.99344 14.1225 5.03058 14.0194 5.10008C13.9162 5.16957 13.8361 5.26827 13.7894 5.38353C13.7426 5.49879 13.7313 5.62538 13.7569 5.74711C13.7825 5.86883 13.8439 5.98014 13.9331 6.06681L17.0328 9.16659H1.4583C1.37548 9.16542 1.29326 9.18072 1.2164 9.2116C1.13955 9.24248 1.0696 9.28833 1.01061 9.34649C0.951634 9.40464 0.904799 9.47393 0.872831 9.55034C0.840864 9.62676 0.824402 9.70876 0.824402 9.79159C0.824402 9.87441 0.840864 9.95642 0.872831 10.0328C0.904799 10.1092 0.951634 10.1785 1.01061 10.2367C1.0696 10.2948 1.13955 10.3407 1.2164 10.3716C1.29326 10.4025 1.37548 10.4178 1.4583 10.4166H17.0328L13.9331 13.5164C13.8731 13.574 13.8252 13.6429 13.7922 13.7193C13.7592 13.7956 13.7418 13.8777 13.741 13.9609C13.7401 14.044 13.7559 14.1265 13.7873 14.2035C13.8187 14.2805 13.8652 14.3504 13.924 14.4092C13.9828 14.468 14.0527 14.5145 14.1297 14.5459C14.2067 14.5774 14.2892 14.5931 14.3723 14.5923C14.4555 14.5914 14.5376 14.574 14.614 14.541C14.6903 14.508 14.7593 14.4601 14.8169 14.4001L18.9835 10.2335C19.1007 10.1163 19.1665 9.95732 19.1665 9.79159C19.1665 9.62585 19.1007 9.46691 18.9835 9.34969L14.8169 5.18302C14.7586 5.12303 14.6889 5.07534 14.6119 5.04277C14.5349 5.0102 14.4521 4.99341 14.3685 4.99341Z" fill="#702D8D"/></svg>',
    ],
  });

  $("#carouselProgressBar").val(0);
  owl.on("changed.owl.carousel", function (event) {
    $("#carouselProgressBar").val(event.item.index);
  });
  $("#carouselProgressBar").on("input", function () {
    var value = parseInt($(this).val());
    owl.trigger("to.owl.carousel", [value, 300]);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const accordionItems = document.querySelectorAll(".accordion");

  accordionItems.forEach((item) => {
    const header = item.querySelector(".accordion_header");
    const content = item.querySelector(".accordion_content");

    header.addEventListener("click", () => {
      item.classList.toggle("active");

      if (item.classList.contains("active")) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = 0;
      }
    });
  });
});

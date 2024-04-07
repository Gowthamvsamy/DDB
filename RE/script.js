function toggleMenu() {
    menu = document.getElementById('menu');
    const menuOpenIcon = document.getElementById('menuOpenIcon');
    const menuCloseIcon = document.getElementById('menuCloseIcon');

    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
    } else {
        menu.classList.add('hidden');
    }


    if (menuOpenIcon.classList.contains('hidden')) {
        menuOpenIcon.classList.remove('hidden');
        menuCloseIcon.classList.add('hidden');
    } else {
        menuOpenIcon.classList.add('hidden');
        menuCloseIcon.classList.remove('hidden');
    }
}

function search() {
    srbox = document.getElementById('searchbox');

    if(srbox.classList.contains('hidden')) {
        srbox.classList.remove('hidden');
    } else {
        srbox.classList.add('hidden');
    }
}


function footDropdown(elid, arrowId, crimson) {
    foot = document.getElementById(elid);
    svgIcon = document.getElementById(arrowId);
    isRotated = svgIcon.getAttribute('transform') === 'rotate(180)';

    element = document.getElementById(crimson);
    currentColor = element.style.color;
    newColor = 'crimson';

    
    if(foot.classList.contains('hidden')) {
        foot.classList.remove('hidden');
    } else {
        foot.classList.add('hidden');
    }

    if (isRotated) {
        svgIcon.setAttribute('transform', 'rotate(0)');
    } else {
        svgIcon.setAttribute('transform', 'rotate(180)');
    }

    if (currentColor !== newColor) {
        element.style.color = newColor;
    } else {
        element.style.color = 'black';
    }
}


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


const bikeItems = document.querySelectorAll('#bikeList li');

bikeItems.forEach(item => {
    item.addEventListener('click', () => {
        bikeItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});


const logoContainer = document.getElementById('logoContainer');
const logoImage = document.getElementById('logoImage');

function toggleLogoVisibility() {
    if (window.pageYOffset > 0) {
        logoImage.classList.remove('hidden');
    } else {
        logoImage.classList.add('hidden');
    }
}

window.addEventListener('scroll', toggleLogoVisibility);

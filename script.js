

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

const firebaseConfig = {
    apiKey: "AIzaSyCQsm0OkhOvI0COdLHbEb2JNWHMUJZq7Kk",
    authDomain: "portfoliocontact-8e0e8.firebaseapp.com",
    databaseURL: "https://portfoliocontact-8e0e8-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "portfoliocontact-8e0e8",
    storageBucket: "portfoliocontact-8e0e8.appspot.com",
    messagingSenderId: "307110053762",
    appId: "1:307110053762:web:6c41177e6fae7832c4719b",
    measurementId: "G-SP6NSYE1YK"
};

//   Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const ref = database.ref('Messages');


const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mob = document.getElementById('mobile').value;
    const sub = document.getElementById('emailSub').value;
    const desc = document.getElementById('desc').value;


    // Save data to Firestore
    ref.push({
        name: name,
        email: email,
        mobile: mob,
        subject: sub,
        description: desc
    }).then(() => {
        // Display alert

        // Show custom alert
        var customAlert = document.getElementById('customAlertSuccess');

        customAlert.style.display = 'block';

        // Set a timer to hide the custom alert after 5 seconds
        setTimeout(function () {
            // Code to hide the custom alert
            customAlert.style.display = 'none';
        }, 5000);


    })
        .catch((error) => {

            var customAlert = document.getElementById('customAlertFailed');
            customAlert.style.display = 'block';

            // Set a timer to hide the custom alert after 5 seconds
            setTimeout(function () {
                // Code to hide the custom alert
                customAlert.style.display = 'none';
            }, 5000);


        });;

    // Optionally, you can reset the form
    form.reset();
});




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


ScrollReveal({ reset: false, distance: '80px', duration: 2000, delay: 200 });

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Web Developer', 'UI/UX Designer', 'Graphic Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});


function openModal() {
    document.getElementById('myModal').style.display = 'block';
}

// Close the modal
function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}

function openModal1() {
    document.getElementById('myModal1').style.display = 'block';
}

// Close the modal
function closeModal1() {
    document.getElementById('myModal1').style.display = 'none';
}


function openModal2() {
    document.getElementById('myModal2').style.display = 'block';
}

// Close the modal
function closeModal2() {
    document.getElementById('myModal2').style.display = 'none';
}

function openser1() {
    console.log('open modal');
    document.getElementById('ser1').style.display = 'block';
}

// Close the modal
function closeser1() {
    document.getElementById('ser1').style.display = 'none';
}


function openser2() {
    console.log('open modal');
    document.getElementById('ser2').style.display = 'block';
}

// Close the modal
function closeser2() {
    document.getElementById('ser2').style.display = 'none';
}





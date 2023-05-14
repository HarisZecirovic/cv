//for image rotation
const image = document.querySelector('.starting-page__image img');
const container = document.querySelector('.starting-page__image');

container.addEventListener('mousemove', (e) => {
  const containerRect = container.getBoundingClientRect();
  const x = e.clientX - containerRect.left;
  const y = e.clientY - containerRect.top;
  const centerX = container.offsetWidth / 2;
  const centerY = container.offsetHeight / 2;
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  image.style.transform = `rotateX(${-deltaY * 10}deg) rotateY(${
    deltaX * 10
  }deg)`;
});

image.addEventListener('mouseleave', () => {
  image.style.transform = 'none';
});

//for link rotation
const linkContainer = document.querySelector('.starting-page__link');
const link = document.querySelector('.starting-page__link-circle');
const linkArrow = document.querySelector('.starting-page__link-circle span');

linkContainer.addEventListener('mousemove', (e) => {
  const containerRect = linkContainer.getBoundingClientRect();
  const x = e.clientX - containerRect.left;
  const y = e.clientY - containerRect.top;
  const centerX = linkContainer.offsetWidth / 2;
  const centerY = linkContainer.offsetHeight / 2;
  const deltaX = (x - centerX) / centerX;
  const deltaY = (y - centerY) / centerY;

  link.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
  linkArrow.style.transform = `translate(${deltaX * 15}px, ${deltaY * 15}px)`;
});
linkContainer.addEventListener('mouseleave', () => {
  link.style.transform = 'none';
  linkArrow.style.transform = 'none';
});

//za navbar
var backdrop = document.querySelector('.backdrop');
var mainHeader = document.querySelector('.main-header');
var toggleButton = document.querySelector('.toggle-button');

backdrop.addEventListener('click', function () {
  //   mobileNav.style.display = "none";
  mainHeader.style.animation = 'none';
  mainHeader.style.animation = 'navAnimacijaClose 2s';
  setTimeout(() => {
    mainHeader.classList.remove('open');
  }, 2000);
  setTimeout(() => {
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
  }, 10);

  if (projectDescription.style.display === 'flex') {
    projectDescription.style.display = 'none';
  }
});
toggleButton.addEventListener('click', function () {
  //   mobileNav.style.display = "block";
  //   backdrop.style.display = "block";
  mainHeader.classList.add('open');
  mainHeader.style.animation = 'navAnimacija 2s';
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
});

//za rotiranje

function zaRotaciju(item) {
  item.style.animation =
    'rotationAnimationOut 1.5s cubic-bezier(0.5, 1.3, 0.5, 1.3)';
}

function zaRotacijuEnter(item) {
  item.style.animation =
    'forwards rotationAnimation 1.5s cubic-bezier(0.5, 1.3, 0.5, 1.3)';
}

//za description
var projectDescription = document.querySelector('.project-description');
var projectTitle = document.querySelector('.project-description__title');
var projectText = document.querySelector('.project-description__text');
var img = document.querySelector('.mySlides img');
var glavneSlike;
const imagesDots = [
  {
    url: 'projekti/dots/1.png',
  },
  {
    url: 'projekti/dots/2.png',
  },
  {
    url: 'projekti/dots/3.png',
  },
  {
    url: 'projekti/dots/4.png',
  },
  {
    url: 'projekti/dots/5.png',
  },
  {
    url: 'projekti/dots/6.png',
  },
];
const imageKurs = [
  {
    url: 'projekti/kursevi/1.png',
  },
  {
    url: 'projekti/kursevi/2.png',
  },
  {
    url: 'projekti/kursevi/3.png',
  },
  {
    url: 'projekti/kursevi/4.png',
  },
  {
    url: 'projekti/kursevi/5.png',
  },
  {
    url: 'projekti/kursevi/6.png',
  },
  {
    url: 'projekti/kursevi/7.png',
  },
];
const imagesDesktop = [
  {
    url: 'projekti/desktop/1.png',
  },
  {
    url: 'projekti/desktop/2.png',
  },
  {
    url: 'projekti/desktop/3.png',
  },
  {
    url: 'projekti/desktop/4.png',
  },
  {
    url: 'projekti/desktop/5.png',
  },
  {
    url: 'projekti/desktop/6.png',
  },
];
const imagesFudbal = [
  {
    url: 'projekti/fudbal/1.png',
  },
  {
    url: 'projekti/fudbal/2.png',
  },
  {
    url: 'projekti/fudbal/3.png',
  },
  {
    url: 'projekti/fudbal/4.png',
  },
  {
    url: 'projekti/fudbal/5.png',
  },
  {
    url: 'projekti/fudbal/6.png',
  },
];
const imagesBanka = [
  {
    url: 'projekti/banka/1.png',
  },
  {
    url: 'projekti/banka/2.png',
  },
  {
    url: 'projekti/banka/3.png',
  },
  {
    url: 'projekti/banka/4.png',
  },
];
const imagesAlien = [
  {
    url: 'projekti/alien/1.png',
  },
  {
    url: 'projekti/alien/2.png',
  },
];
function openDescription(index) {
  backdrop.style.display = 'block';
  setTimeout(() => {
    backdrop.classList.add('open');
  }, 10);
  projectDescription.style.display = 'flex';
  if (index == 0) {
    projectTitle.innerHTML = 'Dots and Boxes Game';
    projectText.innerHTML = `Hey there! I'm excited to share with you about my latest project - Dots and Boxes! I built this game from the ground up, starting with the frontend built in JavaScript, which includes a graphical interface and functions for starting the game and making moves.

    One of the most interesting parts of this project was building the AI that powers the game. Using Django on the backend, I implemented a minimax algorithm that receives the game state from the frontend with every mouse click. This algorithm is what makes the game challenging and engaging to play, as it's able to evaluate the current game state and make intelligent moves accordingly.
    
    As players make moves, the frontend sends the current game state to the backend, which then calculates the best move using the minimax algorithm and sends it back to the frontend. This process happens seamlessly behind the scenes, creating a smooth and enjoyable game experience.
    
    Overall, I'm really proud of how Dots and Boxes turned out. It's a web-based game that can be played directly in a browser, and it showcases my skills in JavaScript, Django, and AI. I hope you enjoy playing it as much as I enjoyed building it!`;
    img.src = 'projekti/dots/1.png';
    glavneSlike = imagesDots;
  } else if (index == 1) {
    projectTitle.innerHTML = 'Web App for selling Courses';
    projectText.innerHTML = `I built a web application using Angular and PHP that I'm really proud of. The app is designed to facilitate the buying and selling of courses, with authors creating and selling courses on programming topics and clients purchasing those courses.

    One of the key features of the app is the role-based access control system, which ensures that admins have complete control over the site while authors and clients have limited access to only the features they need. This helps to keep the site secure and ensures that everyone has a positive experience.
    
    As an author, you can create courses and manage them through the app, setting prices and adding content as needed. Clients can easily browse the available courses and purchase them using a secure payment system.
    
    And as an admin, you have access to a range of powerful tools for managing the site, including the ability to manage users, monitor sales, and edit content as needed.
    
    Overall, I'm really pleased with how this project turned out. It was a challenging but rewarding experience to build a complex web app like this one, and I'm excited to continue improving it and adding new features in the future.`;
    img.src = 'projekti/kursevi/1.png';
    glavneSlike = imageKurs;
  } else if (index == 2) {
    projectTitle.innerHTML = 'C# Desktop App';
    projectText.innerHTML = `I built a desktop app using C# WPF and SQL Server, with Entity Framework for the backend. The app is designed for school competitions, where an admin organizes competitions for different schools, and the schools participate with their students.

    One of the key features of the app is that the admin can create and manage competitions, including specifying where the students should sit, when the competition starts and ends, and other important details. This makes it easy to keep everything organized and running smoothly.
    
    Schools and students can then use the app to view the competition results, which are automatically updated in real-time as the competition progresses. This makes it easy for everyone to stay up-to-date and track their progress.
    
    Overall, I'm really proud of how this project turned out. It was a challenging but rewarding experience to build a complex desktop app like this one, and I'm excited to see how it can be used to help schools and students participate in competitions more effectively.`;
    img.src = 'projekti/desktop/1.png';
    glavneSlike = imagesDesktop;
  } else if (index == 3) {
    projectTitle.innerHTML = 'Web App about Football';
    projectText.innerHTML = `I built a web app using JavaScript and PHP that's all about football. The app is designed to help admins organize football tournaments, while managers with their teams and players participate in them.

    One of the key features of the app is that it keeps track of all the information about teams and players. Players can change clubs and managers can manage their teams effectively. This makes it easy to keep everything organized and ensure that everyone is on the same page.
    
    The app also includes a football news section, which keeps everyone up-to-date on the latest developments in the world of football. And since the admin has all the privileges of the web app, they can easily manage everything and keep things running smoothly.
    
    Another great feature of the app is that the results of the tournaments are shown graphically, making it easy to see how each team is performing and which players are making the biggest impact. This helps to keep everyone engaged and motivated throughout the tournament.
    
    Overall, I'm really proud of how this project turned out. It was a fun and challenging experience to build a web app that's all about football, and I'm excited to see how it can be used to help people organize and participate in tournaments more effectively.`;
    img.src = 'projekti/fudbal/1.png';
    glavneSlike = imagesFudbal;
  } else if (index == 4) {
    projectTitle.innerHTML = 'Web App Blood Bank';
    projectText.innerHTML = `I built a web app using JavaScript and PHP, designed to facilitate blood banking. The app has different features like donor registration, blood inventory, blood requests, and an admin dashboard with full privileges.

    One of the key features of the app is the donor registration system, which makes it easy for donors to sign up and become a part of the blood donation program. Users in need of blood can then easily find donors through the app and make requests for blood.
    
    Another important feature is the basement of blood inventory management system. The system keeps track of the available blood and displays the total amount of blood in the inventory. This ensures that the blood bank has enough stock to meet the needs of the users.
    
    The app also has a blood request system where users in need of blood can easily make requests, and donors can respond to these requests to offer their help. This system streamlines the blood donation process and makes it faster and more efficient.
    
    Finally, the app includes an admin dashboard that gives the admin full control over the app. The admin can manage all aspects of the app, including adding new donors, viewing blood requests, and managing the blood inventory.
    
    Overall, I am very pleased with how this project turned out. It was an exciting challenge to build a web app that has the potential to help save lives, and I am proud of the result.`;
    img.src = 'projekti/banka/1.png';
    glavneSlike = imagesBanka;
  } else if (index == 5) {
    projectTitle.innerHTML = 'Alien Invasion';
    projectText.innerHTML = `I built an exciting game called Alien Invasion using Python and Pygame. The game involves a spaceship shooting at aliens that fall down towards it.

    Players control the spaceship and use the keyboard to move it horizontally across the screen. The spaceship can also shoot at the aliens using the space bar. As the game progresses, the aliens move faster and the difficulty level increases.
    
    One of the most fun parts of the game is the alien animation. The aliens fall from the top of the screen and explode in a satisfying animation when they're hit by the spaceship's bullets. This adds a level of excitement and challenge to the game, making it more engaging for players.
    
    Overall, I'm really proud of how this project turned out. Building a game like Alien Invasion using Python and Pygame was a fun and rewarding experience, and I'm excited to see how people enjoy playing it.`;
    img.src = 'projekti/alien/1.png';
    glavneSlike = imagesAlien;
  } else {
    projectTitle.innerHTML = '';
    projectText.innerHTML = '';
    img.src = '';
    glavneSlike = [];
  }
}
let slideIndex = 0;
function plusSlides(index) {
  slideIndex += +index;
  if (slideIndex >= glavneSlike.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = glavneSlike.length - 1;
  }
  console.log(slideIndex);
  console.log(glavneSlike.length);
  img.src = `${glavneSlike[slideIndex].url}`;
}

// za smooth transition beetwen starting and about me section
// let startingPage = document.querySelector(".starting-page");
let startingButton = document.querySelector('.starting-page__link');
// let body = document.getElementsByTagName('body');
// let aboutMe = document.getElementById('about-me');
// let aboutRect = aboutMe.getBoundingClientRect();
// let brojac = 0;
// console.log(aboutRect.top);
// startingButton.addEventListener('click', () => {
//   aboutMe.scrollIntoView({behavior: 'smooth'});

// });

function smoothScroll(target, duration) {
  var targetElement = document.getElementById('about-me');
  var rect = targetElement.getBoundingClientRect();
  var targetPosition = rect.top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

startingButton.addEventListener('click', function (event) {
  event.preventDefault();
  smoothScroll('#section2', 1000);
});

// da zatvorim opis projekta

let closeButton = document.querySelector('.description-close button');

closeButton.addEventListener('click', function () {
  setTimeout(() => {
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
  }, 10);

  if (projectDescription.style.display === 'flex') {
    projectDescription.style.display = 'none';
  }
});

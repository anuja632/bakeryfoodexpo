const whyexpoData = [
  {
    number: "01",
    title: "For Exhibitors",
    text: "Showcase your latest bakery, confectionery, and food processing innovations to a focused audience of industry professionals, buyers, and distributors. Launch new products, demonstrate technology, and strengthen your brand presence in one of India’s fastest-growing food tech markets.",
    img: "./asset/images/bakerywhyexpo1.jpg"
  },
  {
    number: "02",
    title: "For Investors",
    text: "Tap into India’s rapidly expanding bakery and packaged food sectors. Discover investment opportunities across automation, cold storage, logistics, and sustainable packaging. Connect directly with manufacturers, distributors, and decision-makers driving growth in the food industry.",
    img: "./asset/images/bakerywhyexpo2.jpg"
  },
  {
    number: "03",
    title: "For Buyers & Sellers",
    text: "Experience a dynamic B2B marketplace connecting global suppliers and buyers. Explore advanced bakery equipment, ingredients, packaging, and processing solutions—all in one place. Network, negotiate, and grow your business effortlessly.",
    img: "./asset/images/bakerywhyexpo3.jpg"
  },
  {
    number: "04",
    title: "To Showcase",
    text: "Present your innovations and cutting-edge solutions to industry leaders. From automated baking lines to eco-friendly packaging, the Expo highlights the latest advancements shaping the future of bakery and food production.",
    img: "./asset/images/bakerywhyexpo4.jpg"
  }
];

const container = document.getElementById("whyexpo-content");
const buttons = document.querySelectorAll(".whyexpo-filters button");
let current = 0;
let autoplay;

// render section with fade animation
function showWhyexpo(i){
  const s = whyexpoData[i];
  container.classList.add("fade-out");
  setTimeout(()=>{
    container.innerHTML = `
      <div class="whyexpo-text" data-aos="slide-up">
        <div class="whyexpo-number">${s.number}</div>
        <div class="whyexpo-content">
          <div class="whyexpo-line"></div>
          <h3>${s.title}</h3>
          <p>${s.text}</p>
          <button class="btn-default" onclick="window.location.href='exhibitors.html'">
            <span>Register Now</span> 
          </button>
        </div>
      </div>
      <div class="whyexpo-image" data-aos="slide-up">
        <div class="whyexpo-bg"></div>
        <div class="whyexpo-frame"><img src="${s.img}" alt="${s.title}"></div>
      </div>`;
    buttons.forEach(b=>b.classList.remove("active"));
    buttons[i].classList.add("active");
    container.classList.remove("fade-out");
    AOS.refreshHard();
  }, 400);
}

// autoplay every 6s
function startWhyexpoAutoplay(){
  clearInterval(autoplay);
  autoplay = setInterval(()=>{
    current = (current + 1) % whyexpoData.length;
    showWhyexpo(current);
  },6000);
}

// manual switch
buttons.forEach(btn=>{
  btn.addEventListener("click",()=>{
    current = parseInt(btn.dataset.index);
    showWhyexpo(current);
    startWhyexpoAutoplay();
  });
});

// init
showWhyexpo(current);
startWhyexpoAutoplay();


  // Countdown target date → March 13, 2026
  const targetDate = new Date("April 10, 2026 00:00:00").getTime();

  const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");

    if (distance < 0) {
      clearInterval(timer);
      document.querySelector(".timer").innerHTML = "<h3>Event Started!</h3>";
    }
  }, 1000);





document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("homecontact");

    form.addEventListener("submit", function(e) {
        e.preventDefault(); // Prevent actual form submission
        alert("Your request has been submitted successfully!");
        
        // Reset all form fields
        form.reset();
    });
});

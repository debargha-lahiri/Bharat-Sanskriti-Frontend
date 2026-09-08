// ==========================================
// 1. LOCAL CULTURAL DATABASE (Offline)
// ==========================================
const culturalData = {
    "Rajasthan": {
      capital: "Jaipur",
      region: "North-Western",
      food: "Dal Baati Churma, Laal Maas, Ker Sangri",
      art: "Ghoomar, Kalbelia, Phad Painting, Blue Pottery",
      heritage: "Amer Fort, Hawa Mahal, Jantar Mantar, Mehrangarh Fort",
      festivals: "Pushkar Camel Fair, Teej, Desert Festival"
    },
    "Gujarat": {
    capital: "Gandhinagar",
    region: "Western",
    food: "Dhokla, Thepla, Khandvi, Undhiyu",
    art: "Garba, Dandiya, Patola Weaving",
    heritage: "Rani Ki Vav, Statue of Unity, Somnath Temple",
    festivals: "Navratri, Rann Utsav, Uttarayan (Kite Festival)"
  },
  "Karnataka": {
    capital: "Bengaluru",
    region: "Southern",
    food: "Bisi Bele Bath, Mysore Pak, Neer Dosa",
    art: "Yakshagana, Dollu Kunitha, Mysore Painting",
    heritage: "Hampi Monuments, Mysore Palace, Pattadakal",
    festivals: "Mysore Dasara, Ugadi"
  },
    "Bihar": {
    capital: "Patna",
    region: "Eastern",
    food: "Litti Chokha, Sattu Paratha, Khaja",
    art: "Madhubani Painting, Tikuli Art",
    heritage: "Mahabodhi Temple, Nalanda University Ruins",
    festivals: "Chhath Puja, Sonepur Mela"
    },
    "West Bengal": {
      capital: "Kolkata",
      region: "Eastern",
      food: "Shorshe Ilish, Roshogolla, Mishti Doi, Machher Jhol",
      art: "Chhau Dance, Patachitra, Baul Sangeet, Kantha Embroidery",
      heritage: "Victoria Memorial, Sundarbans, Bishnupur Temples",
      festivals: "Durga Puja, Poila Boishakh, Poush Mela"
    },
    "Punjab": {
      capital: "Chandigarh",
      region: "Northern",
      food: "Makki di Roti & Sarson da Saag, Chole Bhature, Amritsari Kulcha, Lassi",
      art: "Bhangra, Giddha, Phulkari Embroidery",
      heritage: "Golden Temple, Jallianwala Bagh, Qila Mubarak",
      festivals: "Baisakhi, Lohri, Holla Mohalla"
    },
    "Tamil Nadu": {
      capital: "Chennai",
      region: "Southern",
      food: "Dosa, Idli, Sambar, Chettinad Chicken, Filter Coffee",
      art: "Bharatanatyam, Tanjore Painting, Carnatic Music",
      heritage: "Brihadeeswarar Temple, Meenakshi Amman Temple, Mahabalipuram",
      festivals: "Pongal, Natyanjali Dance Festival"
    },
    "Kerala": {
      capital: "Thiruvananthapuram",
      region: "Southern",
      food: "Appam with Ishtu, Sadya, Kerala Fish Curry, Puttu",
      art: "Kathakali, Mohiniyattam, Kalaripayattu, Mural Painting",
      heritage: "Padmanabhaswamy Temple, Bekal Fort, Mattancherry Palace",
      festivals: "Onam, Vishu, Thrissur Pooram"
    },
    "Maharashtra": {
      capital: "Mumbai",
      region: "Western",
      food: "Vada Pav, Puran Poli, Pav Bhaji, Misal Pav",
      art: "Lavani Dance, Warli Painting, Powada",
      heritage: "Ajanta & Ellora Caves, Gateway of India, Raigad Fort",
      festivals: "Ganesh Chaturthi, Gudi Padwa"
    },
    "Assam": {
      capital: "Dispur",
      region: "North-Eastern",
      food: "Khaar, Masor Tenga, Duck Meat Curry, Pitha",
      art: "Bihu Dance, Sattriya, Muga Silk Weaving",
      heritage: "Kaziranga National Park, Kamakhya Temple, Rang Ghar",
      festivals: "Rongali Bihu, Ambubachi Mela"
    }
  };
  
  // ==========================================
  // 2. THEMING ENGINE (Art & Heritage Palettes)
  // ==========================================
  const artThemes = {
  "Rajasthan": {
    bgImage: "url('assets/rajasthan.png')", 
    fallbackColor: "bg-blue-950",
    accentText: "text-blue-300",
    border: "border-blue-500/50"
  },
  "West Bengal": {
    bgImage: "url('assets/westbengal.png')",
    fallbackColor: "bg-red-950",
    accentText: "text-orange-400",
    border: "border-orange-600/50"
  },
  "Bihar": {
    bgImage: "url('assets/bihar.png')",
    fallbackColor: "bg-emerald-950",
    accentText: "text-emerald-400",
    border: "border-emerald-500/50"
  },
  "Maharashtra": {
    bgImage: "url('assets/maharashtra.png')",
    fallbackColor: "bg-purple-950",
    accentText: "text-purple-400",
    border: "border-purple-500/50"
  },
  "Punjab": {
    bgImage: "url('assets/punjab.png')",
    fallbackColor: "bg-fuchsia-950",
    accentText: "text-pink-400",
    border: "border-pink-500/50"
  },
  "Gujarat": {
    bgImage: "url('assets/gujarat.png')",
    fallbackColor: "bg-teal-950",
    accentText: "text-teal-400",
    border: "border-teal-500/50"
  },
  "Karnataka": {
    bgImage: "url('assets/karnataka.png')",
    fallbackColor: "bg-amber-950",
    accentText: "text-yellow-400",
    border: "border-yellow-600/50"
  },
  "Default": {
    bgImage: "none",
    fallbackColor: "bg-slate-950",
    accentText: "text-amber-400",
    border: "border-slate-800"
  }
};
  
  // ==========================================
  // 3. UI ELEMENT REFERENCES
  // ==========================================
  const stateTitle = document.getElementById("state-title");
  const stateCapital = document.getElementById("state-capital");
  const stateRegion = document.getElementById("state-region");
  const stateFood = document.getElementById("state-food");
  const stateArt = document.getElementById("state-art");
  const stateHeritage = document.getElementById("state-heritage");
  const stateFestivals = document.getElementById("state-festivals");
  const quizStateName = document.getElementById("quiz-state-name");
  
  // Chat UI Elements
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const chatMessages = document.getElementById("chat-messages");
  
  let activeState = " ";
  
  // ==========================================
  // 4. DISPLAY & THEME FUNCTIONS
  // ==========================================
  function updateActiveState(stateName) {
    if (!culturalData[stateName]) return;
    activeState = stateName;
    const data = culturalData[stateName];
  
    if (stateTitle) stateTitle.textContent = stateName;
    if (stateCapital) stateCapital.innerHTML = `<i class="fa-solid fa-location-dot text-rose-400"></i> Capital: ${data.capital}`;
    if (stateRegion) stateRegion.textContent = `${data.region} Region`;
    if (stateFood) stateFood.textContent = data.food;
    if (stateArt) stateArt.textContent = data.art;
    if (stateHeritage) stateHeritage.textContent = data.heritage;
    if (stateFestivals) stateFestivals.textContent = data.festivals;
    if (quizStateName) quizStateName.textContent = stateName;
  }
  
  // 4. Function to change the visual theme and apply PNG backgrounds
function applyArtTheme(stateName) {
  const theme = artThemes[stateName] || artThemes["Default"];
  
  // 1. Set the dynamic PNG background image on the whole page
  document.body.style.backgroundImage = theme.bgImage;
  document.body.style.backgroundSize = "cover";       // Stretches image to fit screen
  document.body.style.backgroundPosition = "center";  // Centers the art
  document.body.style.backgroundAttachment = "fixed"; // Prevents art from scrolling
  
  // 2. Set the fallback color and text colors
  document.body.className = `${theme.fallbackColor} text-slate-100 min-h-screen flex flex-col font-sans transition-all duration-700 ease-in-out`;
  
  // 3. Make the text cards darker and blurrier (Glassmorphism effect) so text is readable
  const displayCard = document.getElementById("culture-display");
  if (displayCard) {
    displayCard.className = `bg-slate-950/85 backdrop-blur-xl border ${theme.border} rounded-2xl p-6 shadow-2xl space-y-6 flex-1 transition-all duration-700`;
  }
  
  // 4. Update the Title Color
  const title = document.getElementById("state-title");
  if (title) {
    title.className = `text-3xl font-extrabold ${theme.accentText} transition-colors duration-700`;
  }
}
  
  // ==========================================
  // 5. OFFLINE AI CHATBOT LOGIC --1st pg
  // ==========================================
  function generateOfflineBotResponse(userText) {
    const clean = userText.toLowerCase();
  
    // Detect if the user mentioned a specific state in the query
    let targetState = activeState;
    for (const state of Object.keys(culturalData)) {
      if (clean.includes(state.toLowerCase())) {
        targetState = state;
        break;
      }
    }
  
    const data = culturalData[targetState];
    if (!data) {
      return `I don't have detailed records for that region yet, but feel free to ask about states like Rajasthan, West Bengal, Punjab, Tamil Nadu, or Kerala!`;
    }
  
    // Keyword Intent Analysis
    if (clean.includes("food") || clean.includes("dish") || clean.includes("eat") || clean.includes("cuisine")) {
      return `Iconic dishes of <strong>${targetState}</strong>: ${data.food}.`;
    }
    if (clean.includes("dance") || clean.includes("art") || clean.includes("craft") || clean.includes("painting") || clean.includes("music")) {
      return `Traditional arts and performances in <strong>${targetState}</strong>: ${data.art}.`;
    }
    if (clean.includes("place") || clean.includes("heritage") || clean.includes("monument") || clean.includes("visit") || clean.includes("temple") || clean.includes("fort")) {
      return `Notable heritage sites in <strong>${targetState}</strong>: ${data.heritage}.`;
    }
    if (clean.includes("festival") || clean.includes("celebration") || clean.includes("fair") || clean.includes("puja")) {
      return `Major festivals celebrated in <strong>${targetState}</strong>: ${data.festivals}.`;
    }
    if (clean.includes("capital")) {
      return `The capital of <strong>${targetState}</strong> is <strong>${data.capital}</strong>.`;
    }
  
    return `Here is what I found for <strong>${targetState}</strong>:<br>• <strong>Capital:</strong> ${data.capital}<br>• <strong>Cuisine:</strong> ${data.food}<br>• <strong>Art:</strong> ${data.art}<br>• <strong>Heritage:</strong> ${data.heritage}`;
  }
  
  function appendMessage(sender, htmlText) {
    if (!chatMessages) return;
    const msgDiv = document.createElement("div");
    if (sender === "user") {
      msgDiv.className = "bg-amber-500/10 border border-amber-500/30 text-amber-200 rounded-xl p-3 ml-6 text-xs";
      msgDiv.innerHTML = `<strong>You:</strong> ${htmlText}`;
    } else {
      msgDiv.className = "bg-slate-800/80 border border-slate-700/60 text-slate-300 rounded-xl p-3 mr-6 text-xs leading-relaxed";
      msgDiv.innerHTML = `<strong>Sanskriti AI:</strong> ${htmlText}`;
    }
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  if (chatForm && chatInput) {
    chatForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const query = chatInput.value.trim();
      if (!query) return;
  
      appendMessage("user", query);
      chatInput.value = "";
  
      setTimeout(() => {
        const botReply = generateOfflineBotResponse(query);
        appendMessage("bot", botReply);
      }, 250);
    });
  }
  
  // ==========================================
  // ==========================================
// ==========================================
// 6. MAP HOVER & DIVE REDIRECT LOGIC
// ==========================================
const tooltip = document.getElementById("map-tooltip");
const tooltipState = document.getElementById("tooltip-state");
const tooltipCapText = document.getElementById("tooltip-cap-text");
const mapPaths = document.querySelectorAll("svg path");
const mapView = document.getElementById("map-view"); // Required for the zoom effect

mapPaths.forEach(path => {
  // 1. Hover: Show Tooltip
  path.addEventListener("mousemove", (e) => {
    const stateName = path.getAttribute("title") || path.getAttribute("name") || path.getAttribute("id");
    
    if (stateName && culturalData[stateName]) {
      const data = culturalData[stateName];
      if (tooltipState) tooltipState.textContent = stateName;
      if (tooltipCapText) tooltipCapText.textContent = data.capital;
      
      if (tooltip) {
        tooltip.style.left = (e.pageX) + "px";
        tooltip.style.top = (e.pageY - 40) + "px";
        tooltip.classList.remove("hidden");
      }
      
      path.style.opacity = "0.7";
      path.style.cursor = "pointer";
    }
  });

  // 2. Mouse Leave: Hide Tooltip
  path.addEventListener("mouseleave", (e) => {
    if (tooltip) tooltip.classList.add("hidden");
    e.target.style.opacity = "1";
  });

  // 3. Click: "The Dive" Transition
  path.addEventListener("click", () => {
    const stateName = path.getAttribute("title") || path.getAttribute("name") || path.getAttribute("id");
    
    if (stateName && culturalData[stateName]) {
      if (tooltip) tooltip.classList.add("hidden");

      // Trigger Zoom Animation
      if (mapView) {
        mapView.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease-in";
        mapView.style.transform = "scale(5)";
        mapView.style.opacity = "0";
      }

      // Wait for animation, then redirect
      setTimeout(() => {
        window.location.href = `state.html?name=${encodeURIComponent(stateName)}`;
      }, 800);
    }
  });
});
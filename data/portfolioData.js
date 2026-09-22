/**
 * Bidyawant Pradhan — Portfolio Data Object Map
 * Centralized data layer for creative producer, director, BTS, and commercial portfolio.
 */

const portfolioData = {
  profile: {
    name: "Bidyawant Pradhan",
    title: "Creative Producer & Director",
    subtitles: ["Creative Producer", "Creative Director", "Content Producer"],
    heroBadge: "4 Yrs Tokyo Corporate • 40+ Global Projects • 7 Feature Films",
    bio: "12+ years spanning theatrical feature film BTS (Raid, Bhuj, Mard Ko Dard Nahi Hota), Tokyo corporate direction (Matrix Inc.), national brand ad films (L'Oréal, Croma, Fevicol, Tanishq), and OTT series production (Singlehood).",
    email: "sovbidrahul@gmail.com",
    phone: "+91 70042 72985",
    locations: ["Bangalore, India", "Tokyo, Japan", "Worldwide"],
    stats: [
      { label: "12+ YEARS EXP", icon: "★", highlight: true },
      { value: "40+", label: "PROJECTS", highlight: false },
      { value: "26", label: "COUNTRIES", highlight: false },
      { value: "7", label: "FEATURE FILMS", highlight: false }
    ]
  },

  navigation: [
    { label: "AI Work", href: "#ai-works" },
    { label: "Film", href: "#films" },
    { label: "Series", href: "#series" },
    { label: "Japan", href: "#japan" },
    { label: "Commercial Ads", href: "#commercials" },
    { label: "Posters", href: "#posters" }
  ],

  spotlight: {
    singlehood: {
      tag: "WATCHO ORIGINAL SERIES",
      role: "PRODUCER & CREATIVE DIRECTOR",
      title: "SINGLEHOOD",
      platform: "Watcho / Dish TV Original",
      image: "singlehood.png",
      watchUrl: "https://www.watcho.com/tvshow/singlehood-1",
      description: "Spearheaded as Producer and Creative Director. Managed full production cycle from script refinement, casting, on-set direction and styling to multi-camera execution, post-production and final platform delivery."
    },
    matrixTokyo: {
      period: "2021 – 2025 (4 YEARS)",
      location: "TOKYO, JAPAN",
      company: "MATRIX INC. (TOKYO)",
      role: "Creative Director & Producer",
      highlights: [
        {
          title: "40+ Projects across 26 Countries",
          text: "Directed international documentary series & global brand campaigns across 5 continents as primary on-screen deliverable lead."
        },
        {
          title: "Japanese Zero-Defect Standards",
          text: "Owned budgets end-to-end with zero overruns across 4 years, precision deadlines, and strict quality documentation."
        },
        {
          title: "Advanced Pipeline Integration",
          text: "Embedded cutting-edge AI video generators (Runway, Pika, HeyGen) & VR workflows directly into the production lifecycle."
        }
      ],
      benchmark: "100% On-Time • Zero Overrun"
    }
  },

  filmVideos: [
    {
      id: "raid-pt1",
      film: "RAID (2018)",
      part: "PART 1",
      role: "CONTENT PRODUCER",
      title: "MAKING OF RAID",
      talent: "Ajay Devgn • Ileana D'Cruz",
      badge: "T-Series BTS • 1080p HD",
      videoType: "yt",
      src: "w2dtNb7wqXs",
      thumbnail: "https://img.youtube.com/vi/w2dtNb7wqXs/hqdefault.jpg",
      actionLabel: "",
      studio: "T-Series"
    },
    {
      id: "raid-pt2",
      film: "RAID (2018)",
      part: "PART 2",
      role: "CONTENT PRODUCER",
      title: "MAKING OF RAID",
      talent: "Pushpa Joshi • Saurabh Shukla • Ajay Devgn",
      badge: "Character BTS • 1080p HD",
      videoType: "yt",
      src: "MNhiSL5Ff5M",
      thumbnail: "https://img.youtube.com/vi/MNhiSL5Ff5M/hqdefault.jpg",
      actionLabel: "",
      studio: "T-Series"
    },
    {
      id: "raid-pt3",
      film: "RAID (2018)",
      part: "PART 3",
      role: "CONTENT PRODUCER",
      title: "MAKING OF RAID",
      talent: "Raj Kumar Gupta • High-Stakes Narrative",
      badge: "Director's Vision",
      videoType: "yt",
      src: "JgWpMO0bAsA",
      thumbnail: "https://img.youtube.com/vi/JgWpMO0bAsA/hqdefault.jpg",
      actionLabel: "",
      studio: "T-Series"
    },
    {
      id: "raid-pt4",
      film: "RAID (2018)",
      part: "PART 4",
      role: "CONTENT PRODUCER",
      title: "MAKING OF RAID",
      talent: "The White House Set • Lucknow Shoot",
      badge: "Production Design BTS • 1080p HD",
      videoType: "yt",
      src: "vXx6mMWagFg",
      thumbnail: "https://img.youtube.com/vi/xOxgBDq3prc/hqdefault.jpg",
      actionLabel: "",
      studio: "T-Series"
    },
    {
      id: "nit-khair-manga",
      film: "RAID",
      part: "NIT KHAIR MANGA",
      role: "SONG MAKING / BTS",
      title: "NIT KHAIR MANGA (MAKING)",
      talent: "Rahat Fateh Ali Khan • Ajay Devgn • Ileana",
      badge: "Song Making",
      videoType: "yt",
      src: "GGDWJbZL_UQ",
      thumbnail: "https://img.youtube.com/vi/GGDWJbZL_UQ/hqdefault.jpg",
      actionLabel: "",
      studio: "T-Series Music"
    },
    {
      id: "operation-parindey",
      film: "OPERATION PARINDEY (2020)",
      part: "",
      role: "CONTENT PRODUCER",
      title: "MAKING OF OPERATION PARINDEY",
      talent: "Amit Sadh • Rahul Dev • Sanjay Gadhvi",
      badge: "ZEE5 Original BTS",
      videoType: "yt",
      src: "6zXXbIk4U3Q",
      thumbnail: "https://img.youtube.com/vi/6zXXbIk4U3Q/hqdefault.jpg",
      actionLabel: "",
      studio: "ZEE5"
    },
    {
      id: "mard-ko-dard",
      film: "MARD KO DARD NAHI HOTA",
      part: "",
      role: "CONTENT PRODUCER / AP",
      title: "JIMMY VS. MANI (ACTION BTS)",
      talent: "Abhimanyu Dassani • Gulshan Devaiah • Vasan Bala",
      badge: "RSVP • 1080p HD",
      videoType: "yt",
      src: "Va-PUoN0wFuU",
      thumbnail: "https://img.youtube.com/vi/a-PUoN0wFuU/hqdefault.jpg",
      actionLabel: "",
      studio: "RSVP Movies"
    },
    {
      id: "chasani",
      film: "CHASANI (2019)",
      part: "",
      role: "ASSOCIATE PRODUCER",
      title: "CHASANI — MITHOO MITHOO",
      talent: "Manoj Joshi • Sejal Shah • Divyang Thakkar",
      badge: "Feature Film Song",
      videoType: "yt",
      src: "_IM6hValJy4",
      thumbnail: "https://img.youtube.com/vi/_IM6hValJy4/hqdefault.jpg",
      actionLabel: "",
      studio: "Gujarati Cinema"
    },
    {
      id: "paltan",
      film: "PALTAN (2018)",
      part: "",
      role: "CONTENT PRODUCER",
      title: "MAKING OF PALTAN",
      talent: "Jackie Shroff • Arjun Rampal • Sonu Sood",
      badge: "Ladakh Shoot BTS",
      videoType: "yt",
      src: "EhAy_aOuGKk",
      thumbnail: "https://img.youtube.com/vi/EhAy_aOuGKk/hqdefault.jpg",
      actionLabel: "",
      studio: "Zee Music"
    }
  ],

  commercialVideos: [
    {
      id: "croma",
      brand: "CROMA (TATA)",
      role: "PRODUCER / DIRECTOR",
      title: "CROMA — WITH YOU FOR A LIFETIME",
      subtitle: "National TV & Digital Ad Campaign",
      badge: "",
      videoType: "yt",
      src: "rbPcNDVlYbE",
      thumbnail: "https://img.youtube.com/vi/1VsTz5QRo4Q/hqdefault.jpg",
      actionLabel: "Play Commercial",
      client: "Tata Croma"
    },
    {
      id: "fevicol",
      brand: "FEVICOL (PIDILITE)",
      role: "ASSISTANT DIRECTOR",
      title: "FEVICOL MARINE WATERPROOF",
      subtitle: "Iconic Pidilite Humor TVC",
      badge: "",
      videoType: "yt",
      src: "tqU9_4SmP-w",
      thumbnail: "https://img.youtube.com/vi/tqU9_4SmP-w/hqdefault.jpg",
      actionLabel: "Play Commercial",
      client: "Pidilite"
    },
    {
      id: "loreal",
      brand: "L'ORÉAL PARIS",
      role: "CREATIVE DIRECTOR",
      title: "L'ORÉAL — REVITALIFT CRYSTAL",
      subtitle: "National Campaign Direction",
      badge: "",
      videoType: "yt",
      src: "vvV_zTy5We8",
      thumbnail: "https://img.youtube.com/vi/vvV_zTy5We8/hqdefault.jpg",
      actionLabel: "Play Commercial",
      client: "L'Oréal"
    }
  ],

  featuredBrands: [
    {
      id: "tanishq",
      tag: "Campaign",
      brand: "TANISHQ JEWELLERY",
      role: "Creative Director",
      scope: "National Festive & Bridal"
    },
    {
      id: "manyavar",
      tag: "Ethnic Campaign",
      brand: "MANYAVAR",
      role: "Assistant Director",
      scope: "Ethnic Festive Campaigns"
    },
    {
      id: "flipkart",
      tag: "E-Commerce Flagship",
      brand: "FLIPKART",
      role: "Director & Photographer",
      scope: "Big Billion Days / Digital"
    },
    {
      id: "amazon",
      tag: "Commercial Stills",
      brand: "AMAZON INDIA",
      role: "Commercial Photographer",
      scope: "E-Commerce Campaign Stills"
    }
  ],

  aiVideos: [
    {
      id: "netflix-spec",
      brand: "NETFLIX SPEC",
      role: "VIDEO PRODUCER",
      title: "NETFLIX — CONCEPT PROMO",
      subtitle: "Synthetic Cinema Direction",
      videoType: "local",
      src: "AI%20Work/Netflix%20AD.MP4"
    },
    {
      id: "snickers-spec",
      brand: "SNICKERS SPEC",
      role: "VIDEO PRODUCER",
      title: "SNICKERS — AI AD FILM",
      subtitle: "Generative Motion Narrative",
      videoType: "local",
      src: "AI%20Work/snickers%20ad.mp4"
    },
    {
      id: "commercial-spec",
      brand: "COMMERCIAL SPEC",
      role: "VIDEO PRODUCER",
      title: "AI BRAND COMMERCIAL",
      subtitle: "Midjourney • Runway Gen-3",
      videoType: "local",
      src: "AI%20Work/Commercial.mp4"
    }
  ],

  posters: [
    {
      id: "poster-1",
      src: "Film%20Poster/MV5BMWE5Nzg2M2MtOTY0NS00MzZmLWJlMzktODUxYWEwM2IwNzA5XkEyXkFqcGc@._V1_.jpg",
      type: "image"
    },
    // {
    //   id: "poster-2",
    //   src: "Film%20Poster/MV5BMzFmNGIwYjYtY2M2ZC00M2Q5LWI5NTAtMDQxZDZhNzdlYWFkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    //   type: "image"
    // },
    {
      id: "poster-3",
      src: "Film%20Poster/MV5BNGY1YTBiMWMtZDRjNi00ZWE2LWJiZDgtZWY3Y2YzMDVlMzg5XkEyXkFqcGc@._V1_.jpg",
      type: "image"
    },
    {
      id: "poster-4",
      src: "Film%20Poster/MV5BZDI2MzQyOGMtY2FiYy00NDgzLWExOTYtZGIwOWU3YTI3MTU5XkEyXkFqcGc@._V1_.jpg",
      type: "image"
    },
    {
      id: "poster-5",
      src: "Film%20Poster/28225b01-251d-4286-bf57-83d7f81e9934.jpeg",
      type: "image"
    },
    {
      id: "poster-6",
      src: "Film%20Poster/51164323da3ff999e2cd255aefca41130cdfccd7eb8936031e50ffffb8362667._SX1080_FMjpg_.jpg",
      type: "image"
    },
    {
      id: "poster-7",
      src: "Film%20Poster/7627f499-e6a7-41b3-992f-71afea582947.jpeg",
      type: "image"
    },
    {
      id: "poster-8",
      src: "Film%20Poster/9c676826-afd3-412b-b5fa-32b89f75f789.jpeg",
      type: "image"
    },
    {
      id: "poster-9",
      src: "Film%20Poster/bf87b3be-9c2b-4c72-9991-cbec294b33a7.jpeg",
      type: "image"
    },
    {
      id: "poster-10",
      src: "Film%20Poster/images.jpeg",
      type: "image"
    }
  ],

  filmography: [
    {
      index: "01",
      title: "SINGLEHOOD (TV SERIES)",
      studio: "Watcho / Dish TV Original Show",
      scope: "Original Web Series • Multi-Camera",
      role: "Producer & Creative Director"
    },
    {
      index: "02",
      title: "RAID (2018)",
      studio: "T-Series • Rs. 290 Cr Box Office",
      scope: "Ajay Devgn • Ileana D'Cruz",
      role: "Content Producer / EPK"
    },
    {
      index: "03",
      title: "BHUJ: THE PRIDE OF INDIA (2021)",
      studio: "Disney+ Hotstar • T-Series",
      scope: "Ajay Devgn, Sanjay Dutt, Sonakshi Sinha",
      role: "Content Producer / EPK"
    },
    {
      index: "04",
      title: "INDIA'S MOST WANTED (2019)",
      studio: "Fox Star Studios • Raj Kumar Gupta",
      scope: "Arjun Kapoor",
      role: "Lead Content Producer"
    },
    {
      index: "05",
      title: "MARD KO DARD NAHI HOTA (2018)",
      studio: "RSVP Movies • TIFF Midnight Madness Winner",
      scope: "Abhimanyu Dassani, Radhika Madan",
      role: "Content Producer"
    },
    {
      index: "06",
      title: "PALTAN (2018)",
      studio: "J.P. Dutta Films • Zee Music",
      scope: "Jackie Shroff, Arjun Rampal, Sonu Sood",
      role: "Content Producer"
    },
    {
      index: "07",
      title: "OPERATION PARINDEY (2020)",
      studio: "ZEE5 Original Feature Film",
      scope: "Amit Sadh, Rahul Dev • Sanjay Gadhvi",
      role: "Content Producer"
    },
    {
      index: "08",
      title: "CHASANI (2019)",
      studio: "Gujarati Feature Film",
      scope: "Manoj Joshi, Sejal Shah",
      role: "Associate Producer"
    },
    {
      index: "09",
      title: "WOH BHI DIN THE",
      studio: "JA Entertainment (John Abraham) • Rel. 2024",
      scope: "Rohit Saraf, Adarsh Gourav, Sanjana Sanghi",
      role: "Assistant Director"
    },
    {
      index: "10",
      title: "BADE ACCHE LAGTE HAI & TVCS",
      studio: "Sony TV • National Commercials (2013–2016)",
      scope: "Balaji Telefilms / National Broadcast",
      role: "Assistant Director"
    }
  ],

  skills: [
    {
      index: "01",
      category: "EXECUTION",
      title: "PRODUCTION MANAGEMENT",
      description: "Full brief-to-final-delivery lifecycle management across live sets, international crews, multi-location logistics, and strict deadline deliverables."
    },
    {
      index: "02",
      category: "FINANCIAL",
      title: "BUDGET MASTERY (ZERO OVERRUNS)",
      description: "4-year pristine track record with Tokyo corporate — zero cost overruns, rigorous line-item accounting, and uncompromising fiscal discipline."
    },
    {
      index: "03",
      category: "DIRECTING",
      title: "DIRECTION & EPK DOCUMENTARY",
      description: "Pre-production storyboarding to final cut. Actor directing, high-profile celebrity handling (Ajay Devgn, Arjun Kapoor, Amit Sadh), and promotional making."
    },
    {
      index: "04",
      category: "CAMERA & LIGHTING",
      title: "CINEMATOGRAPHY & STILLS",
      description: "DOP camera operations, lighting setups for high fashion (L'Oréal, Tanishq), commercial ad stills for Flipkart/Amazon, and on-set documentary framing."
    },
    {
      index: "05",
      category: "POST-PRODUCTION",
      title: "EDITING & COLOR GRADING",
      description: "Advanced proficiency across DaVinci Resolve, Adobe Premiere Pro, and Final Cut Pro for rhythm-driven edits, sound design, and color pipelines."
    },
    {
      index: "06",
      category: "FUTURE PIPELINE",
      title: "AI & SYNTHETIC VIDEO WORKFLOWS",
      description: "Next-gen generative AI prompting and motion pipelines utilizing Runway Gen-3, Pika, Midjourney, and HeyGen for rapid prototyping and synthetic visuals."
    }
  ]
};

// Export for ES modules and CommonJS environments if applicable
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}

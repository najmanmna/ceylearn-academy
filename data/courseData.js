export const allCourses = [
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "diploma-in-digital-marketing", // The unique ID for the URL
    title: "Diploma in Digital Marketing",
    summary:
      "Learn SEO, SEM, and social media strategies to drive growth for real-world clients.",
    cardImage: "/courses/digital-marketing.png",
    category: "Technology & IT", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/digital-marketing-header.jpg", // A wider banner for the page
    longDescription:
      "This comprehensive 8-week diploma covers everything you need to become a job-ready digital marketer. We dive deep into SEO, paid advertising, content marketing, and analytics, focusing on hands-on projects you can add to your portfolio.",
    duration: "8 Weeks",
    level: "Intermediate",
    whatYouWillLearn: [
      "Master on-page and off-page SEO",
      "Launch & manage Google Ad campaigns",
      "Develop a content marketing strategy",
      "Analyze website traffic with Google Analytics",
    ],
    modules: [
      {
        title: "Module 1: Introduction to Digital Marketing",
        description: "Understanding the digital ecosystem and customer journey.",
      },
      {
        title: "Module 2: Search Engine Optimization (SEO)",
        description: "Keywords, on-page, off-page, and technical SEO.",
      },
      {
        title: "Module 3: Paid Advertising (SEM & Social)",
        description: "Running campaigns on Google, Facebook, and Instagram.",
      },
    ],
    instructor: {
      name: "Jane Doe",
      bio: "Jane is a digital marketing consultant with 10+ years of experience helping brands grow.",
      image: "/courses/digital-marketing.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "certificate-in-graphic-design",
    title: "Certificate in Graphic Design",
    summary:
      "Master typography, color theory, and layout to build a stunning design portfolio.",
    cardImage: "/courses/graphic-design-course.png",
    category: "Design", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/graphic-design-header.jpg",
    longDescription:
      "Our 6-week certificate program teaches you the fundamental principles of graphic design. You'll work with industry-standard tools like Adobe Photoshop, Illustrator, and Figma to create 5 real-world projects.",
    duration: "6 Weeks",
    level: "Beginner",
    whatYouWillLearn: [
      "Design principles (Color, Typography, Layout)",
      "How to use Adobe Photoshop & Illustrator",
      "Creating logos and brand identities",
      "UI/UX design fundamentals with Figma",
    ],
    modules: [
      {
        title: "Module 1: Design Fundamentals",
        description: "Color theory, typography, and composition.",
      },
      {
        title: "Module 2: Adobe Photoshop",
        description: "Photo manipulation and digital art.",
      },
      {
        title: "Module 3: Adobe Illustrator",
        description: "Vector art, logos, and icons.",
      },
    ],
    instructor: {
      name: "Mark Johnson",
      bio: "Mark is a freelance brand designer and illustrator with a passion for teaching.",
      image: "/images/instructors/mark-johnson.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "certificate-in-mobile-photography",
    title: "Certificate in Mobile Photography",
    summary:
      "Learn to take and edit professional photos using just your smartphone.",
    cardImage: "/courses/mobile-photography.png",
    category: "Creative Arts", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/mobile-photography-header.jpg",
    longDescription:
      "This 4-week course unlocks the power of your phone's camera. We'll cover composition, lighting, editing apps, and how to create stunning images for social media or personal projects.",
    duration: "4 Weeks",
    level: "Beginner",
    whatYouWillLearn: [
      "Master composition and lighting techniques",
      "Edit photos with popular apps (e.g., Lightroom Mobile)",
      "Shoot in various styles (portraits, landscape, product)",
      "Build a compelling Instagram portfolio",
    ],
    modules: [
      {
        title: "Module 1: Camera Fundamentals",
        description: "Understanding your phone's camera settings.",
      },
      {
        title: "Module 2: Composition & Lighting",
        description: "The art of framing a great shot.",
      },
      {
        title: "Module 3: Mobile Editing",
        description: "Post-processing with mobile apps.",
      },
    ],
    instructor: {
      name: "Anil Perera",
      bio: "Anil is a professional photographer specializing in mobile-first content creation.",
      image: "/images/instructors/anil-perera.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "certificate-in-ms-office",
    title: "Certificate in MS Office",
    summary:
      "Master Word, Excel, and PowerPoint to boost your productivity in any office environment.",
    cardImage: "/courses/ms-office.png",
    category: "Technology & IT", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/ms-office-header.jpg",
    longDescription:
      "Become an office superstar. This 3-week certificate focuses on the essential skills in Microsoft Office. You'll learn to create professional documents, build insightful spreadsheets, and deliver engaging presentations.",
    duration: "3 Weeks",
    level: "All Levels",
    whatYouWillLearn: [
      "Advanced formatting in Microsoft Word",
      "Formulas, VLOOKUP, and Pivot Tables in Excel",
      "Animation and transitions in PowerPoint",
      "Efficiently manage data and reports",
    ],
    modules: [
      {
        title: "Module 1: Microsoft Word",
        description: "Professional document creation and formatting.",
      },
      {
        title: "Module 2: Microsoft Excel",
        description: "From formulas to data analysis.",
      },
      {
        title: "Module 3: Microsoft PowerPoint",
        description: "Creating impactful presentations.",
      },
    ],
    instructor: {
      name: "David Lee",
      bio: "David is a certified Microsoft Trainer with 15 years of corporate training experience.",
      image: "/images/instructors/david-lee.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "diploma-in-graphic-design-advertising",
    title: "Diploma in Graphic Design and Advertising",
    summary:
      "Go beyond design. Learn to create visuals that solve business problems and drive campaigns.",
    cardImage: "/courses/graphic-design-ad.png",
    category: "Design", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/graphic-adv-header.jpg",
    longDescription:
      "This advanced 12-week diploma bridges the gap between design and marketing. You'll master Adobe Creative Suite, but also learn campaign strategy, copywriting, and how to create cohesive advertising materials from print to digital.",
    duration: "12 Weeks",
    level: "Intermediate",
    whatYouWillLearn: [
      "Advanced Adobe Illustrator & Photoshop",
      "Advertising campaign concepts and strategy",
      "Brand identity and logo systems",
      "Portfolio development for ad agencies",
    ],
    modules: [
      {
        title: "Module 1: Advanced Design Principles",
        description: "Typography, color, and layout for advertising.",
      },
      {
        title: "Module 2: Campaign Strategy",
        description: "Understanding the brief and target audience.",
      },
      {
        title: "Module 3: Executing the Campaign",
        description: "Creating print, digital, and social ads.",
      },
    ],
    instructor: {
      name: "Mark Johnson",
      bio: "Mark is a freelance brand designer and illustrator with a passion for teaching.",
      image: "/images/instructors/mark-johnson.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "certificate-in-mehandi-artistry",
    title: "Certificate in Mehandi Artistry",
    summary:
      "Master the art of traditional and modern henna design, from cone preparation to client work.",
    cardImage: "/courses/henna.png",
    category: "Creative Arts", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/courses/henna.png",
    longDescription:
      "Turn your passion for henna into a profession. This 5-week course covers everything from making the perfect henna paste to mastering intricate bridal designs and simple, modern motifs.",
    duration: "5 Weeks",
    level: "Beginner",
    whatYouWillLearn: [
      "Proper cone making and handling",
      "Traditional Indian & Arabic designs",
      "Modern and minimalist motifs",
      "Tips for starting your own henna business",
    ],
    modules: [
      {
        title: "Module 1: The Basics",
        description: "Paste mixing, cone control, and basic elements.",
      },
      {
        title: "Module 2: Bridal & Traditional",
        description: "Mastering complex, full-hand designs.",
      },
      {
        title: "Module 3: Modern & Business",
        description: "White henna, glitter, and client management.",
      },
    ],
    instructor: {
      name: "Fathima Rizvi",
      bio: "Fathima is a renowned Mehandi artist with over 8 years of bridal experience.",
      image: "/images/instructors/fathima-rizvi.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "certificate-in-craft-event-planning",
    title: "Certificate in Craft and Event Planning",
    summary:
      "Learn to design, craft, and manage stunning events, from custom decor to flawless execution.",
    cardImage: "/courses/event-planning.png",
    category: "Creative Arts", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/courses/event-planning.jpg",
    longDescription:
      "This 6-week course combines creativity with logistics. You'll learn to plan events like weddings and parties, and also how to create the custom craft elements (like centerpieces and backdrops) that make them unique.",
    duration: "6 Weeks",
    level: "All Levels",
    whatYouWillLearn: [
      "Event planning from A to Z",
      "Budgeting and vendor management",
      "DIY decor and craft techniques",
      "Day-of coordination and execution",
    ],
    modules: [
      {
        title: "Module 1: Event Logistics",
        description: "Planning, timelines, and budgets.",
      },
      {
        title: "Module 2: Creative Crafting",
        description: "Creating custom decor elements.",
      },
      {
        title: "Module 3: The Event Business",
        description: "Finding clients and running an event.",
      },
    ],
    instructor: {
      name: "Aisha Mohamed",
      bio: "Aisha runs a successful event planning and decor business in Colombo.",
      image: "/images/instructors/aisha-mohamed.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "certificate-in-bridal-makeup",
    title: "Certificate in Bridal Makeup",
    summary:
      "Become a professional makeup artist specializing in bridal and special occasion looks.",
    cardImage: "/courses/bridal.png",
    category: "Creative Arts", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/bridal-makeup-header.jpg",
    longDescription:
      "This intensive 4-week course provides hands-on training in bridal makeup. You'll learn skin prep, color matching, and techniques for creating flawless, long-lasting looks for brides and bridal parties.",
    duration: "4 Weeks",
    level: "Beginner",
    whatYouWillLearn: [
      "Skincare and skin prep for makeup",
      "Color theory and foundation matching",
      "Techniques for eye, lip, and contour",
      "Business and hygiene standards",
    ],
    modules: [
      {
        title: "Module 1: The Bridal Base",
        description: "Creating a flawless, long-lasting canvas.",
      },
      {
        title: "Module 2: Bridal Eye & Lip",
        description: "Smokey, classic, and glamorous eye looks.",
      },
      {
        title: "Module 3: The Business",
        description: "Building your kit and finding clients.",
      },
    ],
    instructor: {
      name: "Sarah Khan",
      bio: "Sarah is a professional MUA with a portfolio of over 100 brides.",
      image: "/images/instructors/sarah-khan.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "diploma-in-henna-mixology",
    title: "Diploma in Henna and Mixology",
    summary:
      "An advanced diploma exploring complex henna designs and the art of mixing 'jagua' and other mediums.",
    cardImage: "/courses/henna-mixology.png",
    category: "Creative Arts", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/henna-mixology-header.jpg",
    longDescription:
      "Go beyond basic henna. This 8-week diploma is for artists who want to stand out. We explore 'jagua' henna for realistic tattoo-like designs, white henna, glitter, and advanced mixology techniques to create unique, signature styles.",
    duration: "8 Weeks",
    level: "Intermediate",
    whatYouWillLearn: [
      "Advanced portrait and realism henna",
      "Mixing and applying 'jagua' gel",
      "Creating and using white henna",
      "Developing a unique artistic style",
    ],
    modules: [
      {
        title: "Module 1: Advanced Henna Art",
        description: "Detailed portraiture and shading.",
      },
      {
        title: "Module 2: Jagua & Modern Mixes",
        description: "Working with new mediums for temporary tattoos.",
      },
      {
        title: "Module 3: Signature Style",
        description: "Building your brand as an artist.",
      },
    ],
    instructor: {
      name: "Fathima Rizvi",
      bio: "Fathima is a renowned Mehandi artist with over 8 years of bridal experience.",
      image: "/images/instructors/fathima-rizvi.png",
    },
  },
  {
    // --- (Schema 1) Data for Course Card ---
    slug: "diploma-in-cake-making-decoration",
    title: "Diploma in Cake making and Decoration",
    summary:
      "From baking fundamentals to advanced sugarcraft, become a professional cake artist.",
    cardImage: "/courses/cake.png",
    category: "Creative Arts", // Added category

    // --- (Schema 2) Data for Course Page ---
    headerImage: "/images/courses/cake-diploma-header.jpg",
    longDescription:
      "This 10-week diploma is a complete guide to professional cake artistry. You'll learn baking science, how to make various icings, and master decoration techniques from simple piping to complex sugar flowers and tiered wedding cakes.",
    duration: "10 Weeks",
    level: "All Levels",
    whatYouWillLearn: [
      "Baking science and perfect cake recipes",
      "Buttercream and fondant techniques",
      "Piping, stacking, and internal support",
      "Sugar flower and figurine modeling",
    ],
    modules: [
      {
        title: "Module 1: Baking & Icing",
        description: "The foundation of a perfect cake.",
      },
      {
        title: "Module 2: Basic Decoration",
        description: "Piping, borders, and fondant covering.",
      },
      {
        title: "Module 3: Advanced Sugarcraft",
        description: "Tiered cakes, sugar flowers, and modeling.",
      },
    ],
    instructor: {
      name: "Nadiya Silva",
      bio: "Nadiya is an award-winning cake decorator and owner of a boutique bakery.",
      image: "/images/instructors/nadiya-silva.png",
    },
  },
];

// Define the categories in the order you want them to appear
export const categories = ["Technology & IT", "Design", "Creative Arts"];


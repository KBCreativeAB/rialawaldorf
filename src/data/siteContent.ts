import {
  Heart,
  Sun,
  Leaf,
  Home,
  Users,
  Clock,
  Phone,
  Mail,
  MapPin,
  Utensils,
  BookOpen,
  Baby,
  Shield,
} from "lucide-react";

export const siteContent = {
  meta: {
    siteName: "Riala Waldorfförskola",
    tagline: "En trygg plats för lek och lärande sedan 1994",
    phone: "0176-263516",
    rectorMobile: "070 558 32 11",
    email: "info@rialawaldorf.se",
    address: "Riala Kyrkväg 6, 761 73 Riala",
  },

  navigation: [
    { label: "Hem", href: "#hem" },
    { label: "Maten", href: "#maten" },
    { label: "Inskolning", href: "#inskolning" },
    { label: "Om oss", href: "#om-oss" },
    { label: "Praktiskt", href: "#praktiskt" },
    { label: "Galleri", href: "#galleri" },
    { label: "Kontakt", href: "#kontakt" },
  ],

  hero: {
    title: "Välkommen till Riala Waldorfförskola",
    subtitle: "En trygg och kärleksfull miljö där barn får växa i sin egen takt sedan 1994",
    highlights: ["Personal utbildad i Barn-HLR", "Hemlik och trygg miljö", "Vegetarisk mat", "Waldorfpedagogik"],
    ctaText: "Intresseanmälan",
    secondaryCtaText: "Läs mer",
  },

  about: {
    title: "Om vår förskola",
    intro:
      "Riala Waldorfförskola är en liten, hemlik förskola belägen i natursköna Riala. Sedan 1994 har vi välkomnat barn och familjer till vår varma och trygga miljö.",
    features: [
      {
        icon: "Shield",
        title: "Trygghet först",
        description: "Hos oss utbildas personalen kontinuerligt i Barn HLR (hjärt-lung räddning) för barnens trygghet.",
      },
      {
        icon: "Home",
        title: "Hemlik atmosfär",
        description:
          "Vi vill ge våra barn en trygg barndom där leken står i centrum och barnen utvecklar sin motoriska förmåga genom daglig utelek",
      },
      {
        icon: "Leaf",
        title: "Nära naturen",
        description:
          "Vår förskola ligger mitt i naturen med skog och ängar som vår utelekplats. Vi äter ekologisk, vegetarisk mat som tillagas hos oss.",
      },
    ],
  },

  pedagogy: {
    title: "Vår pedagogik",
    intro:
      "Waldorfpedagogiken ser till hela barnet – huvud, hjärta och händer. Vi tror på lekens kraft och rytmens betydelse för barnets utveckling.",
    sections: [
      {
        icon: "Sun",
        title: "Rytm och rutiner",
        description:
          "Dagen följer en trygg rytm med återkommande aktiviteter som ger barnen stabilitet och förutsägbarhet. Veckan har sin egen rytm med olika teman för varje dag.",
      },
      {
        icon: "Heart",
        title: "Fri lek",
        description:
          "Den fria leken är central i vår verksamhet. Genom leken utvecklar barnen fantasi, sociala färdigheter och problemlösningsförmåga på ett naturligt sätt.",
      },
      {
        icon: "Leaf",
        title: "Naturen som läromiljö",
        description:
          "Vi tillbringar mycket tid utomhus oavsett väder. Naturen erbjuder oändliga möjligheter till utforskande och lärande.",
      },
      {
        icon: "Users",
        title: "Skapande verksamhet",
        description:
          "Målning, modellering, sång och sagostunder är naturliga delar av vår dag. Kreativitet och konstnärligt uttryck uppmuntras.",
      },
    ],
  },

  food: {
    title: "Maten hos oss",
    intro: "God och näringsrik mat är en viktig del av dagen. Vår mat lagas på plats i vårt eget kök.",
    highlights: [
      {
        icon: "Leaf",
        title: "Ekologiskt & Vegetariskt",
        description: "Vi serverar ekologisk och i huvudsak vegetarisk kost tillagad från grunden.",
      },
      {
        icon: "Utensils",
        title: "Lagat på plats",
        description: "All mat lagas i vårt eget kök med kärlek och omtanke för barnens hälsa.",
      },
      {
        icon: "Heart",
        title: "Gemensamma måltider",
        description: "Måltiderna är sociala stunder där vi äter tillsammans och lär oss bordsskick.",
      },
    ],
    meals: [
      { time: "08:30", meal: "Frukost" },
      { time: "11:30", meal: "Lunch" },
      { time: "14:30", meal: "Mellanmål" },
    ],
  },

  enrollment: {
    title: "Inskolning",
    intro:
      "Inskolningen är en viktig period som lägger grunden för barnets trygghet hos oss. Vi tar god tid på oss för att varje barn ska känna sig hemma.",
    duration: "2 veckor",
    steps: [
      {
        step: 1,
        title: "Första kontakten",
        description: "Vi bjuder in till ett första besök där ni får se förskolan och träffa personalen.",
      },
      {
        step: 2,
        title: "Vecka 1",
        description:
          "Korta besök tillsammans med förälder. Barnet lär känna miljön, pedagogerna och de andra barnen i trygg närvaro av sin förälder.",
      },
      {
        step: 3,
        title: "Vecka 2",
        description: "Gradvis längre stunder utan förälder. Vi anpassar tempot helt efter barnets behov.",
      },
      {
        step: 4,
        title: "Uppföljning",
        description: "Kontinuerlig dialog med föräldrarna under hela inskolningsperioden och därefter.",
      },
    ],
    schedule: {
      title: "Veckoschema",
      days: [
        { day: "Måndag", theme: "Målning", activities: " kl. 10.00-11.00 ute" },
        { day: "Tisdag", theme: "Bakning", activities: "kl. 10.00-11.00 ute" },
        { day: "Onsdag", theme: "Eurytmi", activities: "kl. 9.30-10.30 inne med samling sedan utelek" },
        { day: "Torsdag", theme: "Modellering", activities: "kl. 9.00-10.30" },
        { day: "Fredag", theme: "Städdag", activities: "kl. 9.00-11.00" },
      ],
    },
  },

  board: {
    title: "Styrelsen",
    intro:
      "Riala Waldorfförskola drivs som ett personalkooperativ. Styrelsen består av engagerad personal och föräldrar.",
    members: [
      {
        name: "Katja Lundberg",
        role: "Tillförordnad rektor/Ordförande",
        description: "Ansvarar för styrelsens arbete och samordning.",
      },
      {
        name: "Susanne Risom",
        role: "Ledamot",
        description: "Aktiv i föreningens dagliga arbete.",
      },
      {
        name: "Ann Olsson",
        role: "Ledamot",
        description: "Bidrar med engagemang och erfarenhet.",
      },
      {
        name: "Sanna Olsson",
        role: "Ledamot",
        description: "Engagerad i föreningens verksamhet.",
      },
    ],
  },

  practical: {
    title: "Praktisk information",
    sections: [
      {
        id: "hitta-hit",
        title: "Hitta hit",
        content:
          "Riala Waldorfförskola ligger i hjärtat av Riala, en liten ort i Norrtälje kommun. Vi har goda parkeringsmöjligheter och ligger nära naturen.",
      },
      {
        id: "oppettider",
        title: "Öppettider",
        content: "Förskolan är öppen måndag-fredag kl. 6:00-18:00. Vi följer Norrtälje kommuns lovschema.",
      },
      {
        id: "klagomal",
        title: "Klagomål",
        content:
          "Vi välkomnar återkoppling och strävar alltid efter att förbättra vår verksamhet. Kontakta rektor om du har synpunkter eller klagomål.",
      },
    ],
  },

  contact: {
    title: "Kontakta oss",
    intro: "Har du frågor eller vill anmäla intresse för en plats? Tveka inte att höra av dig!",
    methods: [
      {
        icon: "Phone",
        label: "Telefon",
        value: "0176-263516",
        description: "Förskolan",
      },
      {
        icon: "Phone",
        label: "Rektor mobil",
        value: "070 558 32 11",
        description: "För brådskande ärenden",
      },
      {
        icon: "MapPin",
        label: "Adress",
        value: "Riala Kyrkväg 6",
        description: "761 73 Riala",
      },
    ],
  },

  form: {
    title: "Kontaktformulär",
    fields: [
      { name: "parentName", label: "Vårdnadshavares namn", type: "text", required: true },
      { name: "email", label: "E-postadress", type: "email", required: true },
      { name: "phone", label: "Telefon", type: "tel", required: true },
      { name: "childName", label: "Barnets namn", type: "text", required: true },
      { name: "childBirthdate", label: "Barnets födelsedatum", type: "date", required: true },
      { name: "desiredStart", label: "Önskat startdatum", type: "date", required: true },
      { name: "message", label: "Meddelande", type: "textarea", required: false },
    ],
    submitText: "Skicka intresseanmälan",
  },

  footer: {
    copyright: "© 2024 Riala Waldorfförskola. Alla rättigheter förbehållna.",
    links: [
      { label: "Integritetspolicy", href: "#" },
      { label: "Tillgänglighet", href: "#" },
    ],
  },
};

export type SiteContent = typeof siteContent;

export const siteConfig = {
  brand: {
    name: "Aurum",
    tagline: "Premium handstitched leather wallets and cardholders made in East London. Vegeta",
    domain: "aurum.co.uk",
  },
  style: "luxury",
  nav: {
    links: ["About", "Features", "Contact"],
  },
  sections: {
    hero: {
      headline: "Handstitched Leather Wallets from East London",
      subheadline: "Premium handstitched leather wallets and cardholders made in East London by one craftsman.",
      body: "No machines. No shortcuts. Each Aurum piece takes a full day to create using vegetable-tanned hide that improves with every use.",
      cta_primary: "Shop Wallets",
      cta_secondary: "See the Process",
      image: "",
    },
    features: {
      heading: "Handmade in East London",
      subheading: "Premium handstitched leather wallets and cardholders made in East London by one craftsman.",
      items: [
        {
          title: "One Day Each",
          description: "Every Aurum wallet takes a full day to complete. No rushing, no shortcuts, no machines.",
          icon: "",
        },
        {
          title: "Vegetable Tanned Hide",
          description: "Italian leather that develops character with age. Patina deepens over years, not months.",
          icon: "",
        },
        {
          title: "Single Craftsman Made",
          description: "Made entirely by one person in East London. No factory lines, no batch production.",
          icon: "",
        },
      ],
    },
    social_proof: {
      heading: "What Our Customers Say",
      items: [
        {
          quote: "My Aurum cardholder has developed the most beautiful patina after eighteen months. The handstitching in East London shows in every detail.",
          author: "Marcus T.",
          role: "Investment banker from Surrey",
        },
        {
          quote: "Premium handstitched leather wallets made in East London by one craftsperson? Worth every penny and the three-week wait.",
          author: "David K.",
          role: "Architect who values craftsmanship",
        },
        {
          quote: "The vegetable-tanned hide gets better with age. My wallet looks more distinguished than when I first received it.",
          author: "James R.",
          role: "Barrister using it daily",
        },
      ],
    },
    cta: {
      heading: "Order Your Handstitched Aurum Wallet Today",
      body: "Premium handstitched leather wallets and cardholders made in East London. Each piece crafted individually by hand over a full day.",
      button: "Shop Aurum Wallets",
      subtext: "Handmade in East London. No machines, no shortcuts.",
    },
    footer: {
      tagline: "Premium handstitched leather wallets and cardholders made in East London.",
      contact: {
        phone: "",
        email: "",
        address: "East London",
      },
      legal: "",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;

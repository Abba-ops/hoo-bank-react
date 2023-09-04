import {
  people01,
  people02,
  people03,
  facebook,
  instagram,
  linkedin,
  twitter,
  airbnb,
  binance,
  coinbase,
  dropbox,
  send,
  shield,
  star,
} from "../assets";

export const navLinks = [
  {
    id: crypto.randomUUID(),
    title: "Home",
  },
  {
    id: crypto.randomUUID(),
    title: "Features",
  },
  {
    id: crypto.randomUUID(),
    title: "Product",
  },
  {
    id: crypto.randomUUID(),
    title: "Clients",
  },
];

export const features = [
  {
    id: crypto.randomUUID(),
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes.",
  },
  {
    id: crypto.randomUUID(),
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps to make sure your information and transactions are secure.",
  },
  {
    id: crypto.randomUUID(),
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: crypto.randomUUID(),
    content:
      "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: crypto.randomUUID(),
    content:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: crypto.randomUUID(),
    content:
      "It is usually people in the money business, finance, and international trade that are really rich.",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
];

export const stats = [
  {
    id: crypto.randomUUID(),
    title: "User Active",
    value: "3800+",
  },
  {
    id: crypto.randomUUID(),
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: crypto.randomUUID(),
    title: "Transaction",
    value: "$230M+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "/",
      },
      {
        name: "How it Works",
        link: "/",
      },
      {
        name: "Create",
        link: "/",
      },
      {
        name: "Explore",
        link: "/",
      },
      {
        name: "Terms & Services",
        link: "/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "/",
      },
      {
        name: "Partners",
        link: "/",
      },
      {
        name: "Suggestions",
        link: "/",
      },
      {
        name: "Blog",
        link: "/",
      },
      {
        name: "Newsletters",
        link: "/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "/",
      },
      {
        name: "Become a Partner",
        link: "/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: crypto.randomUUID(),
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: crypto.randomUUID(),
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: crypto.randomUUID(),
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: crypto.randomUUID(),
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: crypto.randomUUID(),
    logo: airbnb,
  },
  {
    id: crypto.randomUUID(),
    logo: binance,
  },
  {
    id: crypto.randomUUID(),
    logo: coinbase,
  },
  {
    id: crypto.randomUUID(),
    logo: dropbox,
  },
];

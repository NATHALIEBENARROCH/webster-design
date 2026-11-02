// All the editable content for the site lives here.
// Add, remove or reorder projects and the constellation updates itself.

export const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/nathalie-benarroch" },
  { label: "Instagram", href: "https://instagram.com/nathalie_benarroch" },
  { label: "Behance", href: "https://www.behance.net/nathalieben" },
  { label: "Facebook", href: "https://facebook.com/nathalie.benarroch.1" },
];

// Optional: put your email here (e.g. "hello@thewebsterdesign.com")
// and the big contact button will open an email instead of LinkedIn.
export const CONTACT_EMAIL = "";

// x / y are positions (in %) inside the constellation sky.
export const PROJECTS = [
  { title: "DBMREFLEX", href: "https://www.behance.net/gallery/235627131/DBMREFLEX", x: 8, y: 30 },
  { title: "The ReImagination Workshop", href: "https://www.behance.net/gallery/222663165/The-ReImagination-Workshop", x: 20, y: 12 },
  { title: "Etickets.ca Rebrand", href: "https://www.behance.net/gallery/67594081/ETICKETSCA-REBRAND", x: 31, y: 42 },
  { title: "Cann.Edenn", href: "https://www.behance.net/gallery/87558623/CannEdenn", x: 22, y: 72 },
  { title: "Drive-thru-closet App", href: "https://www.behance.net/gallery/218507671/Drive-thru-closet-app", x: 42, y: 84 },
  { title: "Cann & Herb", href: "https://www.behance.net/gallery/93517265/Cann-Herb", x: 49, y: 54 },
  { title: "JDLabs.co Rebrand", href: "https://www.behance.net/gallery/113667417/REBRANDING-JDLABSCO", x: 54, y: 20 },
  { title: "Elna Medical", href: "https://www.behance.net/gallery/31245197/ELNA-MEDICAL-TAILORED-HEALTHCARE", x: 67, y: 38 },
  { title: "Ice.com", href: "https://www.behance.net/gallery/4189315/Icecom", x: 64, y: 76 },
  { title: "Diamond.com", href: "https://www.behance.net/gallery/4189499/Diamondcom", x: 80, y: 62 },
  { title: "Inukt Ice Wine", href: "https://www.behance.net/gallery/32010843/Inukt-Ice-Wine", x: 82, y: 22 },
  { title: "Inukt.com", href: "https://www.behance.net/gallery/10167653/Inuktcom", x: 93, y: 44 },
];

// Which stars get joined by a line (indexes into PROJECTS).
export const CONSTELLATION_LINES = [
  [0, 1], [1, 2], [0, 2], [2, 3], [3, 4], [4, 5], [2, 5],
  [5, 6], [6, 7], [5, 7], [7, 8], [8, 9], [7, 9], [7, 10], [10, 11], [9, 11],
];

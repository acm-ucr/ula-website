interface navbarItem {
  name: string;
  link: string;
}

const navbarItems: navbarItem[] = [
  { name: "HOME", link: "/" },
  { name: "OVERVIEW", link: "/overview" },
  { name: "CALENDARS", link: "/calendar" },
  { name: "ULAs", link: "/ula" },
];

export default navbarItems;

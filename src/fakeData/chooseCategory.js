function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets/PropertyCategory", false, /\.(png|jpe?g|svg)$/)
);

export const choosesCategory = [
  {
    id: 1,
    image: images["family.png"],
    title: "Family",
  },
  {
    id: 2,
    image: images["bachelor.png"],
    title: "Bachelor",
  },
  {
    id: 3,
    image: images["officeSpace.png"],
    title: "Office-Space",
  },
  {
    id: 4,
    image: images["mess-hostel.png"],
    title: "Mess/Hostel",
  },
  {
    id: 5,
    image: images["erfhyjk.png"],
    title: "Sublet",
  },
];

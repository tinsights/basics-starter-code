function selectDishes(preference) {
  let dishes = [];
  let shift = preference === "rice" ? 0 : 3;
  dishes[0] = Math.round(Math.random() * 3) + shift;
  do {
    dishes[1] = Math.round(Math.random() * 3) + shift;
  } while (dishes[0] === dishes[1]);
  return dishes;
}

var main = function (input) {
  if (input === "") {
    return "Please choose a dish!";
  }
  const dishes = [
    {
      name: "Nasi Lemak",
      description:
        "aromatic rice infused with coconut milk and pandan leaves, eaten with deep-fried chicken wings, served with crunchy anchovies and peanuts",
      spicy: true,
    },
    {
      name: "Chicken Rice",
      description:
        "succulent steamed white chicken cut into bite-size pieces and served on fragrant rice, served with light soy sauce",
      spicy: true,
    },
    {
      name: "Bak Kut Teh",
      description: "pork ribs stewed with a mixture of fragrant herbs and spices",
      spicy: false,
    },
    {
      name: "Roti Prata",
      description: "south-Indian flat bread flavoured with ghee served with fish and mutton curry",
      spicy: false,
    },
    {
      name: "Hokkien Mee",
      description:
        "thick yellow noodles fried in a rich prawn and pork stock and served with chilli and lime on the side",
      spicy: true,
    },
    {
      name: "Laksa",
      description:
        "thick wheat noodles or rice vermicelli with prawn, served in spicy soup based on rich and spicy curry coconut milk",
      spicy: true,
    },
    {
      name: "Beef Hor Fun",
      description:
        "a classic cantonese dish made with chewy flat ho fun rice noodles and tender flavourful beef slices",
      spicy: false,
    },
  ];

  let selection = selectDishes(input);
  let sambal = dishes[selection[0]].spicy || dishes[selection[1]].spicy;
  let display = sambal ? "inline" : "none";
  // prettier-ignore
  let result = `
  Uncle has prepared a selection of dishes just for you!
  <br><br>
  To begin, ${dishes[selection[0]].name}; ${dishes[selection[0]].description}.
  <br><br>
  Your date will be having ${dishes[selection[1]].name}; ${dishes[selection[1]].description}.
  <br><br>
    <span style="display:${display}">Uncle's special sambal will be served on the side.</span>
  <br><br>
  Enjoy! :)`;

  return result;
};

export const getWeeksSpecials = async () => {
  await new Promise((resolve) => setTimeout(resolve, 800));

  const specials = [
    {
      id: 1,
      name: "Greek Salad",
      price: 12.99,
      rating: 4.9,
      prepTime: "15-20 min",
      image: "/images/greek-salad.jpg",
      description:
        "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    },
    {
      id: 2,
      name: "Bruschetta",
      price: 5.99,
      rating: 4.8,
      prepTime: "10-15 min",
      image: "/images/restaurant-food.jpg",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh tomatoes and basil.",
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: 5.0,
      rating: 5.0,
      prepTime: "5-10 min",
      image: "/images/lemon-dessert.jpg",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined. A perfect end to your meal.",
    },
  ];

  return {
    success: true,
    data: specials,
    message: "Week's specials loaded successfully",
  };
};

export default getWeeksSpecials;

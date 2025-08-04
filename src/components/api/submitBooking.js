export const submitBooking = async (bookingData) => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  const { date, time, guests, name, email, phone } = bookingData;

  if (!date || !time || !guests || !name || !email || !phone) {
    return {
      success: false,
      message: "Please fill in all required fields",
    };
  }

  const isSuccessful = Math.random() > 0.1;

  if (isSuccessful) {
    const reservationId = `RES-${Date.now()}`;

    return {
      success: true,
      message: "Reservation booked successfully!",
      reservationId: reservationId,
      details: {
        name: name,
        date: date,
        time: time,
        guests: guests,
      },
    };
  } else {
    return {
      success: false,
      message:
        "Sorry, this time slot is not available. Please try a different time.",
    };
  }
};

export default submitBooking;

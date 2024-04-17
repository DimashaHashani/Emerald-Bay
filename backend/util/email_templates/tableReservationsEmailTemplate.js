const tableReservationsEmailTemplate = (name, reservationId, date, time, tableNo) => {
    return `
        <p>Dear ${name},</p>
        <p>Your table reservation with ID ${reservationId} has been successfully confirmed.</p>
        <p>Here are your Reservation Details : </p>
        <p> • Date: ${date}</p>
        <p> • Time: ${time}</p>
        <p> • Table Number: ${tableNo}</p>
        <p>Thank you for choosing our restaurant. We look forward to creating an unforgettable reservation experience for you.</p>
        <p>Feel free to sprinkle a touch of magic on your reservation by reaching out to our friendly team! Dial 0772120231, if you need to tweak your reservation!</p>
        <p><br/></p>
        <p>Best regards,</p>
        <p>Emerald Bay Restaurant Team.</p>
    `;
};

module.exports = tableReservationsEmailTemplate;
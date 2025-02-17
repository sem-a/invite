const { prisma } = require("../prisma/prisma-client");

const add = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).json({ message: "Заполните обязательные поля!" });
  }

  try {
    const guest = prisma.guest.create({
      data: {
        name,
      },
    });

    res.status(200).json(guest);
  } catch (err) {
    res.status(500).json(err);
  }
};

const get = async () => {
  try {
    const guests = prisma.guest.findMany();

    res.status(200).json(guests);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  add,
  get,
};

const { prisma } = require("../prisma/prisma-client");

/**
 * @route /api/add
 * @method POST
 * @desc добавление гостя
 * @access Public
 */
const add = async (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(400)
      .json({ message: "Заполните все обязательные поля!" });
  }

  try {
    const guest = await prisma.guest.create({
      data: {
        name,
      },
    });

    console.log(guest);

    return res.status(200).json(guest);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

/**
 * @route /api/get
 * @method GET
 * @desc получить всех гостей
 * @access Public
 */
const get = async (req, res) => {
  try {
    const guests = await prisma.guest.findMany();

    return res.status(200).json(guests);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  add,
  get,
};
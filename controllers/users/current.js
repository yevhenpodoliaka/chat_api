export const current = async (req, res) => {
  const { name, email, subscription } = req.user;
  res.json({
    status: "success",
    code: 200,
    data: {
      name,
      email,
      subscription,
    },
  });
};

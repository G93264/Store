exports.getOverview = async (req, res, next) => {
  // res.status(200).json({
  //   data: 'Hey I got it',
  // });
  res.status(200).render('overview');
};

exports.getShop = async (req, res, next) => {
  res.status(200).render('shop');
};

exports.getMyAccount = async (req, res, next) => {
  res.status(200).json({
    data: 'Your account',
  });
};

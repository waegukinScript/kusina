/**
 * GET /blog
 * Blog form page.
 */
exports.getBlog = (req, res) => {
    //const unknownUser = !(req.user);
  
    res.render('blog', {
      title: 'Blog',
      //unknownUser,
    });
  };
  
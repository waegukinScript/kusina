/**
 * GET /blog
 * Blog form page.
 */
exports.getBlogDetails = (req, res) => {
    //const unknownUser = !(req.user);
  
    res.render('blog-details', {
      title: 'Blog Details',
      //unknownUser,
    });
  };
  
const AcademicProfileTagSchema = require('./AcademicProfileTagSchema');
const AcademicProfileCommentSchema = require('./AcademicProfileCommentSchema');

module.exports = (conn) => {
  const AcademicProfileSchema = new conn.Schema({
    createdAt: {
      type: Date,
      default: Date.now,
    },
    tags: [AcademicProfileTagSchema(conn)],
    comments: [AcademicProfileCommentSchema(conn)],
  });

  return AcademicProfileSchema;
};

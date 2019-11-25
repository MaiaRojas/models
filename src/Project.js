module.exports = (conn, ProjectSchema) => {
  const Project = conn.model('Project', ProjectSchema);

  Project.findLatest = function (slug) {
    return (slug)
      ? this.findOne({ slug })
        .sort({ version: -1 })
        .limit(1)
      : this.aggregate([
        { $sort: { slug: 1, version: -1 } },
        {
          $group: {
            _id: '$slug',
            id: { $first: '$_id' },
            slug: { $first: '$slug' },
            name: { $first: '$title' },
            locale: { $first: '$locale' },
            latestVersion: { $first: '$version' },
            versions: { $push: '$version' },
          },
        },
        { $sort: { name: 1 } },
      ])
        .then(docs => docs.map(({ id, ...doc }) => ({ ...doc, _id: id })));
  };

  return Project;
};

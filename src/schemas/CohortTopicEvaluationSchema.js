module.exports = (conn) => {
  const CohortTopicEvaluationSchema = new conn.Schema({
    user: {
      type: conn.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    cohortTopic: {
      type: conn.Schema.Types.ObjectId,
      ref: 'CohortTopic',
      required: true,
    },
    recommendability: {
      type: Number,
      required: true,
    },
    applicability: {
      type: Number,
      required: true,
    },
    learningAppropriability: {
      type: Number,
      required: true,
    },
    uncertaintyAdoptability: {
      type: Number,
      required: true,
    },
    peerLearnability: {
      type: Number,
      required: true,
    },
  });

  CohortTopicEvaluationSchema.index({ user: 1, cohortTopic: 1 }, { unique: true });

  return CohortTopicEvaluationSchema;
};

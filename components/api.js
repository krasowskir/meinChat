const Topics = {
  headlines: [{ title: "Bin ich zu fett?" }, { title: "Wie wird man reich?" }, { title: "Ich hab die große Liebe gefunden." }],
  comments: [
    { id: 1, content: "nein, ich fühle mich wohl in meiner Haut!", author: "Toni K.", topicId: 0 },
    { id: 2, content: "Ich denke, das ist das wichtigste", author: "Richi", topicId: 0 },
    { id: 3, content: "naja, ein paar Pfund könnte ich schon verlieren", author: "Lisa R.", topicId: 0 },
    { id: 4, content: "wer glaubt was?", author: "Janine", topicId: 1 },
    { id: 5, content: "was denkst du dir?", author: "Sandy", topicId: 2 }
  ],
  getTopics: function() {
    return this.headlines;
  },
  getComments: function() {
    return this.comments;
  }
};

export default Topics;

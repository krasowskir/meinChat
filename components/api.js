const Topics = {
  headlines: [{ title: "Bin ich zu fett?" }, { title: "Wie wird man reich?" }, { title: "Ich hab die große Liebe gefunden." }],
  comments: [
    { id: 0, content: "nein, ich fühle mich wohl in meiner Haut!", author: "Toni K." },
    { id: 1, content: "Ich denke, das ist das wichtigste", author: "Richi" },
    { id: 2, content: "naja, ein paar Pfund könnte ich schon verlieren", author: "Lisa R." }
  ],
  getTopics: function() {
    return this.headlines;
  },
  getComments: function() {
    return this.comments;
  }
};

export default Topics;

export default class TopicContext {
  constructor(title, topicId, comments) {
    this.title = title;
    this.topicId = topicId;
    this.comments = new Array();
  }
}

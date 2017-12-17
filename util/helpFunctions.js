export default props => {
  const { comments, type } = props;
  console.log("sorting by " + type);
  console.log("comm: " + comments);
  comments.sort(function(a, b) {
    switch (type) {
      case "alphabet":
        console.log("alphabetic choice...");
        if (a.content.toLowerCase() < b.content.toLowerCase()) return -1;
        if (a.content.toLowerCase() > b.content.toLowerCase()) return 1;
        return 0;
        break;
      case "likes":
        console.log("likey choice...");
        if (parseInt(a.likes) > parseInt(b.likes)) return -1;
        if (parseInt(a.likes) < parseInt(b.likes)) return 1;
        return 0;
        break;
    }
  });

  // comments.forEach((v, i) => {
  //   console.log("nIndex: " + i + "nValue: " + v.content);
  // });
  return comments;
};

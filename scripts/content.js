const taskStatement = document.querySelector("#task-statement");

if (taskStatement) {
  // Create URL
  var url = window.location.href;
  // https://atcoder.jp/contests/abc310/tasks/abc310_a
  var regex = /\/contests\/([^/]+)\/tasks\/([^/]+)/;
  var matches = url.match(regex);
  var contestName = matches[1];
  var problemName = matches[2];
  var destURL = `https://atcoder.jp/contests/${contestName}/submissions?f.LanguageName=Rust&f.Status=AC&f.User=&orderBy=created&f.Task=${problemName}`;

  // Create button
  const button = document.createElement("button");
  button.innerHTML = "AC List";
  button.onclick = () => {
    location.href = destURL;
  };

  // Add button
  taskStatement.insertAdjacentElement("beforebegin", button);
}

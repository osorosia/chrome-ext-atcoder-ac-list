const taskStatement = document.querySelector("#task-statement");

if (taskStatement) {
  // Create URL
  var url = window.location.href;
  // https://atcoder.jp/contests/abc310/tasks/abc310_a
  var regex = /\/contests\/([^/]+)\/tasks\/([^/]+)/;
  var matches = url.match(regex);
  var contestName = matches[1];
  var problemName = matches[2];

  const createButton = (lang, buttonName) => {
    const destURL = `https://atcoder.jp/contests/${contestName}/submissions?f.LanguageName=${lang}&f.Status=AC&f.User=&orderBy=created&f.Task=${problemName}`;
    const button = document.createElement("button");
    button.innerHTML = buttonName ?? lang;
    button.onclick = () => {
      location.href = destURL;
    };
    return button;
  };

  // Create button
  const buttonRust = createButton("Rust");
  const buttonFSharp = createButton("F%23", "F#");

  // Add button
  taskStatement.insertAdjacentElement("beforebegin", buttonRust);
  taskStatement.insertAdjacentElement("beforebegin", buttonFSharp);
}

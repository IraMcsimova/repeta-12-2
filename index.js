const options = {
  headers: {
    Autorization: `f30668a0fbb2457397950fbdbe5739ad`,
  },
};
fetch(`https://newsapi.org/v2/everything?q=cat`, options)
  .then((r) => r.json())
  .then(console.log());

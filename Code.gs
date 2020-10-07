const doGet = (e) => {
  let template = HtmlService.createTemplateFromFile("Index"); // It will create HTMl page from Index.html file data.
  let pageData = template
    .evaluate()
    .setTitle("TITLE") // Set Title
    .setFaviconUrl("https://ssl.gstatic.com/docs/common/profile/unicorn_lg.png")
    .setSandboxMode(HtmlService.SandboxMode.IFRAME) //This method now has no effect — previously it set the sandbox mode used for client-side scripts
    .addMetaTag("viewport", "width=device-width, initial-scale=1") // important tag for Responsiveness
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); // Sets the state of the page's X-Frame-Options header, which controls clickjacking prevention.
  return pageData;
};



const serverSideData = (e) => {
  try {
    return [
      categories,
      peopleObj,
      skillsObj,
      people.sort(),
      skills,
      activeUser,
      typeList,
      flag,
      [...new Set(domainCertification.sort())],
      testCertif
    ];
  } catch (ex) {
    Logger.log(JSON.stringify(ex));
    return ex;
  }
};

const updateData = (e) => {
  const lock = LockService.getDocumentLock();
  lock.waitLock(40000);
  lock.releaseLock();
};

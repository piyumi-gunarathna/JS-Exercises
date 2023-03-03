
const vm = (initialVersion = '0.0.1') => {
  let currentVersion = [0, 0 , 1];
  let versionRegex = /^(\d+\.)*\d+$/;
  initialVersion = initialVersion.trim().split(".").slice(0, 3).join(".");

  if (initialVersion.length > 0 && !versionRegex.test(initialVersion)){
    throw new Error('Error occured while parsing version!');
  } 
  else if (initialVersion.length > 0 ) {
    currentVersion = initialVersion.split(".").map(Number).slice(0,3);
    currentVersion[1] = currentVersion[1] ?? 0;
    currentVersion[2] = currentVersion[2] ?? 0;
  }
  let history = [currentVersion.join('.')];

  return {
    major() {
      currentVersion[0]++;
      currentVersion[1] = 0;
      currentVersion[2] = 0;
      history.push(currentVersion.join("."))
      return this;
    },
    minor() {
      currentVersion[1]++;
      currentVersion[2] = 0;
      history.push(currentVersion.join("."))
      return this;
    },
    patch() {
      currentVersion[2]++;
      history.push(currentVersion.join("."))
      return this;
    },
    rollback() {
      if (history.length <= 1) {
        throw new Error('Cannot rollback!');
      }
      const version = history.pop();
      currentVersion = history[history.length - 1].split('.').map(Number);
      return this;
    },
    release() {
      return currentVersion.join('.');
    }
  };
}
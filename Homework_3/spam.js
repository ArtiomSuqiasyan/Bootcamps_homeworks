function checkSpam(str) {
  if (str.includes("viagra") || str.includes("xxx")) {
    return true;
  }
  return false;
}

checkSpam("viaxxragerswger");

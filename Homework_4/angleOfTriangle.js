function thirdAngle(angle1, angle2) {
  if (angle1 <= 0 || angle2 <= 0 || angle1 + angle2 >= 180) {
    return "Incorrect triangle";
  }
  let angle3 = 180 - angle2 - angle1;
  return angle3;
}

console.log(thirdAngle(145, 90));

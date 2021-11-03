// Transform Pitch Class Notation to string
export const parsePitchClass = (note) => {
  let key = note;

  switch (note) {
    case 0:
      key = "C";
      break;
    case 1:
      key = "D♭";
      break;
    case 2:
      key = "D";
      break;
    case 3:
      key = "E♭";
      break;
    case 4:
      key = "E";
      break;
    case 5:
      key = "F";
      break;
    case 6:
      key = "G♭";
      break;
    case 7:
      key = "G";
      break;
    case 8:
      key = "A♭";
      break;
    case 9:
      key = "A";
      break;
    case 10:
      key = "B♭";
      break;
    case 11:
      key = "B";
      break;
    default:
      return null;
  }

  return key;
};

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

export const getTrackSeeds = (tracks) => {
  const shuffledTracks = tracks.sort(() => 0.5 - Math.random());
  return getTrackIds(shuffledTracks.slice(0, 5));
};

/**
 * Return an array of track IDs from the given array of tracks
 */
export const getTrackIds = (tracks) => tracks.map(({ track }) => track.id);

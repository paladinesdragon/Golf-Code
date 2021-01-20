var golfNames = ["Hole-in-One!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore (par, strokes) {
  if (strokes == 1) {
    return golfNames[0];
  } else if (strokes <= par - 2) {
    return golfNames[1];
  } else if (strokes == par - 1) {
    return golfNames[2]; 
  } else if (strokes == par) {
    return golfNames[3];
  } else if (strokes == par + 1) {
    return golfNames[4];
  } else if (strokes == par + 2) {
    return golfNames[5];
  } else if (strokes >= par + 3) {
    return golfNames[6];
  } else {
    return "Change Values!";
  }
}

golfScore(4,7);
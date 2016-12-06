var offers = {
  "0000": {
    user: "todd",
    type: "money",
    description: "4000 dollars"
  },
  "0020": {
    user: "todd",
    type: "material",
    description: "wood"
  },
  "0021": {
    user: "bill",
    type: "skill",
    description: "science"
  },
  "0022": {
    user: "a",
    type: "space",
    description: "Workshop"
  },
  "0100": {
    user: "a",
    type: "material",
    description: "wire"
  },
  "0006": {
    user: "1",
    type: "money",
    description: "10 cents"
  },
  "0888": {
    user: "1",
    type: "skill",
    description: "Carpentry"
  },
}

// function getOfferByID(id) {
//
// }

exports.getOfferByID = function(id) {
  if (offers[id]) {
    return offers[id];
  } else {return false;}
}

exports.getOffersByIDs = function(ids) {
  var offers = {};
  for (var i in ids) {
    var id = ids[i];
    offers[id] = exports.getOfferByID(id);
  }
  return offers;
}



var offers = {
  "0000": {
    user: "todd",
    type: "money",
    desc: "4000 dollars"
  },
  "0020": {
    user: "todd",
    type: "material",
    desc: "wood"
  },
  "0021": {
    user: "bill",
    type: "skill",
    desc: "science"
  },
  "0022": {
    user: "a",
    type: "space",
    desc: "Workshop"
  },
  "0100": {
    user: "a",
    type: "material",
    desc: "wire"
  },
  "0006": {
    user: "1",
    type: "money",
    desc: "10 cents"
  },
  "0888": {
    user: "1",
    type: "skill",
    desc: "Carpentry"
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

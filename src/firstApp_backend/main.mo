actor {
  public query func greet(name : Text) : async Text {
    return "Your fav programming language: " # name # "!";
  };
};

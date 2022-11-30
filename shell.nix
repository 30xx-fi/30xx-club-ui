let
  nixpkgs = import <nixpkgs> { };
in
with nixpkgs;
stdenv.mkDerivation {
  name = "30xx.club";
  buildInputs = [
    nodejs
    git
    nodePackages.typescript
    nodePackages.yarn
  ];
}

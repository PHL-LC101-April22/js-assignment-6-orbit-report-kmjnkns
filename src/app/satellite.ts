export class Satellite {
  name: string;
  orbitType: string;
  type: string;
  operational: boolean;
  launchDate: string;

  constructor(
    name: string,
    type: string,
    launchDate: string,
    orbitType: string,
    operational: boolean
  ) {
    this.name = name;
    this.orbitType = orbitType;
    this.type = type;
    this.operational = operational;
    this.launchDate = launchDate;
  }

  shouldShowWarning(): boolean {
    console.log(this.type);
    return this.type === "Space Debris";
  }
}

// TODO 3a: fix isSpaceDebris check

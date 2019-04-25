export const NAME = "factory";

export const MACHINES = ["thermal", "vibration", "radiation", "humidity"];

export const PARTS = {
  A1: ["vibration", "thermal", "radiation"],
  B1: ["vibration", "radiation"],
  C1: ["thermal", "radiation", "humidity"],
  D1: ["vibration", "thermal", "radiation", "humidity"],
  E1: ["humidity"]
};

export const ORDERS = ["A1", "C1", "E1", "D1", "C1", "B1", "E1"];

export default { NAME, MACHINES, PARTS, ORDERS };

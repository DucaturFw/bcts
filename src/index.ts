import * as eth from "./blockchains/eth";

export { eth };

if (typeof window === "object") {
  (<any>window).bcts = {
    eth
  };
}

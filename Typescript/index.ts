function getInfo() {
  let userNameInput = document.getElementById("userName") as HTMLInputElement;

  const userName = userNameInput.value;
  // console.log(userName);

  // const userArr: Number[] = [2, 4, 7, 8];
  // console.log(userArr);

  // const userArr2: Array<String> = ["hello", "arti"];
  // console.log(userArr2);

  // const tuple: [string, boolean] = ["t", false];
  // console.log(tuple);

  // const userObj: {
  //   name: string;
  //   age: Number;
  // } = {
  //   name: "arti",
  //   age: 26,
  // };
  // userObj.name = "artii";
  // console.log(userObj);

  // const userObj: {
  //   [key: string]: string | number | undefined;
  // } = {
  //   name: "arti",
  // };
  // userObj.age = 26;
  // console.log(userObj);

  let value: any = "arti";

  value = 25;
  console.log(value);
}

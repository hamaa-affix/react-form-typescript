import { Gender } from "./gender";
//typeというシンタックスを使うことで任意のデータ構造を定義できます。
//主な用途としては、今回のようにオブジェクトのデータ構造を定義することに使用します。
export type Profile = {
  name: string;
  description: string;
  birthday: string;
  gender: Gender;
};

//DIみたく型の型のインジェクションができるぽい。

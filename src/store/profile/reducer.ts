import { reducerWithInitialState } from "typescript-fsa-reducers";
import { Profile } from "../../domain/entity/profile";
import profileAction from "./actions";

const init: Profile = {
  name: "",
  description: "",
  birthday: "",
  gender: ""
};

const profileReducer = reducerWithInitialState(init).case(
  profileAction.setProfile,
  (state, payload) => ({
    ...state,
    ...payload
  })
);

export default profileReducer;

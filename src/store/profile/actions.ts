import actionCreatorFactory from "typescript-fsa";
import { Profile } from "../../domain/entity/profile";

const actionCreator = actionCreatorFactory();

const profileAction = {
  setProfile: actionCreator<Partial<Profile>>("SET_PROFILE")
};

export default profileAction;

// Profile = object -> Partial<Profile> とすることでジェネリクスとしてPartialに型が付与される

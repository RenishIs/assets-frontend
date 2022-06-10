import configureStore from "../redux/configureStore";
import { checkAuthorisation } from "../redux/actions/auth/checkAuthorisation";

// this is the first api called whenever browser is refreshed or anything happens
// to check that access is authrorized or not.

export default () => new Promise(() => configureStore.dispatch(checkAuthorisation()))



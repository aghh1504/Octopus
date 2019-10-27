import { createSelectorCreator } from "reselect";
import memoize from "memoize-weak";
import isEqual from "lodash.isequal";

/*
The default memoization strategy of reselect leaks memory when server rendering
In this case we sub the default out with a memoization util that leverages
a weak map. As such when argument keys drop out of scope they can be cleared
from the weak map and we are golden
*/

/* eslint-disable import/prefer-default-export */
export const createSelector = createSelectorCreator(memoize, isEqual);

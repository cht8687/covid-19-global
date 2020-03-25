import {compose, find, prop} from 'ramda';

export default attribute => compose(prop(attribute), find(prop(attribute)));

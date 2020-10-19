import { FilterPortProps } from '../lib/interface/utils';

export const filterPort: FilterPortProps = function (url) {
    // if url is undefined \ null \ ''
    if(!url) { throw new Error('Function expect one param at least'); }

    // if arguements's length > 1
    if(arguments.length > 1) {
        console.warn(`
        Function only handle one param, if you want to handle one group params: 
            you can use example as follow: 
              [param1, param2, ...].reduce(a, b => a.concat(filterPort(item)), [])
        `);
    }

    return url.match(/(?<=:)\d+/g)?.[0] || null;
}
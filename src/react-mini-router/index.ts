let Observer: any[] = [];

export type State = object | null;

export interface Path {
    pathname: string;
    search: string;
    hash: string;
}

export interface Location<S extends State = State> extends Path {
    state: S;
}

let location = getLocation();

function getLocation(): Location {
    const { pathname, search, hash } = window.location;
    return ({
        pathname,
        search,
        hash,
        state: null,
    });
}

const routerListener = (fn: Function) => {
    Observer.push(fn);

    return () => {
        Observer = Observer.filter(i => i!==fn);
    }
}

// 用于处理浏览器前进后退操作
window.addEventListener('popstate', () => {
    location = getLocation();
    Observer.forEach(fn => fn(location));
});

function push() {
    Observer.forEach(fn => fn(location));
}

routerListener(() => {
    console.log( 'sd')
})

push()

const debounce = (fn, delay) => {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(), delay);
    }
};

function test() {
    console.log('test')
}

// const fn = debounce(test, 3000);
//
// fn()
// fn()
// fn()
// fn()
// fn()

const throllble = (fn, delay) => {
    let prevTime = Date.now();
    let timer;
    return () => {
        clearTimeout(timer);
        if(Date.now() - prevTime >= delay) {
            fn()
            prevTime = Date.now();
        } else {
            timer = setTimeout(fn, Date.now() - prevTime);
        }
    }
}

const fn = throllble(test, 0.1)

fn();
fn();
fn();
fn();
fn();



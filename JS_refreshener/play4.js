const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                callback('done!');
            }, 1500)
        };
        return promise;
    });

setTimeout(() => {
    console.log('2 seconds has passed');
    fetchData(text => {
        console.log(text);
    });
}, 2000);

console.log('hello');
console.log('hi');
export function init () {
    document.getElementById('postBtn').addEventListener('click', xhrPost);
    document.getElementById('getBtn').addEventListener('click', xhrGet);
    document.getElementById('putBtn').addEventListener('click', fetchPut);
    document.getElementById('deleteBtn').addEventListener('click', fetchDelete);

    console.log(`Initialized at ${new Date()}`);
}

function xhrPost () {
    console.log(`Entering xhrPost`);

    let form = document.getElementById('test_form');

    let method = 'post';
    let endpoint = 'https://httpbin.org/post';
    let payload = new FormData (form);

    let xhr = new XMLHttpRequest ();

    if (xhr) {
        xhr.open(method, endpoint, true);
        xhr.onload = function () {
            document.getElementById('response').innerHTML = xhr.responseText;
        }
        xhr.send(payload);
    }
}

function xhrGet() {
    console.log(`Entering xhrGet`);

    let form = document.getElementById('test_form');

    let method = 'get';
    let endpoint = 'https://httpbin.org/get';
    let payload = new FormData(form);

    let xhr = new XMLHttpRequest();

    if (xhr) {
        xhr.open(method, endpoint, true);
        xhr.onload = function () {
            document.getElementById('response').innerHTML = xhr.responseText;
        }
        xhr.send(payload);
    }
}

async function fetchPut() {
    console.log(`Entering fetchPut`);

    let form = document.getElementById('test_form');

    let method = 'put';
    let endpoint = 'https://httpbin.org/put';
    let payload = new FormData(form);

    let request = await fetch (endpoint, {
        method: method,
        body: payload
    });

    document.getElementById('response').innerHTML = await request.text();
}

async function fetchDelete() {
    console.log(`Entering fetchDelete`);

    let form = document.getElementById('test_form');

    let method = 'delete';
    let endpoint = 'https://httpbin.org/delete';
    let payload = new FormData(form);

    let request = await fetch(endpoint, {
        method: method,
        body: payload
    });

    document.getElementById('response').innerHTML = await request.text();
}

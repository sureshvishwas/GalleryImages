document.getElementById('next-btn').addEventListener('click', function() {
    document.getElementById('container-one').classList.add('hidden');
    document.getElementById('container-two').classList.remove('hidden');
    document.getElementById('container-three').classList.add('hidden');
    document.getElementById('container-four').classList.add('hidden');
});

document.getElementById('prev-btn').addEventListener('click', function() {
    document.getElementById('container-two').classList.add('hidden');
    document.getElementById('container-one').classList.remove('hidden');
    document.getElementById('container-three').classList.add('hidden');
    document.getElementById('container-four').classList.add('hidden');
});

document.getElementById('three').addEventListener('click', function() {
    document.getElementById('container-two').classList.add('hidden');
    document.getElementById('container-three').classList.remove('hidden');
    document.getElementById('container-one').classList.add('hidden');
    document.getElementById('container-four').classList.add('hidden');
});

document.getElementById('four').addEventListener('click', function() {
    document.getElementById('container-two').classList.add('hidden');
    document.getElementById('container-four').classList.remove('hidden');
    document.getElementById('container-one').classList.add('hidden');
    document.getElementById('container-three').classList.add('hidden');
});
//your JS code here. If required.
const bands = [
    'The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 
    'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 
    'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 
    'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'
];

const ignoreWords = new Set(['a', 'an', 'the']);

function sortBands(bands) {
    return bands.sort((a, b) => {
        const excludeIgnorableWords = name => {
            return name
                .toLowerCase()
                .split(' ')
                .filter(word => !ignoreWords.has(word))
                .join(' ');
        };

        const newA = excludeIgnorableWords(a);
        const newB = excludeIgnorableWords(b);
        return newA.localeCompare(newB);
    });
}

function displayBands(bands) {
    const list = document.getElementById('band');
    list.innerHTML = '';
    
    bands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        list.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const sortedBands = sortBands(bands);
    displayBands(sortedBands);
});

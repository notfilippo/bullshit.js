import findAndReplaceDOMText from 'findandreplacedomtext';
import bullshitTerms from './terms';

function revealBullshit({text}) {
    const c = text.charAt(0);
    const bullshit = `${c === c.toUpperCase() ? '𝓛' : '𝓵'}𝓮`;

    const abbr = document.createElement('abbr');
    abbr.style.color = 'red';
    abbr.title = text;
    abbr.innerHTML = bullshit;

    return abbr;
}

const bullshitRe = new RegExp(`\\b(${bullshitTerms.join('|')})\\b`, 'gi');

findAndReplaceDOMText(document.body, {
    find: bullshitRe,
    replace: revealBullshit,
    preset: 'prose'
});

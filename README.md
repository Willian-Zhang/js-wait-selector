# js-wait-selector

Observe DOM changes and wait for the element to appear in a efficient way.

### Examples
``` js
//  Just find the video element
let video = await wait$('video');

// I don't need to watch the whole DOM tree
let video = await wait$('video', document.querySelector('#parentNode'));

// Ooops, that parentNode is dynamic as well
let parent = await wait$('#rendered-content');
let video = await wait$('video', parent);

//My Page is extremely dynamic or I work with Cou○○era
let parent = await wait$('#rendered-content');
parent = await wait$('.item-scroll-container', parent);
parent = await wait$('#main', parent);
parent = await wait$('.rc-VideoMiniPlayer', parent);
let video = await wait$('video', parent);


// I've got multiple videos
let videos = await wait$all('video', parent);
```

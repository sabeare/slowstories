// tabbladen maken
function onTabClick(el) {
    if (el.classList.contains('active')) {
    } else {
        el.style.height = '100vh'
        el.classList.add('active');
        // Tab content
        const content = el.querySelector('.content')
        content.style.visibility = 'visible';
        // cross close image
        const image = el.querySelector('.toggle-image')
        image.classList.replace('arrow', 'cross');
    }
};

function onCrossClick(id, e) {
    // Stop clicking on parent tab
    if (e && e.stopPropagation) e.stopPropagation();
    // Change tab 
    const tab = document.getElementById(id)
    if (tab.classList.contains('active')) {
        tab.parentNode.id === "back" ? tab.style.height = '80px' : tab.style.height = '40px'
        tab.classList.remove('active');
        // Tab content
        const content = tab.querySelector('.content')
        content.style.visibility = 'hidden';
        // arrow image
        const image = tab.querySelector('.toggle-image')
        image.classList.replace('cross', 'arrow');
    } else {
        tab.style.height = '100vh'
        tab.classList.add('active');
        // Tab content
        const content = tab.querySelector('.content')
        content.style.visibility = 'visible';
        // cross close image
        const image = tab.querySelector('.toggle-image')
        image.classList.replace('arrow', 'cross');
    }
};

// Inhoudsopgave maken aan de hand van config bestand. 
const inhoudsopgave = document.getElementById('hoofdstuk').querySelector('.content')
const hoofdstukken = document.createElement('ol');
hoofdstukken.setAttribute('id', 'hoofdstukken-lijst');

config.chapters.forEach((record, idx) => {
    const entry = document.createElement('li');
    const link = document.createElement('a')
    link.setAttribute('id', 'H-' + record.id);
    link.innerHTML = record.title;
    link.href = '#' + record.id;
    entry.appendChild(link)
    hoofdstukken.appendChild(entry);
});

inhoudsopgave.appendChild(hoofdstukken)

//  en terug naar home url zonder # als je uit eerste hoofdstuk scrollt. 

const initLoad = true;
const layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity'],
    'heatmap': ['heatmap-opacity']
}

const alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty',
    'full': 'fully'
}

function getLayerPaintType(layer) {
    const layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    const paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function (prop) {
        const options = {};
        if (layer.duration) {
            const transitionProp = prop + "-transition";
            options = { "duration": layer.duration };
            map.setPaintProperty(layer.layer, transitionProp, options);
        }
        map.setPaintProperty(layer.layer, prop, layer.opacity, options);
    });
}


//  Pagina opening aanmaken aan hand van config bestand  - Kan natuurlijk ook zelf zonder config. 

const story = document.getElementById('story');
const features = document.createElement('div');
features.setAttribute('id', 'features');

// const header = document.createElement('div');

// if (config.title) {
//     const titleText = document.createElement('h1');
//     titleText.innerText = config.title;
//     header.appendChild(titleText);
// }

// if (config.subtitle) {
//     const subtitleText = document.createElement('h2');
//     subtitleText.innerText = config.subtitle;
//     header.appendChild(subtitleText);
// }

// if (config.byline) {
//     const bylineText = document.createElement('p');
//     bylineText.innerText = config.byline;
//     header.appendChild(bylineText);
// }

// if (header.innerText.length > 0) {
//     header.classList.add(config.theme);
//     header.setAttribute('id', 'header');
//     story.appendChild(header);
// }


// Hoofdstukken genereren aan hand van config. 

config.chapters.forEach((record, idx) => {
    const container = document.createElement('div');
    const chapter = document.createElement('div');

    if (record.title) {
        const title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image && record.imageDescription) {
        const imageContainer = document.createElement('div')
        const image = new Image();
        image.src = record.image;
        imageContainer.appendChild(image)
        const story = document.createElement('p');
        story.innerHTML = record.imageDescription;
        imageContainer.className = "image-with-desc"
        imageContainer.appendChild(story);
        chapter.appendChild(imageContainer);
    } else if (record.image) {
        const image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        const story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    if (record.iframe) {
        const iframe = document.createElement('iframe');
        iframe.src = record.iframe;
        iframe.height = "500"
        iframe.width = "100%"
        chapter.appendChild(iframe)
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    container.classList.add(alignments[record.alignment] || 'centered');
    if (record.hidden) {
        container.classList.add('hidden');
    }
    features.appendChild(container);
});

story.appendChild(features);


// Footer creëren 

const footer = document.createElement('div');

if (config.footer) {
    const footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}



// MAP background 

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=scrollytellingV2" : "?pluginName=scrollytellingV2";
    return {
        url: url + suffix
    }
}

const map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    interactive: false,
    transformRequest: transformRequest,
    projection: config.projection
});

// SCROLLAMA 

// instantiate the scrollama
const scroller = scrollama();

map.on("load", function () {
    console.log(map.getStyle())
    map.addLayer(
        {
            id: 'focus-area',
            source: {
                type: 'geojson',
                data: {
                    "type": "Feature",
                    "properties": {},
                    "geometry": {
                        "coordinates": [
                            0, 0
                        ],
                        "type": "Point"
                    }
                }
            },
            type: 'circle',
            paint: {
                'circle-color': 'rgba(169,204,142,0.9)',
                'circle-radius': 100,
                'circle-blur': 0.5,
                'circle-pitch-alignment': 'map',

            },
            layout: {
            }
        }


    )

    // setup the instance, pass callback functions
    scroller
        .setup({
            step: '.step',
            offset: 0.5,
            progress: true
        })
        .onStepEnter(async response => {
            const current_chapter = config.chapters.findIndex(chap => chap.id === response.element.id);
            const chapter = config.chapters[current_chapter];

            response.element.classList.add('active');
            map[chapter.mapAnimation || 'flyTo'](chapter.location);

            // Setting url hash parameters from chapter id 
            const url = new URL(location);
            url.hash = chapter.id;
            history.pushState({}, "", url);


            // Set location on center


            if (chapter.location.center && chapter.setMarker) {
                map.getSource('focus-area').setData(
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "coordinates": chapter.location.center,
                            "type": "Point"
                        }
                    }
                )

            } else {
                map.getSource('focus-area').setData(
                    {
                        "type": "Feature",
                        "properties": {},
                        "geometry": {
                            "coordinates": [0, 0],
                            "type": "Point"
                        }
                    }
                )

            }

            // Incase you do not want to have a dynamic inset map,
            // rather want to keep it a static view but still change the
            // bbox as main map move: comment out the below if section.
            if (config.inset) {
                if (chapter.location.zoom < 5) {
                    insetMap.flyTo({ center: chapter.location.center, zoom: 0 });
                }
                else {
                    insetMap.flyTo({ center: chapter.location.center, zoom: 3 });
                }
            }
            if (config.showMarkers) {
                marker.setLngLat(chapter.location.center);
            }
            if (chapter.onChapterEnter.length > 0) {
                chapter.onChapterEnter.forEach(setLayerOpacity);
            }
            if (chapter.callback) {
                window[chapter.callback]();
            }
            if (chapter.rotateAnimation) {
                map.once('moveend', () => {
                    const rotateNumber = map.getBearing();
                    map.rotateTo(rotateNumber + 180, {
                        duration: 30000, easing: function (t) {
                            return t;
                        }
                    });
                });
            }
            if (config.auto) {
                const next_chapter = (current_chapter + 1) % config.chapters.length;
                map.once('moveend', () => {
                    document.querySelectorAll('[data-scrollama-index="' + next_chapter.toString() + '"]')[0].scrollIntoView();
                });
            }
        })
        .onStepExit(response => {
            const chapter = config.chapters.find(chap => chap.id === response.element.id);
            response.element.classList.remove('active');

            // Reset url to empty hash when scrolling up to openings screen 
            if (response.index === 0 && response.direction === 'up') {
                const url = new URL(location);
                url.hash = '';
                history.pushState({}, "", url);
            }

            if (chapter.onChapterExit.length > 0) {
                chapter.onChapterExit.forEach(setLayerOpacity);
            }
        });


    if (config.auto) {
        document.querySelectorAll('[data-scrollama-index="0"]')[0].scrollIntoView();
    }
});






// setup resize event
window.addEventListener('resize', scroller.resize);

/*!
 *
 * Jquery Mapael - Dynamic maps jQuery plugin (based on raphael.js)
 * Requires jQuery and Mapael
 *
 * Map of metropolitan France by department
 * Equirectangular projection
 *
 * @author Vincent Brouté
 * @source http://fr.m.wikipedia.org/wiki/Fichier:France_location_map-Departements.svg
 */
(function (factory) {
    if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'), require('mapael'));
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery', 'mapael'], factory);
    } else {
        // Browser globals
        factory(jQuery, jQuery.mapael);
    }
}(function ($, Mapael) {

    "use strict";

    $.extend(true, Mapael, {
        maps: {
            china_sz: {
                width: 620.08728,
                height: 426.26221,
                getCoords: function (lat, lon) {
                    var xfactor,
                        xoffset,
                        yfactor,
                        yoffset,
                        x,
                        y;
                    // Corse
                    if (lat < 43.15710 && lon > 8.17199) {
                        xfactor = 43.64246;
                        xoffset = 181.34520;
                        x = (lon * xfactor) + xoffset;

                        yfactor = -65.77758;
                        yoffset = 3346.37839;
                        y = (lat * yfactor) + yoffset;
                    } else {
                        xfactor = 45.48385;
                        xoffset = 220.22005;
                        x = (lon * xfactor) + xoffset;

                        yfactor = -65.97284;
                        yoffset = 3371.10748;
                        y = (lat * yfactor) + yoffset;
                    }

                    return {
                        x: x,
                        y: y
                    };
                },
                elems: {
                    longgangqu: 'M 381.5 268 L 385.9 267.5 388.5 265.2 388.5 263.2 391 262 391.7 259.6 394.2 258.8 396.7 259.3 399.9 262.5 400.5 264.8 403.7 265.2 408.8 268.8 409.4 270.7 409.4 272 410.7 272.7 412.6 266.8 410.7 264 413.2 261.6 414.5 263.2 420.2 261.6 420.2 263.6 421.5 264.8 422.7 265.2 424 264 424.6 265.6 424 268.4 425.9 269.5 425.3 272.3 434.2 272.3 435.4 279 438 282.2 437.4 283.8 432.9 289 429.7 289.8 427.8 288.6 426.5 286.2 426.5 281.4 425.3 279.5 416.4 279.5 413.8 280.7 410 279.8 407.5 281.9 405.6 281.4 403.7 283.8 400.5 283.4 393.6 289 392.9 296.5 390.4 302.9 387.8 294.1 382.8 288.2 382.1 283.8 382.1 282.7 385.3 281.1 384 272.7 381.5 268'
                    
                }
            }
        }
    });

    return Mapael;

}));

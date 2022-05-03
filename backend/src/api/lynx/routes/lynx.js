'use strict';

/**
 * lynx router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::lynx.lynx');

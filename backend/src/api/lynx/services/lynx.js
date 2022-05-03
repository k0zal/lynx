'use strict';

/**
 * lynx service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::lynx.lynx');

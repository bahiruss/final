const express = require('express');
const router = express.Router();
const ResourceController = require('../controller/resourceController');
const ROLES_LIST = require('../config/roles_list');

const resourceRouter = (db) => {
    const resourceController = new ResourceController(db);

    router.route('/')
        .get(resourceController.getResources)
        .post(resourceController.createResource)
    router.route('/:id')
        .get(resourceController.getResourceById)
        .put(resourceController.updateResource)
        .delete(resourceController.deleteResource)
        
    router.route('/search')
        .get(resourceController.getResourceByTitleORAuthor);

    router.route('/:id/comment')
        .post(resourceController.makeComment);

    router.route('/:id/like')
        .post(resourceController.giveALike);

    return router
}

module.exports = resourceRouter;
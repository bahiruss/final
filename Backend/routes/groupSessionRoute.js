const express = require('express');
const router = express.Router();
const GroupSessionController= require('../controller/groupSessionController');
const ROLES_LIST = require('../config/roles_list');

const groupSessionRouter = (db) => {
    const groupSessionController = new GroupSessionController(db);

    router.route('/:id')
        .get(groupSessionController.getSessionById)

    router.route('/text-sessions')
        .post(groupSessionController.createTextSession)

    router.route('/text-sessions/user/:id')
        .get(groupSessionController.getTextSessions)

    router.route('/video-sessions')
        .post(groupSessionController.createVideoSessions)

    router.route('/video-sessions/user/:id')
        .get(groupSessionController.getVideoSessions)

    router.route('/removeParticipant')
        .put(groupSessionController.removeParticipant);
        

    return router;
}

module.exports = groupSessionRouter;
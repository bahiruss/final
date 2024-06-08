class Message {
    constructor(messageId, messageContent, sessionId, senderId, timeStamp){
        this._messageId = messageId;
        this._messageContent = messageContent;
        this._sessionId = sessionId;
        this._senderId = senderId;
        this._timeStamp = timeStamp;       
    }

    get messageId() {
        return this._messageId;
    }

    set messageId(messageId) {
        this._messageId = messageId;
    }

    get messageContent() {
        return this._messageContent;
    }

    set messageContent(messageContent) {
        this._messageContent = messageContent;
    }

    get sessionId() {
        return this._sessionId;
    }

    set sessionId(sessionId) {
        this._sessionId = sessionId;
    }

    get senderId() {
        return this._senderId;
    }

    set senderId(senderId) {
        this._senderId = senderId;
    }

    get timeStamp() {
        return this._timeStamp;
    }

    set timeStamp(timeStamp) {
        this._timeStamp = timeStamp;
    }
}

module.exports = Message;
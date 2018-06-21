import { default as EventModel } from './event.model';
import { Model } from 'mongoose';
import { default as GeneralController } from '../../utils/general-controller';

class EventController extends GeneralController {
    constructor(model: Model<any>, name: string) {
        super(model, name);
    }
}

module.exports = new EventController(EventModel, 'Event');

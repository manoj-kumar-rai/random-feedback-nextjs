import mongoose, {Schema, Document} from "mongoose";

//Defining the data type of receiving message as it is message based application

export interface Message extends Document {
    content: string;
    createdAt:Date;
}

//In this we are using above defined data type of message and it will also be defined at runtime too even after coding in .tsx(TypeScript)
//Simply- It is used for type safety as now we can only pass string and not any other data type
const messageSchema: Schema<Message> = new Schema({
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
})


//In this we are not using above created type of message

// const messagesSchema = new Schema({
//     content: {
//         type: String,
//         required: true
//     },
//     createdAt: {
//         type: Date,
//         required: true,
//         default: Date.now
//     }
// })

const MessageModel = (mongoose.models.Message as mongoose.Model<Message>) || mongoose.model<Message>("Message", messageSchema)

export default MessageModel;
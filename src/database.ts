import mongoose from 'mongoose';

async function connect() {

    try {
        await mongoose.connect('mongodb://localhost/ts-app-tutorial1', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log('Database is connected');
        //console.log('>>> Database is connected');
    }
    catch {
        console.log('Error');
    }

}

export default connect;
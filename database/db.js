import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://dhruv722202:Hello121@ac-dmwagu5-shard-00-00.1reptco.mongodb.net:27017,ac-dmwagu5-shard-00-01.1reptco.mongodb.net:27017,ac-dmwagu5-shard-00-02.1reptco.mongodb.net:27017/?ssl=true&replicaSet=atlas-dyt5e4-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;
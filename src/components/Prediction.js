import React, { useEffect } from "react";
import { predictionApi } from "../rest/api2";
import Card from "react-bootstrap/Card";


const Prediction = ({ prediction, predictions, setPredictions, newPredictions }) => {

    //function to delete a prediciton from state and update prediction in api and from state
    const handleDelete = async () => {
        await predictionApi.delete(prediction.id); //delete prediction from api
        //set predictions to delete comment from state
        setPredictions(predictions.filter((el) => el.id !== prediction.id));

    };

    const handleEdit = async () => {
        await predictionApi.update(prediction.id); //update prediction stored in api
        setPredictions(predictions.map((id, newPredictions) => id === prediction.id ? newPredictions : id));
        // TODO - display editable comment content
    }



    return (
        <div>
             <Card body className="date-card text-center mt-4">
            <h3>{prediction.name}</h3>
            <p>{prediction.comment}</p>
            <button className="m-2 btn btn-primary" onClick={handleDelete}>Delete</button>
            <button className="m-2 btn btn-primary" onClick={handleEdit}>Edit</button>
            <hr></hr>
            </Card>
        </div>
    );
};
export default Prediction;